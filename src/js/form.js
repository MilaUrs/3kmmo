
(function ($) {
    'use strict';

    var form = $('.promo__form-inner'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert_danger').addClass('alert_success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert_success').addClass('alert_success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);
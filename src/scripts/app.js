import "./import-jquery";


console.log('hella');

(function ($) {

    const methods = {
        init: function () {
            let newSlider = $('<div>', {
                'class': 'new-slider',
                text: 'Новый текст сообщения.'
            })
            return newSlider.appendTo(this)
        },
        show: function () {
            return this
        },
        changeColor: function (color) {
            return this.css({ 'background-color': color })
        },
        update: function () {
            return this.css({ 'border': '6px solid' })
        },
        position: function (position) {
            return this.css({
                'position': position
            })
        }
    };

    $.fn.ukslider = function (method) {


        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.ukslider');
        }
    };

})(jQuery);



$('.ukslider').ukslider('init').ukslider('changeColor', 'yellow').ukslider('update')

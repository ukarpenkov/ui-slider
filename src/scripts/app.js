import "./import-jquery";


console.log('hella');

(function ($) {

    const methods = {
        init: function () {
            let newSlider = $('<div>', {
                'class': 'new-slider',
                text: 'Новый текст сообщения.'
            })
            newSlider.appendTo(this)
        },
        show: function () {
            return this
        },
        changeColor: function (color) {
            this.css({ 'background-color': color })
        },
        update: function (content) {
            return this
        },
        position: function (position) {
            return this.css({
                'position': position
            })
        }
    };

    $.fn.ukslider = function (method) {

        // логика вызова метода
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.ukslider');
        }
    };

})(jQuery);


// $('div').ukslider('changeColor', 'blue');
// $('div').ukslider('update', 'Теперь тут новое содержимое');
// $('.ukslider').ukslider('position', 'relative');
$('.ukslider').ukslider('init')
$('div').ukslider('changeColor', 'blue');
// $('.test').ukslider('init');
import "./import-jquery";


console.log('hella');

(function ($) {

    var methods = {
        init: function (options) {
            return this
        },
        show: function () {
            return this
        },
        changeColor: function (color) {
            this.css({ 'background-color': color })
        },
        update: function (content) {
            return this
        }
    };

    $.fn.tooltip = function (method) {

        // логика вызова метода
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.tooltip');
        }
    };

})(jQuery);


$('div').tooltip('changeColor', 'blue');
$('div').tooltip('update', 'Теперь тут новое содержимое');
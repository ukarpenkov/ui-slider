import "./import-jquery";


console.log('hella');

// (function ($) {

//     const methods = {
//         init: function () {
//             let $this = $(this)
//             let data = $this.data('newSlider')
//             let newSlider = $('<div>', {
//                 'class': 'new-slider',
//                 text: 'Новый текст сообщения.'
//             })
//             if (!data) {
//                 // выполняем инит
//                 $(this).data('newSlider', {
//                     target: $this,
//                     newSlider: newSlider
//                 })
//                 console.log('initialization is done!')
//             } else {
//                 console.log('initialization is done before!')
//             }
//             return newSlider.appendTo(this)
//         },
//         show: function () {
//             return this
//         },
//         changeColor: function (color) {
//             return this.css({ 'background-color': color })
//         },
//         update: function () {
//             return this.css({ 'border': '6px solid' })
//         },
//         position: function (position) {
//             return this.css({
//                 'position': position
//             })
//         },
//         destroy: function () {
//             return this.each(function () {
//                 let $this = $(this)
//                 let data = $this.data('newSlider')
//                 $(window).unbind('.new-slider')
//                 data.newSlider.remove()
//                 $this.removeData('newSlider')
//                 console.log('destroy is done')
//             })
//         }
//     };

//     $.fn.ukslider = function (method) {


//         if (methods[method]) {
//             return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
//         } else if (typeof method === 'object' || !method) {
//             return methods.init.apply(this, arguments);
//         } else {
//             $.error('Метод с именем ' + method + ' не существует для jQuery.ukslider');
//         }
//     };

// })(jQuery);



// $('div').ukslider('init').ukslider('changeColor', 'yellow').ukslider('update')


(function handleRange() {

    function rangeInputChangeEventHandler(e) {
        var minBtn = $(this).parent().find('.js-uk-min');
        var maxBtn = $(this).parent().find('.js-uk-max');
        var range_min = $(this).parent().parent().find('.js-uk-range_min');
        var range_max = $(this).parent().parent().find('.js-uk-range_max');
        var minVal = ($(minBtn).val());
        var maxVal = ($(maxBtn).val());



        if (minVal > maxVal - 3) {
            $(minBtn).val(maxVal - 3);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).val((minVal * 1000));
        if (maxVal < minVal + 3) {
            $(maxBtn).val(minVal + 3);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).val((maxVal * 1000));


    }

    function rangeChangeWithInputValue(e) {
        function minValueChange() {
            var newMinVal = $(this).val() * 1000;
            $(".js-uk-range_min").val(newMinVal);
        }
        function maxValueChange() {
            var newMaxVal = $(this).val() * 1000;
            $(".js-uk-range_max").val(newMaxVal);
        }

        $('.js-uk-min').on('input', minValueChange);
        $('.js-uk-range_min').on('input', function () {
            $('.js-uk-min').val($(this).val() / 1000)
        });


        $('.js-uk-max').on('input', maxValueChange);
        $('.js-uk-range_max').on('input', function () {
            $('.js-uk-max').val($(this).val() / 1000)
        });

    }

    rangeChangeWithInputValue()

    $('.uk-slider__input').on('input', rangeInputChangeEventHandler);
    // .uk-slider__input for horiz
    //.uk-slider__input_view_vertical
})()


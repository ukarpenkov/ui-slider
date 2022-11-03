import "./import-jquery";


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


function initSliders() {
    let horizontalSlider = $('<div class="uk-slider"> <div class="uk-slider__range"> <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="1" max="100" value="1" orient="vertical" /> <input class="uk-slider__input uk-slider__input_handle_max js-uk-max" name="range_1" type="range" min="1" max="100" value="100" orient="vertical" /> </div> </div> <div class="uk-slider__value_block"> <input type="text" value="1000" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" /> <input type="text" value="100000" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max" /> </div>')

    let verticalSlider = $('<div class="uk-slider"> <div class="uk-slider__range uk-slider__range_orient_vertical"> <input class="uk-slider__input uk-slider__input_handle_min js-uk-min" name="range_1" type="range" min="1" max="100" value="1" /> <input class="uk-slider__input uk-slider__input_handle_max js-uk-max" name="range_1" type="range" min="1" max="100" value="100" orient="vertical" /> </div> <div class="uk-slider__value_block uk-slider__value_block_orient_vertical" > <input type="text" value="1000" class="uk-slider__range_value uk-slider__range_value_min left js-uk-range_min" /> <input type="text" value="100000" class="uk-slider__range_value uk-slider__range_value_max right js-uk-range_max" /> </div> </div>')

    return $('.id2').append(horizontalSlider).append(verticalSlider)



}

initSliders()





    ((function handleRange() {
        function rangeInputChangeEventHandler(e) {
            var minBtn = $(this).parent().children('.js-uk-min');
            var maxBtn = $(this).parent().children('.js-uk-max');
            var range_min = $(this).parent().parent().children('.uk-slider__value_block').children('.js-uk-range_min');
            var range_max = $(this).parent().parent().children('.uk-slider__value_block').children('.js-uk-range_max');
            var minVal = Number($(minBtn).val());
            var maxVal = Number($(maxBtn).val());

            if (minVal > maxVal - 3) {
                $(minBtn).val(maxVal - 3);
            }

            $(range_min).change(function () {
                $(minBtn).val($(range_min).val() / 1000)
                if ($(range_min).val() > $(range_max).val() - 1000) {
                    $(minBtn).val(maxVal - 3);
                    $(range_min).val($(range_max).val() - 1000)
                }
            });

            $(range_min).val((minVal * 1000));

            if (maxVal < minVal + 3) {
                $(maxBtn).val(minVal + 3);
            }

            $(range_max).change(function () {
                $(maxBtn).val($(this).val() / 1000)
                if ($(range_max).val() < $(range_min).val() - 1000) {
                    $(maxBtn).val(maxVal + 3);
                    $(range_max).val(Number($(range_min).val()) + 1000)
                }
            });
            $(range_max).val((maxVal * 1000));
        }

        $('.uk-slider__input').on('input', rangeInputChangeEventHandler);
        $('.uk-slider__input').trigger('input');

    }))()




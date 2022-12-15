import "./import-jquery";
import SliderSettings from "./slider-settings";
import initSlider from "./view-init-slider";
import initToolBar from "./view-init-toolbar";
import destroySlider from "./destroy-slider";



let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

let slider1 = initSlider(".id2", settings1)

let slider2 = initSlider(".id3", settings2)
let slider3 = initSlider(".id4", settings3)
initToolBar('.js-page-item1')
initToolBar('.js-page-item2')
initToolBar('.js-page-item3')


// let verticalOrHorizontalCheckbox = $("input[name='verticalOrHorizontal']")
// let singleOrRangeCheckbox = $("input[name='singleOrRange']")

// let verticalOrHorizontalCheckboxHandler = () => {

//     if ($(verticalOrHorizontalCheckbox).is(':checked')) {
//         destroySlider(".id3")
//         initSlider(".id3", settings1)
//     } else {
//         destroySlider(".id3")
//         initSlider(".id3", settings2)
//     }


// }

// let singleOrRangeCheckboxHandler = () => {

//     if ($(singleOrRangeCheckbox).is(':checked')) {
//         destroySlider(".id4")
//         initSlider(".id4", settings1)
//     } else {
//         destroySlider(".id4")
//         initSlider(".id4", settings3)
//     }
// }


// $(verticalOrHorizontalCheckbox).on('input', verticalOrHorizontalCheckboxHandler)
// $(singleOrRangeCheckbox).on('input', singleOrRangeCheckboxHandler)


function handleToolBar() {

    // var minScaleInput = $(this).parent().children('.js-min-scale');
    // var maxScaleInput = $(this).parent().children('.js-max-scale');
    // var scaleStepInput = $(this).parent().children('.js-scale-step');
    // var minPosInput = $(this).parent().children('.js-min-pos');
    // var maxPosInput = $(this).parent().children('.js-max-pos');


    // let orientationValue = $(this).prev().prev().children().attr("orient").split(' ').shift().toString()
    // console.log(orientationValue)
    let verticalOrHorizontalCheckbox = $(this).find("input[name='verticalOrHorizontal']");
    let singleOrRangeCheckbox = $(this).find("input[name='singleOrRange']")
    let wrap = $(verticalOrHorizontalCheckbox).parent().parent().parent().parent().children()
    let slider = ($(wrap).children())[0]
    let valueBlock = ($(wrap).children())[1]
    let sliderClassNames = $(wrap).children().attr("class").split(' ')
    let secondSlider = ($(slider).children())[1]
    let secondSliderClassNames = $(secondSlider).attr("class").split(' ')
    let secondValueBlock = ($(valueBlock).children())[1]

    console.log(secondSliderClassNames)




    if ($(verticalOrHorizontalCheckbox).is(':checked')) {
        if (sliderClassNames[1] === '') {
            $(slider).addClass('uk-slider__range_orient_vertical')
            $(valueBlock).addClass('uk-slider__value_block_orient_vertical')

        } else {
            $(slider).toggleClass('uk-slider__range_orient_vertical')
            $(valueBlock).toggleClass('uk-slider__value_block_orient_vertical')
        }
        if (sliderClassNames[1] === 'uk-slider__range_orient_vertical') {
            $(slider).removeClass('uk-slider__range_orient_vertical')
            $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
        }

    }
    if (!$(verticalOrHorizontalCheckbox).is(':checked')) {
        $(slider).removeClass('uk-slider__range_orient_vertical')
        $(valueBlock).removeClass('uk-slider__value_block_orient_vertical')
    }

    if ($(singleOrRangeCheckbox).is(':checked')) {
        if (secondSliderClassNames[secondSliderClassNames.length - 1] === 'undefined') {
            $(secondSlider).addClass('hidden')
            $(secondValueBlock).addClass('hidden')
        } else {
            $(secondSlider).toggleClass('hidden')
            $(secondValueBlock).toggleClass('hidden')
        }
    }


}

$('.control-panel').on('input', handleToolBar)




import "./import-jquery";
import SliderSettings from "./slider-settings";
import initSlider from "./view-init-slider";
import initToolBar from "./view-init-toolbar";
import destroySlider from "./destroy-slider";



let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

initSlider(".id2", settings1)
initSlider(".id3", settings2)
initSlider(".id4", settings3)
initToolBar('.id2')
initToolBar('.id3')
initToolBar('.id4')





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

    let verticalOrHorizontalCheckbox = $(this).find("input[name='verticalOrHorizontal']");
    let wrap = $(verticalOrHorizontalCheckbox).parent().parent().parent().parent().attr("class").split(' ').shift().toString()

    if ($(verticalOrHorizontalCheckbox).is(':checked')) {

        destroySlider(wrap)
        console.log(wrap)


        // initSlider(wrapper, settings2)
    }


}

$('.control-panel').on('input', handleToolBar)
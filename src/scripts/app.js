import destroySlider from "./destroy-slider";
import "./import-jquery";
import SliderSettings from "./slider-settings";
import initSlider from "./view-init-slider";
import initToolBar from "./view-init-toolbar";



let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
let settings2 = new SliderSettings('interval', 'vertical', 1, 300)
let settings3 = new SliderSettings('single', 'horizontal', 1, 1000)

initSlider(".id2", settings1)
initSlider(".id3", settings2)
initSlider(".id4", settings3)
initToolBar('.id2')
initToolBar('.id3')
initToolBar('.id4')




let verticalOrHorizontalCheckbox = $("input[name='verticalOrHorizontal']")
let singleOrRangeCheckbox = $("input[name='singleOrRange']")

let verticalOrHorizontalCheckboxHandler = () => {
    if ($(verticalOrHorizontalCheckbox).is(':checked')) {
        destroySlider(".id3")
        initSlider(".id3", settings1)
    } else {
        destroySlider(".id3")
        initSlider(".id3", settings2)
    }


}

let singleOrRangeCheckboxHandler = () => {
    if ($(singleOrRangeCheckbox).is(':checked')) {
        destroySlider(".id4")
        initSlider(".id4", settings1)
    } else {
        destroySlider(".id4")
        initSlider(".id4", settings3)
    }
}


$(verticalOrHorizontalCheckbox).on('input', verticalOrHorizontalCheckboxHandler)
$(singleOrRangeCheckbox).on('input', singleOrRangeCheckboxHandler)
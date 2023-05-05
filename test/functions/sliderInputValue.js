var inputValueChanger = async function (value, sliderWrapper, isMin) {
    await browser.pause(3000)
    let inputValueClassName = '.js-uk-range_min'
    let btnClassName = '.js-uk-min'
    if (isMin === false) {
        inputValueClassName = '.js-uk-range_max'
        btnClassName = '.js-uk-max'
    }
    const wrapper = await $(sliderWrapper)
    const body = await $('body')
    const sliderInputValue = await wrapper.$(inputValueClassName)
    const btn = await wrapper.$(btnClassName)
    await sliderInputValue.setValue(value)
    await body.click()
    const btnValue = await btn.getValue()
    const sliderInputValueVal = await sliderInputValue.getValue()
    if (btnValue !== sliderInputValueVal) {
        throw new Error('Значение input и положение слайдера не равны!')
    }
}

module.exports = { inputValueChanger }
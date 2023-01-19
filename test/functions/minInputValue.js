var minInputValueChanger = async function (value, sliderWrapper, minValue) {
    let inputValueClassName = '.js-uk-range_min'
    let btnClassName = '.js-uk-min'
    if (minValue === false) {
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
    await browser.pause(2000)
    if (btnValue !== sliderInputValueVal) {
        throw new Error('Значения не равны!')
    }
}

module.exports = { minInputValueChanger }
var scaleChange = async function (value, wrapClass, isMin) {
    let sliderInputClass = '.js-uk-range_min'
    let minScaleInputClass = ".js-min-scale"
    if (isMin === false) {
        sliderInputClass = '.js-uk-range_max'
        minScaleInputClass = ".js-max-scale"
    }


    const wrapper = await $(wrapClass)
    const toolBar = await wrapper.$('.control-panel')
    const sliderInput = await wrapper.$('.js-uk-range_min')
    const body = await $('body')
    const minScaleInput = await toolBar.$(".js-min-scale")
    await minScaleInput.setValue(value)
    await body.click()
    const minScaleInputValue = await minScaleInput.getValue()
    const sliderInputValue = await sliderInput.getValue()
    await browser.pause(2000)
    if (minScaleInputValue !== sliderInputValue) {
        throw new Error('Значение input слайдера и toolbar-a равны!')
    }

}

module.exports = { scaleChange }
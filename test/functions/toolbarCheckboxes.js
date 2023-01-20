var checkboxChanger = async function (wrapClass) {
    const wrapper = await $(wrapClass)
    const toolBar = await wrapper.$('.control-panel')
    const verticalCheckbox = await toolBar.$('.js-vertical-or-horizontal')
    const singleCheckbox = await toolBar.$('.js-single-or-range')
    const maxBtn = await wrapper.$('.js-uk-max')
    await verticalCheckbox.click()
    await browser.pause(3000)
    await verticalCheckbox.click()
    await browser.pause(3000)
    await browser.pause(3000)
    await singleCheckbox.click()
    await browser.pause(3000)
    const isDisplayed = await maxBtn.isDisplayed()
    if (isDisplayed) {
        throw new Error('Ручка максимального значения не исчезла')
    }

}

module.exports = { checkboxChanger }


describe('Test case', () => {
    it('site title is "ui-slider"', async () => {
        await browser.url('http://localhost:1234/')
        await expect(browser).toHaveTitleContaining('ui-slider')
    })
    it('change min pos to 10', async () => {
        await browser.url('http://localhost:1234/')
        const wrapper = await $('.id2')
        const body = await $('body')
        const minValueSliderInput = await wrapper.$('.js-uk-range_min')
        const minBtn = await wrapper.$('.js-uk-min')
        await minValueSliderInput.setValue(10)
        // await browser.pause(3000)
        await body.click()
        await browser.pause(3000)


        const minBtnValue = await minBtn.getValue()
        const minValueSliderInputVal = await minValueSliderInput.getValue()
        console.log('оооооооооооооооОООООООООООООООООООООООООООООООПППП', minBtnValue == minValueSliderInputVal)
        ExpectedConditions.numberOfElementsToBe(minBtnValue, 100)
    })
})
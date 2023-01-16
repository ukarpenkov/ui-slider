
describe('Test case', () => {
    it('site title is "ui-slider"', async () => {
        await browser.url('http://localhost:1234/')
        await expect(browser).toHaveTitleContaining('ui-slider')
    })
    it('change min pos to 10', async () => {
        await browser.url('http://localhost:1234/')
        const wrapper = $('.id2')
        await wrapper.$('.js-uk-range_min').setValue(10)
        await browser.pause(10000)

    })
})
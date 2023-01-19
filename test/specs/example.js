const { minInputValueChanger } = require('./../functions/minInputValue')


describe('Test case', () => {
    it('site title is "ui-slider"', async () => {
        await browser.url('http://localhost:1234/')
        await expect(browser).toHaveTitleContaining('ui-slider')
    })
    it('значение поля ввода слайдера равно значению положения указателя на слайдере, если ввести значение большее возмжного, то оно будет равно макимально возможному для данного слайдера', async () => {
        await minInputValueChanger(10, '.id2', true)
        await minInputValueChanger(50, '.id3', true)
        await minInputValueChanger(800, '.id4', true)
        await minInputValueChanger(50, '.id2', false)
        await minInputValueChanger(66, '.id3', false)
    })
})
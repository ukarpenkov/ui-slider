const { checkboxChanger } = require('../functions/toolbarCheckboxes')
const { scaleChange } = require('../functions/toolbarScale')
const { inputValueChanger } = require('./../functions/sliderInputValue')


describe('Slider test case', () => {
    it('site title is "ui-slider"', async () => {
        await browser.url('http://localhost:1234/')
        await expect(browser).toHaveTitleContaining('ui-slider')
    })
    it('значение поля ввода слайдера равно значению положения указателя на слайдере, если ввести значение большее возмжного, то оно будет равно макимально возможному для данного слайдера', async () => {
        await inputValueChanger(10, '.id2', true)
        await inputValueChanger(50, '.id3', true)
        await inputValueChanger(800, '.id4', true)

    })
    it('изменение максимального значения шкалы через toolbar', async () => {
        await scaleChange(50, '.js-page-item1', true)
        await scaleChange(50, '.js-page-item1', true)
        await scaleChange(100, '.js-page-item2', true)
        await scaleChange(800, '.js-page-item3', true)
    })
    it('изменение положения слайдера при клике на чекбокс', async () => {
        await checkboxChanger('.js-page-item1')
        await checkboxChanger('.js-page-item2')


    })
})


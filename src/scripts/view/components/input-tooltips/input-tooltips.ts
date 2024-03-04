import { store } from '../../../model/store'

export const createToolTips = () => {
  let minTooltip = document.createElement('div')
  minTooltip.className = 'js-tooltip-slider-min'
  document.body.appendChild(minTooltip)
  let maxTooltip = document.createElement('div')
  maxTooltip.className = 'js-tooltip-slider-max'
  document.body.appendChild(maxTooltip)
}
export const setTooltip = () => {
  let inputMin: NodeListOf<HTMLElement> =
    document.querySelectorAll('.js-uk-min')
  let inputMax: NodeListOf<HTMLElement> =
    document.querySelectorAll('.js-uk-max')
  let time: number = 1500

  Array.from(inputMin).forEach(
    (a) =>
      (a.onmousemove = function (event) {
        let state = store.getState()
        let minTooltip: HTMLElement | null = document.querySelector(
          '.js-tooltip-slider-min'
        )
        let wrapper = $(this).parent().parent().parent()[0]
        let id = $(wrapper)?.attr('class')?.split(' ')[0]
        let currentValue = [...state].filter((a) => a.id === id)[0].minValue
        const x = event.clientX
        const y = event.clientY
        if (minTooltip) {
          minTooltip.style.display = 'block'
          minTooltip.innerHTML = currentValue
          minTooltip.style.left = `${x + 10}px`
          minTooltip.style.top = `${y + 3}px`
        }
        setTimeout(remove, time)
        function remove() {
          if (minTooltip) {
            minTooltip.style.display = 'none'
          }
        }
      })
  )

  inputMax.forEach(
    (a) =>
      (a.onmousemove = function (event) {
        let state = store.getState()
        let maxTooltip: HTMLElement | null = document.querySelector(
          '.js-tooltip-slider-max'
        )
        let wrapper = $(this).parent().parent().parent()[0]
        let id = $(wrapper)?.attr('class')?.split(' ')[0]
        let currentValue = [...state].filter((a) => a.id === id)[0].maxValue
        const x = event.clientX
        const y = event.clientY
        if (maxTooltip) {
          maxTooltip.style.display = 'block'
          maxTooltip.innerHTML = currentValue

          maxTooltip.style.left = `${x + 10}px`
          maxTooltip.style.top = `${y + 3}px`
        }
        setTimeout(remove, time)
        function remove() {
          if (maxTooltip) {
            maxTooltip.style.display = 'none'
          }
        }
      })
  )
}

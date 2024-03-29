import { StateItemType } from '../../../model/reducer'
import { store } from '../../../model/store'


function initToolBar(wrapper: string): void {
  let state: StateItemType[] | [] = store.getState() as []
  let renderToolBar = (data: StateItemType[]) => {
    return data.map((item: StateItemType) => {
      return $(`
      <div class="control-panel ${item.id}">
      <div class="control-panel__text-inputs">
      <input title="Минимально возможное значение" class="control-panel__text-input js-min-scale" type="number" min=${
        item.minScale
      } max=${item.maxScale} value=${
        item.minScale
      } placeholder="min scale value" name="minScale"/>
      <input title="Максимально возможное значение" class="control-panel__text-input js-max-scale" type="number" min=${
        item.minScale
      } max=${item.maxScale} value=${
        item.maxScale
      }   placeholder="max scale value" name="maxScale" />
      <input title="Шаг"  class="control-panel__text-input js-scale-step" type="number" value=${
        item.step
      } min=0  placeholder="scale step" name="scaleStep"/>
      <input title="Текущее минимальное значение" class="control-panel__text-input js-min-pos" type="number" min=${
        item.minScale
      } max=${item.maxScale} value=${
        item.minValue
      } placeholder="first slider position" name="minPosition"/>
      <input title="Текущее максимальное значение"  class="control-panel__text-input js-max-pos" type="number" min=${
        item.minScale
      } max=${item.maxScale} value=${
        item.maxValue
      } placeholder="second slider position" name="maxPosition"/>
      </div>
      <div class="control-panel__checkbox-inputs">
      <div class="control-panel__checkbox-item">
      <input class="control-panel__checkbox-input js-vertical-or-horizontal" type="checkbox" name="verticalOrHorizontal"
      ${item.orientation === 'vertical' ? 'checked' : ''}
      />
      <label for="verticalOrHorizontal" data-onlabel="on" data-offlabel="off" class="control-panel__label">vertical/horizontal</label>
      </div>
      <div class="control-panel__checkbox-item">
      <input class="control-panel__checkbox-input js-single-or-range" type="checkbox" name='singleOrRange'
      ${item.interval === 'single' ? 'checked' : ''}
      />
      <label for="singleOrRange" data-onlabel="on" data-offlabel="off" class="control-panel__label">single/range</label>
      </div>
      <div class="control-panel__checkbox-item">
      <input class="control-panel__checkbox-input" type="checkbox"   name='progressBar'
      ${item.valueBlock === true ? 'checked' : ''}/>
      <label for="progressBar" data-onlabel="on" data-offlabel="off" class="control-panel__label">progress-bar</label>
      </div>
      <div class="control-panel__checkbox-item">
      <input class="control-panel__checkbox-input" type="checkbox"  name='scaleRange'
      ${item.tooltip === true ? 'checked' : ''} />
      <label for="scaleRange" data-onlabel="on" data-offlabel="off" class="control-panel__label">tooltips</label>
      </div>
      </div>
      </div>`)
    })
  }

  $(wrapper).append(renderToolBar(state))
}

export default initToolBar

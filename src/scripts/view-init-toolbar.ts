import { store } from './model/store'

function initToolBar(wrapper: string): void {
  // let toolBar: JQuery<HTMLElement> = $(`
  //   <div class="control-panel">
  //   <div class="control-panel__text-inputs">
  //   <input class="control-panel__text-input js-min-scale" type="number" min=0 placeholder="min scale value" name="minScale"/>
  //   <input class="control-panel__text-input js-max-scale" type="number" min=0 placeholder="max scale value" name="maxScale" />
  //   <input class="control-panel__text-input js-scale-step" type="number" min=0 placeholder="scale step" name="scaleStep"/>
  //   <input class="control-panel__text-input js-min-pos" type="number" min=0 placeholder="first slider position" name="minPosition"/>
  //   <input class="control-panel__text-input js-max-pos" type="number" min=0 placeholder="second slider position" name="maxPosition"/>
  //   </div>
  //   <div class="control-panel__checkbox-inputs">
  //   <div class="control-panel__checkbox-item">
  //   <input class="control-panel__checkbox-input js-vertical-or-horizontal" type="checkbox" name="verticalOrHorizontal"/>
  //   <label for="verticalOrHorizontal" data-onlabel="on" data-offlabel="off" class="control-panel__label">vertical/horizontal</label>
  //   </div>
  //   <div class="control-panel__checkbox-item">
  //   <input class="control-panel__checkbox-input js-single-or-range" type="checkbox" name='singleOrRange'/>
  //   <label for="singleOrRange" data-onlabel="on" data-offlabel="off" class="control-panel__label">single/range</label>
  //   </div>
  //   <div class="control-panel__checkbox-item">
  //   <input class="control-panel__checkbox-input" type="checkbox" name='progressBar'/>
  //   <label for="progressBar" data-onlabel="on" data-offlabel="off" class="control-panel__label">progress-bar</label>
  //   </div>
  //   <div class="control-panel__checkbox-item">
  //   <input class="control-panel__checkbox-input" type="checkbox" name='scaleRange' />
  //   <label for="scaleRange" data-onlabel="on" data-offlabel="off" class="control-panel__label">scale</label>
  //   </div>
  //   </div>
  //   </div>`)
  let state = store.getState()
  let renderToolBar = (data) => {
    return data.map((item) => {
      return $(`
      <div class="control-panel ${item.id}">
      <div class="control-panel__text-inputs">
      <input class="control-panel__text-input js-min-scale" type="number" min=${
        item.minValue
      }  placeholder="min scale value" name="minScale"/>
      <input class="control-panel__text-input js-max-scale" type="number" min=${
        item.mmaxValue
      }  placeholder="max scale value" name="maxScale" />
      <input class="control-panel__text-input js-scale-step" type="number" min=0 placeholder="scale step" name="scaleStep"/>
      <input class="control-panel__text-input js-min-pos" type="number" min=${
        item.minValue
      }  placeholder="first slider position" name="minPosition"/>
      <input class="control-panel__text-input js-max-pos" type="number" min=${
        item.mmaxValue
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
      <input class="control-panel__checkbox-input" type="checkbox" name='progressBar'/>
      <label for="progressBar" data-onlabel="on" data-offlabel="off" class="control-panel__label">progress-bar</label>
      </div>
      <div class="control-panel__checkbox-item">
      <input class="control-panel__checkbox-input" type="checkbox" name='scaleRange' />
      <label for="scaleRange" data-onlabel="on" data-offlabel="off" class="control-panel__label">scale</label>
      </div>
      </div>
      </div>`)
    })
  }

  $(wrapper).append(renderToolBar(state))
  console.log('render TOOL')
}

export default initToolBar

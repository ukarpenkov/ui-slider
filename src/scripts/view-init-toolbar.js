function initToolBar(wrapper) {
    let toolBar = $(`
    <div class="control-panel"> 
    <div class="control-panel__text-inputs">
    <input class="control-panel__text-input js-min-scale" type="text" placeholder="min scale value" name="minScale"/>
    <input class="control-panel__text-input js-max-scale" type="text" placeholder="max scale value" name="maxScale" />
    <input class="control-panel__text-input js-scale-step" type="text" placeholder="scale step" name="scaleStep"/>
    <input class="control-panel__text-input js-min-pos" type="text" placeholder="first slider position" />
    <input class="control-panel__text-input js-max-pos" type="text" placeholder="second slider position" />
    </div>
    <div class="control-panel__checkbox-inputs">
    <div class="control-panel__checkbox-item">
    <input class="control-panel__checkbox-input js-vertical-or-horizontal" type="checkbox" name="verticalOrHorizontal"/>
    <label for="verticalOrHorizontal" data-onlabel="on" data-offlabel="off" class="control-panel__label">vertical/horizontal</label>
    </div>
    <div class="control-panel__checkbox-item">
    <input class="control-panel__checkbox-input" type="checkbox" name='singleOrRange'/>
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
    <div class="control-panel__checkbox-item">
    <input class="control-panel__checkbox-input" type="checkbox" name='toolTip' />
    <label for="toolTip" data-onlabel="on" data-offlabel="off" class="control-panel__label">tooltip</label>
    </div>
    </div>
    </div>`)

    $(wrapper).append(toolBar)
}


export default initToolBar
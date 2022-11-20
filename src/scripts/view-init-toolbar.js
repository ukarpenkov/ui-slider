function initToolBar(wrapper) {
    let toolBar = $(`<div class="control-panel"> <div class="control-panel__text-inputs"> <input class="control-panel__text-input" type="text" placeholder="min scale value" /> <input class="control-panel__text-input" type="text" placeholder="max scale value" /> <input class="control-panel__text-input" type="text" placeholder="scale step" /> <input class="control-panel__text-input" type="text" placeholder="first slider position" /> <input class="control-panel__text-input" type="text" placeholder="second slider position" /> </div> <div class="control-panel__checkbox-inputs"> <div class="control-panel__checkbox-item"> <input class="control-panel__checkbox-input" type="checkbox" name="verticalOrHorizontal"/> <span class="control-panel__checkbox-describe" >vertical/horizontal</span > </div> <div class="control-panel__checkbox-item"> <input class="control-panel__checkbox-input" type="checkbox" name='singleOrRange'/> <span class="control-panel__checkbox-describe" >single/range</span> </div> <div class="control-panel__checkbox-item"> <input class="control-panel__checkbox-input" type="checkbox" /> <span class="control-panel__checkbox-describe">progress-bar</span> </div> <div class="control-panel__checkbox-item"> <input class="control-panel__checkbox-input" type="checkbox" /> <span class="control-panel__checkbox-describe">scale</span> </div> <div class="control-panel__checkbox-item"> <input class="control-panel__checkbox-input" type="checkbox" /> <span class="control-panel__checkbox-describe">tooltip</span> </div> </div> </div>`)

    $(wrapper).append(toolBar)
}


export default initToolBar
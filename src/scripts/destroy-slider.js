function destroySlider(wrapper) {

    let slider = $(wrapper).children('.uk-slider__range')
    let valueBlock = $(wrapper).children('.uk-slider__value_block')

    $(slider).remove()
    $(valueBlock).remove()


}


export default destroySlider
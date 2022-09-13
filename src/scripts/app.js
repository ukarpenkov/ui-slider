import "./import-jquery";


console.log('hella');
// var newElems = $("<div class='dcell'>gggg</div>")
//     .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
//     .append("<label for='lily'>Лилии:</label>")
//     .append("<input name='lily' value='0' required />");
// $('div').append(newElems)

(function ($) {
    $.fn.maxHeight = function () {

        var max = 0;

        this.each(function () {
            max = Math.max(max, $(this).height());
        });

        return max;
    };
})(jQuery);

var tallest = $('div').maxHeight()

console.log(tallest)
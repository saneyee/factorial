$(function() {

$("#formone").submit(function(event) {

event.preventDefault();

var input = parseInt($("input#number1").val());
var factorial = 1;
for (var i = input; i >= 1; i --) {
   factorial *= i;

}
$("#output").text(factorial);
$("#output").show();

});




});

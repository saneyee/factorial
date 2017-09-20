$(function() {

$("#formone").submit(function(event) {

event.preventDefault();

var input = parseInt($("input#number1").val());
var factorial = 1;
var nwArray = [];
for (var i = input; i >= 1; i --) {
   factorial *= i;
   nwArray.push(i);

}
$("#output").text(nwArray);
$("#factorial").text(factorial);


$("h2").show();

});




});

/*for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else
        console.log(i);
}*/
var myFunction = function(){
	$('#list-area').empty();
	for (var i=1; i <= 100; i++){
		if (i % 15 == 0){
			$('#list-area').append('<li>FizzBuzz</li>');
		}
		else if (i % 3 == 0) {
			$('#list-area').append('<li>Fizz</li>');
		}
		else if (i % 5 == 0) {
			$('#list-area').append('<li>Buzz</li>');
		}
		else
			$('#list-area').append('<li>' + i + '</li>');
	}
};
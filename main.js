
let total = document.getElementById('total');
let users = document.getElementById('users');
let btn = document.getElementById('result-btn');
let testOut = document.querySelector('test-out');

btn.addEventListener('click', function(){

	let step = 0;

	let middle;

	let percentTen = total.value / 10;

	let percentOne = total.value / 100;

	// let userStep = step * percentOne;

	if(users.value >= 10){

        step = (users.value - 10) * percentOne;



	    middle = (total.value / 2) - step;
    }

    else{
    	 
    	 step = (10 - users.value) * percentOne;
	

	    middle = (total.value / 2) + step;
			
		}

		// middle = (total.value / 2) - userStep;
    
	let vilkaLeft = middle - (percentTen / 2) + percentOne;

	let vilkaRight = middle + (percentTen / 2) + percentOne;

	let minValue = document.querySelector('.min');

	let maxValue = document.querySelector('.max');



	// console.log(users.value);

	// -----------------out---------------------------

	minValue.innerText = vilkaLeft;

	maxValue.innerText = vilkaRight;


})

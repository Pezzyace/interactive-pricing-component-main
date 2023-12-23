const rangeBtn = document.getElementById('range');
let result = document.querySelector('#amount');
let totalViews = document.querySelector('#pageviews');


rangeBtn.addEventListener('input', price);
rangeBtn.addEventListener('input', calcViews);

let billResult = 0;

let check = false;
function price() {
	
	if(rangeBtn.value === '1') {
		billResult = 8;
	} else if(rangeBtn.value === '2') {
		billResult = 12;
	} else if(rangeBtn.value === '3') {
		billResult = 16;
	} else if (rangeBtn.value === '4') {
		billResult = 24;
	} else { 
		billResult = 36;
	}
	if(check) {
		parseInt((billResult *= 12/4*3));
		
		document.getElementById('bill').innerText = '/Year';
	} else {
		document.getElementById('bill').innerText = '/Month';
	}
	
	result.innerHTML = `${billResult}.00`;
}


function calcViews() {

	switch(rangeBtn.value) {
		case '1': 
		totalViews.textContent = 10 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 5%, hsl(224, 65%, 95%)  5%)`;
		break;
		case '2': 
		totalViews.textContent = 50 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%)  25%)`;
		break;
		case '3': 
		totalViews.textContent = 100 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%)  50%)`;
		break;
		case '4': 
		totalViews.textContent = 500 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%)  75%)`;
		break;
		case '5': 
		totalViews.textContent = 1 + 'M';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 100% , hsl(224, 65%, 95%) 0%)`;
	}

}

// click toggle btn 
document.querySelector('.switch').onclick = function() {
	// check if the toggle btn it's monthly case
	if (!check) {

		document.getElementById('check').parentElement.style.backgroundColor = 'hsl(174, 77%, 80%)';
		document.getElementById('check').style.left = '25px';
		check = true;

	} else { // if the toggle btn it's Yearly case


		document.getElementById('check').parentElement.style.backgroundColor = "hsl(223, 50%, 87%)";
		document.getElementById('check').style.left = '5px';
		check = false;
	}
	price();
}
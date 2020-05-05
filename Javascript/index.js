const inputs = document.querySelectorAll(".input");
const btn = document.querySelector('.submit');

function addFocus(){
	let parent = this.parentNode.parentNode;
	parent.classList.add('focus');
}

function removeFocus(){
	let parent = this.parentNode.parentNode;
	if(this.value == ''){
		parent.classList.remove('focus');
	}
}

function clickFunc(event){
	if(inputs[0].value == ''){
		alert('Fill your name please...');
		event.preventDefault();
	}else if(inputs[1].value == ''){
		alert('You forgot to fill your password!');
		event.preventDefault();
	}else{
		event.preventDefault();
	}
}

inputs.forEach((input)=>{
	input.addEventListener('focus', addFocus)
	input.addEventListener('blur', removeFocus)	
});

btn.addEventListener('click', clickFunc);
const container = document.querySelector('.container');
const inputs = document.querySelectorAll(".input");
const form = document.querySelector('form');
const welcome = document.querySelector('.welcome');
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

function formSubmit(event){
	let message = [];
	let initMessage = setTimeout(() => {
			welcome.classList.remove('error');
			welcome.innerText = 'welcome';
		}, 5000);
	if(inputs[0].value == 'username')
	{
		message.push('username can not be');
		message.push(inputs[0].value);

		welcome.classList.add('error');
		welcome.innerText = message.join(' ');
		initMessage;
	}
	else if (inputs[0].value.length < 5 || inputs[0].value.length > 15) 
	{
		message.push(inputs[0].value);
		message.push('is not available, need between 5-15 characters');

		welcome.classList.add('error');
		welcome.innerText = message.join(' ');
		initMessage;
	}
	else if(inputs[1].value == 'password')
	{
		message.push('password can not be');
		message.push(inputs[1].value);

		welcome.classList.add('error');
		welcome.innerText = message.join(' ');
	}
	else if (inputs[1].value.length < 6 || inputs[1].value.length > 24) 
	{
		message.push('Your password is not available, need between 5-15 characters');

		welcome.classList.add('error');
		welcome.innerText = message.join(' ');
		initMessage;
	}
	else
	{
		let userDisplay = `<span class='user' id='user'>${inputs[0].value}</span>`

		welcome.classList.add('success');
		welcome.innerText = 'congratulation! you have successfully logged in';

		setTimeout(() => {

			//adjust css after login success
			inputs[0].value = '';
			inputs[0].parentNode.parentNode.classList.remove('focus');
			inputs[1].value = '';
			inputs[1].parentNode.parentNode.classList.remove('focus');

			form.style.pointerEvents = 'none';
			form.style.opacity = 0;
			container.firstElementChild.style.opacity = 0;

			// remove several elements inside container class
			setTimeout(() => {

				//check number of elements inside form
				let elements = form.childNodes;
				for (var i = 0; i < elements.length; i++) {
					if(i > 4){
						elements[i].remove();
					}
				}
				container.firstElementChild.remove();

				// display avatar and Username after remove elements inside container class
				setTimeout(() => {
					let listAvatar = ['avatar-0','avatar-1','avatar-2','avatar-3','avatar-4'];
					let randomAvatar = Math.floor(Math.random() * listAvatar.length);

					welcome.classList.remove('success');
					welcome.innerText = 'welcome';
					welcome.insertAdjacentHTML('afterend', userDisplay);
					container.classList.add('success');

					//set random avarta
					form.firstElementChild.classList.add('success');
					form.firstElementChild.setAttribute('src',`image/avatar-${randomAvatar}.jpg`);
					form.style.opacity = 1;
					form.style.width = '1000px';

				}, 500);

			}, 1000);

		}, 5000);
	}
	event.preventDefault();
}

inputs.forEach((input)=>{
	input.addEventListener('focus', addFocus)
	input.addEventListener('blur', removeFocus)	
});

form.addEventListener('submit', formSubmit);
function renderError(errorMsg) {
	document.getElementById('login_error').innerHTML = errorMsg;
}
function submitHandler(e) {
		console.log('hello from event listener', e);
		e.preventDefault();
		const username = document.getElementById('login_username').value;
		const password = document.getElementById('login_password').value;

		// check if user is already signed up
		const authData = JSON.parse(localStorage.getItem('auth')) || [];
		let userFound = false;
		let password_from_auth = '';
		for (userObj of authData){
			if(userObj.username === username){
				userFound = true;
				password_from_auth = userObj.password;
			}
		}
		if(!userFound){
			renderError('username not found. Please signup..');
			return;
		}
		// username exists, validate password
		if (password_from_auth != password){
			renderError('incorrect password. Please try again.');
			return;
		}
		// username exists , passwords match , redirect to home
		localStorage.setItem('is_user_authenticated','true');
		location.href = 'home.html';

		
}

const loginFromHTMLEle = document.getElementById('login-form-container');
loginFromHTMLEle.addEventListener('submit', (e) => submitHandler(e));


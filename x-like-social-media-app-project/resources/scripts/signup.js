function renderError(errorMsg) {
	document.getElementById('signup_error').innerHTML = errorMsg;
}
function validatePasswords(password,confirm_password){
		let errorMsg = '';
		// validate passwords match
		if (password != confirm_password){// show error
			renderError('password and confirm password do not match. Please try again.');
			return false;
		}else{
			renderError('');
			return true
}
}
function submitHandler() {
		const username = document.getElementById('signup_username').value;
		const user_handle = document.getElementById('signup_user_handle').value;
		const password = document.getElementById('signup_password').value;
		const confirm_password = document.getElementById('signup_confirm_password').value;
		console.log(username,password,confirm_password);

		if (!validatePasswords(password,confirm_password)){
			return;
		};
		
		// check if user is already signed up
		const authData = JSON.parse(localStorage.getItem('auth')) || [];
		let userFound = false;
		// if yes show error
		for (userObj of authData){
			if(userObj.username === username){
				userFound = true;
				renderError('username already exists. Please signin instead.');
				return;
			}
		}
		// if no populating authData
		if (!userFound)
		{
			renderError('');
			const userDetails	= {
				'username': username,
				'user_handle': user_handle,
				'password':password
			};
			authData.push(userDetails);
			localStorage.setItem('auth',JSON.stringify(authData));	
			
			// redirect user to login (index.html)
			location.href='index.html';
		}	
			
	}
			
			

const loginFromHTMLEle = document.getElementById('signup-form-container');
loginFromHTMLEle.addEventListener('submit', (e) => {
	console.log('hello from event listener', e);
	e.preventDefault();
	submitHandler();
}
);



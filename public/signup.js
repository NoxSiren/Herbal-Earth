$(document).ready(function() {
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const signupBtn = $('#signupBtn');
	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			email: emailField.val(),
			username: usernameField.val(),
			password: passwordField.val(),
		});

		window.location.href = '/dashboard';
	});
});
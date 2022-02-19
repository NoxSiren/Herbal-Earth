$(document).ready(function() {
	const emailField = $('#emailField');
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const signupBtn = $('#signupBtn');
	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('views/partials/signup.handlebars', {
			email: emailField.val(),
			username: usernameField.val(),
			password: passwordField.val(),
		});

		window.location.href = '/dashboard';
	});
});

$(document).ready(function() {
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const signinBtn = $('#signinBtn');
	const logoutBtn = $('#logout');
	signinBtn.on('click', async function(event) {
		window.location.href = '/signin';
	});
	logoutBtn.on('click', async function() {
		await $.post('/api/users/logout');
		window.location.href = '/';
	});
});
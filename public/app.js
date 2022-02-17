$(document).ready(function(){
    const emailField = $('#emailField');
    const passwordField= $('#passwordField');
    const signinBtn = $('#signinBtn');
    const logoutBtn = $('#logoutBtn');
    signinBtn.on('click', async function(event){
        event.preventDefault();
        await $.post('/api/home/login', {
            email: emailField.val().trim(),
            password: passwordField.val().trim,
        });
        window.location.href = '/dashboard';
    });
    logoutBtn.on('click', async function(){
        await $.post('/api/users/logout');
        window.location.href = '/';
    });
});
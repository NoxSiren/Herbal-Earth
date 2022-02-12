const $email = document.querySelector('#email');
const $password = document.querySelector('#password');
const $login = document.querySelector('#login');
$login.addEventListener('click', async function (event) {
    event.preventDefault();
    console.log($password.value);
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: $email.value,
                password: $password.value,
            })
        });
        const data = await response.json();
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
});
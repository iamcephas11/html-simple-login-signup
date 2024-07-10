document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                Swal.fire('Success!', 'You are logged in!', 'success');
            } else {
                Swal.fire('Oops!', 'Invalid username or password.', 'error');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username && email && password) {
                Swal.fire('Success!', 'You have signed up!', 'success');
            } else {
                Swal.fire('Oops!', 'Please fill out all fields.', 'error');
            }
        });
    }
});

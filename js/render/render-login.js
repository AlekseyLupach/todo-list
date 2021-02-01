import loginTemplate from '../templates/pages/login/login.js'
import { REGISTRATTION_URL } from '../routing.js';
import { navigateToUrl } from '../routing.js';
import loginUser from '../auth/login-user.js'
import currentUser from '../current-user.js';
import { INDEX_URL } from '../routing.js';

const rootDiv = document.querySelector('.container')
export default function renderLogin() {
    if (!currentUser.userData) {
        rootDiv.innerHTML = loginTemplate;
        const LoginForm = document.querySelector('.login-form > form')
        LoginForm.addEventListener('submit', loginUser)
        const registrationBtn = document.querySelector('.registration');
        registrationBtn.addEventListener('click',
            () => {
                navigateToUrl(REGISTRATTION_URL);
            })
    } else {
        navigateToUrl(INDEX_URL);
    }
}


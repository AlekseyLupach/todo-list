import registationTemplate from '../templates/pages/registration/index.js'
import registerUser from '../auth/register-user.js'
import { navigateToUrl } from '../routing.js';
import currentUser from '../current-user.js';
import { LOGIN_URL } from '../routing.js';
import { INDEX_URL } from '../routing.js';

const rootDiv = document.querySelector('.container')
export default function renderRegistration() {
    if (!currentUser.userData) {
        rootDiv.innerHTML = registationTemplate;
        const registationForm = document.querySelector('.registation-form > form')
        registationForm.addEventListener('submit', registerUser)
        const loginBtn = document.querySelector('.login');
        loginBtn.addEventListener('click', () => {
            navigateToUrl(LOGIN_URL);
        });

    } else {
        navigateToUrl(INDEX_URL);
    }

}




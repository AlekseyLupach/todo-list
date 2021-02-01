import { navigateToUrl, LOGIN_URL } from '../routing.js';
import storageService from '../storage-service.js';
import currentUser from '../current-user.js';

export default function logout(event) {
    event.preventDefault();
    currentUser.logout();
    storageService.set('currentUser', JSON.stringify(currentUser.userData));
    navigateToUrl(LOGIN_URL);
};
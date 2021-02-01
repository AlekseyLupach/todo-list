import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';
import renderRegistration from './render/render-registation.js'
import renderLogin from './render/render-login.js'
import { getListIdByUrl } from './utils.js'
import lists from './lists-list.js'
import currentUser from './current-user.js'
import logRegHeader from './templates/header/link.js';
import logOutHeader from './templates/header/logout.js';

const listRoutePattern = /^\/list\/\d+$/;

export const INDEX_URL = ['/index.html'];

export const INDEX_URLS = ['/', '/index.html'];

export const REGISTRATTION_URL = '/registration';

export const LOGIN_URL = '/login'

export function renderPage() {
  const { pathname: currentUrl } = window.location;

  const header = document.querySelector('header .header__links');

  if (!currentUser.userData) {
    header.innerHTML = logRegHeader;

  } else {
    header.innerHTML = logOutHeader;
  }

  if (currentUrl === REGISTRATTION_URL) {
    renderRegistration();

    return;
  }

  if (currentUrl === LOGIN_URL) {
    renderLogin();

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl(LOGIN_URL);

    return;
  }

  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    const listId = getListIdByUrl();

    const list = lists.getListById(listId);

    if (list.userId !== currentUser.userData.id) {
      navigateToUrl('/');
    }

    renderList();

    return;
  }
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}

import { API_URL } from '../enviroment/config';
import { authHeader, handleResponse } from '../_helpers/index';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}
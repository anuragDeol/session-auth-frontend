import { API_BASE_URL } from "../utils";

async function loginAPI(userInput) {
    const response = await fetch(`${API_BASE_URL}api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userInput)
    })
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data?.message || 'Login Failed');
    }
    return data;
}

async function logoutAPI() {
    const response = await fetch(`${API_BASE_URL}api/auth/logout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data?.message || 'Logout Failed');
    }
    return data;
}

async function userSessionAPI() {
    const response = await fetch(`${API_BASE_URL}api/auth/me`, {
        method: 'GET',
        credentials: 'include'
    });
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data?.message || 'Error in getting user session');
    }
    return data;
}

async function registerAPI(userInput) {
    const response = await fetch(`${API_BASE_URL}api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userInput)
    })
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data?.message || 'User registeration failed');
    }
    return data;
}

export { loginAPI, logoutAPI, userSessionAPI, registerAPI };
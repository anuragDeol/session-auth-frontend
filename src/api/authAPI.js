async function loginAPI(userInput) {
    const response = await fetch('http://localhost:7000/api/auth/login', {
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
        throw new Error('Login Failed:', data.error);
    }
    return data;
}

async function logoutAPI() {
    const response = await fetch('http://localhost:7000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();
    if(!response.ok) {
        throw new Error('Logout failed:', data?.error);
    }
    return data;
}

export { loginAPI, logoutAPI };
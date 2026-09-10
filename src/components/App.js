import Register from "./Register";
import Login from "./Login";
import { useEffect, useState } from "react";

function App() {
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });
    const [user, setUser] = useState(localStorage?.getItem('authUser') ? JSON.parse(localStorage?.getItem('authUser')) : null);
    const [loading, setLoading] = useState(false);

    const checkUserSession = async () => {
        const response = await fetch('http://localhost:7000/api/auth/me', {
            method: 'GET',
            credentials: 'include'
        });
        if(!response.ok) {
            localStorage.removeItem('authUser');
        }
    }

    useEffect(() => {
        // check user session on page reload
        checkUserSession();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Logged out successfully!', data);
            setUser(null);
            localStorage.removeItem('authUser');
        } else {
            console.error('Logout failed:', data?.message || data?.error);
        }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    return (
        <div>
            {
                loading ? "Loading..." : 
                user ? 
                <div>Hey {user?.username} You're logged in!</div>
                : 
                <Login formInput={formInput} setFormInput={setFormInput} setUser={setUser} setLoading={setLoading} />
            }
            {/* <Register formInput={formInput} setFormInput={setFormInput} setUser={setUser} /> */}
            {user && <button id='logout-btn' onClick={handleLogout}>Logout</button>}
        </div>
    );
}

export default App;
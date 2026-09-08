import Register from "./Register";
import Login from "./Login";
import { useEffect, useState } from "react";

function App() {
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

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
                false ? 
                <Login formInput={formInput} setFormInput={setFormInput} /> :
                <Register formInput={formInput} setFormInput={setFormInput} setUser={setUser} />
            }
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
}

export default App;
import Register from "./Register";
import Login from "./Login";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const { user, loading, loginAuth, error, setError, checkUserSession, logoutAuth, registerAuth } = useAuth();
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        setError(null);
        checkUserSession();
    }, []);
    useEffect(() => {
        if(error) {
            toast(error);
        }
    }, [error]);
    
    const handleLogout = async () => {
        const res = logoutAuth();
        if(res) {
            toast('Logged out!');
        }
    }

    return (
        <div>
            {
                loading ? "Loading..." : 
                user ? 
                <div>Hey {user?.username} You're logged in!</div>
                : 
                <Register formInput={formInput} setFormInput={setFormInput} registerAuth={registerAuth} />
                // <Login formInput={formInput} setFormInput={setFormInput} loginAuth={loginAuth}  />
            }
            {user && <button id='logout-btn' onClick={handleLogout}>Logout</button>}
            <ToastContainer/>
        </div>
    );
}

export default App;
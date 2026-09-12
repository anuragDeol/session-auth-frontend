import Register from "./Register";
import Login from "./Login";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const { user, loading, loginAuth, error, setError, checkUserSession, logoutAuth } = useAuth();
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });
    // const notify = () => toast("Wow so easy!");

    useEffect(() => {
        checkUserSession();
    }, []);
    useEffect(() => {
        if(error) {
            toast(error);
        }
    }, [error]);

    return (
        <div>
            {
                loading ? "Loading..." : 
                user ? 
                <div>Hey {user?.username} You're logged in!</div>
                : 
                <Login formInput={formInput} setFormInput={setFormInput} loginAuth={loginAuth}  />
            }
            {/* <Register formInput={formInput} setFormInput={setFormInput} setUser={setUser} /> */}
            {user && <button id='logout-btn' onClick={logoutAuth}>Logout</button>}
            <ToastContainer/>
        </div>
    );
}

export default App;
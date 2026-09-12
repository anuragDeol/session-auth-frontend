import Register from "./Register";
import Login from "./Login";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function App() {
    const { user, loading, error, setUser, setLoading, setError, loginAuth, checkUserSession, logoutAuth } = useAuth();
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        checkUserSession();
    }, []);

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
        </div>
    );
}

export default App;
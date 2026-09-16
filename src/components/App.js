import Register from "./Register";
import Login from "./Login";
import LoggedInPage from "./LoggedInPage";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const { user, loading, loginAuth, error, setError, checkUserSession, logoutAuth, registerAuth } = useAuth();
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    });
    const [register, setRegister] = useState(true);

    useEffect(() => {
        checkUserSession();
    }, []);
    useEffect(() => {
        if(error) {
            setError(null);
            toast(error);
        }
    }, [error]);
    
    const handleLogout = async () => {
        const res = await logoutAuth();
        if(res) {
            toast('Logged out!');
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f7f2e9] px-4">
            {
                loading ? "Loading..." : 
                user ? 
                <LoggedInPage user={user} onLogout={handleLogout} />
                : 
                register ? 
                <Register formInput={formInput} setFormInput={setFormInput} registerAuth={registerAuth} setRegister={setRegister} /> : 
                <Login formInput={formInput} setFormInput={setFormInput} loginAuth={loginAuth} setRegister={setRegister} />
            }
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                closeButton={false}
                toastClassName="!bg-[#fdfbf6] !text-gray-800 !rounded-2xl !shadow-sm !border !border-[#ece5d8] !font-sans !min-h-0 !py-3"
                progressClassName="!bg-[#8b6f47] !bg-none"
            />
        </div>
    );
}

export default App;
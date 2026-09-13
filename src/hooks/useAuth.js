import { useState } from 'react';
import { loginAPI, logoutAPI, registerAPI, userSessionAPI } from '../api/authAPI';

function useAuth() {
    const [user, setUser] = useState(localStorage?.getItem('authUser') ? JSON.parse(localStorage?.getItem('authUser')) : null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const checkUserSession = async () => {
        setLoading(true);
        try {
            const res = await userSessionAPI();
            if(res?.user) {
                localStorage.setItem('authUser', JSON.stringify(res?.user));
                setUser(res?.user);
            }
        } catch(error) {
            console.error('Something went wrong:', error);
            localStorage.removeItem('authUser');
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    const loginAuth = async (userInput) => {
        setLoading(true);
        try {
            const res = await loginAPI(userInput);
            if(res?.user) {
                localStorage.setItem('authUser', JSON.stringify(res?.user))
                setUser(res?.user);
            }
        } catch(error) {
            console.error('Something went wrong:', error);
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
        return true;
    }

    const logoutAuth = async () => {
        setLoading(true);
        try {
            await logoutAPI();
            localStorage.removeItem('authUser');
            setUser(null);
        } catch(error) {
            console.error('Something went wrong:', error);
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
        return true;
    }

    const registerAuth = async (userInput) => {
        setLoading(true);
        try {
            const res = await registerAPI(userInput);
            if(res?.user) {
                localStorage.setItem('authUser', JSON.stringify(res?.user))
                setUser(res?.user);
            }
        } catch(error) {
            console.error('Something went wrong:', error);
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
        return true;
    }

    return { user, loading, error, setUser, setLoading, setError, loginAuth, logoutAuth, checkUserSession, registerAuth };
}

export default useAuth;
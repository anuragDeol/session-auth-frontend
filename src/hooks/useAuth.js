import { useState } from 'react';
import { loginAPI, logoutAPI } from '../api/authAPI';

function useAuth() {
    const [user, setUser] = useState(localStorage?.getItem('authUser') ? JSON.parse(localStorage?.getItem('authUser')) : null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const checkUserSession = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:7000/api/auth/me', {
                method: 'GET',
                credentials: 'include'
            });

            if(response.ok) {
                const data = await response.json();
                console.log('User session active');
                localStorage.setItem('authUser', JSON.stringify(data?.user));
                setUser(data?.user);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        } catch(error) {
            console.error('Something went wrong:', error);
        } finally {
            setLoading(false);
        }
    }

    const loginAuth = async (userInput) => {
        setLoading(true);
        try {
            const res = await loginAPI(userInput);
            localStorage.setItem('authUser', JSON.stringify(res?.user));
            setUser(res?.user);
        } catch(error) {
            console.error('Something went wrong:', error);
            return false;
        } finally {
            setLoading(false);
        }
        return true;
    }

    const logoutAuth = async () => {
        setLoading(true);
        try {
            const res = await logoutAPI();
            localStorage.removeItem('authUser');
            setUser(null);
        } catch(error) {
            console.error('Something went wrong:', error);
            return false;
        } finally {
            setLoading(false);
        }
        return true;
    }

    return { user, loading, error, setUser, setLoading, setError, loginAuth, logoutAuth, checkUserSession };
}

export default useAuth;
import { useState } from 'react';
import { loginAPI } from '../api/authAPI';

function useAuth() {
    const [user, setUser] = useState(localStorage?.getItem('authUser') ? JSON.parse(localStorage?.getItem('authUser')) : null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

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

    return { user, loading, error, setUser, setLoading, setError, loginAuth };
}

export default useAuth;
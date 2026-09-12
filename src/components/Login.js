import { useEffect } from "react";
import { loginAPI } from '../api/authAPI';

function Login(props) {
    const { formInput, setFormInput, setUser, setLoading } = props;

    const initiateUserLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormInput({
            username: "",
            password: ""
        });
        try {
            const res = await loginAPI(formInput);
            if(res?.user) {
                console.log('DEBUG|Login.js|line35', res);
                localStorage.setItem('authUser', JSON.stringify(res?.user));
                setUser(res?.user);
            } else {
                // error thrown
            }
        } catch(error) {
            console.error('Something went wrong:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log(formInput);
    }, [formInput]);

    const handleInput = (e) => {
        if(e.target.name === "username") {
            setFormInput((prevFormInput) => {
                return {
                    ...prevFormInput,
                    username: e.target.value
                }
            })
        } else if(e.target.name === 'password') {
            setFormInput((prevFormInput) => {
                return {
                    ...prevFormInput,
                    password: e.target.value
                }
            })
        }
    }

    return(
        <div>
            <form onSubmit={initiateUserLogin}>
                <input
                    name="username"
                    type="text"
                    value={formInput?.username}
                    onChange={handleInput}
                    placeholder="Username"
                />
                <input
                    name="password"
                    type="password"
                    value={formInput?.password}
                    onChange={handleInput}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
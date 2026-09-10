import { useEffect } from "react";

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
            const response = await fetch('http://localhost:7000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formInput)
            });

            const data = await response.json();
            if(response.ok) {
                console.log('User Login successful!', data);
                localStorage.setItem('authUser', JSON.stringify(data?.user));
                setUser(data?.user);
            } else {
                console.error('User Login Failed:', data?.message);
            }
        } catch(error) {
            console.error('User Login Failed:', error);
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
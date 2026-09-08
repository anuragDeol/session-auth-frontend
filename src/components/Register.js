import { useEffect } from "react";

function Register(props) {
    const { formInput, setFormInput, setUser } = props;

    const initiateUserRegisteration = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:7000/api/auth/register', {
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
                console.log('User Registeration successful!', data);
                setUser(formInput?.username);    
                setFormInput({
                    username: "",
                    password: ""
                });
            } else {
                console.error('User Registeration Failed:', data?.message);
            }
        } catch(error) {
            console.error('User Registeration Failed:', error);
        }
    }

    useEffect(() => {
        console.log(formInput);
    }, [formInput]);

    const handleInput = (e) => {
        e.preventDefault();
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
            <form onSubmit={initiateUserRegisteration}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
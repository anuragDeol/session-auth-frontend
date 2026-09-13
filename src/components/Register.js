import { useEffect } from "react";
import { toast } from "react-toastify";

function Register(props) {
    const { formInput, setFormInput, registerAuth } = props;

    const initiateUserRegisteration = async (e) => {
        e.preventDefault();
        const res = await registerAuth(formInput);
        if(res) {
            toast('Registered and logged in successfully!')
            setFormInput({
                username: "",
                password: ""
            });
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
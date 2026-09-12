import useAuth from '../hooks/useAuth';

function Login(props) {
    const { formInput, setFormInput, loginAuth } = props;

    const initiateUserLogin = async (e) => {
        e.preventDefault();
        const res = await loginAuth(formInput);
        if(res) {
            setFormInput({
                username: "",
                password: ""
            });
        }
    }

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
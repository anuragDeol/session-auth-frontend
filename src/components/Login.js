import { toast } from "react-toastify";

function Login(props) {
    const { formInput, setFormInput, loginAuth, setRegister } = props;

    const initiateUserLogin = async (e) => {
        e.preventDefault();
        const res = await loginAuth(formInput);
        if(res) {
            toast('Logged in!')
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
        <div className="w-full max-w-sm">
            <form onSubmit={initiateUserLogin} className="flex flex-col gap-5 rounded-3xl border border-[#ece5d8] bg-[#fdfbf6] p-10 shadow-sm">
                <h2 className="text-center font-serif text-4xl text-gray-900">Login</h2>

                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </span>
                    <input
                        name="username"
                        type="text"
                        value={formInput?.username}
                        onChange={handleInput}
                        placeholder="Username"
                        className="w-full rounded-xl border border-gray-200 bg-[#fdfbf6] py-3 pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8b6f47]"
                    />
                </div>

                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </span>
                    <input
                        name="password"
                        type="password"
                        value={formInput?.password}
                        onChange={handleInput}
                        placeholder="Password"
                        className="w-full rounded-xl border border-gray-200 bg-[#fdfbf6] py-3 pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#8b6f47]"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#8b6f47] py-3 font-medium text-white transition-colors hover:bg-[#77593a]"
                >
                    Login
                    <span aria-hidden="true">→</span>
                </button>

                <p className="text-center text-sm text-gray-600">
                    New user?{" "}
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            setRegister(true);
                        }}
                        className="cursor-pointer font-medium text-[#8b6f47] underline underline-offset-2"
                    >
                        Register here.
                    </a>
                </p>
            </form>
        </div>
    );
}

export default Login;
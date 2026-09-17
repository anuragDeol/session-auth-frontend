import { LINKS } from "../data/profileContent";

function LoggedInIntro({ onLogout }) {
    return(
        <div>
            <p className="text-xs tracking-widest text-gray-500">GOOD TO SEE YOU,</p>
            <h1 className="mt-2 font-serif text-6xl leading-none text-gray-900">You're</h1>
            <h1 className="font-serif text-6xl leading-none text-[#8b6f47]">logged in.</h1>

            <p className="mt-6 text-gray-600">I'm working on something great.</p>
            <p className="text-gray-600">In the meantime, feel free to explore about me.</p>

            <div className="mt-6 flex flex-wrap gap-3">
                {LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={
                            link.variant === "primary"
                                ? "rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white"
                                : "rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800"
                        }
                    >
                        {link.label} →
                    </a>
                ))}
            </div>

            <button onClick={onLogout} className="mt-6 text-sm text-gray-500 underline">
                Logout
            </button>
        </div>
    );
}

export default LoggedInIntro;
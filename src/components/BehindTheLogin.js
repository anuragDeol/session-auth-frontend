import { BEHIND_THE_LOGIN_POINTS } from "../data/profileContent";

function BehindTheLogin() {
    return (
        <div className="rounded-3xl border border-[#ece5d8] bg-[#fdfbf6] p-8">
            <p className="text-xs tracking-widest text-gray-500">BEHIND THE LOGIN</p>
            <h3 className="mt-3 text-2xl font-serif text-gray-900">
                A simple session. A more personal web.
            </h3>
            <p className="mt-3 max-w-lg text-sm text-gray-600">
                This app uses <span className="font-semibold">express-session</span> to handle authentication.
                It securely stores a session ID in your browser (via an HTTP-only cookie) and keeps your session data on the server.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {BEHIND_THE_LOGIN_POINTS.map((point) => (
                    <div key={point.label} className="text-sm text-gray-700">
                        {point.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BehindTheLogin;
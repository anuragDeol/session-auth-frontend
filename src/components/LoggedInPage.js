import { useState } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import BehindTheLogin from "./BehindTheLogin";
import SessionInfoCard from "./SessionInfoCard";
import { LINKS } from "../data/profileContent";

function LoggedInPage({ user, onLogout }) {
    const [showSession, setShowSession] = useState(false);

    return (
        <div className="w-full max-w-6xl">
            <div className="mb-10 flex items-center justify-between">
                <span className="text-sm tracking-widest text-gray-800">Hi! {user?.username}</span>
                <div className="relative">
                    <button
                        onClick={() => setShowSession((prev) => !prev)}
                        className="flex items-center gap-2 text-sm text-gray-700"
                    >
                        <span className="h-2 w-2 rounded-full bg-green-600" />
                        Logged in
                    </button>
                    {showSession && <SessionInfoCard user={user} />}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div>
                    <p className="text-xs tracking-widest text-gray-500">GOOD TO SEE YOU,</p>
                    <h1 className="mt-2 font-serif text-6xl leading-none text-gray-900">You're</h1>
                    <h1 className="font-serif text-6xl leading-none text-[#8b6f47]">logged in.</h1>

                    <p className="mt-6 text-gray-600">I'm working on something great.</p>
                    <p className="text-gray-600">In the meantime, feel free to explore.</p>

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

                <ExperienceTimeline />
            </div>

            <div className="mt-10">
                <BehindTheLogin />
            </div>
        </div>
    );
}

export default LoggedInPage;
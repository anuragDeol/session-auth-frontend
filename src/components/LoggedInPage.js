import { useState } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import BehindTheLogin from "./BehindTheLogin";
import SessionInfoCard from "./SessionInfoCard";
import LoggedInIntro from "./LoggedInIntro";

function LoggedInPage({ user, onLogout }) {
    const [showSession, setShowSession] = useState(false);

    return (
        <div className="w-full max-w-6xl">
            <div className="mb-10 flex items-center justify-between">
                <span className="text-sm tracking-widest text-gray-800">Hi! <b>{user?.username}</b></span>
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
                <LoggedInIntro onLogout={onLogout}/>
                <ExperienceTimeline />
            </div>

            <div className="mt-10">
                <BehindTheLogin />
            </div>
        </div>
    );
}

export default LoggedInPage;
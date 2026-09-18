import { BEHIND_THE_LOGIN_POINTS } from "../data/profileContent";

const ICONS = [
    // shield-check
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    // database
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0C20.25 4.097 16.556 2.25 12 2.25S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v5.625m-16.5-5.625v5.625m16.5 0v5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-5.625m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>,
    // lock
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>,
    // code brackets
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
];

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

            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {BEHIND_THE_LOGIN_POINTS.map((point, index) => (
                    <div key={point.label} className="flex flex-col items-center gap-2 text-center text-sm text-gray-700">
                        <span className="text-[#8b6f47]">{ICONS[index]}</span>
                        {point.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BehindTheLogin;
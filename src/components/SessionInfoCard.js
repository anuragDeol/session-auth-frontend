// import { maskSessionId, formatExpiry } from "../utils";

function SessionInfoCard({ user }) {
    return (
        <div className="absolute right-0 top-10 w-80 rounded-2xl border border-[#ece5d8] bg-[#fdfbf6] p-5 shadow-lg">
            <p className="text-xs tracking-widest text-gray-500">SESSION STATUS</p>
            <div className="mt-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                <span className="text-base font-semibold text-gray-900">Active</span>
            </div>
            <p className="text-xs text-gray-500">You are authenticated</p>

            <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <dt className="text-gray-500">User</dt>
                    <dd className="text-gray-900">{user?.username}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-gray-500">Session ID</dt>
                    {/* <dd className="font-mono text-gray-900">{maskSessionId(user?.sessionId)}</dd> */}
                    <dd className="font-mono text-gray-900">Masked session id</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-gray-500">Method</dt>
                    <dd className="text-gray-900">Session Cookie</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-gray-500">Expires</dt>
                    {/* <dd className="text-right text-gray-900">{formatExpiry(user?.expiresAt)}</dd> */}
                    <dd className="text-right text-gray-900">Expires in</dd>
                </div>
            </dl>

            <div className="mt-4 border-t border-[#ece5d8] pt-4">
                <p className="text-xs text-gray-500">Powered by</p>
                <p className="font-serif text-lg text-green-800">express-session</p>
                <p className="text-xs text-gray-500">Simple. Secure. Reliable.</p>
            </div>
        </div>
    );
}

export default SessionInfoCard;
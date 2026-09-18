import { EXPERIENCE } from "../data/profileContent";

function ExperienceTimeline() {
    return (
        <div>
            <div className="mb-4 flex items-baseline justify-between">
                <span className="text-xs tracking-widest text-gray-500">MY JOURNEY</span>
                <span className="text-xs tracking-widest text-gray-500">3+ years</span>
            </div>

            <div className="max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="ml-2 border-l-2 border-[#e5ded0] pl-5">
                    {EXPERIENCE.map((role, index) => (
                        <div key={role.title + role.period} className={`relative ${index === 0 ? "" : "mt-6"}`}>
                            <span
                                className={`absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 ${
                                    !role.internship ? "border-[#8b6f47] bg-[#8b6f47]" : "border-[#c9c2b0] bg-[#f7f2e9]"
                                }`}
                            />
                            <p className="text-xs tracking-wide text-gray-500">
                                {role.period}
                                {role.internship && (
                                    <span className="mx-2 rounded-full bg-[#dcd3c0] px-2 py-0.5 text-[10px] font-medium text-gray-600">
                                        Internship
                                    </span>
                                )}
                            </p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {role.title} <span className="font-normal text-[#8b6f47]">@ {role.company}</span>
                            </p>
                            <p className="mt-1 text-sm text-gray-600">{role.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {role.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-[#f0ebe0] px-3 py-1 text-xs text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceTimeline;
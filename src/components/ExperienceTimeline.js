import { EXPERIENCE } from "../data/profileContent";

function ExperienceTimeline() {
    return (
        <div>
            <div className="mb-4 flex items-baseline justify-between">
                <span className="text-xs tracking-widest text-gray-500">MY JOURNEY</span>
                <span className="text-xs tracking-widest text-gray-500">1.7+ YEARS · 3 ROLES</span>
            </div>

            <div className="ml-1 border-l-2 border-[#e5ded0] pl-5">
                {EXPERIENCE.map((role, index) => (
                    <div key={role.title + role.period} className={index === 0 ? "" : "mt-6"}>
                        <p className="text-xs tracking-wide text-gray-500">{role.period}</p>
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
    );
}

export default ExperienceTimeline;
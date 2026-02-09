'use client'

export function TechStackSection() {
    const techStack = [
        { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
        { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
        { category: "Database", skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
        { category: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] }
    ]

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-black to-neutral-950 p-8 md:p-16 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to build exceptional digital products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techStack.map((stack, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                {stack.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {stack.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-700/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

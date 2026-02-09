'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex h-full flex-col md:flex-row">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                    <div className="text-sm md:text-base text-neutral-400 mb-4">
                        Hi, I'm
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                        Keshav Kashyap
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-300 mb-6">
                        Full Stack Developer
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-lg text-lg leading-relaxed">
                        I build exceptional digital experiences with modern technologies.
                        Specialized in creating scalable web applications with React, Next.js,
                        Node.js, and cloud services.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition">
                            View Projects
                        </button>
                        <button className="px-6 py-3 border border-neutral-600 text-white rounded-lg font-semibold hover:bg-neutral-900 transition">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[400px] md:min-h-0">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}

export function AboutSection() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-black to-neutral-950 p-8 md:p-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            I'm a passionate Full Stack Developer with expertise in building
                            modern web applications. I love turning complex problems into
                            simple, beautiful, and intuitive solutions.
                        </p>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            With a strong foundation in both frontend and backend technologies,
                            I create seamless user experiences backed by robust server architecture.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'Git', 'Docker', 'AWS', 'REST APIs'].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-700 transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
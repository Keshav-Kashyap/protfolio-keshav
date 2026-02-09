'use client'

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Code, Database, Globe, Boxes, ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Built a full-stack shopping platform with real-time inventory management, secure payment processing, and admin dashboard",
            tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
            icon: <Globe className="h-5 w-5" />,
            gradient: "from-emerald-500 to-teal-600",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Real-Time Chat Application",
            description: "Developed a scalable chat app with WebSocket integration, file sharing, and group messaging capabilities",
            tech: ["React", "Socket.io", "Redis", "AWS"],
            icon: <Code className="h-5 w-5" />,
            gradient: "from-blue-500 to-cyan-600",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Analytics Dashboard",
            description: "Created comprehensive analytics platform with data visualization, custom reporting, and API integrations",
            tech: ["TypeScript", "PostgreSQL", "Chart.js", "Docker"],
            icon: <Database className="h-5 w-5" />,
            gradient: "from-purple-500 to-pink-600",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Microservices Architecture",
            description: "Designed and implemented distributed microservices system with event-driven architecture and API gateway",
            tech: ["Node.js", "Kubernetes", "RabbitMQ", "gRPC"],
            icon: <Boxes className="h-5 w-5" />,
            gradient: "from-orange-500 to-red-600",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        }
    ]

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-neutral-950 to-black p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Crafting digital experiences that solve real-world problems with elegant code and innovative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="h-full">
                            <div className="relative h-full rounded-2xl border border-neutral-800 p-1">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={2}
                                />
                                <div className="relative h-full flex flex-col gap-6 overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-black via-neutral-950 to-black p-8 shadow-2xl">
                                    {/* Icon with gradient background */}
                                    <div className={`w-fit rounded-xl border border-neutral-800 bg-gradient-to-r ${project.gradient} p-3`}>
                                        {project.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4 flex-1">
                                        <h3 className="text-2xl font-semibold text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-400 text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-neutral-900/50 border border-neutral-800 text-neutral-300 text-sm rounded-lg font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 border border-neutral-700 text-white rounded-lg font-medium hover:bg-neutral-900 transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

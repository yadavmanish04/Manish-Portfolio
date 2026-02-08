import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Campus Cart",
        subtitle: "Order College Items",
        description: "Full-stack mobile app for students and teachers to order items online from the campus store. Integrated secure payments and real-time notifications.",
        tech: ["Flutter", "Firebase", "Razorpay", "Firebase Auth", "Figma"],
        github: "https://github.com/yadavmanish04/Campus-Cart",
        live: "#",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Housy Voice",
        subtitle: "Society Management App",
        description: "A mobile platform where residents join their society, share posts, raise complaints, and review living experiences to improve transparency.",
        tech: ["Flutter", "Dart", "REST APIs", "Firebase Cloud Messaging"],
        github: "https://github.com/yadavmanish04/Housy-Voice",
        live: "#",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Recipe App",
        subtitle: "API Driven Discovery",
        description: "Dynamic web application with advanced filtering for discovering and managing global recipes via professional APIs.",
        tech: ["HTML", "CSS", "JS", "RapidAPI"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Blog Application",
        subtitle: "Full-Stack CMS",
        description: "A robust blog platform with markdown support, user authentication, and optimized database management.",
        tech: ["Django", "Python", "PostgreSQL"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass-card overflow-hidden !p-0"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute top-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <a href={project.github} className="p-2 glass rounded-full hover:bg-white/20">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.live} className="p-2 glass rounded-full hover:bg-white/20">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                </div>
                                <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">{project.subtitle}</p>
                                <p className="text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

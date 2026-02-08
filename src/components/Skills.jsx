import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, PenTool, Database, Laptop } from 'lucide-react';

const skillsData = [
    {
        category: "Mobile & App Development",
        icon: <Smartphone className="text-blue-400" />,
        skills: ["Flutter", "Dart", "Firebase", "RESTful APIs", "React Native", "Django",]
    },
    // {
    //     category: "Backend Development",
    //     icon: <Server className="text-green-400" />,
    //     skills: ["Python", "Django", "Flask", "SQL", "Firebase", "Node.js"]
    // },
    {
        category: "Languages & Tools",
        icon: <Laptop className="text-purple-400" />,
        skills: ["Java", "Python", "Git", "GitHub", "Figma", "Canva"]
    },
    {
        category: "UI/UX & Design",
        icon: <PenTool className="text-orange-400" />,
        skills: ["Figma", "Wireframing", "Prototyping", "User Interface Design"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Technical Skills</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary-500/50 transition-colors">
                                    {group.icon}
                                </div>
                                <h3 className="text-lg font-bold leading-tight">{group.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-primary-500/40 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

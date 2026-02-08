import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            type: "work",
            title: "Mobile App Developer Intern",
            organization: "Pro Housy Point Tech Solution",
            period: "Jun 2025 – Feb 2026",
            description: "Built cross-platform mobile applications using Flutter, Dart, Firebase and Django. Designed scalable UI components and integrated REST APIs with Cloud Messaging."
        },
        {
            type: "work",
            title: "Frontend Developer Intern",
            organization: "Octanet Services Pvt Ltd",
            period: "Jun 2024 – Aug 2024",
            description: "Gained hands-on experience in HTML, CSS, and JavaScript. Improved technical skills through collaborative teamwork and industry-aligned virtual sessions."
        }
    ];

    const education = [
        {
            title: "Master of Computer Applications (MCA)",
            organization: "K.R. Mangalam University",
            period: "Oct 2024 – Present",
            description: "Current CGPA: 8.24"
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            organization: "Maharshi Dayanand University",
            period: "Sep 2019 – Sep 2023",
            description: "Graduated with CGPA: 7.1"
        }
    ];

    const certifications = [
        "AWS APAC – Solutions Architecture Job Simulation",
        "Meta Front-End Development Program",
        "OOPS in Java",
        "Microsoft Certified: Azure Data Fundamentals",
        "Google Analytics (GA4)"
    ];

    return (
        <section id="experience" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Work & Edu */}
                    <div>
                        <h2 className="section-title">Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-primary-500/30"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-background" />
                                    <div className="flex items-center gap-2 text-primary-400 text-sm font-bold mb-1">
                                        <Briefcase size={14} /> {exp.period}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{exp.organization}</p>
                                    <p className="text-slate-500 text-sm">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <h2 className="section-title mt-16 text-2xl">Education</h2>
                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white/20 border-4 border-background" />
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-1">
                                        <GraduationCap size={14} /> {edu.period}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{edu.organization}</p>
                                    {edu.description && <p className="text-slate-500 text-xs italic">{edu.description}</p>}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 className="section-title">Certifications</h2>
                        <div className="grid gap-4">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card flex items-center gap-4"
                                >
                                    <div className="p-2 rounded-full bg-primary-500/10 text-primary-400">
                                        <Award size={20} />
                                    </div>
                                    <span className="text-white font-medium text-sm">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

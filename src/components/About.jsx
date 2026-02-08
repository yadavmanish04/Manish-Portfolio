import { motion } from 'framer-motion';
import { Smartphone, Code2, Rocket, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
    // const stats = [
    //     { label: 'Internships', value: '2+' },
    //     { label: 'Projects', value: '5+' },
    //     { label: 'MCA CGPA', value: '8.24' },
    // ];

    return (
        <section id="about" className="py-32 relative overflow-hidden border-t border-white/5">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: The Narrative */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary-400 text-xl font-display font-bold tracking-widest uppercase text-sm mb-4 block">
                                My Journey
                            </span>
                            {/* <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-tight">
                                Bridging Design with <span className="text-gradient">Robust Engineering.</span>
                            </h2> */}

                            <div className="space-y-6 text-xl text-slate-400 leading-relaxed min-h-[280px] pb-10">
                                <p>
                                    I am a <span className="text-white font-semibold">Flutter App Developer</span> currently pursuing my MCA. I specialize in building end-to-end digital solutions that don't just work—they provide exceptional user experiences.
                                </p>
                                <p>
                                    With a solid foundation in <span className="text-white font-medium">BCA (CGPA: 7.1)</span> and a high-performance track record in <span className="text-white font-medium">MCA (CGPA: 8.24)</span>, I combine academic excellence with hands-on industry experience. My approach is rooted in clean architecture and scalable backend systems.
                                </p>
                            </div>

                            {/* Stats Row */}
                            {/* <div className="grid grid-cols-3 gap-6 mt-8 pt-10 border-t border-white/5">
                                {stats.map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-3xl font-display font-black text-white mb-1">{stat.value}</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div> */}
                        </motion.div>
                    </div>

                    {/* Right Column: The Visual Profile Card */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card !p-0 overflow-hidden relative group"
                        >
                            {/* Card Header Illustration */}
                            <div className="h-32 bg-gradient-to-br from-primary-600/30 to-indigo-900/30 relative">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <div className="absolute -bottom-10 left-8">
                                    <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-primary-400 border border-white/10 shadow-2xl">
                                        <Code2 size={40} />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-16 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Technical Profile</h3>
                                <p className="text-slate-400 text-sm mb-6">Software Engineering & App Development</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                                        <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase">Current Role</p>
                                            <p className="text-sm text-white font-medium">Full-Stack App Developer</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                            <Zap size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase">Latest Role</p>
                                            <p className="text-sm text-white font-medium">Intern @ Pro HousyPoint Tech Solutions Pvt Ltd</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                            <Smartphone size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase">Core Stack</p>
                                            <p className="text-sm text-white font-medium">Flutter, Django, Firebase,Dart</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://leetcode.com/u/manishydv4/" target="_blank" rel="noopener noreferrer" className="mt-8 w-full btn-secondary py-3 flex items-center justify-center gap-2 group/btn">
                                    Check Leetcode Profile
                                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-full flex items-center justify-center text-primary-400 border border-white/10 hidden xl:flex"
                        >
                            <Rocket size={32} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

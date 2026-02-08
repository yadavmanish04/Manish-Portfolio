import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                {/* Image-inspired Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight uppercase">
                            Get In Touch
                        </h2>
                        {/* Yellow Accent Lines */}
                        <div className="flex flex-col items-center gap-1 mb-8">
                            <div className="w-24 h-0.5 bg-[#FFC107]"></div>
                            <div className="w-16 h-0.5 bg-[#FFC107]"></div>
                        </div>

                        <div className="space-y-4 mb-12">
                            <p className="text-slate-300 text-lg font-medium">
                                Looking to Grow Your Business through App Development?
                            </p>
                            <p className="text-slate-400">
                                Let's Chat for Tips!
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2  items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6"></h3>
                        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-400 border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email Me</p>
                                    <p className="text-white font-semibold">manishyadav11406@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-400 border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Location</p>
                                    <p className="text-white font-semibold text-gradient">Gurugram, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary-500/20 hover:text-white transition-all border border-white/10" title="GitHub">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/manish-yadav-258702263/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary-500/20 hover:text-white transition-all border border-white/10" title="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href="https://leetcode.com/u/manishydv4/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary-500/20 hover:text-white transition-all border border-white/10" title="Leetcode">
                                <Code2 size={22} />
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex flex-col">
                        {/* Text placed above the form container */}
                        <div className="mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Share Your Thoughts? Let's Start!
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                Got an innovative idea for app development, UI/UX design or web app
                                development? Share your thoughts and let's collaborate to turn your vision into reality.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card border border-white/10"
                        >
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 transition-all placeholder:text-slate-600 shadow-inner"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 transition-all placeholder:text-slate-600 shadow-inner"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 transition-all placeholder:text-slate-600 shadow-inner"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1.5 ml-1">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 transition-all resize-none placeholder:text-slate-600 shadow-inner"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button className="btn-primary w-full flex items-center justify-center gap-2 group py-4">
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#020617] pt-20 overflow-hidden">
            {/* Elegant Background Gradients for Dark Mode */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-900/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-900/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                {/* 
                   Side-by-Side Row Layout:
                   - Content: Left (60%)
                   - Image: Right (40%)
                */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left: Content Area (Dark Minimalist) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20 shadow-lg"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">
                                Full-Stack Engineer
                            </span>
                        </motion.div> */}

                        <h1 className="text-3xl md:text-3xl xl:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.1]">
                            <h1 className="text-2xl sm:text-1xl md:text-7xl lg:text-1xl font-black text-white tracking-tight leading-[1.1]">
                                I'm Manish Yadav
                                <span className="text-primary-500"></span>
                            </h1>
                            <h2 className="mt-2 md:mt-3 text-2xl md:text-7xl lg:text-6xl lg:text-4xl font-black text-yellow-500 tracking-tight leading-[1.1]">
                                Flutter App Developer
                                <span className="text-primary-500"></span>
                            </h2>

                        </h1>

                        <p className="text-xl md:text-2x1 text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            I specialize in building high-performance mobile applications using
                            <span className="text-white"> Flutter</span>, with clean architecture, responsive UI, and seamless cross-platform experiences. I transform ideas into reliable, feature-rich products users love.
                        </p>


                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="group px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold tracking-wide transition-all shadow-xl shadow-primary-900/20 w-full sm:w-auto flex items-center justify-center gap-3"
                            >
                                View Projects
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                href="/Manish_Yadav_Resume.pdf"
                                download="Manish_Yadav_Resume.pdf"
                                className="px-8 py-4 border border-white/10 text-white rounded-xl font-bold tracking-wide transition-all w-full sm:w-auto flex items-center justify-center gap-3"
                            >
                                <Download size={18} />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Reverted Profile Image (Smaller & Circular) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Animated Outer Ring */}
                            <div className="absolute -inset-6 rounded-full border border-dashed border-primary-500/20 animate-spin-slow pointer-events-none" />

                            <div className="relative w-90 h-90 md:w-[26rem] md:h-[26rem] xl:w-[32rem] xl:h-[32rem] rounded-full p-2 glass-card shadow-2xl z-10">
                                <div className="w-full h-full rounded-full overflow-hidden border border-white/10 ring-4 ring-primary-500/5">
                                    <img
                                        src="/manish_new.jpg"
                                        alt="Manish Yadav"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Subtle Gradient Blend */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating Identity Badge */}
                            {/* <div className="absolute -bottom-4 -right-4 glass px-5 py-3 rounded-2xl border border-white/10 shadow-2xl z-20">
                                <p className="text-[10px] font-black text-primary-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                <p className="text-xs font-bold text-white tracking-widest">Available</p>
                            </div> */}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Aesthetic Scroll Hint */}
            {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-20">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary-500 to-transparent" />
            </div> */}
        </section>
    );
}
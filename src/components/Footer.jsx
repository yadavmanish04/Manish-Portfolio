import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary-500/10 text-[#888] pt-16 pb-8 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* Get In Touch */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-6 bg-[#FFC107]"></div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase">Get In Touch</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1">Email Address</h4>
                                <p className="text-sm">manishyadav11406@gmail.com</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1">Phone Number</h4>
                                <p className="text-sm">+91 9773719645</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1">Location</h4>
                                <p className="text-sm">Haryana,Gurugram,India</p>
                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-6 bg-[#FFC107]"></div>
                            <h3 className="text-white text-lg font-bold tracking-wider uppercase">About Me</h3>
                        </div>
                        <p className="text-sm leading-loose text-justify">
                            I'm a passionate Flutter Developer specialized in building high-performance mobile applications with Flutter and Django. With expertise in cross-platform development, I create high-quality, user-friendly applications tailored to meet complex needs. Beyond coding, I excel in UI/UX design, specializing in immersive and visually appealing user interfaces that exceed expectations. My focus is always on enhancing user experience and engagement.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs tracking-tight">
                        Flutter App Developer || Dart ||Android,IOS || Theme: Portfolio by Manish
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/manishydv4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/manish-yadav-258702263/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll to top button - matching the yellow style in image */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-10 h-12 bg-[#FFC107] text-black rounded-lg flex flex-col items-center justify-center shadow-2xl z-50 md:absolute md:bottom-2 md:right-6"
            >
                <ChevronUp size={24} strokeWidth={3} className="-mb-1" />
                <ChevronUp size={24} strokeWidth={3} className="-mt-1" />
            </motion.button>
        </footer>
    );
}

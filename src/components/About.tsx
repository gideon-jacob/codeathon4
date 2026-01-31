import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
            {/* Background Texture: Dark Bricks */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')] bg-repeat"></div>
                 {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Left Side: The Yellow Raincoat */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Glowing Red Aura */}
                            <div className="absolute inset-0 bg-red-600/30 blur-[40px] rounded-full animate-pulse group-hover:bg-red-600/50 transition-all duration-500"></div>
                            
                            {/* Raincoat SVG/Image Representation */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-300">
                                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M256 32C190 32 140 80 140 140V220L100 380H160L180 480H332L352 380H412L372 220V140C372 80 322 32 256 32Z" fill="#FACC15" stroke="#713F12" strokeWidth="8"/>
                                    <path d="M256 32V480" stroke="#CA8A04" strokeWidth="4" strokeOpacity="0.5"/>
                                    <path d="M140 140L100 380" stroke="#CA8A04" strokeWidth="4"/>
                                    <path d="M372 140L412 380" stroke="#CA8A04" strokeWidth="4"/>
                                    {/* Hood shadow */}
                                    <path d="M200 80C200 80 230 140 256 140C282 140 312 80 312 80" stroke="#713F12" strokeWidth="4"/>
                                </svg> 
                                {/* Blood splatter overlay */}
                                <div className="absolute top-[60%] right-[20%] w-12 h-12 bg-red-800/80 rounded-full blur-sm opacity-60 mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-7xl font-creepster text-red-600 mb-6 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,1)] text-scratchy"
                        >
                            ABOUT CODEATHON
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-black/60 border border-red-900/30 p-8 rounded-lg backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
                        >
                            {/* Decorative blood drips */}
                            <div className="absolute top-0 right-10 w-4 h-16 bg-red-800/60 rounded-b-full"></div>
                            <div className="absolute top-0 right-16 w-2 h-10 bg-red-800/60 rounded-b-full"></div>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-roboto">
                                <span className="text-red-500 font-bold text-2xl font-nosifer block mb-4">You'll Code Too...</span>
                                Welcome to <span className="text-red-500 font-bold">Codeathon 4.0</span>, a 24-hour intense coding hackathon inspired by the horrors of the "Losers Club". 
                                College students ready to face their fears will gather to collaborate, innovate, and survive the night of coding challenges.
                            </p>
                            <p className="text-gray-400 mt-4">
                                Do you have what it takes to defeat the bugs, conquer the logic errors, and float to the top? Or will you be consumed by the deadline?
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Drain Grate effect */}
             <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 flex justify-center items-end">
                <div className="w-full max-w-4xl h-4 border-t-8 border-gray-800 border-dashed opacity-30"></div>
             </div>
        </section>
    );
};

export default About;

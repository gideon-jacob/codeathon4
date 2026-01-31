import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: '04',
        hours: '23',
        minutes: '15',
        seconds: '38'
    });

    useEffect(() => {
        // Just a static countdown simulation for visual matching, can be made real later
        const timer = setInterval(() => {
            const date = new Date();
            // Mock countdown effect
             setTimeLeft(prev => {
                let s = parseInt(prev.seconds) - 1;
                if(s < 0) s = 59;
                return { ...prev, seconds: s.toString().padStart(2, '0') }
             })
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center">
            
            {/* Dark Atmospheric Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial Gradient for Spotlight Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>
                
                {/* Rain Effect (Simulated with simple overlay or could be advanced CSS) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
                
                 {/* Fog/Mist approx */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            </div>

            {/* Content Container */}
            <div className="z-20 flex flex-col items-center justify-center w-full px-4 pt-20">
                
                {/* Main Title "CODEATHON 4.0" */}
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-creepster text-7xl md:text-9xl text-red-600 tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] relative"
                    style={{ textShadow: '4px 4px 0px #3f0000, 0 0 20px rgba(255, 0, 0, 0.5)' }}
                >
                    CODEATHON 4.0
                </motion.h1>

                {/* Countdown Timer */}
                <div className="mt-12 mb-8 scale-75 md:scale-100">
                    <div className="flex items-center gap-4 md:gap-8 font-mono text-red-500">
                        {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label, idx) => {
                             const val = Object.values(timeLeft)[idx];
                             return (
                                <div key={label} className="flex flex-col items-center">
                                    <div className="relative bg-gray-900/80 border-2 border-gray-700/50 rounded-lg p-4 w-24 h-24 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                                         {/* Glitch/Grunge overlay */}
                                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grunge-wall.png')] opacity-30 mix-blend-overlay"></div>
                                        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900 shadow-red-500/50 drop-shadow-lg font-nosifer">
                                            {val}
                                        </span>
                                    </div>
                                    <span className="mt-2 text-xs md:text-sm text-gray-400 tracking-widest">{label}</span>
                                </div>
                             )
                        })}
                    </div>
                </div>

                {/* Floating Red Balloon */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative my-8"
                >
                    <div className="w-16 h-20 bg-red-600 rounded-[50%] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),0_0_30px_rgba(220,20,60,0.6)] relative z-10 mx-auto">
                        <div className="absolute top-4 right-4 w-4 h-8 bg-white opacity-20 rounded-full blur-[2px]"></div>
                    </div>
                    {/* String */}
                    <div className="h-24 w-0.5 bg-gray-500/60 mx-auto mt-[-5px]"></div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="group relative px-8 py-3 bg-red-900/20 border-2 border-red-800 text-red-500 font-creepster text-2xl tracking-widest hover:bg-red-900/40 hover:text-red-400 transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.3)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Register Now 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    {/* Button Blood Splatter Effect (CSS) */}
                    <div className="absolute inset-0 bg-red-600/10 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
                
                {/* Footer Quote */}
                 <div className="mt-12 text-center">
                    <h3 className="text-3xl font-creepster text-red-700 opacity-80 tracking-widest drop-shadow-md animate-pulse">
                        YOU'LL CODE TOO
                    </h3>
                </div>

                {/* Bottom Card Grid (Visual Polish) */}
                <div className="absolute bottom-[-50px] w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl px-4 opacity-50 pointer-events-none">
                     {['Event Details', 'Challenges', 'Meet the Sponsors'].map((item, i) => (
                         <div key={i} className="border border-red-900/30 bg-black/80 p-4 rounded-t-xl">
                             <h4 className="text-red-500/70 font-bold uppercase text-sm tracking-wider">{item}</h4>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

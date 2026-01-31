import { motion } from 'framer-motion';

const Timeline = () => {
    // IT-themed Timeline Data
    const events = [
        { time: "08:00 AM", title: "CHECK-IN & SETUP", icon: "🎈" },
        { time: "10:00 AM", title: "HACKING BEGINS", icon: "💻" },
        { time: "02:00 AM", title: "MIDNIGHT SURPRISE", icon: "🍕" },
        { time: "05:00 AM", title: "MARKET HOUSE", icon: "☕" },
        { time: "18:00 AM", title: "TRACKING GHOST", icon: "👻" },
        { time: "12:00 AM", title: "HACKING ENDS", icon: "🏁" },
    ];

    return (
        <section id="timeline" className="relative w-full py-20 bg-[#080808] overflow-hidden">
            {/* Background: Sewer Water / Stormy Street */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
                {/* Rain Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full overflow-x-hidden">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-creepster text-center text-red-600 mb-20 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,1)] text-scratchy"
                >
                    EVENT TIMELINE
                </motion.h2>

                {/* Horizontal Stream Container (Desktop) / Vertical (Mobile) */}
                <div className="relative w-full overflow-x-auto pb-20 hide-scrollbar cursor-grab">
                    
                    {/* The Stream Bed */}
                    <div className="absolute top-[60%] left-0 w-[200%] h-16 bg-gradient-to-b from-blue-900/10 to-blue-900/30 blur-md transform -skew-x-12 z-0 pointer-events-none"></div>

                    <div className="flex md:flex-row flex-col gap-12 md:gap-24 min-w-max px-10 items-center justify-center">
                         {events.map((event, index) => (
                             <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative flex flex-col items-center group"
                             >
                                 {/* Floating Red Balloon (Time) */}
                                 <motion.div 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                    className="relative mb-12 z-20 cursor-pointer"
                                 >
                                     <div className="w-24 h-28 bg-gradient-to-br from-red-500 to-red-900 rounded-[50%] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center relative">
                                         <div className="absolute top-4 right-5 w-3 h-8 bg-white opacity-20 rounded-full blur-[2px]"></div>
                                         <div className="text-center transform flex flex-col items-center">
                                             <span className="text-white font-bold text-shadow-sm font-nosifer text-xs">{event.time.split(' ')[0]}</span>
                                             <span className="text-red-200 text-[10px] font-bold">{event.time.split(' ')[1]}</span>
                                         </div>
                                     </div>
                                     {/* String */}
                                     <div className="absolute bottom-[-40px] left-1/2 w-0.5 h-12 bg-white/40 origin-top"></div>
                                 </motion.div>

                                 {/* Paper Boat (Event) */}
                                 <div className="relative z-10 w-40 h-24 transform group-hover:scale-110 transition-transform duration-300">
                                     {/* Simple CSS Paper Boat shape or SVG */}
                                    <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-2xl">
                                        <path d="M10,80 L50,110 L150,110 L190,80 L100,120 Z" fill="#e5e7eb" fillOpacity="0.9" /> {/* Hull */}
                                        <path d="M10,80 L100,10 L190,80" fill="#f3f4f6" /> {/* Main Sail */}
                                        <path d="M100,10 L100,120" stroke="#d1d5db" strokeWidth="1" /> {/* Center line */}
                                        {/* Blood Stain */}
                                        <circle cx="120" cy="90" r="5" fill="#991b1b" className="opacity-70 blur-[1px]" />
                                    </svg>
                                    
                                    {/* Text Label in the water reflection or below */}
                                    <div className="absolute -bottom-8 left-0 w-full text-center">
                                        <h3 className="text-red-500 font-creepster tracking-wider text-xl bg-black/50 px-2 rounded backdrop-blur-sm whitespace-nowrap">
                                            {event.title}
                                        </h3>
                                    </div>
                                 </div>
                                 
                                 {/* Water Ripple Effect */}
                                 <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-32 h-8 bg-blue-500/10 rounded-[100%] blur-md animate-pulse"></div>
                             </motion.div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

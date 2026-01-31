import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Events', href: '#events' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-red-900/30 bg-black/90 backdrop-blur-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <div className="relative">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-600 font-creepster tracking-wider group-hover:text-red-500 transition-colors duration-300">
                            Codeathon 4.0
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full animate-pulse"></div>
                    </div>
                </a>

                {/* Right Side: Badge & Mobile Menu Button */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
                    {/* Themed by Badge */}
                    <div className="hidden md:flex items-center bg-gray-900 border border-red-900/50 rounded-lg px-3 py-1 bg-opacity-80 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">Themed by</p>
                            <p className="text-sm font-bold text-gray-200 leading-tight">The IT Series</p>
                        </div>
                        <div className="ml-2 w-8 h-8 rounded bg-red-900/20 border border-red-800 flex items-center justify-center relative overflow-hidden">
                             {/* Small blood splatter or icon could go here */}
                             <div className="absolute inset-0 bg-red-600 opacity-20 blur-sm rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-900"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-red-900/20 rounded-lg bg-gray-950/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-3 text-red-700/80 hover:text-red-500 md:p-0 transition-colors duration-300 font-creepster text-lg tracking-widest hover:shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

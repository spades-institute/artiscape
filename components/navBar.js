'use state'

import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { CgClose } from 'react-icons/cg';
import { usePathname } from 'next/navigation';


export default function Navigation() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const NavItem = ({ href, label, classPath }) => (
      <Link href={href} onClick={toggleMenu} className={`${classPath} hover:text-gray-600 px-3 py-2 rounded-md text-sm`}>{label}</Link>
    );

    return (
        <nav className="bg-white dark:bg-gradient-to-r from-light-gray to-charcoal-gray shadow-lg sticky top-0 right-0 left-0 z-30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-2xl text-indigo-600 dark:animate-pulse">Siblings Photography</Link>
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex items-center">
                            <NavItem href="/" label="Home" classPath={pathName === "/" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray font-medium"} />
                            <NavItem href="/portfolio" label="Portfolio" classPath={pathName === "/portfolio" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray font-medium"}  />
                            <NavItem href="/services" label="Services" classPath={pathName === "/services" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray font-medium"} />
                            <NavItem href="/about" label="About" classPath={pathName === "/about" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray font-medium"} />
                            <NavItem href="/contact" label="Contact" classPath={pathName === "/contact" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray font-medium"} />
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-light-gray hover:text-gray-600 focus:outline-none outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            {isOpen ? <CgClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden bg-white dark:bg-gradient-to-br from-charcoal-gray to-light-gray">
                    <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                        <NavItem href="/" label="Home" classPath={pathName === "/" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray dark:text-gray-200 font-medium"} />
                        <NavItem href="/portfolio" label="Portfolio" classPath={pathName === "/portfolio" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray dark:text-gray-200 font-medium"} />
                        <NavItem href="/services" label="Services" classPath={pathName === "/services" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray dark:text-gray-200 font-medium"} />
                        <NavItem href="/about" label="About" classPath={pathName === "/about" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray dark:text-gray-200 font-medium"} />
                        <NavItem href="/contact" label="Contact" classPath={pathName === "/contact`" ? "text-primary dark:text-white font-bold" : "text-charcoal-gray dark:text-gray-200 font-medium"} />
                    </div>
                </div>
            )}
        </nav>
    );
};

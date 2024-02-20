'use state'

import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { CgClose } from 'react-icons/cg';

const NavItem = ({ href, label }) => (
  <Link href={href} className="text-charcoal-gray hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">{label}</Link>
);

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 right-0 left-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-bold text-2xl text-indigo-600">Artiscape</Link>
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex items-center">
                            <NavItem href="/" label="Home" />
                            <NavItem href="/portfolio" label="Portfolio" />
                            <NavItem href="/services" label="Services" />
                            <NavItem href="/about" label="About" />
                            <NavItem href="/contact" label="Contact" />
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            {isOpen ? <CgClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden bg-white">
                    <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/portfolio" label="Portfolio" />
                        <NavItem href="/services" label="Services" />
                        <NavItem href="/about" label="About" />
                        <NavItem href="/contact" label="Contact" />
                    </div>
                </div>
            )}
        </nav>
    );
};

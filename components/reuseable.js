'use client'

import React from "react";
import Navigation from "./navBar";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp, FaInstagram, FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useIsVisible } from "./useIsVisible";
import { usePathname } from "next/navigation";

export const featuredWork = [
    {
      id: 1,
      title: 'African Queen 👸',
      imageUrl: '/african_queen.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'PhotoArt',
      imageUrl: '/photography-2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Time Passes Irrevobaly',
      imageUrl: '/time.jpg',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

export function ContactInfo() {
  const ref = React.useRef();
  const isVisible1 = useIsVisible(ref);

    return (
        <section ref={ref} className={`my-12 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Contact Information</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Feel free to get in touch:</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Email: info@siblingsphotographystudio.com</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Phone: +1234567890</p>
            <div className="flex justify-center">
                <SocialMediaLinks />
            </div>
        </section>
    )
}

export function PortfolioImageCard({ item, project }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`bg-white shadow-lg dark:bg-light-gray px-2 pt-2 pb-4 rounded transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <Image width={500} height={500} src={item.url} alt={`${project.title + ' ' + 1} Image`} className="rounded w-auto" />
            <h2 className="font-bold text-gray-700 mt-2">{item.description}</h2>
        </div>
    )
}

export function DarkModeBtn() {
    const [darkMode, setDarkMode] = React.useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      // Save user's preference in local storage or any other method
      // localStorage.setItem('darkMode', !darkMode);
    };
  
    return (
        <div className={darkMode ? 'dark' : ''}>
            {/* Toggle dark mode button */}
            <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-md shadow-md">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
  };

export function ServiceItemCard({ serviceItem }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`max-w-4xl bg-white shadow-md rounded-md p-6 mb-6 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <h3 className="text-lg font-semibold mb-2">{serviceItem.title}</h3>
            <p className="text-gray-600 mb-2">{serviceItem.description}</p>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Price:</span> {serviceItem.price}</p>
            <p className="text-gray-700"><span className="font-semibold">Duration:</span> {serviceItem.duration}</p>
        </div>
    )
}

export function PortfolioItem({ item }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref)

    return (
        <Link ref={ref} href={`/portfolio/${item.title.toLowerCase().split(' ').join('-').toString()}`} className={`group transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition duration-300">
                <Image
                    width={500}
                    height={500}
                    src={item.imageUrl[0].url}
                    alt={`${item.title} Image`}
                    className="object-cover object-center w-full h-72 transform group-hover:scale-105 transition duration-300"
                />
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
            </div>
        </Link>
    )
};

export function SocialMediaLinks() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`flex space-x-4 text-2xl mt-8 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaXTwitter />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaPinterest />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800">
                <FaYoutube />
            </a>
            {/* Add more social media icons as needed */}
        </div>
    )
};

export function CallToActionButton({ title, link }) {

    return (
        <Link href={link} className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg hover:bg-indigo-700">{title}</Link>
    )
};

export function FeaturedWorkCard({ featuredWork }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`max-w-sm rounded overflow-hidden shadow-lg transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <Image width={500} height={500} className="w-full" src={featuredWork.imageUrl} alt={`${featuredWork.title} Image`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{featuredWork.title}</div>
                <p className="text-gray-700 dark:text-gray-500 text-base">{featuredWork.description}</p>
            </div>
        </div>
    )
};

export function BookingBtn() {
    // state for scroll direction
    const [prevScrollPosition,setPrevScrollPosition] = React.useState(0);
    //state for overall navbar visibility on scroll
    const [isNavbarVisible, setNavbarVisible] = React.useState(true);

    //function to handle scroll events
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > prevScrollPosition) {
        // scrolling down, hide the navbar
        setNavbarVisible(false);
        } else {
        //scrolling up, show the NavBar
        setNavbarVisible(true);
        }

        // update the previous scroll position
        setPrevScrollPosition(currentScrollPosition);
    };

    // effect to add and remove event listener for scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPosition]);

    return (
        <div className={`${isNavbarVisible || window.scrollY === 0 ? '-translate-y-0' : 'translate-y-14'} transform transition-transform duration-300 ease-in-out p-2 fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-charcoal-gray dark:to-light-gray shadow-inner z-20 flex items-center justify-center opacity-90"`}>
            <CallToActionButton link={"/booking"} title={"Book Now!"} />
        </div>
    )

}

export default function AppLayout({ children }) {
    const pathName = usePathname();
    const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  
    const handleScroll = () => {
      // Show/hide scroll-to-top button based on scroll position
      setShowScrollToTop(window.scrollY > 100);
    };
  
    const scrollToTop = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    React.useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
            <Navigation />
            {children}
            {showScrollToTop
            ?
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-2 bg-indigo-600 p-2 rounded-full text-light-gray hover:bg-black/50 focus:outline-none z-30"
            >
                <FaArrowUp className="text-lg font-bold" />
            </button>
            :
            null
            }
            <Footer />
            {pathName !== "/booking" && <BookingBtn />}
        </>
    )
};
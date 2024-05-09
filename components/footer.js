import React from "react"
import { useIsVisible } from "./useIsVisible";
import Link from "next/link";


export default function Footer() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <footer ref={ref} className={`bg-charcoal-gray text-white py-8 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <p className="text-lg font-semibold">Artiscape</p>
                        <p className="mt-2 text-sm">A portfolio website for creative professionals</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Contact Us</p>
                        <p className="mt-2 text-sm">info@artiscape.com</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-charcoal-gray pt-6">
                    <p className="text-sm text-white/70">&copy; 2024 Artiscape. All rights reserved.</p>
                </div>
            </div>
            <div className="mb-10 mt-4 flex items-center justify-center text-center"><Link href={"https://www.spadeshub.com/"} className="py-1 px-2 border-y rounded-md border-indigo-600 animate-pulse">Powered By Spades</Link></div>
        </footer>
    )
}  
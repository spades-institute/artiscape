import { FaQuinscape } from "react-icons/fa6";


export default function Loading() {

    return (
        <div className="h-screen w-full bg-gradient-conic from-light-gray to-indigo-600 dark:from-charcoal-gray dark:to-light-gray flex justify-center items-center px-2">
            <div>
                <FaQuinscape className="text-8xl text-primary animate-pulse" />
            </div>
        </div>
    )
}
'use client'

import React from "react";
import { useIsVisible } from "@/components/useIsVisible";
import Image from "next/image";

// Dummy data for the About Page
const aboutData = {
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis diam nec odio ultrices interdum vel sit amet elit. Nulla facilisi. Vivamus at luctus purus. Duis id ex lacinia, volutpat orci vel, egestas magna. Vestibulum et libero sed velit tincidunt rhoncus nec ut libero. Nam sit amet lorem vel nisl feugiat fermentum. Duis rhoncus augue sit amet enim consequat, sit amet aliquam libero pharetra.",
    skills: [
      "Architecture Design",
      "Photography",
      "Makeup Artistry",
      "Graphic Design",
      "Interior Design",
    ],
    awards: [
      "Best Architectural Design - 2020",
      "Photographer of the Year - 2019",
      "Makeup Artist of the Month - May 2021",
    ],
    photoGallery: [
      "/architecture.jpg",
      "/photography-2.jpg",
      "/make-up.jpg",
      "/photography-1.jpg",
    ],
};
  
export default function AboutPage() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <section className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Personal Bio</h1>
                <p className={`text-gray-600 dark:text-gray-400`}>{aboutData.bio}</p>
            </section>
            <section className={"mb-8"}>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills and Expertise</h2>
                <ul className={`list-disc list-inside `}>
                    {aboutData.skills.map((skill, index) => (
                        <li key={index} className={`text-gray-600 dark:text-gray-400`}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Awards and Recognition</h2>
                <ul className={"list-disc list-inside"}>
                    {aboutData.awards.map((award, index) => (
                        <li key={index} className={`text-gray-600 dark:text-gray-400`}>{award}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Photo Gallery</h2>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
                    {aboutData.photoGallery.map((photo, index) => (
                        <Image width={500} height={500} key={index} src={photo} alt={`Photo ${index + 1}`} className={"w-full h-auto rounded-md shadow-md"} />
                    ))}
                </div>
            </section>
        </main>
    );
};
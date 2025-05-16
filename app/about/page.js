
import Image from "next/image";

// Dummy data for the About Page
const aboutData = {
    bio: <div>
            <p>SiblingsPhotography Studios is dedicated to delivering exceptional photography services to individuals, corporate organizations, couples, and families. We believe that powerful imagery has the ability to capture the essence of relationships, preserve cherished moments, and tell beautiful stories. 
            </p>
            <p>Our mission is to create lasting memories through a blend of creativity, authenticity, and joy. We approach every client with warmth and respect, treating them like family, and ensuring their unique stories are beautifully captured and preserved for generations to come.
            </p>
        </div>,
    skills: [
      "Photoshop",
      "Photography",
      "Premium Photo Editing",
      "Photography Art",
      "Artistic Creativity",
    ],
    awards: [
      "Best Artistic Design - 2020",
      "Photographer of the Year - 2019",
    ],
    photoGallery: [
      "/african_queen.jpg",
      "/photography-2.jpg",
      "/time.jpg",
      "/photography-1.jpg",
    ],
};
  
export default function AboutPage() {

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <section className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Personal Bio</h1>
                <p className={"text-gray-600 dark:text-gray-400"}>{aboutData.bio}</p>
            </section>
            <section className={"mb-8"}>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills and Expertise</h2>
                <ul className={`list-disc list-inside `}>
                    {aboutData.skills.map((skill, index) => (
                        <li key={index} className={"text-gray-600 dark:text-gray-400"}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Awards and Recognition</h2>
                <ul className={"list-disc list-inside"}>
                    {aboutData.awards.map((award, index) => (
                        <li key={index} className={"text-gray-600 dark:text-gray-400"}>{award}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Photo Gallery</h2>
                <div className={"grid grid-cols-2 md:grid-cols-4 gap-4"}>
                    {aboutData.photoGallery.map((photo, index) => (
                        <Image width={500} height={500} key={index} src={photo} alt={`Photo ${index + 1}`} className={"w-full h-auto rounded-md shadow-md"} />
                    ))}
                </div>
            </section>
        </main>
    );
};
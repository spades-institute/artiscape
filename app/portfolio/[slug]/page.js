
import React from "react";
import { portfolioItems } from "../page";
import Image from "next/image";

export default function PortfolioDetailPage({ params }) {
    const portfolioItemsData = portfolioItems;
    const search = params.slug;

     // Find the project with the matyching ID
     const project = portfolioItemsData.find((p) => String(p.title.toLowerCase().split(' ').join('-').toString()) === String(search));

     //check if the project is found 
     if (!project) {
         return <div className="flex text-lg ml-2 justify-center items-center">Not found!{router.push('/projects')}</div>
     }

    return (
        <div className="container mx-auto my-12 px-2">
            <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">{project.title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.imageUrl.map((item, index) => (
                    <Image key={index} width={500} height={500} src={item} alt={`${project.title + 1} Image`} className="rounded w-auto bg-white shadow-lg dark:bg-light-gray px-2 pt-2 pb-4" />
                ))}
            </div>
        </div>
    )
}
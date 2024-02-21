'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { portfolioItems } from "../page";
import { PortfolioImageCard } from "@/components/reuseable";
import { CgArrowLeft } from "react-icons/cg";

export default function PortfolioDetailPage({ params }) {
    const router = useRouter();
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
            <p className="text-indigo-600 underline underline-offset-2 flex items-center gap-2 mb-8 cursor-pointer" onClick={() => router.back()}><CgArrowLeft /> Back to portfolio page</p>
            <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">{project.title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.imageUrl.map((item, index) => (
                    <PortfolioImageCard key={index} item={item} project={project} />
                ))}
            </div>
        </div>
    )
}
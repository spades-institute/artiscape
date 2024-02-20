
import React from "react";
import { portfolioItems } from "../page";

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
        <p className="my-20 text-center">project: {project.title}</p>
    )
}
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { projectData } from '../lib/constants';

const Projects = () => {
  const router = useRouter();
    // Function to handle the click (simulating navigation to a dynamic page)
    const handleProjectClick = (projectId: number) => {
        router.push(`/projects/${projectId}`);
    };

    return (
        // Main container (h-screen ensures there is space for the floating div)
        <div className="relative z-0 flex items-center justify-center h-screen bg-accent-orange">
            
            {/* 🌟 Floating Projects Container */}
            <div className="
                absolute
                flex flex-col items-center 
                bg-surface p-12 mt-4 rounded-xl shadow-2xl 
                h-[70vh] w-[85%] overflow-auto scrollbar-hide 
            ">
                <h1 className="text-4xl font-extrabold text-foreground mb-8 font-gorgia">Projects</h1>
                
                {/* 📏 Grid Layout for Projects (6 divs) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
                    {projectData.map((project) => (
                        // 👇 Project Card Div (Clickable)
                        <div 
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            className="
                                h-64 p-6 bg-surface-2 rounded-lg shadow-md 
                                hover:bg-accent-orange hover:shadow-lg 
                                transition duration-300 ease-in-out 
                                cursor-pointer 
                                flex flex-col justify-between
                                border-t-4 border-accent-orange text-accent-orange hover:text-foreground-2
                            "
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-secondary grow">
                                {project.description}
                            </p>
                            <Image src={project.img} alt={project.title} width={250} height={200} className="mt-4 rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
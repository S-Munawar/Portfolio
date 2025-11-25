import React from 'react';
import Image from 'next/image';
import { techIcons, techCategories } from '@/lib/constants';

const TechStack = () => {

    return (
        // Main container
        <div className="relative z-0 flex items-center justify-center min-h-screen bg-accent-orange py-16 sm:py-20 px-2 sm:px-4">
            
            {/* Tech Stack Container */}
            <div className="
                flex flex-col items-center 
                bg-surface p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl 
                h-[70vh] w-[85%] overflow-auto scrollbar-hide 
            ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-6 sm:mb-8 font-gorgia text-center">Tech Stack</h1>
                
                {/* Tech Categories Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    {Object.entries(techCategories).map(([category, technologies]) => (
                        <div key={category} className="bg-surface-2 p-4 sm:p-6 rounded-lg">
                            <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl font-doto text-foreground mb-3 sm:mb-4 border-b-2 border-accent-orange pb-2">
                                {category}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                                {technologies.map((tech) => (
                                    <div 
                                        key={tech}
                                        className="
                                            flex flex-col items-center justify-center p-1.5 sm:p-2 bg-glass text-white rounded-lg
                                            hover:scale-105 transition-transform duration-200
                                            shadow-md hover:shadow-lg aspect-square
                                        "
                                    >
                                        <div className="bg-white p-0.5 rounded-sm mb-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 flex items-center justify-center">
                                            <Image 
                                                src={techIcons[tech]} 
                                                alt={tech} 
                                                width={24} 
                                                height={24} 
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 object-contain" 
                                            />
                                        </div>
                                        <span className="text-xs font-normal text-center leading-tight">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechStack;
import React from 'react'
import Image from 'next/image';
import { projectData, techIcons } from '@/lib/constants'; 
import Link from 'next/link';

const page = async ({params}: {params: Promise<{projectId: string}>}) => {
    const {projectId} = await params;
    const project = projectData.find(p => p.id === parseInt(projectId));
    return (
        // Main container
        <div className="min-h-screen bg-accent-yellow py-20 px-4">
            
            {/* Project Detail Container */}
            <div className="max-w-6xl mx-auto my-6 rounded-xl overflow-hidden">
                
                {/* Header Section */}
                <div className="text-center p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl  rounded-xl">
                    <h1 className="text-4xl font-extrabold text-foreground-3 font-gorgia mb-4">{project?.title}</h1>
                </div>

                <div className="p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl rounded-xl">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Left Column - Project Info */}
                    <div className="space-y-6">
                        
                        {/* Project Details */}
                        <div className="bg-surface-2 p-6 rounded-lg">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h3 className="font-extrabold text-2xl font-doto text-foreground mb-2">Year</h3>
                                    <p className="text-secondary">{project?.year}</p>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-2xl font-doto text-foreground mb-2">Scope</h3>
                                    <p className="text-secondary">{project?.scope}</p>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="font-extrabold text-2xl font-doto text-foreground mb-2">My Role</h3>
                                    <p className="text-secondary">{project?.team}</p>
                                </div>
                            </div>

                            {/* Technologies Used */}
                            <div className="mb-6">
                                <h3 className="font-extrabold text-2xl font-doto text-foreground mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project?.tech?.map((technology, index) => (
                                        <span key={index} className="bg-accent-orange text-foreground-2 px-2 py-1 rounded-full text-sm flex items-center gap-2">
                                            {techIcons[technology] ? (
                                                <span className="w-8 h-8 flex items-center justify-center bg-foreground-3 rounded-l-full rounded-tr-full z-10">
                                                    <Image 
                                                    src={techIcons[technology]} 
                                                    alt={technology} 
                                                    width={16} 
                                                    height={16} 
                                                    className='w-6 h-6 rounded-full'
                                                    
                                                /></span>
                                            ) : (
                                                <span className="w-8 h-8 flex items-center justify-center bg-foreground-3 rounded-l-full rounded-tr-full z-10">⚡</span>
                                            )}
                                            <span>{technology}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-4">
                                <Link href={project?.link || '#'} target="_blank" className="bg-accent-blue text-foreground-3 px-4 py-2 rounded hover:opacity-90 transition-opacity">
                                    View Project
                                </Link>
                                <Link href={project?.code || '#'} target="_blank" className="bg-accent-red text-foreground-3 px-4 py-2 rounded hover:opacity-90 transition-opacity">
                                    Source Code
                                </Link>
                            </div>
                        </div>

                        
                        
                    </div>

                    {/* Right Column - Image & Features */}
                    <div className="space-y-6">

                        {/* Project Image */}
                        <div className="bg-surface-2 p-6 rounded-lg">
                            <Image 
                                src={project?.img || '/placeholder.png'} 
                                alt={project?.title || 'Project'} 
                                width={500} 
                                height={300} 
                                className="w-full h-64 object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                </div>

                {/* About Project */}
                <div className="bg-surface-2 my-8 p-6 rounded-lg">
                    <h3 className="font-extrabold font-doto text-foreground mb-4 text-2xl">About Project</h3>
                    <p className="text-secondary leading-relaxed">
                        {project?.brief}
                    </p>
                </div>
                        
                {/* Project Features */}
                <div className="bg-surface-2 my-8 p-6 rounded-lg">
                    <h3 className="font-extrabold text-foreground mb-4 text-2xl font-doto">Key Features</h3>
                    <ul className="space-y-2 text-secondary">
                        {project?.features && Object.entries(project.features).map(([key, feature]) => (
                            <li key={key}>• {feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Conclusion Section */}
                <div className="bg-surface-2 my-8 p-6 rounded-lg">
                    <h3 className="font-extrabold text-2xl font-doto text-foreground mb-4">Conclusion</h3>
                    <p className="text-secondary leading-relaxed">
                        {project?.conclusion}
                    </p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default page

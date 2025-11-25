import React from 'react'
import Image from 'next/image'
import { techIcons } from '@/lib/constants'

const About = () => {
  return (
    // Main container
    <div className="min-h-screen bg-accent-yellow py-20 px-4">
      
      {/* About Detail Container */}
      <div className="max-w-6xl mx-auto my-6 rounded-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl rounded-xl">
          <h1 className="text-4xl font-extrabold text-foreground-3 font-gorgia">About Me</h1>
        </div>

        <div className="p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl rounded-xl">
          {/* Single Column Layout */}
          <div className="space-y-8">
            
            {/* Introduction */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-4">Hello! I'm Shaik Munawar, a passionate developer.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-accent-blue text-foreground-3 p-4 rounded-sm">
                  <h3 className="font-bold text-lg">Age</h3>
                  <p className="text-sm">20 Years</p>
                </div>
                <div className="bg-accent-blue text-foreground-3 p-4 rounded-sm">
                  <h3 className="font-bold text-lg">Experience</h3>
                  <p className="text-sm">Student</p>
                </div>
                <div className="bg-accent-blue text-foreground-3 p-4 rounded-sm">
                  <h3 className="font-bold text-lg">Career Status</h3>
                  <p className="text-sm">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-4">About Me</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  I'm a passionate full-stack developer specializing in the MERN stack with a strong foundation in modern web technologies. 
                  I enjoy creating efficient, scalable solutions and have experience working with various frameworks and tools.
                </p>
                <p>
                  My journey in software development started with a curiosity about how things work behind the scenes. 
                  This led me to explore various programming languages and frameworks, ultimately finding my passion in full-stack development.
                </p>
                <p>
                  I'm always eager to learn new technologies and take on challenging projects that push my skills to the next level. 
                  When I'm not coding, I enjoy solving algorithmic problems and contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-6">Skills</h2>
              
              {/* Technical Skills */}
              <div className="mb-8">
                <h3 className="font-bold text-xl text-foreground mb-4">Technical Skills</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Programming Languages</h4>
                    <div className="border-l-4 border-accent-orange pl-4 flex flex-wrap gap-3">
                      {['JavaScript', 'TypeScript', 'Python', 'Java'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2 bg-accent-orange text-foreground-2 px-3 py-2 rounded-sm text-sm">
                          <div className="bg-foreground-3 p-1 rounded-sm">
                            <Image src={techIcons[skill]} alt={skill} width={16} height={16} className="w-4 h-4" />
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Frameworks & Libraries</h4>
                    <div className="border-l-4 border-accent-orange pl-4 flex flex-wrap gap-3">
                      {['React', 'Next.js', 'Node.js', 'Express', 'Flask'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2 bg-accent-orange text-foreground-2 px-3 py-2 rounded-sm text-sm">
                          <div className="bg-foreground-3 p-1 rounded-sm">
                            <Image src={techIcons[skill]} alt={skill} width={16} height={16} className="w-4 h-4" />
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tools & Platforms</h4>
                    <div className="border-l-4 border-accent-orange pl-4 flex flex-wrap gap-3">
                      {['MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2 bg-accent-orange text-foreground-2 px-3 py-2 rounded-sm text-sm">
                          <div className="bg-foreground-3 p-1 rounded-sm">
                            <Image src={techIcons[skill]} alt={skill} width={16} height={16} className="w-4 h-4" />
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h3 className="font-bold text-xl text-foreground mb-4">Other Skills</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                    <div className="border-l-4 border-accent-orange pl-4 flex flex-wrap gap-3">
                      {['English', 'Hindi'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2 bg-accent-orange text-foreground-2 px-3 py-2 rounded-sm text-sm">
                          <div className="bg-foreground-3 p-1 rounded-sm w-6 h-6 flex items-center justify-center text-xs font-bold">
                            {skill.charAt(0)}
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Other</h4>
                    <div className="border-l-4 border-accent-orange pl-4 flex flex-wrap gap-3">
                      {['Problem Solving', 'Team Collaboration', 'Project Management', 'UI/UX Design'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2 bg-accent-orange text-foreground-2 px-3 py-2 rounded-sm text-sm">
                          <div className="bg-foreground-3 p-1 rounded-sm w-6 h-6 flex items-center justify-center text-xs font-bold">
                            {skill.charAt(0)}
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-6">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-accent-blue text-white rounded-lg">
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-accent-blue font-bold text-lg">AWS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">AWS Cloud Practitioner</h4>
                    <p className="text-sm opacity-90">Amazon Web Services</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent-blue text-white rounded-lg">
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-accent-blue font-bold text-lg">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">JavaScript Algorithms</h4>
                    <p className="text-sm opacity-90">FreeCodeCamp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent-blue text-white rounded-lg">
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-accent-blue font-bold text-lg">PY</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Python Programming</h4>
                    <p className="text-sm opacity-90">Coursera</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent-blue text-white rounded-lg">
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-accent-blue font-bold text-lg">ML</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-sm opacity-90">Stanford Online</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Education & Experience */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-6">Education & Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-4">Education</h3>
                  <div className="relative">
                    <div className="absolute left-1.5 top-5 bottom-0 w-1 bg-accent-orange"></div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-full mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">B.Tech in Artificial Intelligence and Data Science</h4>
                          <p className="text-secondary">Muffakham Jah College of Engineering and Technology • 2023 – Present</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-full mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Diploma in Computer Science</h4>
                          <p className="text-secondary">Mahaveer Institute of Science and Technology • 2020 – 2023</p>
                          <p className="text-secondary text-sm">CGPA: 9.03</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-full mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">10th Board</h4>
                          <p className="text-secondary">Gowtham Model School • 2019 – 2020</p>
                          <p className="text-secondary text-sm">CGPA: 10.0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-4">Experience</h3>
                  <div className="relative">
                    <div className="absolute left-1.5 top-5 bottom-0 w-1 bg-accent-orange"></div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-sm mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Vice Tech Captain — ACM MJCET</h4>
                          <p className="text-secondary">2025 – Present</p>
                          <div className="text-secondary text-sm space-y-1 mt-2">
                            <p>• Leading a 20+ member team and executed tech events like Hello World 4.0 so far.</p>
                            <p>• Planning high-impact technical events.</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-sm mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Tech Lead — ACM MJCET</h4>
                          <p className="text-secondary">2024 – 2025</p>
                          <div className="text-secondary text-sm space-y-1 mt-2">
                            <p>• Led a 5+ member tech team and conducted workshops like AI Unlocked and Hello World.</p>
                            <p>• Organized high-impact technical events and contributed to growing ACM's tech ecosystem.</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-4 h-4 bg-accent-orange rounded-sm mt-1 flex-shrink-0 relative z-10"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Industrial Training — Pixel</h4>
                          <p className="text-secondary">July 2022 – Dec 2022</p>
                          <div className="text-secondary text-sm space-y-1 mt-2">
                            <p>• Completed 6-month training in core CS fundamentals and frontend development.</p>
                            <p>• Built a cloud-based kitchen management system.</p>
                            <p>• Hands-on experience with version control and deployment workflows.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About

'use client'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from '@/components/Home';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {

  
  const containerRef = useRef<HTMLDivElement>(null);
  const totalScrollDistance = 3000; // Adjust this value based on your content height

  const homeRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);

  useGSAP(() => {

    const viewportHeight = window.innerHeight
    // const isMobile = window.innerWidth < 768
    // const slideDirection = isMobile ? viewportHeight : -viewportHeight
    
    // Master timeline
    const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${totalScrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
    })
    masterTl.addLabel('homeEnd')    
    .to(homeRef.current, {y: viewportHeight + 100}, 'homeEnd+=0.2')

    .fromTo(projectRef.current, {y: viewportHeight + 100}, {y: 0}, 'homeEnd+=0.2')
    .addLabel('projectEnd')
    .to(projectRef.current, {y: viewportHeight + 100}, 'projectEnd+=0.2)')

    .fromTo(techRef.current, {y: viewportHeight + 100}, {y: 0}, 'projectEnd+=0.2')
    .addLabel('techEnd')
  }, [])



  return (
    <>
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden text-foreground">

    {/* Home */}
    <section ref={homeRef} className="absolute z-10 inset-0 w-full h-screen overflow-hidden">
      <Home />
    </section>
    

    {/* Projects */}
    <section ref={projectRef} className="absolute z-20 inset-0 w-full h-screen overflow-hidden">
      <Projects />
    </section>

    {/* Tech Stack */}
    <section ref={techRef} className="absolute z-30 inset-0 w-full h-screen overflow-hidden">
      <TechStack />
    </section>
    </div>
    </>
  );
}
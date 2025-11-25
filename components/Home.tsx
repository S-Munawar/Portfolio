import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LeetCodeStats, GitHubStats } from '../lib/types';


const Home = () => {
  // 2. Initialize the state with the defined type, allowing it to be null initially.
  const [leetCodeStats, setLeetCodeStats] = useState<LeetCodeStats | null>(null);
  const [gitHubStats, setGitHubStats] = useState<GitHubStats | null>(null);
  const summaryText = "I'm Shaik Munawar, a passionate full stack developer in MERN stack. I craft engaging web experiences and solve complex problems with efficient code, using the latest technologies to deliver high-quality solutions.";

  async function getLeetCodeStats(): Promise<LeetCodeStats> {
    const leetCodeRes = await fetch(`/api/leetcode?username=Shaik_Munawar`);
    if (!leetCodeRes.ok) throw new Error('Failed to fetch LeetCode stats');
    return leetCodeRes.json();
  }

  async function getGitHubStats(): Promise<GitHubStats> {
    const gitHubRes = await fetch(`/api/github?username=S-Munawar`);
    if (!gitHubRes.ok) throw new Error('Failed to fetch GitHub stats');
    return gitHubRes.json();
  }

  useEffect(() => {
    getLeetCodeStats().then(setLeetCodeStats).catch(console.error);
    getGitHubStats().then(setGitHubStats).catch(console.error);
  }, []);

  return (
    // Main container
    <div className="relative z-0 flex items-center justify-center min-h-screen bg-background p-2 sm:p-4 pt-20 text-foreground">
      
      {/* 🚀 Floating Profile/Summary Div (Standardized Size) */}
      <div className="
          flex flex-col items-center justify-around
          bg-surface p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl 
          h-[70vh] w-[85%]
      ">

        <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 lg:gap-8'>
          
          {/* 🖼️ Rounded Image (Left) with Light Effect */}
          <div className="flex-shrink-0 lg:mr-8 xl:mr-10">
              <Image 
                  src="/assets/Munawar.jpg"
                  alt="Profile Image"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-accent-blue glow-blue"
                  width={192}
                  height={192}
              />
          </div>

          {/* 📝 Portfolio Summary Text (Right) */}
          <div className="flex-1 text-center lg:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
                  {summaryText}
              </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className='
            grid grid-cols-3 place-items-center
            gap-4 sm:gap-6 md:gap-8
            font-extrabold font-doto text-sm sm:text-base md:text-lg 
            w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20
        '>
          {/* 1. Leetcode */}
          <a href="https://leetcode.com/Shaik_Munawar/" target="_blank" rel="noopener noreferrer">
            <div className='flex flex-col items-center justify-center rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-surface-2 cursor-pointer transition-colors border-2 border-accent-glyp/30 glow-glyp text-secondary hover:scale-105 transition-transform'>
                <span className="text-xs sm:text-sm md:text-base">LeetCode</span>
                <span className="text-xs sm:text-sm">{leetCodeStats ? `${leetCodeStats.total}` : ''}</span>
            </div>
          </a>
          {/* 2. GitHub */}
          <a href="https://github.com/S-Munawar" target="_blank" rel="noopener noreferrer">
            <div className='flex flex-col items-center justify-center rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-surface-2 cursor-pointer transition-colors border-2 border-accent-glyp/30 glow-glyp text-secondary hover:scale-105 transition-transform'>
                <span className="text-xs sm:text-sm md:text-base">GitHub</span>
                <span className="text-xs sm:text-sm">{gitHubStats ? `${gitHubStats.totalContributions}` : ''}</span>
            </div>
          </a>
          {/* 3. Hackathon */}
          <a href="https://www.linkedin.com/in/shaik-abdul-munawar-b35821284" target="_blank" rel="noopener noreferrer">  
          <div className='flex flex-col items-center justify-center rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-surface-2 cursor-pointer transition-colors border-2 border-accent-glyp/30 glow-glyp text-secondary hover:scale-105 transition-transform'>
              <span className="text-xs sm:text-sm md:text-base">Hackathon</span>
              <span className="text-xs sm:text-sm">3 +</span>
          </div>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;
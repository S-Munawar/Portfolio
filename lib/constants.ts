export const projectData = [
  {
    id: 1,
    title: 'PetCare',
    description: 'Pet Health Management.',
    img: '/assets/petcare.png',
    year: '2024',
    scope: 'Full Stack',
    team: 'Solo Developer & Project Owner',
    link: 'https://pet-care-azrv.onrender.com',
    code: 'https://github.com/S-Munawar/Pet-Care',
    tech: ['Flask', 'Python', 'NumPy', 'Scikit-learn', 'JavaScript', 'MongoDB', 'Docker', 'AWS'],
    brief: 'A comprehensive web platform designed to help pet owners monitor and manage their pets\' health, leveraging machine learning to predict potential health issues based on input symptoms and behavioral data.',
    features: {
      '1': 'Symptom-based Disease Prediction using Scikit-learn.',
      '2': 'Personalized Health Records and Vaccination Tracking.',
      '3': 'Interactive UI for inputting daily health metrics.',
      '4': 'Dockerized environment for easy deployment.',
    },
    conclusion: 'PetCare successfully demonstrates the integration of a Python-based ML backend with a dynamic frontend, offering a practical, data-driven solution to proactive pet health.',
  },
  {
    id: 2,
    title: 'QuickGPT',
    description: 'AI-powered chatbot.',
    img: '/assets/quickgpt.png',
    year: '2025',
    scope: 'Full Stack',
    team: 'Solo Developer & Project Owner',
    link: 'https://quick-gpt-1-six.vercel.app',
    code: 'https://github.com/S-Munawar/QuickGPT',
    tech: ['Express', 'React', 'TypeScript', 'Tailwind', 'MongoDB', 'NextAuth.js', 'ImageKit API', 'OpenAI API', 'Vercel'],
    brief: 'A modern, secure, and responsive AI chatbot application built on the Next.js framework, providing real-time interactions powered by the OpenAI API.',
    features: {
      '1': 'Secure user authentication and authorization via NextAuth.js.',
      '2': 'Conversation history persistence using PostgreSQL and Prisma.',
      '3': 'Streaming response integration for fast user experience.',
      '4': 'Sleek, responsive design built with Tailwind CSS.',
    },
    conclusion: 'QuickGPT showcases proficiency in the entire Next.js ecosystem, demonstrating skill in state management, database integration, and third-party API consumption (OpenAI).',
  },
  {
    id: 3,
    title: 'Stock Market',
    description: 'Stock trading platform.',
    img: '/assets/stockmarket.png',
    year: '2025',
    scope: 'Full Stack',
    team: 'Solo Developer & Project Owner',
    link: 'https://stock-market-gules.vercel.app',
    code: 'https://github.com/S-Munawar/Signalist',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'NextAuth.js', 'Vercel'],
    brief: 'A simulated stock trading platform designed to track real-time stock data and manage virtual portfolios, emphasizing clean architecture and secure data handling.',
    features: {
      '1': 'Real-time stock price fetching and charting (using a financial API).',
      '2': 'Virtual portfolio creation and transaction logging.',
      '3': 'User dashboard displaying P&L (Profit and Loss) metrics.',
      '4': 'Protected routes and secure data storage with PostgreSQL.',
    },
    conclusion: 'This project highlights expertise in financial data handling, complex state management, and building robust, user-centric dashboards within a full-stack environment.',
  },
  {
    id: 4,
    title: 'Resume Analyzer',
    description: 'Resume analysis tool.',
    img: '/assets/resumeanalyzer.png',
    year: '2025',
    scope: 'Frontend',
    team: 'Solo Developer & Project Owner',
    link: 'https://resume-analyzer-six-nu.vercel.app',
    code: 'https://github.com/S-Munawar/Resume-Analyzer',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    brief: 'A client-side tool built to analyze resume structure and content against best practices, providing immediate feedback on formatting, keyword density, and overall readability.',
    features: {
      '1': 'File upload and parsing capability (e.g., PDF/DOCX to text).',
      '2': 'Score-based feedback system for resume sections.',
      '3': 'Highlighting of common formatting errors.',
      '4': 'Fully responsive, modern user interface.',
    },
    conclusion: 'The Resume Analyzer demonstrates strong proficiency in modern frontend development, UI/UX design, and complex client-side file manipulation and data processing.',
  },
];

// Tech icon mapping with Devicon CDN URLs
export const techIcons: { [key: string]: string } = {
  // 💻 Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  
  // ⚛️ Frontend Frameworks/Libraries
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Sass/SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  
  // ⚙️ Backend Frameworks
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  
  // 🍃 Databases
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'Firebase/Firestore': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  
  // ☁️ DevOps & Cloud
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
  'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  
  // 🧠 Data Science / ML
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  
  // 🛠️ Tools & Libraries
  'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  'NextAuth.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', // No specific NextAuth icon, using Next.js
  'OpenAI API': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg',
  'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  'Cypress': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
};

// Tech categories for TechStack component
export  const techCategories = {
        'Frontend': ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind'],
        'Backend': ['Node.js', 'Express', 'Flask'],
        'Database': ['MongoDB', 'PostgreSQL', 'MySQL'],
        'DevOps': ['Docker', 'AWS', 'Git', 'Vercel'],
        'Languages': ['Python', 'Java'],
        // 'Machine Learning': ['NumPy', 'Scikit-learn', 'Pandas', 'TensorFlow'],
        // 'Tools': ['Prisma', 'Jest', 'Cypress']
    };

export const languages: string[] = [
  'English',
  'Hindi',
];

export const otherSkills: string[] = [
  'Problem Solving',
  'Team Collaboration',
  'Project Management',
];

// Social media and developer profile icon mapping
export const socialIcons: { [key: string]: string } = {
  // 💼 Developer Profiles
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'LinkedIn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
  'LeetCode': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg',
  'StackOverflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stackoverflow/stackoverflow-original.svg',
  
  // 🐦 General Social Media (Optional)
  'Twitter/X': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg',
  'Medium': 'https://cdn.simpleicons.org/medium/000000',
  'Dev.to': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devto/devto-original.svg',
  'YouTube': 'https://cdn.simpleicons.org/youtube/FF0000',
  'Instagram': 'https://cdn.simpleicons.org/instagram/E4405F',
  
  // 📧 Contact
  'Email': 'https://cdn.simpleicons.org/gmail/EA4335',
  'Phone': 'https://cdn.simpleicons.org/phone/000000',
};
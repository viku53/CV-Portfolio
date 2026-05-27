export const awards = [
  {
    title: 'On the Spot Award',
    org: 'Tata Consultancy Services',
    date: 'October 2025',
    desc: 'Awarded for outstanding contribution to a high-impact project.',
    icon: '🎉',
  },
  {
    title: 'Pat on the Back Award',
    org: 'Adapty Solutions',
    date: 'September 2022',
    desc: 'Recognized for exceptional performance and client delivery.',
    icon: '🏅',
  },
  {
    title: 'Pat on the Back Award',
    org: 'Adapty Solutions',
    date: 'April 2022',
    desc: 'Recognized for going beyond expectations on a critical project.',
    icon: '🏅',
  },
  {
    title: 'Rising Star Award',
    org: 'Adapty Solutions',
    date: 'March 2020',
    desc: 'Awarded to top-performing new team members demonstrating exceptional growth.',
    icon: '⭐',
  },
  {
    title: 'Winner — Web Domination',
    org: 'PVPPCOE',
    date: 'March 2018',
    desc: 'Won the inter-college web development competition.',
    icon: '🏆',
  },
  {
    title: 'Gold Badge — Java',
    org: 'HackerRank',
    date: 'Ongoing',
    desc: 'Achieved Gold level badge in Java programming on HackerRank.',
    icon: '🥇',
  },
];

export const projects = [
  {
    id: '01',
    title: 'Photographer Portfolio',
    category: 'Frontend / Design',
    description: 'A sleek, responsive portfolio website for a photographer. Showcases high-quality images with smooth animations and a minimalist design. Built with React and styled-components for a modern look.',
    tech: ['React', 'Next.js', 'Styled-Components', 'Framer Motion'],
    liveUrl: 'https://krishnacreationphotography.com/',
    githubUrl: '',
    status: 'Live',
    highlight: true
  },
  {
    id: '02',
    title: 'Sliding Puzzle Game',
    category: 'Frontend / Game Dev',
    description: 'An addictive, browser-based sliding puzzle game built with vanilla JavaScript. Features smooth tile animations, move counter, timer, and multiple difficulty levels. Fully responsive across all devices.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    liveUrl: 'https://viku53.github.io/puzzle_game/',
    githubUrl: 'https://github.com/viku53/puzzle_game',
    status: 'Live',
    highlight: false,
  },
  {
    id: '03',
    title: 'Stopwatch App',
    category: 'Frontend / Utility',
    description: 'A precision stopwatch with lap tracking, reset functionality, and a clean UI. Built for speed and reliability using vanilla JavaScript with zero dependencies. Pixel-perfect on all screen sizes.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://viku53.github.io/stopWatch/',
    githubUrl: 'https://github.com/viku53/stopWatch',
    status: 'Live',
    highlight: false,
  },
];

export const experiences = [
  {
    id: '01',
    role: 'Lead Developer',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    period: 'April 2024 — Present',
    type: 'Full-time',
    tags: ['SFCC', 'PWA Kit', 'ReactJS', 'Accessibility'],
    highlights: [
      'Leading SFCC PWA frontend architecture for JLR (Jaguar Land Rover) US — a globally iconic automotive brand',
      'Designed and implemented scalable React component architecture using custom hooks and context patterns',
      'Led accessibility remediation achieving full WCAG 2.1 AA compliance for US market standards',
      'Drove code quality initiatives — linting standards, PR reviews, performance optimization, and tech debt reduction',
      'Mentored junior developers and established front-end best practices across the team',
    ],
    projects: null,
  },
  {
    id: '02',
    role: 'Technical Lead',
    company: 'Adapty Solutions Pvt Ltd',
    location: 'Mumbai, India',
    period: 'January 2020 — April 2024',
    type: 'Full-time',
    tags: ['SFCC', 'SFRA', 'GTM', 'Fabric API', 'PayPal', 'Loqate', 'SEO'],
    highlights: [
      'Served as Technical Lead across 4 enterprise SFCC storefronts: GNC, Pet SuperMarket, The Watchbox & AERIN',
      'Owned end-to-end delivery — architecture, solutioning, task estimation, development, and mentoring',
      'Consistently delivered on high-priority tickets, complex integrations, and performance improvements',
    ],
    projects: [
      {
        name: 'GNC (US & CA)',
        period: 'June 2022 – April 2024',
        tech: 'SFCC – Controller Version',
        points: [
          'Extensive experience in optimizing websites for Search Engine Optimization (SEO)',
          'Successfully improved website performance by optimizing Core Web Vitals (LCP, FID, CLS)',
          'Proficient in analytics tools for comprehensive data analysis',
          'Successfully integrated Google Tag Manager (GTM) for efficient data management',
          'Expertise in seamlessly integrating the Fabric Customer API within the SFCC platform',
          'Played a crucial role in redesigning key pages: Account Page, Rewards Page, and OG SMI Page',
          'Demonstrated expertise in Page Designer tasks, enhancing visual and functional aspects of web pages',
        ],
      },
      {
        name: 'Pet SuperMarket (US)',
        period: 'September 2022 – January 2023',
        tech: 'SFCC – SFRA 6',
        points: [
          'Effectively addressed high-priority issues within the Salesforce Commerce Cloud checkout system',
          'Successfully implemented Multi-Fulfillment features: Direct-to-Customer (DTC), BOPIS, and Same Day Delivery (SDD)',
          'Seamlessly integrated payment methods: PayPal, Apple Pay, and CyberSource for enhanced checkout',
          'Contributed a comprehensive approach to optimizing the full e-commerce checkout process',
          'Worked primarily on high-priority tickets and groomed junior developers on the checkout flow',
        ],
      },
      {
        name: 'The Watchbox (US)',
        period: 'April 2021 – July 2021',
        tech: 'SFCC – SFRA 5',
        points: [
          'Led implementation of a new front-end skin / visual redesign for the storefront',
          'Responsible for task estimation, solution design, and full development delivery',
          'Implemented custom strap selection feature on the Product Detail Page (PDP), enhancing UX and functionality',
        ],
      },
      {
        name: 'AERIN (US)',
        period: 'January 2020 – July 2022',
        tech: 'SFCC – SFRA 4, 5, 6',
        points: [
          'Worked as Technical Lead for this SFRA project from day one',
          'Responsible for maintaining client Campaigns, Promotions, data and code replication',
          'Executed SFRA cartridge upgrade from version 4.x to 6.x with zero downtime',
          'Responsible for task estimation, solutioning, and full-stack development',
          'Worked on Content Assets, Content Slots, Promotion Banners, Bug Fixes, and Page Designer Components',
          'Successfully integrated Loqate for Address Verification on checkout, Create Account, Billing and Shipping pages',
        ],
      },
    ],
  },
];

export const techStack = [
  { category: 'E-Commerce', items: ['SFCC / B2C Commerce', 'PWA Kit', 'SFRA', 'Magento 2'] },
  { category: 'Frontend', items: ['ReactJS', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Webpack', 'GulpJS'] },
  { category: 'Backend', items: ['Node.js', 'Java', 'PHP', 'Python'] },
  { category: 'Tools & Infra', items: ['Git', 'GTM', 'Jira', 'Copado', 'Postman'] },
];

export const skillGroups = [
  {
    category: 'E-Commerce Platforms',
    icon: '🛒',
    skills: [
      { name: 'Salesforce B2C Commerce (SFCC)', level: 95 },
      { name: 'PWA Kit / React Storefront', level: 92 },
      { name: 'SFRA (Storefront Reference Architecture)', level: 90 },
      { name: 'Magento 2', level: 78 },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '⚡',
    skills: [
      { name: 'ReactJS / Hooks / Custom Hooks', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3 / Responsive Design', level: 95 },
      { name: 'Webpack / GulpJS', level: 82 },
    ],
  },
  {
    category: 'Backend & Languages',
    icon: '🔧',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 72 },
      { name: 'Python', level: 65 },
    ],
  },
  {
    category: 'Tools & Integrations',
    icon: '🛠',
    skills: [
      { name: 'Google Tag Manager (GTM)', level: 85 },
      { name: 'Fabric Customer API', level: 80 },
      { name: 'Core Web Vitals Optimization', level: 90 },
      { name: 'BOPIS / SDD Fulfillment', level: 85 },
    ],
  },
];

export const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Awards', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];
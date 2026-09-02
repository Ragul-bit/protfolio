import { SkillCategory, InterestItem, Project, TimelineItem, Certification } from '../types';

export const personalInfo = {
  name: 'Ragul Gandhi B',
  role: 'Web developer · cybersecurity learner · vibe coder',
  titleKicker: "Hello, I’m Ragul Gandhi B",
  headline: 'Making technology',
  headlineAccent: 'feel simple.',
  intro: 'I’m a Computer Science student who designs clear interfaces, builds practical web experiences, and explores the systems behind them.',
  location: 'Coimbatore, India',
  status: 'Open to internships & freelance',
  email: 'ragul2005badge@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ragul-gandhi-21b4a308',
  linkedinHandle: 'ragul-gandhi-21b4a308',
  github: 'https://github.com/Ragul-bit',
  githubHandle: 'Ragul-bit',
};

export const interestsData: InterestItem[] = [
  {
    id: 'cybersecurity',
    iconName: 'ShieldCheck',
    title: 'Cybersecurity',
    description: 'Learning to spot weak points and strengthen digital systems.'
  },
  {
    id: 'vibecoding',
    iconName: 'Sparkles',
    title: 'Vibe coding',
    description: 'Exploring ideas quickly while keeping the experience thoughtful.'
  },
  {
    id: 'networking',
    iconName: 'Network',
    title: 'Networking',
    description: 'Understanding how devices, services, and people connect.'
  },
  {
    id: 'webdev',
    iconName: 'Globe',
    title: 'Web development',
    description: 'Crafting responsive, useful experiences for the web.'
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    iconName: 'Code2',
    title: 'Programming',
    description: 'Clear logic for dependable applications.',
    chips: ['JavaScript', 'Python', 'C++']
  },
  {
    id: 'web-development',
    iconName: 'Layout',
    title: 'Web development',
    description: 'Responsive interfaces across every screen.',
    chips: ['HTML', 'CSS', 'Node.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'databases',
    iconName: 'Database',
    title: 'Database systems',
    description: 'Structured data behind useful experiences.',
    chips: ['SQL', 'MySQL', 'NoSQL', 'MongoDB']
  },
  {
    id: 'cybersecurity',
    iconName: 'ShieldCheck',
    title: 'Cybersecurity',
    description: 'Building a defensive view of digital systems.',
    chips: ['Web security', 'Vulnerability assessment', 'Network Security']
  },
  {
    id: 'containers-cloud',
    iconName: 'Layers',
    title: 'Containers & cloud',
    description: 'Learning modern ways to ship reliable software.',
    chips: ['Docker', 'Kubernetes', 'Cloud Basics']
  },
  {
    id: 'tools-workflow',
    iconName: 'GitBranch',
    title: 'Tools & workflow',
    description: 'Keeping ideas organized and work collaborative.',
    chips: ['Git', 'GitHub', 'VS Code', 'Linux']
  }
];

export const projectsData: Project[] = [
  {
    id: 'nl-to-sql',
    isFeatured: true,
    category: 'AI × DATABASES',
    title: 'AI-Powered Natural Language to SQL Query Generator',
    description: 'Bridges plain English and complex MySQL queries with Google Gemini Flash and Streamlit. It dynamically reads database schemas, translates multi-join questions in sub-second time, executes them safely, and renders results in an interactive dashboard.',
    points: [
      'Schema-aware translation',
      'Sub-second generation',
      'Dynamic prompt guardrails & safe read-only execution'
    ],
    chips: ['Streamlit', 'Gemini Flash API', 'MySQL', 'Python', 'Prompt Engineering'],
    codeSnippet: {
      filename: 'natural-language.sql',
      sql: `SELECT customers.name, SUM(orders.total_amount) AS spending\nFROM customers\nJOIN orders ON customers.id = orders.customer_id\nGROUP BY customers.id, customers.name\nHAVING spending > 500\nORDER BY spending DESC;`,
      note: '← dynamically generated from "Show customers who spent over $500"'
    },
    demoQueries: [
      {
        prompt: "Show top customers who spent more than $500 with their total order count",
        sql: "SELECT c.name, COUNT(o.id) as orders_count, SUM(o.total_amount) as total_spent\nFROM customers c\nJOIN orders o ON c.id = o.customer_id\nGROUP BY c.id, c.name\nHAVING total_spent > 500\nORDER BY total_spent DESC LIMIT 5;",
        resultSummary: "Fetched 3 customer records in 18ms",
        executionTimeMs: 18,
        rows: [
          { name: "Sarah Jenkins", orders_count: 8, total_spent: "$1,420.50" },
          { name: "Marcus Chen", orders_count: 5, total_spent: "$890.00" },
          { name: "Elena Rostova", orders_count: 4, total_spent: "$640.20" }
        ]
      },
      {
        prompt: "Find all products with stock below 20 items ordered by category",
        sql: "SELECT product_name, category, stock_quantity, unit_price\nFROM inventory\nWHERE stock_quantity < 20\nORDER BY category ASC, stock_quantity ASC;",
        resultSummary: "Fetched 4 low-stock items in 12ms",
        executionTimeMs: 12,
        rows: [
          { product_name: "Mechanical Keyboard Pro", category: "Hardware", stock_quantity: 4, unit_price: "$129.99" },
          { product_name: "USB-C Multi-hub 7-in-1", category: "Hardware", stock_quantity: 9, unit_price: "$45.50" },
          { product_name: "Cat6 Ethernet Cable (10m)", category: "Networking", stock_quantity: 12, unit_price: "$14.00" }
        ]
      },
      {
        prompt: "Calculate monthly revenue and active user signups for the last quarter",
        sql: "SELECT DATE_FORMAT(created_at, '%Y-%m') AS month,\n       COUNT(DISTINCT user_id) AS active_users,\n       SUM(amount) AS total_revenue\nFROM transactions\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)\nGROUP BY month ORDER BY month DESC;",
        resultSummary: "Aggregated monthly analytics in 24ms",
        executionTimeMs: 24,
        rows: [
          { month: "2026-02", active_users: 1420, total_revenue: "$38,450.00" },
          { month: "2026-01", active_users: 1290, total_revenue: "$32,100.00" },
          { month: "2025-12", active_users: 1105, total_revenue: "$29,800.00" }
        ]
      }
    ],
    githubUrl: 'https://github.com/Ragul-bit',
  },
  {
    id: 'keyboard-monitor',
    isFeatured: false,
    category: 'Security research',
    title: 'Keyboard Input Monitor',
    description: 'A research tool for exploring low-level input-hooking and secure system behaviour from a defensive perspective, analyzing system telemetry and keystroke handler lifecycles.',
    chips: ['C++', 'Security', 'OS Internals', 'Telemetry Analysis'],
    imageUrl: '/keyboard_monitor.jpg',
    githubUrl: 'https://github.com/Ragul-bit'
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'be-cse',
    yearRange: '2023 — 2027',
    subLabel: 'EXPECTED',
    statusBadge: 'Current',
    isCurrent: true,
    degreeOrTitle: 'B.E. Computer Science & Engineering',
    institution: 'VSB College of Engineering Technical Campus, Coimbatore',
    description: 'Building a strong foundation in software engineering, operating systems, data structures, network security, and practical problem-solving.'
  },
  {
    id: 'higher-secondary',
    yearRange: '2022 — 2023',
    subLabel: '80.6%',
    statusBadge: 'Previous',
    isCurrent: false,
    degreeOrTitle: 'Higher Secondary',
    institution: 'Sri Krishna Matric Higher Secondary School, Oddanchatram',
    description: 'Academic foundation in Mathematics, Physics, and Computer Science preparing for my journey into computing.'
  },
  {
    id: 'secondary-school',
    yearRange: '2020 — 2021',
    subLabel: '100%',
    statusBadge: 'Previous',
    isCurrent: false,
    degreeOrTitle: 'Secondary School',
    institution: 'Sri Krishna Matric Higher Secondary School, Oddanchatram',
    description: 'The first milestone in a lifelong interest in how technology, computers, and digital systems work.'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'codec-cybersecurity',
    title: 'Certificate of Internship — Cyber Security Intern',
    issuer: 'Codec Technologies Pvt. Ltd.',
    date: '17 Dec 2025 — 17 Jan 2026',
    credentialId: 'AICTE ID: CRPOPTA67959d4c9ce1577934555',
    verificationLink: '/certificates/Internship_Certificate_(1).pdf',
    skillsLearned: ['Vulnerability Assessment', 'Web Application Security', 'Threat Analysis', 'Network Hardening'],
    pdfAvailable: true
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Certificate of completion',
    credentialId: 'Anthropic Academy Certified',
    verificationLink: '/certificates/claude_certificate_-101_(1).pdf',
    skillsLearned: ['Prompt Engineering', 'LLM Architecture', 'Context Windows', 'AI Safety & Workflows'],
    pdfAvailable: true
  },
  {
    id: 'cisco-python-essentials',
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Certificate of Course Completion',
    credentialId: 'Cisco NetAcad Verified Credential',
    verificationLink: 'https://www.netacad.com/',
    skillsLearned: [
      'Python Syntax & Data Structures',
      'Algorithms & Logic Building',
      'Object-Oriented Programming (OOP)',
      'Exception Handling & Modular Code'
    ],
    pdfAvailable: false
  }
];

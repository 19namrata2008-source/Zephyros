import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Database,
  BarChart3,
  Wrench,
  BrainCircuit,
  Globe,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '3+', label: 'Certifications' },
  { value: 'Intern', label: 'Web Development' },
  { value: 'AI & ML', label: 'Student' },
  { value: '6+', label: 'Projects Built' },
]

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: { name: string; level: number }[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'SQL', level: 75 },
      { name: 'Oracle Database', level: 70 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    skills: [
      { name: 'MS Excel', level: 85 },
      { name: 'Data Visualization', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'AWS Cloud', level: 65 },
    ],
  },
  {
    title: 'AI & ML',
    icon: BrainCircuit,
    skills: [
      { name: 'Machine Learning Fundamentals', level: 70 },
      { name: 'Generative AI Concepts', level: 70 },
      { name: 'AI Tools & Applications', level: 75 },
    ],
  },
]

export const EDUCATION = [
  {
    institution: 'Rajarambapu Institute of Technology',
    degree: 'Diploma in Artificial Intelligence & Machine Learning',
    status: 'Currently Pursuing — 3rd Year',
    year: '2026 – 2027',
  },
]

export const EXPERIENCE = [
  {
    company: 'LeoApex',
    role: 'Web Development Intern',
    duration: '3 Months',
    responsibilities: [
      'Developed responsive web pages',
      'Worked with HTML, CSS, and JavaScript',
      'Improved website usability and design',
      'Collaborated on real-world development tasks',
      'Learned industry-standard development practices',
    ],
  },
]

export const CERTIFICATIONS = [
  { title: 'AWS Cloud Foundation', issuer: 'Amazon Web Services' },
  { title: 'AWS Generative AI', issuer: 'Amazon Web Services' },
  { title: 'Oracle Certification', issuer: 'Oracle' },
  { title: 'Microsoft Excel Certification', issuer: 'Microsoft' },
  { title: 'Hackathon Participation', issuer: 'Certificate of Participation' },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio built to showcase projects, skills, and experience with smooth animations.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
  {
    title: 'Responsive Landing Page',
    description:
      'A pixel-perfect, mobile-first landing page focused on conversion, accessibility, and clean visual hierarchy.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/landing.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
  {
    title: 'AI Assistant Web App',
    description:
      'A web-based AI assistant that answers questions and helps users with everyday tasks using generative AI concepts.',
    tags: ['AI', 'JavaScript', 'API'],
    image: '/projects/ai-assistant.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
  {
    title: 'Student Management System',
    description:
      'A CRUD application to manage student records, courses, and grades with a clean dashboard interface.',
    tags: ['SQL', 'JavaScript', 'CRUD'],
    image: '/projects/student-management.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
  {
    title: 'Data Analytics Dashboard',
    description:
      'An interactive dashboard visualizing datasets with charts, filters, and key performance indicators.',
    tags: ['Data Viz', 'Excel', 'Charts'],
    image: '/projects/analytics.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
  {
    title: 'Machine Learning Project',
    description:
      'A predictive ML model trained on real-world data with feature engineering and evaluation metrics.',
    tags: ['Python', 'ML', 'Data Science'],
    image: '/projects/ml-project.png',
    github: 'https://github.com/19namrata2008-source',
    demo: '#',
  },
]

export const CONTACT = {
  name: 'Namrata Amar Shinde',
  location: 'Pune, Maharashtra',
  email: '19namrata2008@gmail.com',
  phone: '+91 9156762407',
  github: 'https://github.com/19namrata2008-source',
}

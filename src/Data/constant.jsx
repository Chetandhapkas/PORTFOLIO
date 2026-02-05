import {
  Code2,
  Cpu,
  Globe,
  BookOpen,
  Layout
} from "lucide-react";

/* ================= PROJECTS ================= */

export const PROJECTS = [
  {
    id: '1',
    title: 'Library Management System',
    description: 'A robust C language project designed to manage book catalogs, student records, and borrow/return transactions efficiently.',
    tech: ['C', 'File Handling'],
    category: 'C/C++',
    image: 'https://picsum.photos/seed/library/600/400',
    github:'https://github.com/Chetandhapkas/Library-managment/blob/main/LIBRARY.C',
    link:'https://chetandhapkas.github.io/Library-managment/',
      isPrivate: false
   
  },
  {
    id: '2',
    title: 'Student Management System',
    description: 'A terminal-based C application for managing student records, including adding, updating, deleting, and viewing student details efficiently.',
    tech: ['C', 'Data Structures'],
    category: 'C/C++',
    image: 'https://picsum.photos/seed/student/600/400',
    github: 'https://github.com/Chetandhapkas/Chetandhapkas-Student-Management-System/blob/main/student.c',
    link:'https://chetandhapkas.github.io/Chetandhapkas-Student-Management-System/',
      isPrivate: false
  },
  {
    id: '3',
    title: 'Shopping List System',
    description: 'Developed in C++, this system features 4 categories of products, brand filtering, discount calculations, and automated billing.',
    tech: ['C++', 'OOPs'],
    category: 'C/C++',
    image: 'https://picsum.photos/seed/shop/600/400',
    github: 'https://github.com/Chetandhapkas/Shoping-list-System-/blob/main/SHOP1.CPP',
    link:'https://chetandhapkas.github.io/Shoping-list-System-/',
      isPrivate: false
  },
  {
      id: '4',
      title: 'Military School Website',
      description: 'A responsive informational website designed for an Indian military school, showcasing admissions, academics, training programs, events, and institutional values.',
      tech: ['React', 'CSS', 'Responsive Design'],
      category: 'Web Development',
      image: 'https://picsum.photos/seed/military/600/400',
      github: 'https://github.com/Chetandhapkas/IMSP-Frontend',
      link: 'https://chetandhapkas.github.io/IMSP-Frontend/',
        isPrivate: false
  },
];

/* ================= SKILLS ================= */

export const SKILLS = [
  { name: "C", level: 90, category: "Language" },
  { name: "C++", level: 85, category: "Language" },
  { name: "Java", level: 60, category: "Backend" },
  { name: "JavaScript", level: 60, category: "Backend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 90, category: "Frontend" },
  { name: "UI/UX Design", level: 75, category: "Frontend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" }
];

/* ================= EDUCATION ================= */

export const EDUCATION = [
  {
    degree: "B.Tech - Information Technology",
    institution: "Priyadarshini College of Engineering, Nagpur",
    period: "2023 - Present",
    grade: "8.89 CGPA"
  },
  {
    degree: "HSC",
    institution: "Indian Military School, Pulgaon",
    period: "2022 - 2023",
    grade: "71.53%"
  },
  {
    degree: "SSC",
    institution: "Indian Military School, Pulgaon",
    period: "2020 - 2021",
    grade: "85.55%"
  }
];

/* ================= INTERNSHIPS ================= */

export const INTERNSHIPS = [
   {
    role: 'Frontend Developer Intern',
    company: 'Amdox web Technologies',
    period: 'Recent',
    description: 'Worked on a comprehensive Job Portal project using React, implementing responsive interfaces and user authentication flows.'
  },
  {
    role: 'Web Developer Intern',
    company: 'EazyBytes Web Solutions',
    period: 'Previous',
    description: 'Assisted in building functional web components and learning modern development workflows.'
  }
];


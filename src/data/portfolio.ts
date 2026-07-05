export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    intro: string;
    about: {
      bio: string;
      passion: string;
      goals: string;
      interests: string[];
    };
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sakshi Srivastava",
    firstName: "Sakshi",
    lastName: "Srivastava",
    title: "Software Engineer",
    intro: "Software Engineer with experience designing and supporting scalable web applications using Java, Spring Boot, RESTful APIs, SQL, JavaScript, HTML5, CSS3, JSON, and AJAX.",
    about: {
      bio: "I am a Software Engineer with experience designing and supporting scalable web applications. I specialize in developing maintainable backend services, collaborating across Agile teams, writing unit and integration tests, troubleshooting production issues, and delivering reliable features through the complete software development lifecycle.",
      passion: "Crafting reliable, scalable backend systems and elegant, responsive frontend applications that bridge engineering excellence with robust user experience.",
      goals: "To continue architecting high-availability systems, mastering modern distributed engineering paradigms, and building innovative software solutions.",
      interests: [
        "Object-Oriented Design",
        "Microservices & APIs",
        "Integration & Unit Testing",
        "Agile/Scrum Methodologies",
        "System Troubleshooting"
      ]
    },
    email: "sakshisrivastava9546@gmail.com",
    github: "https://github.com/Sakshiiii24",
    linkedin: "https://www.linkedin.com/in/sakshi-srivastava-7b08a3371/",
    resumeUrl: "/Sakshi_Srivastava_Resume.pdf"
  },
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "JavaScript (ES6)" },
        { name: "Python" },
        { name: "SQL" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Spring Boot" },
        { name: "Microservices" },
        { name: "J2EE" },
        { name: "RESTful APIs" },
        { name: "Node.js" },
        { name: "JDBC" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "jQuery" },
        { name: "AJAX" },
        { name: "DOM Manipulation" },
        { name: "Responsive Web Design" }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle Database" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Jira" },
        { name: "Maven" },
        { name: "NPM" },
        { name: "CI/CD" },
        { name: "AWS" }
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Object-Oriented Design" },
        { name: "SDLC" },
        { name: "DBMS" },
        { name: "Integration Testing" },
        { name: "Agile/Scrum" },
        { name: "Production Support" }
      ]
    }
  ],
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Amdocs",
      location: "Gurugram, India",
      period: "July 2025 – June 2026",
      description: [
        "Architected and enhanced Java and Spring Boot microservices supporting a large-scale CRM platform, delivering scalable backend functionality and maintainable application code.",
        "Designed, developed, and optimized RESTful APIs using HTTP and JSON best practices, enabling reliable communication between distributed services and internal applications.",
        "Owned feature development from implementation through production deployment, collaborating with product stakeholders to deliver enhancements while communicating project dependencies and blockers.",
        "Resolved 200+ production issues through root-cause analysis, debugging, and code optimization, improving issue resolution time by 30% and increasing application reliability.",
        "Developed 15+ automation scripts for monitoring, data validation, and operational workflows, reducing manual effort by 40% while maintaining 99.9% application availability through proactive alert monitoring.",
        "Implemented JUnit and Mockito unit and integration tests, partnered with QA during regression testing, and supported CI/CD pipelines to ensure stable and high-quality production releases.",
        "Documented application functionality, investigated existing system behavior, and proposed technical improvements to enhance scalability, maintainability, and performance."
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "JUnit", "Mockito", "CI/CD", "AWS"]
    },
    {
      role: "Web Developer Intern",
      company: "Kaspro Solutions",
      location: "Mohali, India",
      period: "Jul 2024 – Jun 2025",
      description: [
        "Developed and maintained enterprise web application features using Java, J2EE, HTML5, CSS3, JavaScript, jQuery, AJAX, and JSON, delivering responsive and user-friendly interfaces.",
        "Integrated backend services with MySQL through JDBC, writing optimized SQL queries for efficient data retrieval, updates, and transactional consistency.",
        "Collaborated with developers, QA, and business stakeholders in Agile sprints to design features, troubleshoot defects, perform testing, and support production-ready releases."
      ],
      technologies: ["Java", "J2EE", "HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "JSON", "MySQL", "JDBC"]
    }
  ],
  projects: [
    {
      title: "AI Incident Management System",
      description: "Engineered a modular incident management platform using object-oriented design principles, automating issue categorization and workflow management through scalable backend services. Built and consumed RESTful APIs, implemented SQL-based data processing, and designed maintainable application components following reusable design patterns.",
      tech: ["Python", "SQL", "REST APIs", "OOP"],
      github: "https://github.com/Sakshiiii24/Ai-Incident-Management-System",
      featured: true
    },
    {
      title: "Healthcare Management System",
      description: "Developed a full-stack healthcare management application with Java backend services and React frontend, integrating REST APIs, responsive UI components, and SQL database operations. Implemented client-server communication using HTTP, JSON, and REST principles while optimizing user workflows for appointment scheduling and patient management.",
      tech: ["Java", "React.js", "HTML5", "CSS3", "JavaScript", "MySQL"],
      github: "https://github.com/Sakshiiii24/Healthcare-Management-System",
      featured: true
    },
    {
      title: "Secure Crypt Password Generator",
      description: "A secure cryptographic utility designed to generate highly secure, customizable passwords and encrypt them using AES-256 and SHA-256 algorithms. Features a dynamic entropy strength calculator, copy-to-clipboard functionality, and secure client-side hashing.",
      tech: ["JavaScript", "HTML5", "CSS3", "Web Crypto API"],
      github: "https://github.com/Sakshiiii24/Secure-Password-Generator-Encryptor",
      featured: true
    },
    {
      title: "Interactive Sorting Visualizer",
      description: "An educational web tool visualizing standard sorting algorithms (Bubble, Selection, Insertion, Quick, and Merge Sort) in real-time. Features adjustable execution speed, array size customization, and color-coded comparisons to illustrate algorithmic complexity.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Sakshiiii24/Visual-Sorting-Visualizer",
      featured: true
    },
    {
      title: "Java Spring Boot CRUD Portal",
      description: "A full-stack enterprise dashboard built with a Spring Boot REST API and React frontend. Implements secure JWT authentication, relational MySQL schema mapping with Hibernate JPA, paginated data tables, and complete CRUD operations for resource scheduling.",
      tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
      github: "https://github.com/Sakshiiii24/Spring-Boot-CRUD-Portal",
      featured: true
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Galgotias University",
      period: "2021 – 2025",
      details: "Greater Noida, India | CGPA: 8.55/10. Focus on software engineering, database management systems, and algorithms."
    }
  ],
  certifications: [
    {
      name: "Java Spring Boot Microservices eCommerce Project Masterclass",
      issuer: "Udemy",
      date: "June 2026",
      link: "https://ude.my/UC-830f3698-6a0d-4c25-95a8-77d402ccc271"
    },
    {
      name: "Java Multithreading, Concurrency & Performance Optimization",
      issuer: "Udemy",
      date: "June 2026",
      link: "https://ude.my/UC-f9a0afde-b84d-44aa-8ee4-e1dc5ccaa910"
    },
    {
      name: "Ethics & Generative AI (GenAI)",
      issuer: "Udemy",
      date: "June 2026",
      link: "https://ude.my/UC-6c56a281-1ffb-482f-9d6f-6d9d30e4273b"
    },
    {
      name: "Java Development Certification",
      issuer: "Udemy",
      date: "2025"
    },
    {
      name: "GenAI Certification",
      issuer: "Amdocs",
      date: "2026"
    }
  ],
  achievements: [
    {
      title: "Problem Solving",
      description: "Solved 500+ Data Structures and Algorithms (DSA) problems on LeetCode and GeeksforGeeks, demonstrating strong analytical and programmatic thinking.",
      date: "2021 - Present"
    }
  ]
};

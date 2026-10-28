export const portfolio = {
  name: 'Souhail El Addaoui', location: 'Atlanta, Georgia', email: 'eladdaouisouhail1@gmail.com', linkedin: 'https://www.linkedin.com/in/souhailelad',
  headline: 'Computer Science Student | Software Development, Data Automation & AI',
  profile: 'I’m a Computer Science student at Kennesaw State University with professional experience in data automation, backend development, enterprise AI, and ETL/ELT. I’ve built internal applications at Presidio and an end-to-end restaurant automation platform using Java, Spring Boot, PostgreSQL, REST APIs, and React.',
  coursework: ['Algorithm Analysis', 'Operating Systems', 'Data Communications', 'Database Management', 'Software Engineering', 'Computer Architecture', 'Probability & Statistics'],
  experience: [
    { title: 'Internal applications', description: 'Turning fragmented workflows into connected tools.', points: ['Built and launched an internal data-tracking application centralizing requests, attachments, status tracking, dashboards, and reporting.', 'Developed an internal application-usage analytics tracker.', 'Used Forgejo/Git and CI/CD workflows for repository management, deployment, teardown, and Argo CD auto-sync.'] },
    { title: 'Data automation', description: 'Making data more consistent, from source to report.', points: ['Automated and supported ETL/ELT and data-quality workflows using SQL, Gainsight, cloud-connected sources, and Tableau.', 'Reconciled downstream reporting, resolved data inconsistencies, and standardized customer identifiers across systems.', 'Troubleshot Gainsight integrations and automation failures involving S3 imports, data-type mismatches, merge rules, connectors, and recurring processing rules.'] },
    { title: 'Enterprise AI', description: 'Connecting AI exploration with practical application.', points: ['Contributed through prompt engineering, application testing, and bug identification.', 'Contributed to a security-compliance AI skill grounded in ISO/IEC 27001, NIST, and internal policies.', 'Delivered internal AI Learning Hour sessions on AI agents, skills, and prompt engineering.'] }
  ],
  projectStack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Vite', 'JPA / Hibernate', 'Maven', 'Postman', 'Git / GitHub'],
  projectDetails: [
    { title: 'One connected operation', text: 'Built workflows for order processing, menu and inventory management, employees and work hours, floor tables, categories, customers, and payments.' },
    { title: 'A relational foundation', text: 'Designed a normalized PostgreSQL schema with more than 10 relational tables, primary and foreign key relationships, and third normal form principles.' },
    { title: 'A layered Java backend', text: 'Implemented Entity–Repository–Service–Controller architecture with Spring Data JPA/Hibernate. Developed RESTful CRUD endpoints and validated them in Postman.' },
    { title: 'Connected, end to end', text: 'Integrated the Spring Boot backend with a React/Vite frontend. Managed builds with Maven and version control with Git/GitHub.' }
  ],
  skills: [
    { title: 'Languages', items: ['Python', 'Java', 'SQL', 'C', 'C++', 'JavaScript'] },
    { title: 'Backend & data', items: ['Spring Boot', 'REST APIs', 'JPA / Hibernate', 'PostgreSQL', 'ETL / ELT', 'Data mapping', 'Data validation'] },
    { title: 'Frontend', items: ['React', 'Vite'] },
    { title: 'Analytics & automation', items: ['Tableau', 'Power BI', 'Gainsight'] },
    { title: 'Development & DevOps', items: ['Git', 'GitHub', 'Forgejo', 'Argo CD', 'Maven', 'Postman', 'VS Code', 'Jupyter'] },
    { title: 'Artificial intelligence', items: ['Prompt engineering', 'AI agents & skills', 'Enterprise AI application testing'] }
  ],
  certifications: ['Cisco Networking Basics', 'IBM Introduction to Data Science & Analytics', 'DataCamp Intermediate SQL', 'Blockchain Basics']
};

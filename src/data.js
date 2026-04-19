// ============================================================
// data.js — Single source of truth for all portfolio content
// ============================================================

export const personal = {
  name: 'Markswell Ogutu',
  nameShort: 'MO',
  role: 'QA Automation Engineer',
  roleExtra: ['Software Quality Assurance', 'Test Automation'],
  location: 'Nairobi, Kenya',
  email: 'osoromarkswell80@gmail.com',
  phone: '+254 798 840 098',
  linkedin: 'https://linkedin.com/in/markswell-ogutu',
  github: 'https://github.com/markswell-ogutu',
  summary:
    'Detail-oriented QA Automation Engineer with a strong background in software development, testing automation, and CI/CD pipeline integration. Experienced in building scalable automation frameworks across web, API, and backend systems — ensuring software ships with confidence.',
};

export const stats = [
  { num: '6+', label: 'Years Experience' },
  { num: '4+', label: 'Projects Built' },
  { num: '3+', label: 'Certifications' },
  { num: '99.9%', label: 'API Uptime Achieved' },
];

export const skills = [
  {
    icon: '🧪',
    title: 'Testing & Automation',
    tags: [
      { label: 'Selenium (Java/Python)', variant: 'green' },
      { label: 'Pytest', variant: 'green' },
      { label: 'TestNG', variant: 'green' },
      { label: 'JMeter', variant: '' },
      { label: 'Postman', variant: '' },
      { label: 'Newman', variant: '' },
      { label: 'TestRail', variant: '' },
    ],
  },
  {
    icon: '💻',
    title: 'Languages',
    tags: [
      { label: 'Python', variant: 'green' },
      { label: 'Java', variant: 'green' },
      { label: 'JavaScript', variant: 'amber' },
      { label: 'TypeScript', variant: 'amber' },
    ],
  },
  {
    icon: '⚙️',
    title: 'CI/CD & DevOps',
    tags: [
      { label: 'Jenkins', variant: 'green' },
      { label: 'Docker', variant: 'blue' },
      { label: 'Kubernetes', variant: 'blue' },
      { label: 'AWS', variant: 'blue' },
      { label: 'Microsoft Azure', variant: 'blue' },
      { label: 'GitHub Actions', variant: '' },
    ],
  },
  {
    icon: '🚀',
    title: 'Frameworks',
    tags: [
      { label: 'React.js', variant: '' },
      { label: 'Node.js', variant: '' },
      { label: 'Django', variant: '' },
      { label: 'Flask', variant: '' },
      { label: 'RESTful APIs', variant: '' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases & Version Control',
    tags: [
      { label: 'MySQL', variant: '' },
      { label: 'PostgreSQL', variant: '' },
      { label: 'SQLAlchemy', variant: '' },
      { label: 'Git', variant: 'green' },
      { label: 'GitHub', variant: 'green' },
      { label: 'GitLab', variant: '' },
    ],
  },
  {
    icon: '📋',
    title: 'Methodologies & Tools',
    tags: [
      { label: 'Agile / Scrum', variant: 'green' },
      { label: 'STLC', variant: '' },
      { label: 'SDLC', variant: '' },
      { label: 'V-Model', variant: '' },
      { label: 'Jira', variant: '' },
      { label: 'VS Code', variant: '' },
    ],
  },
];

export const experience = [
  {
    role: 'QA Automation Engineer',
    company: 'CodeOn Africa',
    period: 'Sep 2024 – Present',
    location: 'Remote',
    current: true,
    bullets: [
      'Designed automated test scripts for web and API testing using Selenium (Python) and Postman, significantly reducing manual regression effort.',
      'Assisted developers to establish Jenkins CI/CD pipelines, triggering automated regression tests on every code push.',
      'Configured Docker containers to ensure consistent, reproducible testing environments across all stages.',
      'Managed test case documentation and stakeholder reporting via TestRail for full traceability.',
      'Performed load and performance testing using Apache JMeter for data migration validation projects.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Smoothtel Data Solutions',
    period: 'Feb 2024 – Aug 2024',
    location: 'Nairobi, Kenya',
    current: false,
    bullets: [
      'Implemented API and UI testing during product releases to ensure seamless feature delivery and zero regression.',
      'Collaborated with QA and DevOps teams to integrate automation scripts into the deployment pipeline.',
      'Developed and tested RESTful APIs, achieving 99.9% uptime in production environments.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Cloudfactory',
    period: 'Feb 2021 – Dec 2022',
    location: 'Remote',
    current: false,
    bullets: [
      'Collaborated with QA engineers to automate report generation workflows, reducing manual overhead.',
      'Processed and reviewed large datasets for client projects, ensuring data accuracy and quality standards.',
    ],
  },
  {
    role: 'ICT Specialist',
    company: 'Milestone Land Access Limited',
    period: 'Aug 2020 – Jan 2021',
    location: 'Nairobi, Kenya',
    current: false,
    bullets: [
      'Maintained IT infrastructure and ensured system performance met operational standards.',
      'Supported end-user testing for new software deployments.',
    ],
  },
  {
    role: 'ICT Lecturer',
    company: 'Computer Pride Limited & Institute of Advanced Technology',
    period: 'Nov 2018 – Apr 2020',
    location: 'Mombasa, Kenya',
    current: false,
    bullets: [
      'Trained students on IT project workflows, system development, and programming fundamentals.',
      'Taught Website Design, C, C++, Java, Visual Basic, PHP, HTML and C# programming languages.',
    ],
  },
  {
    role: 'ICT Attachment – ICT Department',
    company: 'KenGen',
    period: 'Jun 2017 – Aug 2017',
    location: 'Nairobi, Kenya',
    current: false,
    bullets: [
      'Contributed to documentation of project activities and process workflows within the ICT department.',
    ],
  },
];

export const projects = [
  {
    num: '01',
    category: 'QA Framework',
    title: 'Automated Web Testing Framework',
    description:
      'A scalable end-to-end test automation framework built with Selenium WebDriver and Pytest. Features Page Object Model (POM) architecture, parallel test execution, and auto-generated HTML reports with failure screenshots for rapid debugging.',
    metrics: [
      { label: 'Coverage', value: '95%+' },
      { label: 'Tests', value: '200+' },
    ],
    tags: [
      { label: 'Selenium', variant: 'green' },
      { label: 'Pytest', variant: 'green' },
      { label: 'Python', variant: '' },
      { label: 'HTML Reports', variant: '' },
      { label: 'Docker', variant: 'blue' },
    ],
  },
  {
    num: '02',
    category: 'API Testing',
    title: 'API Test Suite — CI/CD Integrated',
    description:
      'Comprehensive REST API test suite using Postman collections executed via Newman in Jenkins CI/CD pipelines. Covers authentication flows, data validation, error handling, and contract testing across multiple environments (dev, staging, prod).',
    metrics: [
      { label: 'Endpoints', value: '80+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tags: [
      { label: 'Postman', variant: '' },
      { label: 'Newman', variant: '' },
      { label: 'Jenkins', variant: 'green' },
      { label: 'RESTful APIs', variant: 'amber' },
      { label: 'CI/CD', variant: 'blue' },
    ],
  },
  {
    num: '03',
    category: 'Performance',
    title: 'Load Testing — Data Migration Validation',
    description:
      'Apache JMeter performance testing suite designed to validate system behaviour under heavy load during data migration events. Includes throughput analysis, response time benchmarks, and bottleneck identification with real-time monitoring dashboards.',
    metrics: [
      { label: 'Concurrent Users', value: '500+' },
      { label: 'Latency', value: '<200ms' },
    ],
    tags: [
      { label: 'JMeter', variant: '' },
      { label: 'Performance', variant: 'amber' },
      { label: 'Load Testing', variant: '' },
      { label: 'TestRail', variant: '' },
    ],
  },
  {
    num: '04',
    category: 'Full-Stack',
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end web applications built with React.js frontends and Flask/Django backends, complete with integrated automated testing suites. Demonstrates the intersection of development and QA — shipping features with confidence through integrated test coverage.',
    metrics: [
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Tests', value: 'Integrated' },
    ],
    tags: [
      { label: 'React.js', variant: '' },
      { label: 'Flask', variant: '' },
      { label: 'Django', variant: '' },
      { label: 'Pytest', variant: 'green' },
      { label: 'AWS', variant: 'blue' },
    ],
  },
];

export const education = [
  { year: '2025–Now', institution: 'Cisco Academy', degree: 'Cyber Security' },
  { year: '2023–2024', institution: 'Moringa School', degree: 'Software Engineering' },
  { year: '2019', institution: 'Microsoft Learning', degree: 'Azure Fundamentals Certificate' },
  { year: '2019', institution: 'Institute of Advanced Technology', degree: 'ICDL Certificate' },
  { year: '2018', institution: 'Institute of Advanced Technology', degree: 'Management of Learning' },
  { year: '2014–2018', institution: 'Taita Taveta University', degree: 'BSc. Information Technology' },
];

export const certifications = [
  { icon: '🔧', name: 'Jenkins Fundamentals – CI/CD', issuer: 'CloudBees / Jenkins' },
  { icon: '📮', name: 'Postman API Testing Certification', issuer: 'Postman' },
  { icon: '📊', name: 'JMeter Performance Testing Basics', issuer: 'Apache JMeter' },
  { icon: '☁️', name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft' },
];

export const references = [
  {
    role: 'Technical Mentor',
    name: 'Solomon Kitonyi',
    org: 'Moringa School',
    email: 'solomon.kitonyi@moringaschool.com',
    phone: '+254 707 756 517',
  },
  {
    role: 'HOD Mathematics & Informatics',
    name: 'Available on Request',
    org: '',
    email: 'skatoto@gmail.com',
    phone: '+254 721 227 494',
  },
];

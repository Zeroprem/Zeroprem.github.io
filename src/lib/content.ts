/**
 * Single source of truth for every fact rendered on this site.
 * Every string below is taken from Premchand Tarange's resume
 * (Premchand_Tarange_QA_.pdf). Nothing here is invented.
 */

export const profile = {
  name: "Premchand Tarange",
  firstName: "Premchand",
  lastName: "Tarange",
  role: "Software Engineer, CI/CD & Automation",
  shortRole: "Software Engineer",
  location: "Bengaluru, India",
  email: "premtarange09@gmail.com",
  phone: "+91 86057 06005",
  linkedin: "https://linkedin.com/in/prem2003",
  linkedinHandle: "in/prem2003",
  github: "https://github.com/Zeroprem",
  githubHandle: "Zeroprem",
  resumePath: "/Premchand-Tarange-Resume.pdf",
  photo: "/premchand-tarange.webp",
  ogImage: "/premchand-tarange.jpg",
  /** Hero positioning line. 18 words, drawn from the resume summary. */
  positioning:
    "I automate release qualification for enterprise software: test frameworks, API validation, and Jenkins pipelines that catch failures early.",
  seoDescription:
    "Premchand Tarange is a software engineer in Bengaluru working on CI/CD and test automation. One year at Cisco automating UCCE release qualification with Python, Java, Selenium, Pytest and Jenkins.",
} as const;

export const about = {
  heading: "Release quality, built as software.",
  paragraphs: [
    "I spent a year at Cisco owning automated qualification for UCCE installer releases on Windows Server, running across distributed multi-VM environments. The work covered the whole lifecycle: installation, configuration, reboot, patch, upgrade, regression, uninstall and end-to-end functional validation.",
    "Most of what I build is tooling rather than test cases. Reusable Python, PowerShell, Java and Selenium libraries with environment-readiness checks, setup and teardown, recovery handling, structured logging and result reporting, wired into Jenkins so every build gets an automated quality gate and an answer a developer can act on.",
  ],
  focus: [
    {
      title: "Test framework development",
      detail:
        "Reusable Python and Java automation with assertions, recovery handling and structured logging.",
    },
    {
      title: "API and service validation",
      detail:
        "REST endpoint coverage with Pytest and Postman across 50+ Cisco endpoints.",
    },
    {
      title: "CI/CD engineering",
      detail:
        "Jenkins smoke, integration, regression and end-to-end pipelines with Maven, Git and Artifactory.",
    },
    {
      title: "Root-cause analysis",
      detail:
        "Evidence-driven triage across application logic, build agents, networking and virtual infrastructure.",
    },
  ],
} as const;

export const metrics = [
  {
    value: "25+",
    label: "Cisco workflows automated",
    detail: "Python, Pytest and REST automation across the UCCE release lifecycle.",
  },
  {
    value: "50+",
    label: "API endpoints validated",
    detail: "REST coverage built with Pytest and Postman, executed from Jenkins.",
  },
  {
    value: "~15%",
    label: "Lower validation time",
    detail: "From refactored shared libraries and stronger retry and teardown logic.",
  },
  {
    value: "1 yr",
    label: "Enterprise release qualification",
    detail: "Owning installer qualification on Windows Server at Cisco Systems.",
  },
] as const;

export const experience = {
  company: "Cisco Systems",
  companyIcon: "cisco",
  role: "Software Engineer, CI/CD & Automation",
  team: "UCCE Platform Engineering and Test Automation",
  start: "Aug 2025",
  end: "Aug 2026",
  location: "Bengaluru, India",
  summary:
    "Owned automated qualification for Cisco UCCE installer releases on Windows Server across distributed multi-VM environments.",
  groups: [
    {
      title: "Release qualification",
      points: [
        {
          text: "Owned automated qualification for UCCE installer releases across distributed multi-VM environments, covering installation, configuration, reboot, patch, upgrade, regression, uninstall and end-to-end functional validation.",
        },
        {
          text: "Automated 25+ Cisco workflows and API validation for 50+ endpoints using Python, Pytest, REST APIs and Postman, maintaining broad regression coverage with Jenkins-based targeted execution.",
          highlights: ["25+", "50+"],
        },
      ],
    },
    {
      title: "Frameworks and pipelines",
      points: [
        {
          text: "Developed reusable Python, PowerShell, Java and Selenium automation with assertions, environment-readiness checks, setup and teardown, recovery handling, structured logging and result reporting.",
        },
        {
          text: "Built Jenkins smoke, integration, regression and end-to-end validation pipelines with Git, Maven, Artifactory and VMware vSphere, providing automated quality gates and actionable release feedback.",
        },
        {
          text: "Refactored shared automation libraries and strengthened retry, teardown, timestamp, vSphere/SSL and failure-recovery logic, contributing to approximately 15% lower validation time and fewer avoidable false failures.",
          highlights: ["15%"],
        },
      ],
    },
    {
      title: "Debugging and collaboration",
      points: [
        {
          text: "Analyzed failed runs across application logic, automation code, services, API and CLI interactions, build agents, networking, credentials, artifacts and virtual infrastructure, using logs and runtime evidence to isolate root causes and drive fixes with developers.",
        },
        {
          text: "Worked with development, QA and infrastructure engineers on test strategy, code reviews, defect investigation, environment issues and release readiness.",
        },
      ],
    },
  ],
  stack: [
    "Python",
    "Java",
    "PowerShell",
    "Pytest",
    "Selenium",
    "Jenkins",
    "Maven",
    "Artifactory",
    "Git",
    "VMware vSphere",
    "Windows Server",
    "Postman",
  ],
} as const;

export const work = [
  {
    id: "failure-analyzer",
    name: "AI-Powered Test & CI/CD Failure Analyzer",
    context: "Jenkins-integrated workflow",
    problem:
      "A failed validation run buries its cause in thousands of log lines, so triage starts with reading rather than fixing.",
    contribution:
      "Built a Jenkins-integrated workflow that extracts high-signal execution evidence from failed runs and classifies probable application, automation, pipeline and infrastructure causes. Used AI coding assistants during the Python automation development for code generation, refactoring, debugging and correctness review.",
    outcome:
      "Evidence-backed root-cause summaries with failed-stage context, delivered straight to the team through Webex notifications.",
    stack: ["Python", "Jenkins", "AI-assisted engineering", "Log analysis"],
    icons: ["python", "jenkins"],
    featured: true,
  },
  {
    id: "ucce-qualification",
    name: "UCCE Installer Qualification Suite",
    context: "Cisco Systems, internal",
    problem:
      "Installer releases had to be proven on Windows Server across distributed multi-VM environments before every ship.",
    contribution:
      "Reusable Python, PowerShell, Java and Selenium automation covering install, configure, reboot, patch, upgrade, regression, uninstall and end-to-end validation, with environment-readiness checks, recovery handling and structured result reporting.",
    outcome:
      "Repeatable software verification across the full release lifecycle instead of manual qualification passes.",
    stack: ["Python", "Selenium", "PowerShell", "VMware vSphere"],
    icons: ["python", "selenium", "pytest"],
    featured: false,
  },
  {
    id: "jenkins-pipelines",
    name: "Jenkins Validation Pipelines",
    context: "Cisco Systems, internal",
    problem:
      "Teams needed release feedback that was fast, targeted and specific enough to act on.",
    contribution:
      "Smoke, integration, regression and end-to-end pipelines wired to Git, Maven, Artifactory and VMware vSphere, with targeted execution so a change only ran the validation it needed.",
    outcome:
      "Automated quality gates on every build, with actionable release feedback and shorter validation turnaround.",
    stack: ["Jenkins", "Maven", "Artifactory", "Git"],
    icons: ["jenkins", "apachemaven", "git"],
    featured: false,
  },
] as const;

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Java", "PowerShell", "SQL"],
  },
  {
    title: "Test automation",
    items: [
      "Pytest",
      "Selenium WebDriver",
      "Playwright",
      "Test framework development",
      "Test strategy",
      "Regression and E2E validation",
    ],
  },
  {
    title: "APIs and services",
    items: ["REST API testing", "Postman", "UI, API and E2E testing", "XML/JSON reporting"],
  },
  {
    title: "CI/CD and source control",
    items: ["Jenkins", "Git and GitHub", "Maven", "Artifactory", "Automated build qualification"],
  },
  {
    title: "Systems and infrastructure",
    items: [
      "VMware vSphere",
      "Windows Server",
      "Linux",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Distributed multi-VM environments",
    ],
  },
  {
    title: "AI and diagnostics",
    items: [
      "AI-assisted test and failure analysis",
      "AI coding assistants",
      "Log analysis",
      "Root-cause analysis",
      "Structured logging",
    ],
  },
] as const;

/** Slugs resolved against the simple-icons package. */
export const coreStack = [
  "python",
  "openjdk",
  "pytest",
  "selenium",
  "jenkins",
  "git",
  "github",
  "postman",
  "docker",
  "kubernetes",
  "ansible",
  "linux",
] as const;

export const credentials = [
  {
    kind: "Certification",
    title: "Cisco DevNet Automation Certification",
    issuer: "Cisco",
    period: null,
    detail: null,
  },
  {
    kind: "Certification",
    title: "Cisco AI Technical Practitioner",
    issuer: "Cisco",
    period: null,
    detail: null,
  },
  {
    kind: "Training",
    title: "Java Full Stack Junior Development",
    issuer: "Vinsys IT Services",
    period: "Sep 2024 - Jan 2025",
    detail: "Java, backend development, databases and web technologies.",
  },
  {
    kind: "Education",
    title: "B.E. Computer Science",
    issuer: "SKN Sinhgad Institute of Technology and Science, Lonavala",
    period: "2020 - 2024",
    detail: "CGPA 7.58 / 10",
  },
] as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

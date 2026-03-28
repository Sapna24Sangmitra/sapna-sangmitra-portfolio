/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATA ---
const portfolioData = {
    name: "Sapna Sangmitra",
    tagline: "Software Engineer | AI Engineer",
    catchphrase: "Engineering intelligent systems, from scalable backends to GenAI agents & MCPs.",
    bio: "Backend engineer turned AI builder. I design high-performance APIs, build GenAI agents, and create MCP-powered tools that ship fast and solve real problems.",
    email: "ssangmitra@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/sapna-sangmitra",
        github: "https://github.com/Sapna24Sangmitra",
    },
    resume: "SapnaSangmitra_AIEngineer.pdf",
    experience: [
      {
        role: "App Foundation AI Engineer Intern",
        company: "SAP",
        period: "Nov 2025 - Present",
        muted: false,
        description: [
          "Built autonomous MCP server pipeline enabling AI agents (Claude, Cline, Copilot) to auto-convert Splunk alerts into Jira tickets, eliminating manual triage.",
          "Developed multi-agent automation with Playwright + Computer Use to orchestrate procurement workflows, reducing manual intervention by 80%+.",
          "Architected RAG-powered semantic search with vector embeddings, enabling LLM agents to extract insights at scale.",
        ],
      },
      {
        role: "Software Development Engineer II",
        company: "Infosys",
        period: "July 2022 - Jan 2024",
        muted: false,
        description: [
          "Developed APIs from scratch for an Australian banking project, improving system efficiency by 40% and reducing downtime by 30%.",
          "Showcased full-stack capabilities through project planning, Swagger documentation, Spring Boot API development, and testing.",
          "Mentored junior developers, reducing onboarding time by 30% and improving overall team productivity by 20%.",
        ],
      },
      {
        role: "Associate",
        company: "Cognizant",
        period: "Dec 2021 - June 2022",
        muted: false,
        description: [
          "Developed high-performance APIs using Spring Reactive and Java 8, enhancing concurrent request handling by 50%.",
          "Implemented comprehensive testing strategies, ensuring 85% code coverage and reducing production bugs by 35%.",
        ],
      },
      {
        role: "Programmer Analyst",
        company: "Cognizant",
        period: "Oct 2020 - Nov 2021",
        muted: false,
        description: [
          "Developed secure Spring Boot APIs for a U.S. banking client, ensuring data integrity and compliance.",
          "Learned NodeJS to reduce backend dependency and contributed in Agile bug-fixing sprints.",
        ],
      },
      {
        role: "Research Assistant",
        company: "San Jose State University",
        period: "May 2025 - Oct 2025",
        muted: true,
        description: [
          "Developing an interactive web application using React to teach foundational AI concepts to middle and high school students.",
          "Built personalized chatbots to support student learning & engagement, sponsored by Lockheed Martin, Juniper Networks, KLA+, & Ford.",
        ],
      },
      {
        role: "Instructional Student Assistant",
        company: "San Jose State University",
        period: "Sept 2024 - May 2025",
        muted: true,
        description: [
          "Served as an Instructional Student Assistant at SJSU for a Python programming course covering NumPy and Pandas, supporting coursework and student learning.",
        ],
      },
    ],
    projects: [
        {
            name: "PresentBuddy",
            description: "Voice-first AI co-host that transforms presentation prep and delivery. Create Mode for brainstorming and script generation, Present Mode for real-time AI co-presenting with intelligent slide control via VocalBridge and MCP.",
            tags: ["VocalBridge", "WebRTC", "LiveKit", "MCP", "AI Agent", "Real-time"],
            link: "https://www.youtube.com/watch?v=0wk6NGBF9XQ",
            linkLabel: "Demo",
        },
        {
            name: "API Snippet Generator",
            description: "AI-powered documentation platform that analyzes GitHub repos, NPM packages, or API specs to auto-generate standardized code snippets with setup guides, authentication, and error handling.",
            tags: ["React", "TypeScript", "Node.js", "GPT-4", "Claude", "Tailwind"],
            link: "https://github.com/Sapna24Sangmitra/APIIntegrationSnippet",
            linkLabel: "GitHub",
        },
        {
            name: "COPeX",
            description: "No-code platform for building & deploying React apps via LLM agents (GPT/LLaMA/Claude). Features dynamic code generation, iterative refinement, and natural language interfaces. Integrated Convex for real-time APIs.",
            tags: ["React", "LLM Agents", "Convex", "BraveAI", "No-Code", "GPT"],
            link: "https://www.youtube.com/watch?v=lHOCRf5ZWG0",
            linkLabel: "Demo",
        },
        {
            name: "YouTube Summary Video Generator",
            description: "A Generative AI-based automation tool that summarizes YouTube videos using YouTubeTranscriptAPI, LLaMA3, and AWS Polly for voice synthesis.",
            tags: ["Python", "Generative AI", "LLaMA3", "AWS Polly", "MoviePy"],
            link: "https://github.com/Sapna24Sangmitra/YouTubeSummaryVideoGenerator",
            linkLabel: "GitHub",
        },
        {
            name: "LeetCode Video Creator",
            description: "An innovative app built with Vibe Coding that generates educational videos from LeetCode problems. Users input a question, solution, and optional explanation, and the app creates a comprehensive video with synchronized audio narration.",
            tags: ["Vibe Coding", "Video Generation", "Audio Synthesis", "Educational Tech"],
            link: "https://github.com/Sapna24Sangmitra/LeetCode-Video-Creator",
            linkLabel: "GitHub",
        },
        {
            name: "Wavelly / PathSure",
            description: "Smart safety navigation app using lighting, crime, and foot traffic data to recommend safer routes. Winner at SFHacks 2025 & Cybersecurity Hackathon. Implemented SSO, MFA, RBAC for secure access.",
            tags: ["React", "Node.js", "Navigation", "SSO", "MFA", "Security"],
            link: "https://github.com/Sapna24Sangmitra/SpartUpProject",
            linkLabel: "GitHub",
        },
        {
            name: "Swimming Style Analysis",
            description: "Analyzed swimmer videos using OpenCV and YOLOv8 to detect swimmers, create stick-figure structures, and estimate swimming styles.",
            tags: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
            link: "https://github.com/Sapna24Sangmitra/SwimmingStyleAnalysis",
            linkLabel: "GitHub",
        },
    ],
    hackathonWins: [
        {
            event: "VocalBridge Hackathon",
            project: "Present Buddy - A Voice First AI Co-Host",
            result: "Winner",
            date: "2026",
            description: "Built a real-time AI voice agent with VocalBridge capable of creating and co-presenting, document analysis, and automated UI navigation using Client Actions and MCP.",
            tags: ["VocalBridge", "AI Voice Agent", "MCP", "Real-time"],
        },
        {
            event: "Buildathon 2025",
            project: "5 AI Apps in 5 Hours",
            result: "2x Winner",
            date: "2025",
            description: "Speed challenge by AI Fund & DeepLearning.ai. Built 5 AI-driven apps in 5 hours. Won First Prize + Best Design, awarded by Andrew Ng.",
            tags: ["AI Fund", "DeepLearning.ai", "Speed Build", "Andrew Ng"],
        },
        {
            event: "AWS Cloudathon",
            project: "Cloud-Native Architecture on AWS",
            result: "Winner",
            date: "2025",
            description: "Built and deployed a cloud-native architecture using various AWS services, following the AWS Well-Architected Framework. Secured 1st place among competing teams.",
            tags: ["AWS", "EC2", "Lambda", "RDS", "DynamoDB", "CloudFormation"],
        },
        {
            event: "Cybersecurity Hackathon",
            project: "Wavelly / PathSure — Smart Safety Navigation App",
            result: "Winner",
            date: "2025",
            description: "Extended the navigation app with enterprise security features. Added SSO, MFA, and RBAC for secure access control, plus encrypted data transmission.",
            tags: ["SSO", "MFA", "RBAC", "Security", "Authentication"],
        },
        {
            event: "SFHacks",
            project: "Wavelly / PathSure — Smart Safety Navigation App",
            result: "Winner",
            date: "2025",
            description: "Navigation app using lighting, crime, and foot traffic data to recommend safer routes with emergency alerts. Built the core routing algorithm and real-time data integration.",
            tags: ["React", "Node.js", "Navigation", "Real-time", "Maps API"],
        },
        {
            event: "Cerebral Valley Hackathon",
            project: "COPEX — React Component Generator & Deployer",
            result: "Finalist",
            date: "2024",
            description: "No-code platform for building & deploying React apps via LLM agents (GPT/LLaMA/Claude). Features dynamic code generation and natural language interfaces.",
            tags: ["React", "LLM Agents", "Convex", "BraveAI", "No-Code"],
        },
    ],
    skills: [
        {
            category: "GenAI & Agents",
            icon: "brain",
            list: ["AI Agents", "MCP Servers", "RAG Pipelines", "Prompt Engineering", "LangChain", "LangGraph", "Claude Code", "Cline", "AI App Dev", "Vector DB", "Anthropic API", "OpenAI API"],
        },
        {
            category: "Languages & Frontend",
            icon: "code",
            list: ["Java", "Python", "JavaScript", "TypeScript", "C++", "React", "Vite", "Tailwind CSS", "YAML", "JSON"],
        },
        {
            category: "Backend & Infra",
            icon: "server",
            list: ["Spring Boot", "REST API", "Spring Reactive", "NodeJS", "MySQL", "Kafka", "NoSQL", "Docker", "AWS", "Playwright", "WebRTC", "LiveKit"],
        },
        {
            category: "ML & Data",
            icon: "chart",
            list: ["PyTorch", "NLP", "Computer Vision", "OpenCV", "YOLOv8", "Pandas", "NumPy", "Search"],
        },
        {
            category: "Dev Tools",
            icon: "tool",
            list: ["Git", "GitHub", "JIRA", "Postman", "Swagger", "Confluence"],
        },
    ],
    education: [
        {
            school: "San Jose State University",
            location: "California, USA",
            degree: "Master of Science in Engineering",
            period: "Jan 2024 - Dec 2025",
            gpa: "3.8",
        },
        {
            school: "Galgotias University",
            location: "Greater Noida, India",
            degree: "Bachelor of Technology in Computer Science & Engineering",
            period: "June 2015 - May 2019",
            gpa: "8.03",
            isCgpa: true,
        },
    ],
};

// --- SVG ICONS ---
const ICONS = {
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>`,
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6m12 5h1.5a2.5 2.5 0 000-5H18M9 21h6m-3-4v4m-5-8a5 5 0 0010 0V4H7v9z"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    resume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    education: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

// --- UI BUILDER FUNCTIONS ---
function h(tag: string, attrs: Record<string, any> = {}, children: (HTMLElement | string)[] = []) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'innerHTML') {
            element.innerHTML = value;
        } else if (value != null) {
            element.setAttribute(key, value);
        }
    }
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof HTMLElement) {
            element.appendChild(child);
        }
    }
    return element;
}

// --- ANIMATED AI GRID BACKGROUND (canvas) ---
function createAIBackground() {
    const canvas = document.createElement('canvas');
    canvas.className = 'ai-bg-canvas';
    const ctx = canvas.getContext('2d')!;
    let w = 0, h2 = 0;
    let animId: number;

    interface Node { x: number; y: number; vx: number; vy: number; }
    const nodes: Node[] = [];
    const NODE_COUNT = 50;
    const CONNECT_DIST = 180;

    function resize() {
        w = canvas.width = window.innerWidth;
        h2 = canvas.height = window.innerHeight;
    }

    function init() {
        resize();
        nodes.length = 0;
        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push({
                x: Math.random() * w,
                y: Math.random() * h2,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, w, h2);
        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.15;
                    ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        // Draw nodes
        for (const node of nodes) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168, 85, 247, 0.3)';
            ctx.fill();
            // Move
            node.x += node.vx;
            node.y += node.vy;
            if (node.x < 0 || node.x > w) node.vx *= -1;
            if (node.y < 0 || node.y > h2) node.vy *= -1;
        }
        animId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); });
    init();
    draw();

    return canvas;
}

// --- FLOATING BOTTOM NAVBAR ---
function createBottomNav() {
    const navItems = [
        { href: '#hero', icon: ICONS.home, label: 'Home' },
        { href: '#experience', icon: ICONS.briefcase, label: 'Experience' },
        { href: '#projects', icon: ICONS.code, label: 'Projects' },
        { href: '#hackathons', icon: ICONS.trophy, label: 'Hackathons' },
        { href: '#education', icon: ICONS.education, label: 'Education' },
        { href: '#skills', icon: ICONS.layers, label: 'Skills' },
    ];

    const navLinks = navItems.map(item => {
        const isHackathons = item.href === '#hackathons';
        const link = h('a', { href: item.href, className: `bottom-nav__item${isHackathons ? ' bottom-nav__item--trophy' : ''}`, 'data-section': item.href.slice(1) }, []);
        link.appendChild(h('span', { className: 'bottom-nav__icon', innerHTML: item.icon }, []));
        link.appendChild(h('span', { className: 'bottom-nav__label' }, [item.label]));
        return link;
    });

    // Divider
    const divider = h('span', { className: 'bottom-nav__divider' }, []);

    // Contact button + popup
    const contactIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;
    const contactBtn = h('button', { className: 'bottom-nav__contact', 'aria-label': 'Contact' }, []);
    contactBtn.appendChild(h('span', { className: 'bottom-nav__contact-icon', innerHTML: contactIcon }, []));

    const popup = h('div', { className: 'contact-popup' }, [
        h('a', { href: portfolioData.socials.linkedin, className: 'contact-popup__item', target: '_blank', rel: 'noopener noreferrer' }, [
            h('span', { className: 'contact-popup__icon', innerHTML: ICONS.linkedin }, []),
            h('span', {}, ['LinkedIn']),
        ]),
        h('a', { href: portfolioData.socials.github, className: 'contact-popup__item', target: '_blank', rel: 'noopener noreferrer' }, [
            h('span', { className: 'contact-popup__icon', innerHTML: ICONS.github }, []),
            h('span', {}, ['GitHub']),
        ]),
        (() => {
            const copyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
            const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
            const row = h('div', { className: 'contact-popup__email-row' }, []);
            const mailLink = h('a', { href: `mailto:${portfolioData.email}`, className: 'contact-popup__item contact-popup__item--email' }, [
                h('span', { className: 'contact-popup__icon', innerHTML: ICONS.email }, []),
                h('span', {}, ['Email']),
            ]);
            const copyBtn = h('button', { className: 'contact-popup__copy', 'aria-label': 'Copy email' }, [
                h('span', { className: 'contact-popup__copy-icon', innerHTML: copyIcon }, []),
            ]);
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(portfolioData.email);
                copyBtn.querySelector('.contact-popup__copy-icon')!.innerHTML = checkIcon;
                copyBtn.classList.add('is-copied');
                setTimeout(() => {
                    copyBtn.querySelector('.contact-popup__copy-icon')!.innerHTML = copyIcon;
                    copyBtn.classList.remove('is-copied');
                }, 1500);
            });
            row.appendChild(mailLink);
            row.appendChild(copyBtn);
            return row;
        })(),
    ]);

    const contactWrap = h('div', { className: 'bottom-nav__contact-wrap' }, [popup, contactBtn]);

    contactBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        contactWrap.classList.toggle('is-open');
    });

    document.addEventListener('click', () => {
        contactWrap.classList.remove('is-open');
    });

    popup.addEventListener('click', (e) => e.stopPropagation());

    const navInner = h('nav', { className: 'bottom-nav' }, [...navLinks, divider, contactWrap]);

    return navInner;
}

// --- HERO SECTION ---
function createHeroSection() {
    return h('section', { id: 'hero', className: 'hero section' }, [
        h('div', { className: 'hero__content' }, [
            h('p', { className: 'hero__greeting' }, ['Hi, I\'m']),
            h('h1', { className: 'hero__name' }, [portfolioData.name]),
            h('p', { className: 'hero__catchphrase' }, [portfolioData.catchphrase]),
            h('p', { className: 'hero__bio' }, [portfolioData.bio]),
            h('div', { className: 'hero__socials' }, [
                h('a', { href: portfolioData.socials.linkedin, className: 'social__link', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'LinkedIn' }, [
                    h('span', { innerHTML: ICONS.linkedin }, []),
                    h('span', {}, ['LinkedIn'])
                ]),
                h('a', { href: portfolioData.socials.github, className: 'social__link', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'GitHub' }, [
                    h('span', { innerHTML: ICONS.github }, []),
                    h('span', {}, ['GitHub'])
                ]),
                (() => {
                    const copyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
                    const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
                    const sendIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

                    const wrap = h('div', { className: 'social__email-wrap' }, []);
                    const btn = h('button', { className: 'social__link social__link--email', 'aria-label': 'Email' }, [
                        h('span', { innerHTML: ICONS.email }, []),
                        h('span', {}, ['Email']),
                    ]);

                    const dropdown = h('div', { className: 'email-dropdown' }, [
                        h('a', { href: `mailto:${portfolioData.email}`, className: 'email-dropdown__item' }, [
                            h('span', { className: 'email-dropdown__icon', innerHTML: sendIcon }, []),
                            h('span', {}, ['Send Email']),
                        ]),
                        (() => {
                            const copyItem = h('button', { className: 'email-dropdown__item email-dropdown__copy' }, [
                                h('span', { className: 'email-dropdown__icon email-dropdown__copy-icon', innerHTML: copyIcon }, []),
                                h('span', { className: 'email-dropdown__copy-label' }, ['Copy Address']),
                            ]);
                            copyItem.addEventListener('click', (e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(portfolioData.email);
                                copyItem.querySelector('.email-dropdown__copy-icon')!.innerHTML = checkIcon;
                                copyItem.querySelector('.email-dropdown__copy-label')!.textContent = 'Copied!';
                                copyItem.classList.add('is-copied');
                                setTimeout(() => {
                                    copyItem.querySelector('.email-dropdown__copy-icon')!.innerHTML = copyIcon;
                                    copyItem.querySelector('.email-dropdown__copy-label')!.textContent = 'Copy Address';
                                    copyItem.classList.remove('is-copied');
                                    wrap.classList.remove('is-open');
                                }, 1200);
                            });
                            return copyItem;
                        })(),
                    ]);

                    wrap.appendChild(btn);
                    wrap.appendChild(dropdown);

                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        wrap.classList.toggle('is-open');
                    });

                    document.addEventListener('click', () => wrap.classList.remove('is-open'));
                    dropdown.addEventListener('click', (e) => e.stopPropagation());

                    return wrap;
                })(),
            ])
        ]),
    ]);
}

// --- EXPERIENCE SECTION (2-column grid cards) ---
function createExperienceSection() {
    const cards = portfolioData.experience.map(item =>
        h('div', { className: `exp-card${item.muted ? ' exp-card--muted' : ''}` }, [
            h('div', { className: 'exp-card__top' }, [
                h('h3', { className: 'exp-card__role' }, [item.role]),
                h('span', { className: 'exp-card__company' }, [item.company]),
            ]),
            h('div', { className: 'exp-card__timeline' }, [
                h('span', { className: 'exp-card__dot' }, []),
                h('span', { className: 'exp-card__line' }, []),
                h('span', { className: 'exp-card__period' }, [item.period]),
            ]),
            h('ul', { className: 'exp-card__desc' }, item.description.map(d => h('li', {}, [d]))),
        ])
    );

    return h('section', { id: 'experience', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Experience']),
        h('div', { className: 'exp-grid' }, cards)
    ]);
}

// --- PROJECTS SECTION (Horizontal scroll) ---
function createProjectsSection() {
    const projectCards = portfolioData.projects.map(project => {
        const children: (HTMLElement | string)[] = [
            h('h3', { className: 'project-name' }, [project.name]),
        ];

        if (project.link) {
            const linkCapsule = h('a', {
                href: project.link,
                className: 'project-link-capsule',
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `View ${project.name} on ${project.linkLabel}`,
            }, [
                h('span', { className: 'project-link-icon', innerHTML: ICONS.externalLink }, []),
                h('span', {}, [project.linkLabel]),
            ]);
            children.push(linkCapsule);
        }

        children.push(
            h('p', { className: 'project-description' }, [project.description]),
            h('div', { className: 'project-tags' }, project.tags.map(tag => h('span', { className: 'project-tag' }, [tag])))
        );

        return h('div', { className: 'project-card' }, children);
    });

    return h('section', { id: 'projects', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Projects']),
        h('div', { className: 'projects-scroll-wrapper' }, [
            h('div', { className: 'projects-scroll' }, projectCards)
        ])
    ]);
}

// --- HACKATHON WINS SECTION (Horizontal scroll timeline) ---
function createHackathonsSection() {
    const timelineItems = portfolioData.hackathonWins.map((item, index) =>
        h('div', { className: `hack-timeline-item ${index % 2 === 0 ? 'hack-timeline-item--above' : 'hack-timeline-item--below'}` }, [
            h('div', { className: 'hack-timeline-dot' }, []),
            h('div', { className: 'hack-timeline-content' }, [
                ...(item.result !== 'TBD' ? [h('span', { className: `hack-timeline-result ${item.result.includes('Winner') ? 'hack-timeline-result--winner' : 'hack-timeline-result--finalist'}` }, [item.result])] : []),
                h('h3', { className: 'hack-timeline-event' }, [item.event]),
                h('p', { className: 'hack-timeline-project' }, [item.project]),
                h('p', { className: 'hack-timeline-desc' }, [item.description]),
                h('div', { className: 'hack-timeline-footer' }, [
                    ...(item.tags.length > 0 ? [
                        h('div', { className: 'hack-timeline-tags' }, item.tags.map(tag => h('span', { className: 'hack-tag' }, [tag])))
                    ] : []),
                    ...(item.date ? [h('span', { className: 'hack-timeline-date' }, [item.date])] : []),
                ]),
            ])
        ])
    );

    return h('section', { id: 'hackathons', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Hackathon Wins']),
        h('p', { className: 'section-subtitle' }, ['5x Hackathon Winner — recognized for innovation across AI competitions.']),
        h('div', { className: 'hack-scroll-wrapper' }, [
            h('div', { className: 'hack-timeline' }, timelineItems)
        ])
    ]);
}

// --- SKILLS SECTION ---
const SKILL_ICONS: Record<string, string> = {
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2a3.5 3.5 0 00-3.44 4.15A3.5 3.5 0 004 9.5c0 1.26.67 2.37 1.67 2.99A3.5 3.5 0 004 15.5a3.5 3.5 0 003.5 3.5h.5V22h5v-3h.5a3.5 3.5 0 002.44-6.01A3.5 3.5 0 0020 9.5a3.5 3.5 0 00-2.06-3.18A3.5 3.5 0 0014.5 2h-5z"/><path d="M12 2v20"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
};

// --- EDUCATION SECTION ---
function createEducationSection() {
    const educationCards = portfolioData.education.map(edu =>
        h('div', { className: 'edu-card' }, [
            h('div', { className: 'edu-card__header' }, [
                h('h3', { className: 'edu-card__school' }, [edu.school]),
                h('span', { className: 'edu-card__location' }, [edu.location]),
            ]),
            h('p', { className: 'edu-card__degree' }, [edu.degree]),
            h('div', { className: 'edu-card__meta' }, [
                h('span', { className: 'edu-card__period' }, [edu.period]),
                h('span', { className: 'edu-card__gpa' }, [`${(edu as any).isCgpa ? 'CGPA' : 'GPA'}: ${edu.gpa}`]),
            ]),
        ])
    );

    return h('section', { id: 'education', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Education']),
        h('div', { className: 'edu-grid' }, educationCards)
    ]);
}

function createSkillsSection() {
    const skillCategories = portfolioData.skills.map((category, catIdx) => {
        const iconSvg = SKILL_ICONS[category.icon] || SKILL_ICONS.code;
        const isFirst = catIdx === 0;

        return h('div', { className: `skill-category ${isFirst ? 'skill-category--featured' : ''}` }, [
            h('div', { className: 'skill-category__header' }, [
                h('span', { className: 'skill-category__icon', innerHTML: iconSvg }, []),
                h('h3', { className: 'skill-category-title' }, [category.category]),
            ]),
            h('div', { className: 'skills-list' },
                category.list.map(skill =>
                    h('span', { className: 'skill-tag' }, [skill])
                )
            ),
        ]);
    });

    return h('section', { id: 'skills', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Technical Skills']),
        h('div', { className: 'skills-grid' }, skillCategories)
    ]);
}

// --- FOOTER ---
function createFooter() {
    const year = new Date().getFullYear();
    return h('footer', { className: 'footer' }, [`\u00A9 ${year} ${portfolioData.name}. All Rights Reserved.`]);
}

// --- COMET CURSOR TRAIL ---
function createCometTrail() {
    const canvas = document.createElement('canvas');
    canvas.className = 'comet-canvas';
    const ctx = canvas.getContext('2d')!;
    let w = 0, cH = 0;

    interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        hue: number;
    }

    const particles: Particle[] = [];
    let mouseX = -100, mouseY = -100;
    let prevMouseX = -100, prevMouseY = -100;
    let isMoving = false;
    let moveTimeout: number;

    function resize() {
        w = canvas.width = window.innerWidth;
        cH = canvas.height = document.documentElement.scrollHeight;
    }

    function onMouseMove(e: MouseEvent) {
        mouseX = e.clientX;
        mouseY = e.clientY + window.scrollY;
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = window.setTimeout(() => { isMoving = false; }, 100);
    }

    function spawnParticles() {
        if (!isMoving) return;

        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        if (speed < 2) return;

        const count = Math.min(Math.floor(speed / 4), 5);
        for (let i = 0; i < count; i++) {
            const spread = 3;
            const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.2;
            const vel = speed * 0.08 + Math.random() * 1.5;
            particles.push({
                x: mouseX + (Math.random() - 0.5) * spread,
                y: mouseY + (Math.random() - 0.5) * spread,
                vx: Math.cos(angle) * vel + (Math.random() - 0.5) * 0.5,
                vy: Math.sin(angle) * vel + (Math.random() - 0.5) * 0.5,
                life: 1,
                maxLife: 0.6 + Math.random() * 0.5,
                size: 1.5 + Math.random() * 2.5,
                hue: Math.random() > 0.5 ? 270 : 320, // purple or pink
            });
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
    }

    function draw() {
        ctx.clearRect(0, 0, w, cH);
        spawnParticles();

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.life -= 0.02 / p.maxLife;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            const alpha = p.life * 0.6;
            const glowSize = p.size * (1 + (1 - p.life) * 0.5);

            // Outer glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowSize * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.12})`;
            ctx.fill();

            // Core particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, ${alpha})`;
            ctx.fill();
        }

        // Cap particle count
        if (particles.length > 200) {
            particles.splice(0, particles.length - 200);
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resize);
    // Recalc height when scroll height changes (e.g. sections animate in)
    const resizeObserver = new ResizeObserver(() => {
        canvas.height = document.documentElement.scrollHeight;
        cH = canvas.height;
    });
    resizeObserver.observe(document.documentElement);

    resize();
    draw();

    return canvas;
}

// --- MAIN APP RENDER ---
function renderApp() {
    const root = document.getElementById('app-root');
    if (!root) return;
    root.innerHTML = '';

    root.appendChild(createHeroSection());
    root.appendChild(createExperienceSection());
    root.appendChild(createProjectsSection());
    root.appendChild(createHackathonsSection());
    root.appendChild(createEducationSection());
    root.appendChild(createSkillsSection());
    root.appendChild(createFooter());

    // AI animated background canvas
    document.body.appendChild(createAIBackground());

    // Comet cursor trail
    document.body.appendChild(createCometTrail());

    // Bottom nav
    document.body.appendChild(createBottomNav());

    setupScrollAnimations();
    setupSmoothScrolling();
    setupActiveNavOnScroll();
}

// --- INTERACTIVITY ---
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function setupActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section[id], #hero');
    const navLinks = document.querySelectorAll('.bottom-nav__item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('bottom-nav__item--active', link.getAttribute('data-section') === id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -40% 0px' });

    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', renderApp);

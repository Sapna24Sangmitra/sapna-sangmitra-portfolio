/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATA ---
const portfolioData = {
    name: "Sapna Sangmitra",
    tagline: "Software Engineer | AI Enthusiast",
    bio: "A passionate and driven Master's student in Engineering at San Jose State University, I bring years of experience as a Java backend developer building secure, high-performance APIs. Now, I'm diving deeper into Artificial Intelligence—exploring machine learning, generative AI, and computer vision through projects and research. From designing robust backend systems to prototyping creative AI solutions, I love turning ideas into real, impactful products.",
    email: "ssangmitra@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/sapna-sangmitra",
        github: "https://github.com/Sapna24Sangmitra",
    },
    experience: [
      {
        role: "Research Assistant",
        company: "San Jose State University",
        period: "May 2025 - Present",
        description: [
          "Developing an interactive web application using React to teach foundational AI concepts to middle and high school students.",
          "Collaborating on creating engaging educational content, including lecture videos, to support accessible and effective AI education.",
          "Project sponsored by Lockheed Martin, Juniper Networks, KLA+, and Ford.",
        ],
      },
      {
        role: "Software Development Engineer II",
        company: "Infosys",
        period: "July 2022 - Jan 2024",
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
        description: [
          "Developed high-performance APIs using Spring Reactive and Java 8, enhancing concurrent request handling by 50%.",
          "Implemented comprehensive testing strategies, ensuring 85% code coverage and reducing production bugs by 35%.",
        ],
      },
       {
        role: "Programmer Analyst",
        company: "Cognizant",
        period: "Oct 2020 - Nov 2021",
        description: [
          "Developed secure Spring Boot APIs for a U.S. banking client, ensuring data integrity and compliance.",
          "Learned NodeJS to reduce backend dependency and contributed in Agile bug-fixing sprints.",
        ],
      },
    ],
    projects: [
        {
            name: "AWS Cloudathon - Winner",
            description: "Built and deployed a cloud-native architecture using various AWS services, following the AWS Well-Architected Framework. Secured 1st place among competing teams.",
            tags: ["AWS", "EC2", "Lambda", "RDS", "DynamoDB", "CloudFormation"],
        },
        {
            name: "Wavelly - Smart Safety Navigation App",
            description: "A safety-first navigation app using lighting, crime, and foot traffic data to recommend safer routes. Winner at SFHacks 2025.",
            tags: ["React", "Node.js", "Navigation", "Safety Analytics", "Hackathon Winner"],
        },
        {
            name: "PathSure - Enhanced Security Navigation Platform",
            description: "Enhanced version of Wavelly built for Cybersecurity Hackathon at SPartUp, SJSU. Added comprehensive security features including user authentication, SSO, MFA, and advanced security protocols.",
            tags: ["React", "Node.js", "Cybersecurity", "SSO", "MFA", "Authentication", "Security"],
        },
        {
            name: "LeetCode Video Creator",
            description: "An innovative app built with Vibe Coding that generates educational videos from LeetCode problems. Users input a question, solution, and optional explanation, and the app creates a comprehensive video with synchronized audio narration.",
            tags: ["Vibe Coding", "Video Generation", "Audio Synthesis", "Educational Tech", "Automation"],
        },
        {
            name: "YouTube Summary Video Generator",
            description: "A Generative AI-based automation tool that summarizes YouTube videos using YouTubeTranscriptAPI, LLaMA3, and AWS Polly for voice synthesis.",
            tags: ["Python", "Generative AI", "LLaMA3", "AWS Polly", "MoviePy"],
        },
        {
            name: "Swimming Style Analysis",
            description: "Analyzed swimmer videos using OpenCV and YOLOv8 to detect swimmers, create stick-figure structures, and estimate swimming styles.",
            tags: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
        },
    ],
    skills: [
        {
            category: "Programming & Data Engineering",
            list: ["Java", "Python", "JavaScript", "TypeScript", "C++", "React", "YAML", "JSON"]
        },
        {
            category: "Backend Technologies",
            list: ["Spring Boot", "REST API", "Spring Reactive", "NodeJS", "MySQL", "Vector DB", "Kafka", "NoSQL"]
        },
        {
            category: "Gen AI & Machine Learning",
            list: ["Prompt Engineering", "LangChain", "PyTorch", "NLP", "Computer Vision"]
        },
        {
            category: "Development Tools",
            list: ["Git", "GitHub", "JIRA", "Docker", "Postman", "Swagger", "Confluence", "AWS"]
        }
    ],
};

// --- SVG ICONS ---
const ICONS = {
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>`,
};

// --- UI BUILDER FUNCTIONS ---

/** Creates a DOM element with attributes and children */
function h(tag: string, attrs: Record<string, any> = {}, children: (HTMLElement | string)[] = []) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'innerHTML') {
            element.innerHTML = value;
        } else if (value != null) { // Use != to catch both null and undefined
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


function createHeader() {
    return h('header', { className: 'header' }, [
        h('a', { href: '#hero', className: 'header__logo' }, [portfolioData.name]),
        h('nav', { className: 'nav' }, [
            h('ul', { className: 'nav__list' }, [
                h('li', {}, [h('a', { href: '#experience', className: 'nav__link' }, ['Experience'])]),
                h('li', {}, [h('a', { href: '#projects', className: 'nav__link' }, ['Projects'])]),
                h('li', {}, [h('a', { href: '#skills', className: 'nav__link' }, ['Skills'])]),
            ])
        ])
    ]);
}

function createHeroSection() {
    return h('section', { id: 'hero', className: 'hero section' }, [
        h('h1', { className: 'hero__name' }, [portfolioData.name]),
        h('p', { className: 'hero__tagline' }, [portfolioData.tagline]),
        h('p', { className: 'hero__bio' }, [portfolioData.bio]),
        h('div', { className: 'hero__socials' }, [
            h('a', { href: portfolioData.socials.linkedin, className: 'social__link', target: '_blank', innerHTML: ICONS.linkedin, 'aria-label': 'LinkedIn' }),
            h('a', { href: portfolioData.socials.github, className: 'social__link', target: '_blank', innerHTML: ICONS.github, 'aria-label': 'GitHub' }),
            h('a', { href: `mailto:${portfolioData.email}`, className: 'social__link', innerHTML: ICONS.email, 'aria-label': 'Email' }),
        ])
    ]);
}

function createExperienceSection() {
    const timelineItems = portfolioData.experience.map(item =>
        h('div', { className: 'timeline-item' }, [
            h('div', { className: 'timeline-content' }, [
                h('h3', { className: 'timeline-role' }, [item.role]),
                h('p', { className: 'timeline-company' }, [item.company]),
                h('p', { className: 'timeline-period' }, [item.period]),
                h('ul', { className: 'timeline-description' }, item.description.map(d => h('li', {}, [d])))
            ])
        ])
    );

    return h('section', { id: 'experience', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Experience']),
        h('div', { className: 'timeline' }, timelineItems)
    ]);
}

function createProjectsSection() {
    const projectCards = portfolioData.projects.map(project =>
        h('div', { className: 'project-card' }, [
            h('h3', { className: 'project-name' }, [project.name]),
            h('p', { className: 'project-description' }, [project.description]),
            h('div', { className: 'project-tags' }, project.tags.map(tag => h('span', { className: 'project-tag' }, [tag])))
        ])
    );

    return h('section', { id: 'projects', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Projects']),
        h('div', { className: 'projects-grid' }, projectCards)
    ]);
}

function createSkillsSection() {
    const skillCategories = portfolioData.skills.map(category =>
        h('div', { className: 'skill-category' }, [
            h('h3', { className: 'skill-category-title' }, [category.category]),
            h('div', { className: 'skills-list' }, category.list.map(skill => h('span', { className: 'skill-tag' }, [skill])))
        ])
    );

    return h('section', { id: 'skills', className: 'section' }, [
        h('h2', { className: 'section-title' }, ['Technical Skills']),
        h('div', { className: 'skills-container' }, skillCategories)
    ]);
}

function createFooter() {
    const year = new Date().getFullYear();
    return h('footer', { className: 'footer' }, [`© ${year} ${portfolioData.name}. All Rights Reserved.`]);
}

// --- MAIN APP RENDER ---
function renderApp() {
    const root = document.getElementById('app-root');
    if (!root) {
        console.error('App root not found!');
        return;
    }
    // Clear any previous content
    root.innerHTML = '';

    // Build and append all components
    root.appendChild(createHeader());
    root.appendChild(createHeroSection());
    root.appendChild(createExperienceSection());
    root.appendChild(createProjectsSection());
    root.appendChild(createSkillsSection());
    root.appendChild(createFooter());

    // --- INTERACTIVITY ---
    // Fade-in sections on scroll
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
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Run the app once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderApp);
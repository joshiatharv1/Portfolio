import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Download, Play, ExternalLink, Moon, Sun } from 'lucide-react';

export default function FAANGResumePortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Building scalable systems and AI-powered solutions";
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Floating Action Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${scrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
          <div className="max-w-[850px] mx-auto px-8 py-3 flex items-center justify-between">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Atharv Joshi</span>
            <div className="flex items-center gap-3">
              <button onClick={toggleDarkMode} 
                      className={`p-2 rounded transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                {darkMode ? <Sun className="w-4 h-4 text-gray-200" /> : <Moon className="w-4 h-4 text-gray-700" />}
              </button>
              <a href="https://github.com/joshiatharv1" target="_blank" rel="noopener noreferrer" 
                 className={`p-2 rounded transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Github className={`w-4 h-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                 className={`p-2 rounded transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Linkedin className={`w-4 h-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              </a>
              <a href="/resume.pdf" download 
                 className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle - Top Right */}
      <button onClick={toggleDarkMode}
              className={`fixed top-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 print:hidden ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
        {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>

      {/* Resume Document */}
      <div className={`max-w-[850px] mx-auto px-8 py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        
        {/* Header */}
        <header className={`mb-6 pb-4 border-b fade-in-section ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <h1 className={`text-3xl font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>Atharv Joshi</h1>
          <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <a href="tel:7818732929" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>(781) 873-2929</a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
            <a href="mailto:joshi.atharv1@northeastern.edu" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              joshi.atharv1@northeastern.edu
            </a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
            <span>Boston, MA</span>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>|</span>
            <a href="https://github.com/joshiatharv1" target="_blank" rel="noopener noreferrer" 
               className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>github.com/joshiatharv1</a>
          </div>
          <div className="flex items-center gap-3 mt-3 print:hidden">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
               className={`inline-flex items-center gap-1.5 text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href="/resume.pdf" download
               className={`inline-flex items-center gap-1.5 text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
          
          <div className="mb-3">
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Northeastern University</h3>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2023 – Dec 2025</span>
            </div>
            <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              MS in Information Systems <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>| GPA: 3.6/4.0</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Medi-Caps University</h3>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2019 – May 2023</span>
            </div>
            <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              BS in Computer Science <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>| GPA: 3.8/4.0</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
          <div className="space-y-1.5 text-sm">
            <div className="flex">
              <span className={`font-semibold min-w-[140px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>Languages:</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Java, Python, TypeScript, JavaScript, C#, .Net</span>
            </div>
            <div className="flex">
              <span className={`font-semibold min-w-[140px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>Backend & APIs:</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Spring Boot, Node.js, REST, gRPC, GraphQL, JWT, OAuth2</span>
            </div>
            <div className="flex">
              <span className={`font-semibold min-w-[140px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>Cloud & DevOps:</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>AWS (ECS, EC2, RDS, S3, ALB, MSK), Docker, Terraform, GitHub Actions, CI/CD, Linux</span>
            </div>
            <div className="flex">
              <span className={`font-semibold min-w-[140px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>Databases:</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>PostgreSQL, MySQL, MongoDB, Redis</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
          
          <div className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Software Developer Co-op</h3>
                <a href="https://drive.google.com/file/d/YOUR_IPSERLAB_VIDEO" target="_blank" rel="noopener noreferrer"
                   className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                  <Play className="w-3 h-3" />
                  <span>Demo</span>
                </a>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Feb 2025 – May 2025</span>
            </div>
            <div className={`mb-2 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>IpserLab LLC – Fort Worth, TX</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Improved frontend performance and maintainability by refactoring React components and eliminating deep prop drilling across 8+ levels.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built a metadata-driven backend that auto-generated Java models and REST APIs from XML schemas, reducing manual API development and accelerating feature delivery.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Reduced production deployment failures from 20% to 5% by introducing pre-deployment dependency validation and CI safeguards.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Reviewed 50+ PRs/week and contributed to CI/CD stability through Git hooks and release process improvements.</span>
              </li>
            </ul>
          </div>

          <div className={`transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Java Developer Intern</h3>
                <a href="https://drive.google.com/file/d/YOUR_AFFIMINTUS_VIDEO" target="_blank" rel="noopener noreferrer"
                   className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                  <Play className="w-3 h-3" />
                  <span>Demo</span>
                </a>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jan 2023 – Jun 2023</span>
            </div>
            <div className={`mb-2 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Affimintus Technologies – Indore, MP</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built a Java-based authentication and attendance system using Core Java, JavaFX, and Tomcat.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Implemented email/SMS notifications and Oracle stored procedures for reporting and automation.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Gained hands-on exposure to Active Directory–based authentication deployed on VMware virtual machines, collaborating with ops teams on configuration, testing, and documentation.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
          
          <div className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Agentic AI Recipe-to-Grocery Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <a href="https://drive.google.com/file/d/YOUR_RECIPE_VIDEO" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                    <Play className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jan 2026 – Feb 2026</span>
            </div>
            <div className={`mb-2 text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java, Spring Boot, OpenAI API, REST</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Designed an agent-based AI platform that converts YouTube recipe videos into structured grocery lists by orchestrating multiple LLM-driven agents for transcription analysis, ingredient extraction, and quantity normalization</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built backend services in Java & Spring Boot to coordinate AI agents, manage tool execution, and enforce structured JSON outputs.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Integrated external APIs (YouTube Transcript, LLMs, Maps/Places) to enable AI-driven workflows beyond simple prompt-response interactions.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Implemented caching and failure-handling strategies to ensure reliable agent execution and low-latency responses.</span>
              </li>
            </ul>
          </div>

          <div className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Patient Management Microservices Platform</h3>
                <div className="flex items-center gap-1.5">
                  <a href="https://drive.google.com/file/d/YOUR_PATIENT_VIDEO" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                    <Play className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/joshiatharv1/patient-management" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <ExternalLink className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Oct 2025 – Dec 2025</span>
            </div>
            <div className={`mb-2 text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java, Spring Boot, Kafka, gRPC</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Designed and implemented a Spring Boot microservices system with JWT authentication and API gateway routing.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built a gRPC billing service and Kafka-based event streaming for near real-time analytics.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Deployed containerized services on AWS ECS with RDS and MSK.</span>
              </li>
            </ul>
          </div>

          <div className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Smart City Air Quality Monitoring System</h3>
                <div className="flex items-center gap-1.5">
                  <a href="https://drive.google.com/file/d/YOUR_AIRQUALITY_VIDEO" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                    <Play className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/joshiatharv1/air-quality" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <ExternalLink className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2025 – Nov 2025</span>
            </div>
            <div className={`mb-2 text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Kafka, Flink, AWS</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built a real-time IoT data pipeline using Kafka and Apache Flink to process air quality sensor data (CO₂, PM2.5).</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Optimized low-latency streaming through Kafka partitioning and Flink checkpointing for fault tolerance.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Delivered live monitoring dashboards using Grafana / AWS QuickSight with sub-second refresh rates.</span>
              </li>
            </ul>
          </div>

          <div className={`transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Inventory Manager</h3>
                <div className="flex items-center gap-1.5">
                  <a href="https://drive.google.com/file/d/YOUR_INVENTORY_VIDEO" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                    <Play className="w-3 h-3" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/joshiatharv1/inventory-manager" target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <ExternalLink className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jun 2025 – Aug 2025</span>
            </div>
            <div className={`mb-2 text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Next.js, TypeScript, Node.js, PostgreSQL, AWS</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Developed a full-stack inventory dashboard using Next.js, TypeScript, Redux Toolkit, and Tailwind CSS.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Built scalable backend APIs with Node.js, Prisma ORM, and PostgreSQL, enabling efficient CRUD operations.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Improved API performance and client-side caching using RTK Query.</span>
              </li>
              <li className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                <span>Deployed infrastructure on AWS using RDS, S3, EC2, Amplify, and API Gateway for secure, scalable access.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer with Typing Animation */}
        <div className={`mt-8 pt-6 border-t fade-in-section ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-sm mb-2 text-center min-h-[20px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {typedText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </p>
          <div className={`flex justify-center items-center gap-3 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <a href="mailto:joshi.atharv1@northeastern.edu" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Email</a>
            <span>•</span>
            <a href="https://github.com/joshiatharv1" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Styles */}
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:hover\\:transform-none:hover {
            transform: none !important;
          }
          
          .print\\:hover\\:bg-transparent:hover {
            background: transparent !important;
          }
          
          @page {
            margin: 0.5in;
          }
          
          .fade-in-section {
            opacity: 1 !important;
            transform: none !important;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
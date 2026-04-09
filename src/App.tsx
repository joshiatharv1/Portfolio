import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Download, Moon, Sun, ExternalLink, Copy, Clock } from 'lucide-react';

export default function FAANGResumePortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Building scalable systems and AI-powered solutions";
  const [copied, setCopied] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <a href="https://www.linkedin.com/in/atharvjoshi444/" target="_blank" rel="noopener noreferrer"
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
          <div className="flex items-center gap-3 mt-3 print:hidden flex-wrap">
            <a href="https://www.linkedin.com/in/atharvjoshi444/" target="_blank" rel="noopener noreferrer"
               className={`inline-flex items-center gap-1.5 text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href="/resume.pdf" download
               className={`inline-flex items-center gap-1.5 text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('joshi.atharv1@northeastern.edu');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`inline-flex items-center gap-1.5 text-sm transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              {copied ? <span className="text-green-500 font-medium">✓ Copied!</span> : <><Copy className="w-3.5 h-3.5" /><span>Copy Email</span></>}
            </button>
            <span className={`inline-flex items-center gap-1.5 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Clock className="w-3.5 h-3.5" />
              <span>~2 min read</span>
            </span>
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
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
          <div className="space-y-1.5 text-sm">
            {[
              ['Languages', 'Java, Python, TypeScript, JavaScript, C#'],
              ['Backend & Distributed Systems', 'Spring Boot, Node.js, FastAPI, REST APIs, gRPC, GraphQL, Microservices, Event-Driven Architecture'],
              ['Cloud & DevOps', 'AWS (ECS, EC2, RDS, S3, MSK, ALB, CloudWatch), Docker, Terraform, Jenkins, CI/CD, Git'],
              ['Databases & Messaging', 'PostgreSQL, MySQL, MongoDB, Redis, Kafka'],
              ['Auth & Security', 'JWT, OAuth2'],
              ['Monitoring & Tools', 'Datadog, Maven'],
            ].map(([k, v]) => (
              <div key={k} className="flex">
                <span className={`font-semibold min-w-[210px] ${darkMode ? 'text-white' : 'text-gray-900'}`}>{k}:</span>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Professional Experience</h2>

          <div className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Software Engineer Co-op</h3>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Feb 2025 – May 2025</span>
            </div>
            <div className={`mb-2 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>IpserLab LLC – Fort Worth, TX</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {[
                'Refactored complex React components, eliminating deep prop drilling (8+ levels) and reducing unnecessary re-renders by 35%, improving UI performance.',
                'Built a metadata-driven backend system to auto-generate Java classes and REST APIs from XML schemas, reducing feature development time by 40%.',
                'Improved production reliability by implementing dependency validation and CI safeguards, reducing deployment failures from 20% to 5%.',
                'Contributed to Agile development through code reviews and CI/CD enhancements, reviewing 50+ PRs weekly.',
              ].map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Software Intern</h3>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jan 2023 – Jun 2023</span>
            </div>
            <div className={`mb-2 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Affimintus Technologies – Indore, MP</div>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {[
                'Developed a Java-based shipment tracking prototype with JavaFX UI, using IBM DB2 for persistence to learn enterprise database modelling and SQL querying.',
                'Applied data structures and algorithms (graphs for route simulation, priority queues for delivery ordering, hash maps for state lookup) to implement core routing logic.',
              ].map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6 fade-in-section">
          <h2 className={`text-lg font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>Academic Projects</h2>

          {[
            {
              title: 'Bookified – AI Voice Platform for Interactive PDF Conversations',
              stack: 'Next.js, MongoDB, Vapi, ElevenLabs, Clerk',
              date: 'Feb 2026 – Mar 2026',
              link: '#',
              bullets: [
                'Built an AI-powered full-stack platform using Next.js and MongoDB to convert PDFs into real-time voice-interactive experiences.',
                'Integrated low-latency voice AI using Vapi and ElevenLabs for speech-to-text, text-to-speech, and contextual conversational agents.',
                'Designed backend pipelines for PDF parsing, session-based chat storage, and authentication using Clerk, with REST APIs and usage-based access control.',
              ],
            },
            {
              title: 'Microservices Inventory and Order Management System',
              stack: 'FastAPI, Redis, Docker Compose',
              date: 'Jan 2026 – Mar 2026',
              link: '#',
              bullets: [
                'Architected a microservices-based e-commerce system using FastAPI, Redis, and Docker Compose with event-driven order processing via Redis Streams.',
                'Implemented asynchronous workflows for inventory updates and payment handling, ensuring consistency and fault tolerance.',
              ],
            },
            {
              title: 'Real-Time Web Analytics Platform',
              stack: 'FastAPI, TimescaleDB',
              date: 'Jan 2026 – Mar 2026',
              link: '#',
              bullets: [
                'Built a high-throughput event ingestion API using FastAPI with validated schemas and modular routing.',
                'Designed a time-series data model using TimescaleDB hypertables with optimized aggregation queries (time_bucket).',
                'Simulated 10K+ events to analyze user behavior, enabling insights on traffic patterns and session analytics.',
              ],
            },
            {
              title: 'Patient Management Microservices Platform',
              stack: 'Java, Spring Boot, Kafka, gRPC, AWS',
              date: 'Oct 2025 – Dec 2025',
              link: 'https://github.com/joshiatharv1/patient-management',
              bullets: [
                'Designed a distributed microservices architecture with JWT authentication and API gateway routing for patient data services.',
                'Implemented event-driven communication using Kafka and gRPC for reliable, low-latency inter-service messaging.',
                'Containerized and deployed services on AWS ECS, integrating Amazon RDS and MSK for scalable data and streaming infrastructure.',
              ],
            },
          ].map((proj, idx) => (
            <div key={idx} className={`mb-4 transition-transform duration-300 hover:-translate-y-1 ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'} p-3 -m-3 rounded-lg print:hover:transform-none print:hover:bg-transparent`}>
              <div className="flex justify-between items-baseline mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer"
                     className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded transition-colors print:hidden ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <ExternalLink className="w-3 h-3" />
                    <span>Link</span>
                  </a>
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{proj.date}</span>
              </div>
              <div className={`mb-2 text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{proj.stack}</div>
              <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {proj.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <a href="https://www.linkedin.com/in/atharvjoshi444/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>LinkedIn</a>
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
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          @page { margin: 0.5in; }
          .fade-in-section { opacity: 1 !important; transform: none !important; }
          a { color: inherit; text-decoration: none; }
          button { display: none; }
        }
      `}</style>
    </div>
  );
}
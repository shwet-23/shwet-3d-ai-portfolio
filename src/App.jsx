import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Sparkles, BrainCircuit, Workflow, FileSearch, Bot, Layers3,
  ExternalLink, Code2, Database, Cpu, Globe2, ChevronRight
} from 'lucide-react';
import Scene3D from './components/Scene3D.jsx';

const GITHUB = 'https://github.com/shwet-23';
const LINKEDIN = 'https://www.linkedin.com/in/shwet-pandit/';
const EMAIL = 'shwetpandit13@gmail.com';

const seedProjects = [
  {
    name: 'AI Document Intelligence & RAG',
    description: 'Ask questions across documents with semantic retrieval, contextual answers, and source-aware responses.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Ollama'],
    url: 'https://github.com/shwet-23/AI-Document-Intelligence-RAG',
    icon: FileSearch,
    number: '01',
    tone: 'violet',
  },
  {
    name: 'AI Customer Support Chatbot',
    description: 'A conversational support experience with a FastAPI backend and responsive web interface.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'LLMs'],
    url: 'https://github.com/shwet-23/AI-Customer-Support-Chatbot',
    demo: 'https://ai-customer-support-chatbot-9qmb.onrender.com/',
    icon: Bot,
    number: '02',
    tone: 'mint',
  },
  {
    name: 'Customer Churn Prediction',
    description: 'Machine learning workflow to explore customer behavior and predict churn risk.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    url: 'https://github.com/shwet-23/customer-churn-prediction',
    icon: BrainCircuit,
    number: '03',
    tone: 'blue',
  },
  {
    name: 'Credit Card Fraud Detection',
    description: 'Classification project focused on identifying potentially fraudulent transactions.',
    stack: ['Python', 'ML', 'Data Analysis'],
    url: 'https://github.com/shwet-23/credit-card-fraud-detection',
    icon: Cpu,
    number: '04',
    tone: 'pink',
  },
  {
    name: 'House Price Prediction',
    description: 'Regression pipeline that estimates house prices from structured property features.',
    stack: ['Python', 'Regression', 'Scikit-learn'],
    url: 'https://github.com/shwet-23/house-price-prediction',
    icon: Layers3,
    number: '05',
    tone: 'orange',
  },
  {
    name: 'Sales Analysis & Prediction',
    description: 'Exploratory analysis and predictive modeling to turn sales data into useful insights.',
    stack: ['Python', 'Pandas', 'Matplotlib'],
    url: 'https://github.com/shwet-23/sales-analysis-prediction',
    icon: Database,
    number: '06',
    tone: 'mint',
  },
  {
    name: 'Superstore Sales Analysis',
    description: 'An exploratory data analysis project uncovering trends in sales and profitability.',
    stack: ['Python', 'Pandas', 'Seaborn'],
    url: 'https://github.com/shwet-23/superstore-sales-analysis',
    icon: Globe2,
    number: '07',
    tone: 'blue',
  },
];

const skills = [
  { title: 'LLM Applications', detail: 'RAG · Prompting · LLM APIs', icon: BrainCircuit },
  { title: 'AI Automation', detail: 'n8n · Webhooks · Workflows', icon: Workflow },
  { title: 'Backend Engineering', detail: 'Python · FastAPI · REST APIs', icon: Code2 },
  { title: 'Data & Retrieval', detail: 'Embeddings · ChromaDB · Search', icon: Database },
];

const stack = ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Ollama', 'Sentence Transformers', 'OpenAI API', 'n8n', 'Pandas', 'Scikit-learn', 'Streamlit', 'Git & GitHub'];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['What I build', '#expertise'], ['Projects', '#projects'], ['Contact', '#contact']];
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Shwet Pandit home">
        <span className="brand-mark">S<span>.</span></span>
        <span className="brand-name">SHWET PANDIT<small>AI ENGINEER</small></span>
      </a>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={14} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </header>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon || Code2;
  return (
    <motion.article className={`project-card ${project.tone || 'violet'}`} whileHover={{ y: -7 }} transition={{ duration: 0.22 }}>
      <div className="project-card-top">
        <span className="project-number">{project.number || String(index + 1).padStart(2, '0')} / PROJECT</span>
        <span className="project-icon"><Icon size={20} strokeWidth={1.6} /></span>
      </div>
      <div className="project-art" aria-hidden="true">
        <div className="art-grid"></div>
        <div className="art-orbit orbit-one"></div>
        <div className="art-orbit orbit-two"></div>
        <div className="art-core"><Icon size={34} strokeWidth={1.3} /></div>
        <span className="art-label">INTELLIGENCE / {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{(project.stack || []).slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={15} /></a>
          {project.demo && <a className="demo-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [projects, setProjects] = useState(seedProjects);
  const [repoStatus, setRepoStatus] = useState('Curated project collection');

  useEffect(() => {
    let alive = true;
    fetch('https://api.github.com/users/shwet-23/repos?type=owner&sort=updated&per_page=100')
      .then(res => {
        if (!res.ok) throw new Error('GitHub API unavailable');
        return res.json();
      })
      .then(repos => {
        if (!alive || !Array.isArray(repos)) return;
        const publicRepos = repos
          .filter(repo => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        if (!publicRepos.length) return;
        const knownByName = new Map(seedProjects.map(p => [p.url.split('/').pop().toLowerCase(), p]));
        const mapped = publicRepos.map((repo, i) => {
          const known = knownByName.get(repo.name.toLowerCase());
          return known ? { ...known, name: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), description: repo.description || known.description, url: repo.html_url, number: String(i + 1).padStart(2, '0') } : {
            name: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            description: repo.description || 'A practical engineering project exploring software, data, and intelligent systems.',
            stack: (repo.language ? [repo.language] : []).concat((repo.topics || []).slice(0, 3)),
            url: repo.html_url,
            icon: Code2,
            number: String(i + 1).padStart(2, '0'),
            tone: ['violet', 'mint', 'blue', 'pink', 'orange'][i % 5],
          };
        });
        setProjects(mapped);
        setRepoStatus(`Synced from GitHub · ${mapped.length} public repositories`);
      })
      .catch(() => { if (alive) setRepoStatus('Curated project collection'); });
    return () => { alive = false; };
  }, []);

  return (
    <div id="top" className="app-shell">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <Header />

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              <span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
              I build AI that<br />feels <span className="gradient-text">like magic.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>
              I’m Shwet — an AI Engineer building useful LLM applications, RAG systems, and intelligent automations that solve real problems.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
              <a className="button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button-quiet" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            </motion.div>
            <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span className="mono">01 — 03</span><span className="footnote-line"></span><span>From ideas to working systems</span>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="visual-ring ring-outer"></div>
            <div className="visual-ring ring-inner"></div>
            <Suspense fallback={<div className="scene-fallback"><Sparkles size={46} /></div>}><Scene3D /></Suspense>
            <div className="floating-chip chip-top"><span className="chip-icon"><BrainCircuit size={15} /></span><span>LLM SYSTEMS<small>Context-aware AI</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-pulse"></span><span>RAG PIPELINE<small>Retrieve · Reason · Respond</small></span></div>
            <div className="visual-caption"><span>FIG. 001</span><span>NEURAL INTERFACE / ACTIVE</span></div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="about-section section-wrap">
          <Reveal><div className="section-kicker"><span>01</span> / A LITTLE ABOUT ME</div></Reveal>
          <div className="about-grid">
            <Reveal className="about-heading"><h2>Curiosity is the<br />engine. <span className="muted-text">Building is<br />the proof.</span></h2></Reveal>
            <Reveal delay={0.12} className="about-body">
              <p className="large-copy">I enjoy turning complex AI concepts into practical, reliable tools — from document intelligence to automation workflows.</p>
              <p>My work combines Python engineering, retrieval systems, APIs, and thoughtful product design. I’m focused on learning by building, documenting the process, and shipping projects people can actually try.</p>
              <a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={16} /></a>
            </Reveal>
          </div>
          <div className="signal-strip">
            <div><span className="signal-value">AI</span><span className="signal-label">CORE FOCUS</span></div>
            <div><span className="signal-value">RAG</span><span className="signal-label">DOCUMENT INTELLIGENCE</span></div>
            <div><span className="signal-value">API</span><span className="signal-label">PRODUCT INTEGRATION</span></div>
            <div><span className="signal-value">∞</span><span className="signal-label">LEARNING MODE</span></div>
          </div>
        </section>

        <section id="expertise" className="expertise-section section-wrap">
          <Reveal><div className="section-kicker"><span>02</span> / WHAT I BUILD</div><div className="section-heading-row"><h2>Intelligence, <span className="muted-text">engineered.</span></h2><p>Useful systems, clear interfaces,<br />and a reason behind every feature.</p></div></Reveal>
          <div className="expertise-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <Reveal key={skill.title} delay={i * 0.08}><div className="expertise-card"><div className="expertise-icon"><Icon size={22} /></div><span className="expertise-index">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.detail}</p><div className="expertise-arrow"><ArrowUpRight size={17} /></div></div></Reveal>;
            })}
          </div>
          <Reveal delay={0.1}><div className="stack-panel"><div className="stack-heading"><span className="tiny-pulse"></span> TOOLKIT / CURRENTLY BUILDING WITH</div><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>
        </section>

        <section id="projects" className="projects-section section-wrap">
          <Reveal><div className="section-kicker"><span>03</span> / SELECTED WORK</div><div className="section-heading-row projects-heading"><div><h2>Projects with <span className="gradient-text">purpose.</span></h2><p className="projects-intro">Experiments, systems, and practical builds — each one a step forward.</p></div><a className="round-link" href={GITHUB} target="_blank" rel="noreferrer" aria-label="View GitHub"><ArrowUpRight size={20} /></a></div></Reveal>
          <div className="repo-status"><span className="tiny-pulse"></span>{repoStatus}</div>
          <div className="projects-grid">{projects.map((project, i) => <Reveal key={project.url || project.name} delay={(i % 3) * 0.07}><ProjectCard project={project} index={i} /></Reveal>)}</div>
          <Reveal><a className="all-projects" href={GITHUB} target="_blank" rel="noreferrer"><Github size={18} /> Explore all repositories <ArrowRight size={16} /></a></Reveal>
        </section>

        <section className="process-section section-wrap">
          <Reveal><div className="section-kicker"><span>04</span> / MY APPROACH</div><div className="section-heading-row"><h2>From question<br />to <span className="muted-text">working AI.</span></h2><p>I like a simple process: understand the problem, build the smallest useful solution, then improve it with evidence.</p></div></Reveal>
          <div className="process-list">
            {[['01', 'Understand', 'Define the user, the task, and what a good result looks like.'], ['02', 'Prototype', 'Build the core workflow and test it with realistic examples.'], ['03', 'Connect', 'Integrate APIs, retrieval, data, and interfaces into one system.'], ['04', 'Refine', 'Improve reliability, usability, and documentation.']].map(([n, title, desc], i) => <Reveal key={n} delay={i * 0.05}><div className="process-row"><span className="process-num">{n}</span><h3>{title}</h3><p>{desc}</p><ChevronRight size={18} className="process-chevron" /></div></Reveal>)}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <Reveal><div className="contact-card"><div className="contact-glow"></div><div className="section-kicker"><span>05</span> / HAVE A GOOD PROBLEM?</div><h2>Let’s build<br />something <span className="gradient-text">meaningful.</span></h2><p>Have an AI project, automation idea, or opportunity to collaborate? I’d love to hear about it.</p><a className="button-primary contact-button" href={`mailto:${EMAIL}?subject=Let's%20build%20something%20with%20AI`}>Start a conversation <ArrowUpRight size={17} /></a><div className="contact-orb"><Sparkles size={28} /></div></div></Reveal>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHWET PANDIT<small>BUILDING WITH INTENT</small></span></a>
        <span className="footer-note">Designed with curiosity. Built with code.</span>
        <div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18} /></a></div>
        <span className="copyright">© {new Date().getFullYear()} SHWET PANDIT</span>
      </footer>
    </div>
  );
}

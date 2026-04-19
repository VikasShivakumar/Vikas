/* ============================================================
   VIKAS SHIVAKUMAR - PORTFOLIO APP.JS
   Data definitions + all interactive behaviour
   ============================================================ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────── */

const DATA = {

  skills: {
    bars: [
      { name: 'Generative AI & Agentic Systems', level: 'Expert', pct: 97 },
      { name: 'Python / FastAPI',                level: 'Expert', pct: 95 },
      { name: 'Azure Cloud Architecture',        level: 'Expert', pct: 93 },
      { name: 'C# / .NET Core',                  level: 'Expert', pct: 90 },
      { name: 'TypeScript / React / Angular',    level: 'Advanced', pct: 85 },
      { name: 'RAG Solutions',             level: 'Expert', pct: 96 },
      { name: 'Multi-Agent Orchestration',       level: 'Expert', pct: 94 },
      { name: 'Kubernetes & DevOps',             level: 'Advanced', pct: 84 },
      { name: 'AWS / GCP Cloud',                 level: 'Advanced', pct: 82 },
      { name: 'Data Engineering (PySpark/SQL)',    level: 'Advanced', pct: 80 },
    ],
    ai: ['Azure AI Foundry','Azure OpenAI','AWS Bedrock','Vertex AI','LangChain','LangGraph','Semantic Kernel','RAGAs','TruLens','Pipecat','ElevenLabs','Datadog LLM Observability','Prompt Engineering','Context Engineering','Model Finetuning','Interactive Avatars','GitHub Copilot','Claude Code'],
    cloud: ['Azure Functions','Azure AI Search','Cosmos DB','Azure Service Bus','APIM',"Application Insights",'Azure Web Pub Sub','IoT Hub','Azure Synapse','App Service','AWS Glue ETL','Step Functions','Kinesis Firehose','Aurora PostgreSQL','Vertex AI','GCP Cloud Run','Cloud Storage', 'BigQuery'],
    lang: ['Python','C#','TypeScript','JavaScript','T-SQL','PySpark'],
  },

  experience: [ 
    {
      nav: 'Happiest Minds · STL',
      period: 'Apr 2024 – Present',
      role: 'Senior Technical Lead',
      company: 'Happiest Minds · Generative AI Business Unit',
      domain: 'Troubleshooting Specialist · EdTech · Healthcare · Presales · Enablement',
      projects: [
        { tag: 'EdTech · AI',         name: 'Personalized AI Tutoring Chatbot' },
        { tag: 'EdTech · Agentic',    name: 'Curriculum Mapping Suite' },
        { tag: 'Healthcare · Multi-Agent', name: 'Competency Mapping Platform' },
        { tag: 'Voice AI',            name: 'Real-Time Voice Simulation Platform' },
        { tag: 'AI Quality',          name: 'Self-Learning Quality Evaluation Framework' },
        { tag: 'Healthcare · Expert System', name: 'Clinical Domain AI Expert System' },
        { tag: 'Healthcare · RAG',    name: 'Healthcare Data & Report Analyzer' },
        { tag: 'Research · Multi-Tenant', name: 'Multi-Tenant Scientific Research Assistant' },
        { tag: 'Healthcare · Chatbot', name: 'Healthcare Content RAG Chatbot' },
        { tag: 'Enterprise · HR',     name: 'Enterprise HR Policy Assistant (Teams)' },
        { tag: 'Data Extraction',     name: 'Document Data Extraction & AI Processing' },
      ],
      bullets: [
        'Architected and shipped <strong>11 production-grade AI systems</strong> across EdTech, Healthcare, and Enterprise domains - personalized LMS tutor, agentic curriculum mapper, multi-agent workforce competency platform, real-time STT/TTS voice simulation, self-learning QA framework, clinical expert system, RAG chatbots, and more.',
        'Built real-time voice platform using STT/TTS pipelines achieving <strong>sub-second STT-to-TTS latency</strong> at scale; extended to high-fidelity patient simulator with live EHR data.',
        'Designed <strong>reusable RAG component library</strong> reducing delivery time ~30%; established APIM-as-gateway reference architecture adopted across all LLM deployments.',
        'Architected <strong>Self-Learning System</strong> for continuous AI quality evaluation - now foundational to team QA approach and a delivered OKR capability.',
        'Implemented <strong>APM + LLM observability</strong> instrumentation across all AI deployments - full token usage, latency, Agent traces and session-level visibility.',
        'Contributed to <strong>RFP responses and presales demos</strong> converting prospects across Electronics, Aviation, Supply Chain, Automotive, Retail, BFSI, and Healtcare sectors.',
        'Conducted <strong>75+ technical interviews</strong>; core GenAI BU contributor - learning curricula, internal training, mentoring on agentic patterns; designed Virtual Lab centralising all BU GenAI work.',
      ],
    },
    {
      nav: 'Happiest Minds · TL',
      period: 'Sep 2023 – Mar 2024',
      role: 'Technical Lead',
      company: 'Happiest Minds · Cross-Domain Delivery',
      domain: 'Supply Chain · Healthcare · IoT',
      projects: [
        { tag: 'Supply Chain', name: 'Energy Sector Load Management System' },
        { tag: 'IoT · Data',   name: 'IoT Data Warehouse (AWS)' },
        { tag: 'Healthcare',   name: 'Healthcare AI Chatbot' },
      ],
      bullets: [
        '<strong>Designed and implemented</strong> core modules for energy sector supply chain load management system in under 20 days using Durable Azure Functions orchestration.',
        'Built real-time dispatch system using Azure Web Pub Sub; push notification + location tracking APIs for driver accessibility.',
        'Architected IoT Telemetry data warehouse (Glue ETL, Step Functions, Kinesis Firehose, Aurora PostgreSQL, star-schema) for high-throughput device telemetry.',
        'Delivered healthcare AI chatbot with <strong>0 UAT bugs</strong>, all quality gates from day one; recognised by practice as flagship GenAI solution.',
        'Achieved <strong>zero escalations</strong> across all primary engagements; all KPIs consistently met.',
      ],
    },
    {
      nav: 'Happiest Minds · ML',
      period: 'Sep 2021 – Aug 2023',
      role: 'Module Lead',
      company: 'Happiest Minds',
      domain: 'IoT Platforms · Data Warehouse · Multi-Domain',
      projects: [
        { tag: 'IoT',          name: 'IoT Device Lifecycle Management Platform' },
        { tag: 'Data',         name: 'Modern Data Warehousing Solution' },
        { tag: 'Supply Chain', name: 'Supply Chain Platform (Backend)' },
        { tag: 'Rescue',       name: 'UK Infrastructure Rescue Engagement' },
      ],
      bullets: [
        'Built full <strong>IoT device lifecycle management platform</strong> - onboarding, ADF ingestion, Stream Analytics, real-time alerting; resolved systemic Kafka pipeline bottlenecks.',
        'Delivered rescue engagement for UK infrastructure company with direct client commendation for delivery under pressure.',
        'Identified as <strong>Top Trainer in C#/.NET</strong> - 150+ hours core training to candidates.',
        'Championed <strong>Clean Code initiative at division level</strong> across multiple project teams.',
      ],
    },
    {
      nav: 'Vrize',
      period: 'Mar 2020 – Aug 2021',
      role: 'Technical Lead',
      company: 'Vrize',
      domain: 'Retail · Data Engineering · Client Management',
      projects: [
        { tag: 'Data', name: 'Enterprise Data Foundation + Power BI' },
      ],
      bullets: [
        'Led multiple concurrent client projects as primary technical owner - architecture, delivery planning, client relationships without dedicated PM support.',
        'Designed enterprise data foundation integrating file, API, and database sources into unified warehouse with Power BI reporting layers.',
      ],
    },
    {
      nav: 'Mindtree · SSE',
      period: 'Jul 2019 – Mar 2020',
      role: 'Senior Software Engineer',
      company: 'Mindtree',
      domain: 'Trade Promotion Management · Master Data · FMCG',
      projects: [
        { tag: 'FMCG · Enterprise', name: '$3M Trade Promotion Platform' },
        { tag: 'MDM', name: 'Master Data Management System' },
      ],
      bullets: [
        'Designed and delivered core modules of a <strong>$3M trade promotion platform</strong> - .NET Core, Azure Service Bus, ADF, MongoDB, Angular, DDD, Microservices.',
        'Deployed internationally to rescue a stalled engagement; delivered critical modules within constrained timeframe under direct stakeholder accountability.',
      ],
    },
    {
      nav: 'Mindtree · SWE',
      period: 'Jul 2017 – Jun 2019',
      role: 'Software Engineer',
      company: 'Mindtree · Microsoft Centre of Excellence (CTO)',
      domain: 'Microsoft CoE · Productivity · Cloud Billing',
      projects: [
        { tag: 'M365', name: 'Microsoft Teams Productivity Suite' },
        { tag: 'FinOps', name: 'Azure Cloud Billing Monitor' },
      ],
      bullets: [
        'Built <strong>Microsoft Teams productivity suite</strong> - proactive chatbots, Outlook add-ins, Graph integrations - directly winning multiple strategic client initiatives.',
        'Developed Azure cloud billing monitor with EventGrid, budget anomaly tracking, and Power BI leadership dashboards.',
        '<strong>Outstanding Performer of the Year</strong> for two consecutive years (2018 & 2019).',
      ],
    },
  ],

  // All project data (domain, tags, title, desc, stack) is gated — decoded from ENCODED_DETAILS when access key is provided
  projects: [],

  awards: [
    { icon:'🏆', title:"Chairman's Ace Award",             org:'Happiest Minds Technologies', desc:'Exceptional contributions to the Generative AI Business Unit', year:'2024-25' },
    { icon:'🎓', title:'Claude Certified Architect',       org:'Anthropic',                  desc:'Certified in Foundations of Claude AI architecture',            year:'2026' },
    { icon:'🎓', title:'Google Cloud Professional Architect', org:'Google Cloud',            desc:'Professional Cloud Architect certification',                    year:'2020' },
    { icon:'🎓', title:'MS Power Platform Developer',      org:'Microsoft',                  desc:'Certified Power Platform Developer Associate',                  year:'2022' },
    { icon:'🎓', title:'MS Azure Administrator',           org:'Microsoft',                  desc:'Certified Azure Administrator Associate',                       year:'2022-26' },
    { icon:'🌟', title:'Outstanding Performer of the Year',org:'Mindtree',                   desc:'Two consecutive years recognition',                             year:'2018 & 2019' },
  ],

  // POC details are gated — decoded from ENCODED_DETAILS when access key is provided
  pocs: [],
};

/* ── ENCODED PROJECT DETAILS ───────────────────────────────── */

// All project data (domain, tags, title, desc, stack) and POC details are XOR-encoded with the access key.
// Provide ?key=<secret> in the URL to unlock. Key hash is stored in settings.js.
const ENCODED_DETAILS = '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';

/* ── RENDER HELPERS ────────────────────────────────────────── */

function renderSkills() {
  const barsEl  = document.getElementById('skills-bars');
  const cloudEl = document.getElementById('skills-cloud');
  if (!barsEl || !cloudEl) return;

  barsEl.innerHTML = DATA.skills.bars.map(s => `
    <div class="skill-bar">
      <div class="skill-bar__header">
        <span class="skill-bar__name">${s.name}</span>
        <span class="skill-bar__level">${s.level}</span>
      </div>
      <div class="skill-bar__track">
        <div class="skill-bar__fill" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join('');

  const allPills = [
    ...DATA.skills.ai.map(t    => `<span class="skill-pill skill-pill--ai">${t}</span>`),
    ...DATA.skills.cloud.map(t => `<span class="skill-pill skill-pill--cloud">${t}</span>`),
    ...DATA.skills.lang.map(t  => `<span class="skill-pill skill-pill--lang">${t}</span>`),
  ];
  cloudEl.innerHTML = allPills.join('');
}

function renderExperience() {
  const navEl     = document.getElementById('exp-nav');
  const entriesEl = document.getElementById('exp-entries');
  if (!navEl || !entriesEl) return;

  navEl.innerHTML = DATA.experience.map((e, i) => `
    <div class="exp__nav-item ${i===0?'active':''}" data-idx="${i}">
      <span class="exp__nav-dot"></span>
      <span class="exp__nav-text">${e.nav}</span>
    </div>
  `).join('');

  entriesEl.innerHTML = DATA.experience.map((e, i) => `
    <div class="exp__entry ${i===0?'active':''}" data-idx="${i}">
      <div class="exp__header">
        <div class="exp__period">${e.period}</div>
        <div class="exp__role">${e.role}</div>
        <div class="exp__company">${e.company}</div>
        <div class="exp__domain">${e.domain}</div>
      </div>
      <div class="exp__bullets" data-stagger>
        ${e.bullets.map(b => `<div class="exp__bullet">${b}</div>`).join('')}
      </div>
    </div>
  `).join('');

  // Tab switching
  navEl.addEventListener('click', e => {
    const item = e.target.closest('.exp__nav-item');
    if (!item) return;
    const idx = parseInt(item.dataset.idx);
    navEl.querySelectorAll('.exp__nav-item').forEach((n,i) => n.classList.toggle('active', i===idx));
    entriesEl.querySelectorAll('.exp__entry').forEach((n,i) => {
      n.classList.toggle('active', i===idx);
      if (i===idx) {
        n.querySelectorAll('[data-stagger]').forEach(el => {
          el.classList.remove('revealed');
          requestAnimationFrame(() => { el.classList.add('revealed'); triggerStagger(el); });
        });
      }
    });
  });

  // Trigger first entry stagger
  entriesEl.querySelectorAll('.exp__entry.active [data-stagger]').forEach(el => {
    el.classList.add('revealed'); triggerStagger(el);
  });
}

function renderProjects() {
  const tags = ['All', ...new Set(DATA.projects.flatMap(p => p.tags))];
  let active = 'All';

  const filterBar = document.getElementById('filter-bar');
  const grid      = document.getElementById('projects-grid');

  function draw() {
    filterBar.innerHTML = tags.map(t => `
      <button class="filter-btn ${t===active?'active':''}" data-tag="${t}">${t}</button>
    `).join('');
    const visible = active === 'All' ? DATA.projects : DATA.projects.filter(p => p.tags.includes(active));
    grid.innerHTML = visible.map(p => `
      <div class="project-card" data-reveal="up">
        <div class="project-card__glow"></div>
        <div class="project-card__domain">${p.domain}</div>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__stack">${p.stack.map(s=>`<span class="stack-tag">${s}</span>`).join('')}</div>
      </div>
    `).join('');
    observeReveal();
    addCardTilt();
  }

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    active = btn.dataset.tag; draw();
  });
  draw();
}

function renderAwards() {
  const el = document.getElementById('awards-grid');
  if (!el) return;
  el.innerHTML = DATA.awards.map(a => `
    <div class="award-card" data-reveal="up">
      <div class="award-card__icon">${a.icon}</div>
      <div>
        <div class="award-card__title">${a.title}</div>
        <div class="award-card__desc">${a.desc}</div>
        <div class="award-card__meta">${a.org} · ${a.year}</div>
      </div>
    </div>
  `).join('');
}

function renderPOCs() {
  const grid = document.getElementById('pocs-grid');
  if (!grid) return;
  grid.innerHTML = DATA.pocs.map(p => {
    const techTags = p[1].split(',').map(t => t.trim()).filter(Boolean);
    return `
      <div class="poc-card" data-reveal="up">
        <div class="poc-card__name">${p[0]}</div>
        <div class="poc-card__tech">
          ${techTags.map(t => `<span class="poc-pill">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ── SCROLL & REVEAL ───────────────────────────────────────── */

function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const delay = parseFloat(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('revealed'), delay * 1000);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => io.observe(el));

  // Stagger groups
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('revealed');
      triggerStagger(e.target);
      io2.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-stagger]:not(.revealed)').forEach(el => io2.observe(el));
}

function triggerStagger(parent) {
  Array.from(parent.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
}

/* ── SKILL BAR ANIMATION ───────────────────────────────────── */

function observeSkillBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.skill-bar__fill').forEach(fill => {
        const pct = fill.dataset.pct;
        setTimeout(() => { fill.style.width = pct + '%'; }, 200);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  const container = document.getElementById('skills-bars');
  if (container) io.observe(container);
}

/* ── COUNTER ANIMATION ─────────────────────────────────────── */

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const dur    = 1800;
  const start  = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / dur, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(ease * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function observeCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCounter(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-counter]').forEach(el => {
    el.dataset.target = el.textContent.replace(/[^0-9.]/g,'');
    io.observe(el);
  });
}

/* ── 3D CARD TILT ──────────────────────────────────────────── */

function addCardTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const mx    = ((e.clientX - rect.left) / rect.width) * 100;
      const my    = ((e.clientY - rect.top) / rect.height) * 100;
      const rx    = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      const ry    = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
      card.style.transform  = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── PARTICLE CANVAS ───────────────────────────────────────── */

function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, particles = [], animId;
  let particleCount = 90;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
  }

  function spawn() {
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.5 + 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(80,100,220,${(1 - d / 130) * 0.18})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(80,100,220,${p.a})`;
      ctx.fill();
    });
    animId = requestAnimationFrame(draw);
  }

  function start() {
    cancelAnimationFrame(animId);
    resize(); spawn(); draw();
  }

  // Use ResizeObserver for accurate sizing after layout
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => { resize(); if (particles.length === 0) { spawn(); draw(); } });
    ro.observe(canvas.parentElement);
  }

  window.addEventListener('resize', start, { passive: true });
  window.addEventListener('load', start);

  // Multiple fallbacks for iframe/throttled environments
  setTimeout(start, 0);
  setTimeout(start, 200);
  setTimeout(start, 600);

  // Expose for tweaks
  window._setParticleCount = n => { particleCount = n; start(); };
}

/* ── SCROLL PROGRESS ───────────────────────────────────────── */

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

/* ── CURSOR BLOB ───────────────────────────────────────────── */

function initCursorBlob() {
  const blob = document.getElementById('cursor-blob');
  window.addEventListener('mousemove', e => {
    blob.style.left = e.clientX + 'px';
    blob.style.top  = e.clientY + 'px';
  }, { passive: true });
}

/* ── NAV ACTIVE ON SCROLL ──────────────────────────────────── */

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

/* ── ANALYTICS / TRACKING ──────────────────────────────────── */

function initTracking() {
  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params || {});
  }

  // Section views — fires once per section
  const sio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      track('section_view', { section_name: e.target.id });
      sio.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('section[id], header[id]').forEach(s => sio.observe(s));

  // Scroll depth milestones — 25 / 50 / 75 / 100%
  const reached = new Set();
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (!max) return;
    const pct = Math.round(window.scrollY / max * 100);
    [25, 50, 75, 100].forEach(d => {
      if (pct >= d && !reached.has(d)) {
        reached.add(d);
        track('scroll_depth', { percent: d });
      }
    });
  }, { passive: true });

  // Nav link clicks
  document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
    link.addEventListener('click', () =>
      track('nav_click', { target: link.getAttribute('href').slice(1) })
    );
  });

  // Hero CTA buttons
  document.querySelectorAll('.hero__actions .btn').forEach(btn => {
    btn.addEventListener('click', () =>
      track('cta_click', { label: btn.textContent.trim().replace('↓', '').trim() })
    );
  });

  // Contact clicks — email and LinkedIn
  document.querySelectorAll('[data-email-b64]').forEach(el =>
    el.addEventListener('click', () => track('contact_click', { method: 'email' }))
  );
  document.querySelectorAll('a[href*="linkedin.com"]').forEach(el =>
    el.addEventListener('click', () => track('contact_click', { method: 'linkedin' }))
  );

  // Project filter tab clicks
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (btn) track('project_filter', { tag: btn.dataset.tag });
    });
  }

  // Experience tab switches
  const expNav = document.getElementById('exp-nav');
  if (expNav) {
    expNav.addEventListener('click', e => {
      const item = e.target.closest('.exp__nav-item');
      if (!item) return;
      const idx = parseInt(item.dataset.idx, 10);
      track('experience_tab', { company: DATA.experience[idx]?.nav ?? String(idx) });
    });
  }
}

/* ── PROJECT GATING ────────────────────────────────────────── */

async function _verifyKey(k) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(k));
  const hex = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  return hex === SITE_CONFIG.keyHash;
}

function _decodeDetails(k) {
  const raw = atob(ENCODED_DETAILS);
  const kb  = new TextEncoder().encode(k);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i) ^ kb[i % kb.length];
  return JSON.parse(new TextDecoder().decode(out));
}

function renderLockedProjects() {
  const filterBar = document.getElementById('filter-bar');
  const grid      = document.getElementById('projects-grid');
  if (!filterBar || !grid) return;
  filterBar.innerHTML = '';
  grid.innerHTML = `
    <div class="projects__locked">
      <div class="projects__locked-icon">🔒</div>
      <p class="projects__locked-msg">These are production systems built for real clients across multiple industries. Project details are shared with verified contacts only.</p>
      <a href="#" data-email-b64="dmlrYXNzaGl2YWt1bWFyMjZAZ21haWwuY29t" class="btn btn--primary">Request access via email</a>
    </div>
  `;
  grid.querySelectorAll('[data-email-b64]').forEach(el => {
    el.href = 'mailto:' + atob(el.dataset.emailB64);
  });
}

function renderLockedPOCs() {
  const grid = document.getElementById('pocs-grid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="pocs__locked">
      <div class="pocs__locked-count">Multiple Presales &amp; R&amp;D engagements</div>
      <p class="pocs__locked-msg">POC and advisory work across Electronics, Aviation, Fintech, Retail, BFSI, Insurance, and more. Connect to discuss details.</p>
      <a href="#contact" class="btn btn--ghost">Get in touch &darr;</a>
    </div>
  `;
}

async function initProjectGating() {
  const key = new URLSearchParams(window.location.search).get('key');
  if (key && await _verifyKey(key)) {
    const d = _decodeDetails(key);
    DATA.projects = d.projects;
    DATA.pocs = d.pocs;
    renderProjects();
    renderPOCs();
  } else {
    renderLockedProjects();
    renderLockedPOCs();
  }
}

/* ── TWEAKS ────────────────────────────────────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{"accent":"blue","density":90,"spacing":"6rem"}/*EDITMODE-END*/;

const ACCENTS = {
  blue:   ['oklch(48% 0.24 258)', 'oklch(50% 0.20 205)'],
  indigo: ['oklch(45% 0.26 278)', 'oklch(52% 0.20 260)'],
  teal:   ['oklch(48% 0.18 195)', 'oklch(55% 0.16 178)'],
  violet: ['oklch(48% 0.24 305)', 'oklch(54% 0.18 285)'],
};

function applyAccent(name) {
  const [blue, cyan] = ACCENTS[name] || ACCENTS.blue;
  document.documentElement.style.setProperty('--c-blue', blue);
  document.documentElement.style.setProperty('--c-cyan', cyan);
  document.documentElement.style.setProperty('--c-blue2', blue);
}

window.applyTweaks = function() {
  const accent  = document.getElementById('tweak-accent').value;
  const density = parseInt(document.getElementById('tweak-density').value);
  applyAccent(accent);
  if (window._setParticleCount) window._setParticleCount(density);
  window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent, density, spacing } }, '*');
};

window.addEventListener('message', e => {
  if (e.data?.type === '__activate_edit_mode')   document.querySelector('.tweaks-panel').classList.add('open');
  if (e.data?.type === '__deactivate_edit_mode')  document.querySelector('.tweaks-panel').classList.remove('open');
});
window.parent.postMessage({ type: '__edit_mode_available' }, '*');

/* ── BOOT ──────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderExperience();
  renderAwards();

  observeReveal();
  observeSkillBars();
  observeCounters();
  addCardTilt();
  initCanvas();
  initScrollProgress();
  initCursorBlob();
  initNavHighlight();
  applyAccent(TWEAK_DEFAULTS.accent);
  initTracking();
  initProjectGating();
});

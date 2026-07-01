import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Rocket,
  Menu,
  X,
  Mail,
  Linkedin,
  Github as GithubIcon,
  MessageCircle,
  Bot,
  Workflow,
  Link2,
  TrendingUp,
  Calendar,
  Database,
  Headphones,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  Zap,
  Code2,
  ExternalLink,
  Briefcase,
  Quote,
  Send,
} from 'lucide-react';

/* ============================================================
   EDIT EVERYTHING HERE
   ============================================================ */
const CONFIG = {
  name: 'Jonathan',
  lastName: 'Aguilera',
  title:
    'AI Automation Engineer · n8n Developer · Workflow Architect',
  tagline:
    'I build AI-powered systems that do the work your team keeps redoing — lead handling, follow-ups, scheduling, and back-office ops — running 24/7 so nothing falls through the cracks.',
  email: 'jonaguilera101@gmail.com',
  location: 'Batangas, Philippines',
  photo: '/profile.png', // drop your photo into the public/ folder as profile.png
  links: {
    linkedin: 'https://www.linkedin.com/in/jonaguilera',
    github: 'https://github.com/jonaguilera101-glitch',
    upwork: 'https://www.upwork.com/freelancers/~010e77abd9d483b7c2',
    whatsapp: 'https://wa.me/639625867172',
  },
  chatWebhookUrl:
    'https://purple-crane.pikapod.net/webhook/1e507edd-5e75-4f03-b101-4d28be47d448',
};

const PER_PAGE = 4;

const stats = [
  { value: '24/7', label: 'Automations that never sleep' },
  { value: '10+ hrs', label: 'Saved every week per workflow' },
  { value: '13+', label: 'Workflows built end-to-end' },
  { value: 'End-to-End', label: 'Designed, deployed & maintained' },
];

const services = [
  {
    icon: Bot,
    title: 'AI Agent Development',
    desc: 'Custom AI assistants and chatbots tailored to your business context.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Business process automation built with n8n, Make, and APIs.',
  },
  {
    icon: Link2,
    title: 'API Integrations',
    desc: 'Connect CRMs, databases, and third-party apps into one system.',
  },
  {
    icon: TrendingUp,
    title: 'Lead Generation Automation',
    desc: 'Automated prospecting and personalized email outreach systems.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    desc: 'AI receptionists and end-to-end booking automation.',
  },
  {
    icon: Database,
    title: 'Knowledge Base & RAG',
    desc: "Internal AI assistants trained on your company's own data.",
  },
  {
    icon: Headphones,
    title: 'Customer Support Automation',
    desc: 'AI chatbots and support workflows that scale with you.',
  },
  {
    icon: Cpu,
    title: 'Self-Hosted Infrastructure',
    desc: 'Deploy and maintain self-hosted n8n on cloud and Docker.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We map the process you want gone and pinpoint exactly where the time leaks.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'I architect and build the workflow end-to-end, with logging and error handling baked in.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'It goes live on your stack — cloud or self-hosted — and is tested against real data.',
  },
  {
    step: '04',
    title: 'Handoff',
    desc: 'You get documentation and a system that just runs. Ongoing support if you want it.',
  },
];

const experience = [
  {
    role: 'AI Automation Engineer',
    company: 'Freelance / Self-Employed',
    period: 'May 2026 – Present',
    points: [
      'Build end-to-end automation workflows using n8n, Make.com, Zapier, and GoHighLevel.',
      'Delivered a paid lead-enrichment and automated email outreach system: validation, deduplication, API enrichment, personalized sending, and execution logging.',
      'Support HR clients with automated lead follow-up, scheduling, and document workflows.',
      'Integrate APIs, webhooks, and AI tools (OpenAI, Claude, DeepSeek) to connect business systems.',
    ],
  },
  {
    role: 'Operations & Business Support',
    company: 'Independent',
    period: '2021 – 2025',
    points: [
      'Supported HR operations for a recruitment team — email drafting, inbox screening, and document coordination.',
      'Managed repetitive, manual processes firsthand across daily operations — the exact work that shaped my move into automation.',
      'Brought an engineering and quality-management background to process improvement and structured problem-solving.',
    ],
  },
  {
    role: 'Design & Production Engineer Associate',
    company: 'Pilipinas Kyohritsu Inc.',
    period: 'July 2018 – February 2020',
    points: [
      'Assisted in designing and optimizing manufacturing processes.',
      'Collaborated with cross-functional teams to improve production efficiency.',
      'Contributed to quality and process improvement programs.',
    ],
  },
  {
    role: 'Quality Engineer (Final Inspector)',
    company: 'Yamaha Motor Philippines Inc.',
    period: 'September 2016 – February 2017',
    points: [
      'Conducted quality inspections and root cause investigations.',
      'Ensured compliance with manufacturing specifications and standards.',
      'Participated in continuous improvement initiatives.',
    ],
  },
];

const platformProjects = [
  {
    key: 'n8n',
    name: 'n8n',
    blurb:
      'My core platform — self-hosted, API-first, and built for complex multi-step logic and AI workflows.',
    accent: 'from-rose-500/15 to-pink-400/10',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    items: [
      {
        title: 'AI Real Estate Lead Management & Sales Automation',
        tag: 'System Design',
        desc: 'Every lead qualified in seconds and pushed into follow-up automatically — so nothing goes cold while you sleep. Hot / Warm / Cold AI scoring, live CRM sync, and WhatsApp + email sequences, fully hands-off.',
        img: '/workflows/real-estate-lead-management.png',
        details: {
          overview:
            'A complete real estate lead lifecycle system that captures leads from multiple sources, qualifies them with AI, nurtures them automatically, and keeps the sales team notified in real time.',
          problem:
            'Real estate teams lose deals when leads sit unanswered. Manual qualification and follow-up are slow and inconsistent.',
          how: 'Leads enter via webhook or form, get validated and deduplicated, then an AI agent scores them Hot / Warm / Cold. Each tier triggers its own follow-up sequence, while the CRM and sales team stay updated.',
          tech: [
            'n8n',
            'DeepSeek AI',
            'Telegram',
            'Gmail',
            'Google Sheets',
            'CRM',
          ],
          impact:
            'Faster response times, automatic lead nurturing, and no leads slipping through the cracks.',
        },
      },
      {
        title: 'Lead Enrichment for Drivers & Scraping',
        tag: 'Client Project',
        desc: 'A live, paid system delivered for a client: pulls raw leads from a Google Sheet, validates and deduplicates them, enriches every record via API, and sends personalized outreach — with full logging so nothing silently fails.',
        img: '/workflows/lead-enrichment.png',
        details: {
          overview:
            "A paid automation that fetches driver leads from a client's Google Sheet, enriches the data, and automatically sends personalized outreach emails with complete logging and monitoring.",
          problem:
            'The client was manually validating leads and sending outreach one by one, which was slow and error-prone.',
          how: 'New rows are picked up on a schedule, validated against required fields, deduplicated by email and phone, enriched via external APIs, then sent a personalized email. Every step is logged for monitoring.',
          tech: [
            'n8n',
            'Google Sheets',
            'APIs',
            'Email (SMTP/Gmail)',
            'Logging',
          ],
          impact:
            'Fully automated from data fetch to email delivery, with higher response rates and real-time error tracking.',
        },
      },
      {
        title: 'AI Medical Receptionist (RAG)',
        tag: 'System Design',
        desc: "Handles patient questions, booking, reminders, and admin alerts around the clock — trained on the clinic's own data, so it answers like staff, not a generic bot.",
        img: '/workflows/ai-medical-receptionist.png',
        details: {
          overview:
            'An end-to-end AI receptionist that automates the entire patient journey: communication, scheduling, reminders, and admin notifications.',
          problem:
            'Clinics are overwhelmed by routine patient messages, scheduling, and no-shows that tie up front-desk staff.',
          how: 'A RAG knowledge engine processes clinic documents for accurate answers. Patients message via Telegram, the AI detects intent and routes to the right workflow (booking, rescheduling, cancellation, info), syncs with the calendar, and alerts admins.',
          tech: ['n8n', 'RAG', 'DeepSeek AI', 'Telegram', 'Google Calendar'],
          impact:
            '24/7 patient support, fewer no-shows with smart reminders, and real-time admin visibility.',
        },
      },
      {
        title: 'AI Clinic Receptionist (Voice)',
        tag: 'System Design',
        desc: 'Answers the phone, books and reschedules appointments, checks availability live, and follows up — a voice AI that never misses a call.',
        img: '/workflows/ai-clinic-receptionist.png',
        details: {
          overview:
            'A voice-powered AI receptionist that handles appointment booking, rescheduling, cancellations, reminders, and post-visit follow-ups through phone and chat.',
          problem:
            'Phone scheduling ties up staff during peak hours and leads to missed calls and no-shows.',
          how: 'Powered by Vapi, the system verifies patient identity, checks real-time availability, books or updates appointments in the clinic system, logs everything to Google Sheets, and notifies the team for every action.',
          tech: [
            'Vapi',
            'n8n',
            'OpenAI',
            'Google Sheets',
            'Google Calendar',
            'WhatsApp',
          ],
          impact:
            '24/7 AI receptionist, fewer missed calls and no-shows, and better patient experience.',
        },
      },
      {
        title: 'AI Fleet Maintenance & Compliance',
        tag: 'System Design',
        desc: 'Proactive maintenance, regulatory compliance tracking, technician task creation, and reporting through an AI operations hub.',
        img: '/workflows/fleet-maintenance.png',
        details: {
          overview:
            'An intelligent system for proactive fleet maintenance, regulatory compliance, and efficient operations, centered on an AI operations hub.',
          problem:
            'Missed maintenance and compliance deadlines cause costly downtime and penalties.',
          how: 'Fleet sensor data and logs feed an AI engine that predicts maintenance needs and detects anomalies. It creates technician tasks, tracks certifications and policy adherence, sends alerts, and generates reports.',
          tech: [
            'n8n',
            'DeepSeek AI',
            'Telegram',
            'Gmail',
            'Google Sheets',
            'Google Calendar',
          ],
          impact:
            'Reduced downtime, ensured compliance, lower maintenance costs, and improved fleet reliability.',
        },
      },
      {
        title: 'AI Customer Support Automation Platform',
        tag: 'System Design',
        desc: 'An AI helpdesk on n8n with 8 interconnected workflows: tickets, SLA escalations, follow-ups, daily reporting, ticket reopening, and AI priority routing.',
        img: '/workflows/ai-customer-support.png',
        details: {
          overview:
            'An AI-powered customer support platform built on n8n with eight interconnected workflows. It automates tickets, escalations, follow-ups, daily reporting, and intelligent AI-powered routing.',
          problem:
            'Support teams miss tickets, breach SLAs, and burn hours on manual follow-ups and triage.',
          how: 'It auto-responds to Telegram inquiries via AI, detects and escalates SLA breaches instantly, sends automated follow-ups on open tickets, reopens tickets when customers reply, classifies and routes by AI priority, logs all activity to Google Sheets in real time, and generates daily AI reports.',
          tech: [
            'n8n',
            'DeepSeek AI',
            'Telegram',
            'Google Sheets',
            'JavaScript',
          ],
          impact:
            'A fully automated AI helpdesk that handles support end-to-end — saving hours of manual work, eliminating missed tickets, and scaling with zero extra headcount.',
        },
      },
      {
        title: 'Facebook Chat Support & Booking Automation',
        tag: 'System Design',
        desc: 'AI-powered n8n workflow that handles Facebook messages, qualifies leads, books appointments, and sends Gmail confirmations.',
        img: '/workflows/facebook-chat-booking.png',
        details: {
          overview:
            'A hands-free booking system that works around the clock — receiving Facebook messages, qualifying leads, booking appointments, and sending confirmations without any manual effort.',
          problem:
            'Businesses miss Facebook inquiries and bookings after hours, and manually replying and scheduling eats up staff time.',
          how: 'Facebook messages arrive via webhook and are filtered and routed intelligently. An AI Agent (Google Gemini with memory) reads documents and replies naturally, books appointments automatically, posts the booking to the reservation system via HTTP, and sends a Gmail confirmation to the client.',
          tech: [
            'n8n',
            'Facebook Webhook',
            'Google Gemini',
            'Gmail',
            'Google Sheets',
            'HTTP API',
          ],
          impact:
            '24/7 automated support with instant replies, bookings captured without manual work, and confirmation emails sent automatically.',
        },
      },
      {
        title: 'YouTube & Facebook AI Reels Creator',
        tag: 'System Design',
        desc: 'Fully automated content engine that writes scripts with AI, renders videos, and publishes Reels to YouTube and Facebook on a schedule.',
        img: '/workflows/youtube-facebook-reels.png',
        details: {
          overview:
            'A fully hands-free content engine that generates scripts with AI, renders videos, and publishes Reels to YouTube and Facebook on autopilot — every single day, with zero manual work.',
          problem:
            'Posting consistent short-form video content daily is exhausting and time-consuming, so most creators and businesses fall behind.',
          how: 'Runs on a schedule with no clicks needed. AI writes the video script (Gemini), a structured output parser cleans the JSON, JWT-signed API requests send the script to a video creation service, the system waits and checks the render status in a loop, then converts and uploads to YouTube and cross-posts the Reel to the Facebook Graph API.',
          tech: [
            'n8n',
            'Google Gemini',
            'YouTube API',
            'Facebook Graph',
            'JWT / JS',
            'HTTP API',
          ],
          impact:
            'Post daily Reels without lifting a finger — consistent content for faster channel growth, published to YouTube and Facebook automatically.',
        },
      },
    ],
  },
  {
    key: 'zapier',
    name: 'Zapier',
    blurb:
      'Fast, reliable automations for connecting popular SaaS apps without managing infrastructure.',
    accent: 'from-orange-500/15 to-amber-400/10',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    items: [
      {
        title: 'AI-Powered Client Lifecycle Automation',
        tag: 'System Design',
        desc: 'Automates client onboarding, follow-ups, and project management across Asana, Zapier, AI, and Google Workspace.',
        img: '/workflows/zapier-client-lifecycle.png',
        details: {
          overview:
            'Automates the entire client lifecycle based on task updates in Asana. It branches into five smart paths and handles communication, file management, AI analysis, and follow-ups automatically.',
          problem:
            'Agencies and service businesses lose time on manual onboarding, follow-ups, and scattered project management.',
          how: 'An Asana task update triggers the flow, which splits into five paths — Ready to Start, No Response, Quoted, Approved, and Paid & Closed. Each path runs its own logic: creating Drive folders and Asana projects, sending timed follow-up emails, AI-analyzing data, generating welcome PDFs, and sending closing emails.',
          tech: ['Asana', 'Zapier', 'AI by Zapier', 'Gmail', 'Google Drive'],
          impact:
            'Saves hours of manual follow-ups, never misses a client update, and centralizes project and file management.',
        },
      },
      {
        title: 'AI Video Content Repurposing & Social Publishing',
        tag: 'System Design',
        desc: 'Detects new video uploads, generates AI transcriptions and blog posts, and publishes to Facebook and LinkedIn automatically.',
        img: '/workflows/zapier-video-repurposing.png',
        details: {
          overview:
            'Automatically detects new video uploads in Google Drive, generates AI-powered transcriptions and blog posts, and publishes content to Facebook and LinkedIn — turning a single recording into multiple content assets.',
          problem:
            'Creating multiple content pieces from one video is repetitive and time-consuming, so most recordings get underused.',
          how: 'A new file in a Google Drive folder triggers the flow. It filters the file, generates a transcription and an AI blog post, loops through the items, splits into content paths, then posts to Facebook Pages and shares an update on LinkedIn.',
          tech: [
            'Google Drive',
            'Zapier',
            'AI by Zapier',
            'Facebook Pages',
            'LinkedIn',
          ],
          impact:
            'Converts videos into reusable content automatically, increasing reach and consistency while eliminating repetitive work.',
        },
      },
    ],
  },
  {
    key: 'make',
    name: 'Make.com',
    blurb:
      'Visual scenario building for branching logic, data transformation, and scheduled flows.',
    accent: 'from-violet-500/15 to-purple-400/10',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    items: [
      {
        title: 'AI Email Generation & File Analysis Automation',
        tag: 'System Design',
        desc: 'Processes incoming email attachments, generates AI content, stores results in Google Drive, logs to Sheets, and sends follow-up emails.',
        img: '/workflows/make-email-file-analysis.png',
        details: {
          overview:
            'Automates the processing of incoming emails with attachments. It uses AI to analyze and generate content, stores results in Google Drive, logs the data in Google Sheets, and sends follow-up emails.',
          problem:
            'Manually handling email attachments — reading, analyzing, filing, and following up — is slow and easy to fall behind on.',
          how: 'A Gmail watch trigger picks up new emails, then a Router splits the flow into two paths by file type (Path A for pictures, Path B for PDFs). Google Gemini AI analyzes the attachments and generates content, which is uploaded to Google Drive, logged in Google Sheets, and followed up by email.',
          tech: [
            'Make.com',
            'Gmail',
            'Google Gemini AI',
            'Google Drive',
            'Google Sheets',
          ],
          impact:
            'Faster email handling, accurate file analysis, organized data storage, and timely automated follow-ups.',
        },
      },
      {
        title: 'Asana-to-Xero Financial Reporting & Task Completion',
        tag: 'System Design',
        desc: 'Connects Asana, Xero, and Google Sheets to capture completed tasks, retrieve invoice data, aggregate reports, and attach them back in Asana.',
        img: '/workflows/make-asana-xero-reporting.png',
        details: {
          overview:
            'Streamlines project management and financial reporting by connecting Asana, Xero, and Google Sheets. It captures completed tasks, retrieves invoice data, aggregates information, then uploads reports as attachments in Asana while keeping clean records in Sheets.',
          problem:
            'Reconciling completed project tasks with invoicing and reporting by hand is repetitive and error-prone.',
          how: 'It watches for completed Asana tasks, pulls invoice data from Xero via API, then a Router splits the data into two parallel processes. It logs and aggregates the data in Google Sheets, attaches the generated report back to Asana, and cleans up processed data.',
          tech: ['Make.com', 'Asana', 'Xero', 'Google Sheets'],
          impact:
            'Eliminates manual data entry and errors, ensures accurate invoicing, and gives real-time visibility into project financials.',
        },
      },
    ],
  },
  {
    key: 'ghl',
    name: 'GoHighLevel',
    blurb:
      'All-in-one CRM automation: pipelines, follow-up sequences, and booking for agencies and HR clients.',
    accent: 'from-blue-500/15 to-cyan-400/10',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    items: [
      {
        title: 'Car Detailing Booking & Reminder Automation',
        tag: 'System Design',
        desc: 'Automated follow-up and reminder workflow for car detailing — booking, confirmations, AI voice calls, reschedules, and team alerts.',
        img: '/workflows/ghl-car-detailing.png',
        details: {
          overview:
            'Automates the entire customer journey for car detailing services — from booking to reminders, confirmations, rescheduling, and team notifications.',
          problem:
            'Detailing businesses lose revenue to no-shows and spend hours manually confirming and reminding customers about appointments.',
          how: 'A form submission captures a new booking. An AI step extracts customer and vehicle details, sends a confirmation SMS, then confirms via an AI voice call. Timed waits and conditions handle reminders, no-replies, reschedules, and cancellations, while the team is notified at key stages.',
          tech: [
            'GoHighLevel',
            'SMS',
            'AI Voice Call',
            'Webhook',
            'Conditions',
          ],
          impact:
            'Reduces no-shows, automates reminders and follow-ups, handles reschedules seamlessly, and boosts customer satisfaction.',
        },
      },
    ],
  },
];

const techStack = [
  'n8n',
  'OpenAI',
  'DeepSeek',
  'Claude',
  'Gemini',
  'Supabase',
  'PostgreSQL',
  'Google Sheets',
  'REST APIs',
  'Webhooks',
  'Docker',
  'Slack',
  'Telegram',
  'GoHighLevel',
  'Make.com',
  'Zapier',
];

const testimonials = [
  {
    quote:
      'The automation handled our lead follow-up end to end. It freed up real hours every week.',
    author: 'HR Client',
    role: 'Recruitment & Staffing',
  },
];

/* ============================================================
   Scroll reveal
   ============================================================ */
function useScrollReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, shown] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   Helpers
   ============================================================ */
function getSessionId() {
  try {
    let id = window.localStorage.getItem('portfolio_session');
    if (!id) {
      id = Math.random().toString(36).slice(2);
      window.localStorage.setItem('portfolio_session', id);
    }
    return id;
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

/* ============================================================
   Workflow image with fallback + lazy load
   ============================================================ */
function WorkflowImage({ src, title, onClick }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <button
        onClick={onClick}
        className="h-40 w-full bg-gradient-to-br from-blue-600/25 via-slate-900 to-cyan-500/15 flex flex-col items-center justify-center cursor-pointer border-b border-white/10"
      >
        <Workflow size={28} className="text-blue-300/60" />
        <span className="mt-2 text-[10px] text-slate-500 px-4 text-center font-mono">
          {src}
        </span>
        <span className="text-[9px] text-slate-600 mt-0.5">
          drop this file into public/workflows/
        </span>
      </button>
    );
  }
  return (
    <button
      className="relative group/img cursor-pointer overflow-hidden border-b border-white/10 w-full"
      onClick={onClick}
      aria-label={`View ${title} workflow`}
    >
      <img
        src={src}
        alt={`${title} workflow diagram`}
        loading="lazy"
        onError={() => setErr(true)}
        className="h-40 w-full object-cover object-top group-hover/img:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition flex items-center justify-center">
        <span className="opacity-0 group-hover/img:opacity-100 transition text-xs text-white bg-black/50 px-3 py-1 rounded-full flex items-center gap-1">
          <ExternalLink size={12} /> View details
        </span>
      </div>
    </button>
  );
}

/* ============================================================
   Project card
   ============================================================ */
function ProjectCard({ proj, accent, badge, onOpen }) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} overflow-hidden h-full hover:border-blue-500/30 transition flex flex-col`}
    >
      <WorkflowImage
        src={proj.img}
        title={proj.title}
        onClick={() => onOpen(proj)}
      />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold leading-snug">
            {proj.title}
          </h3>
          <span
            className={`shrink-0 text-[10px] px-2 py-1 rounded-full border ${badge}`}
          >
            {proj.tag}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
          {proj.desc}
        </p>
        <button
          onClick={() => onOpen(proj)}
          className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 transition self-start"
        >
          View details <ChevronRight size={14} />
        </button>
      </div>
    </article>
  );
}

/* ============================================================
   Platforms (tabbed) with pagination + detail modal
   ============================================================ */
function PlatformsShowcase() {
  const [active, setActive] = useState(platformProjects[0].key);
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState(PER_PAGE);
  const current = platformProjects.find((p) => p.key === active);

  // reset visible count when switching tabs
  useEffect(() => {
    setVisible(PER_PAGE);
  }, [active]);

  // ESC closes modal
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const total = current.items.length;
  const shownItems = current.items.slice(0, visible);
  const canShowMore = visible < total;
  const canShowLess = visible >= total && total > PER_PAGE;

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-8" role="tablist">
          {platformProjects.map((p) => (
            <button
              key={p.key}
              role="tab"
              aria-selected={active === p.key}
              onClick={() => setActive(p.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition ${
                active === p.key
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {p.name}
              <span className="ml-2 text-[10px] opacity-70">
                {p.items.length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div key={active}>
        <Reveal>
          <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">
            {current.blurb}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {shownItems.map((proj, i) => (
            <Reveal key={proj.title} delay={(i % 2) * 70}>
              <ProjectCard
                proj={proj}
                accent={current.accent}
                badge={current.badge}
                onOpen={setLightbox}
              />
            </Reveal>
          ))}
        </div>

        {(canShowMore || canShowLess) && (
          <div className="mt-8 flex justify-center">
            {canShowMore ? (
              <button
                onClick={() => setVisible((v) => Math.min(v + PER_PAGE, total))}
                className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-medium flex items-center gap-2 hover:bg-white/10 hover:border-blue-500/40 transition"
              >
                Show more{' '}
                <span className="text-cyan-300">({total - visible} more)</span>{' '}
                <ChevronDown size={16} />
              </button>
            ) : (
              <button
                onClick={() => setVisible(PER_PAGE)}
                className="px-6 py-3 rounded-xl border border-white/15 text-slate-300 font-medium flex items-center gap-2 hover:bg-white/5 transition"
              >
                Show less <ChevronUp size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="max-w-4xl w-full my-8 rounded-2xl border border-white/10 bg-slate-900 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 sticky top-0 bg-slate-900 z-10">
              <h3 className="text-white font-semibold pr-4">
                {lightbox.title}
              </h3>
              <button
                onClick={() => setLightbox(null)}
                className="text-slate-400 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {lightbox.img && (
              <img
                src={lightbox.img}
                alt={`${lightbox.title} full workflow`}
                className="w-full object-contain bg-slate-950 max-h-[60vh]"
              />
            )}

            {lightbox.details && (
              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-cyan-400 text-sm font-semibold mb-1">
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {lightbox.details.overview}
                  </p>
                </div>
                <div>
                  <h4 className="text-cyan-400 text-sm font-semibold mb-1">
                    Problem Solved
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {lightbox.details.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-cyan-400 text-sm font-semibold mb-1">
                    How It Works
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {lightbox.details.how}
                  </p>
                </div>
                <div>
                  <h4 className="text-cyan-400 text-sm font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lightbox.details.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                  <TrendingUp
                    size={16}
                    className="text-cyan-400 shrink-0 mt-0.5"
                  />
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    {lightbox.details.impact}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Floating AI chat widget
   ============================================================ */
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! I'm Jonathan's AI assistant. Ask me about automation, n8n workflows, or how we could work together.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(getSessionId());
  const scrollRef = useRef(null);

  // Pop a welcome teaser after a few seconds (only if chat not opened yet)
  useEffect(() => {
    const t = setTimeout(() => {
      setOpen((isOpen) => {
        if (!isOpen) setTeaser(true);
        return isOpen;
      });
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, loading, open]);

  const openChat = () => {
    setOpen(true);
    setTeaser(false);
  };

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text }]);
    setLoading(true);

    if (!CONFIG.chatWebhookUrl) {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            role: 'bot',
            text: '(Demo mode) Connect your n8n webhook in CONFIG.chatWebhookUrl to make this live.',
          },
        ]);
        setLoading(false);
      }, 600);
      return;
    }

    try {
      const res = await fetch(CONFIG.chatWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: text,
          sessionId: sessionId.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        data.reply ||
        data.output ||
        data.text ||
        data.message ||
        "Sorry, I didn't get a response. Please try again.";
      setMessages((m) => [...m, { role: 'bot', text: String(reply) }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          text: 'Connection issue reaching the assistant. Please try again shortly.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') send();
    },
    [send]
  );

  return (
    <>
      {/* Welcome teaser bubble */}
      {teaser && !open && (
        <div className="fixed bottom-24 right-6 z-[70] max-w-[16rem] animate-[fadeInUp_0.4s_ease-out]">
          <div className="relative rounded-2xl rounded-br-sm border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-4">
            <button
              onClick={() => setTeaser(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
            <div className="flex items-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
                <Bot size={14} className="text-white" />
              </span>
              <p className="text-sm text-slate-200 leading-snug">
                👋 Hi! I'm Jonathan's AI assistant. Curious how automation could
                help your business? Ask me anything!
              </p>
            </div>
            <button
              onClick={openChat}
              className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Start chatting
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white hover:scale-105 transition"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {teaser && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-slate-950 animate-pulse" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[70] w-[calc(100vw-3rem)] sm:w-96 h-[28rem] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">
          <header className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </span>
            <div className="text-sm font-semibold text-white">AI Assistant</div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-br-sm'
                      : 'bg-white/10 text-slate-200 rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-3 py-2 rounded-2xl rounded-bl-sm">
                  <span className="inline-flex gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              aria-label="Chat message"
              className="flex-1 px-3 py-2 rounded-xl bg-slate-800/60 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            />
            <button
              onClick={send}
              disabled={loading}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center hover:opacity-90 transition disabled:opacity-50"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================================
   Presentational helpers
   ============================================================ */
function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-cyan-400 mb-2">{kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-slate-300 hover:text-white group"
    >
      <span className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400/40 transition">
        <Icon size={18} />
      </span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

/* ============================================================
   Hero photo — edges fade into the dark background
   ============================================================ */
function HeroPhoto({ src, name }) {
  const [err, setErr] = useState(false);
  // Radial mask dissolves the photo edges into the page background
  const mask =
    'radial-gradient(ellipse 66% 66% at 55% 40%, #000 32%, transparent 92%)';

  if (err || !src) {
    return (
      <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/10 to-transparent flex items-center justify-center"
          style={{ WebkitMaskImage: mask, maskImage: mask }}
        >
          <div className="text-center px-6">
            <span className="text-slate-500 text-xs font-mono">
              {src || '/profile.png'}
            </span>
            <p className="text-[10px] text-slate-600 mt-1">
              drop your photo into the public/ folder
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={src}
        alt={name}
        onError={() => setErr(true)}
        className="w-full h-auto object-cover select-none"
        style={{ WebkitMaskImage: mask, maskImage: mask }}
        draggable={false}
      />
      {/* Gradient overlay marries the photo into the dark theme (slate-950) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(2,6,23,0) 50%, rgba(2,6,23,0.95) 100%), linear-gradient(to right, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0) 32%)',
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
    </div>
  );
}

/* ============================================================
   Main
   ============================================================ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    ['About', 'about'],
    ['Experience', 'experience'],
    ['Services', 'services'],
    ['Process', 'process'],
    ['Platforms', 'platforms'],
    ['Stack', 'stack'],
    ['Contact', 'contact'],
  ];

  const go = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const submit = useCallback(() => {
    const subject = encodeURIComponent(
      `New inquiry from ${form.name || 'website'}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }, [form]);

  const fullName = `${CONFIG.name} ${CONFIG.lastName}`.trim();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-10" />
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => go('hero')}
            className="flex items-center gap-2 font-bold text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Rocket size={18} className="text-white" />
            </span>
            <span className="text-lg">{fullName}</span>
          </button>
          <div className="hidden md:flex items-center gap-7 text-sm">
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition"
            >
              Let's Talk
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-3">
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-left text-slate-300 py-1"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="hero" className="relative pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
              <Zap size={14} /> Available for automation projects
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              {fullName}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg md:text-xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold">
              {CONFIG.title}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-slate-400 max-w-2xl leading-relaxed">
              {CONFIG.tagline}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => go('platforms')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-blue-500/20"
              >
                View Work <ChevronRight size={18} />
              </button>
              <button
                onClick={() => go('contact')}
                className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold flex items-center gap-2 hover:bg-white/5 transition"
              >
                <Mail size={18} /> Contact Me
              </button>
            </div>
          </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-2">
            <HeroPhoto src={CONFIG.photo} name={fullName} />
          </Reveal>
        </div>
      </header>

      {/* STATS */}
      <section className="relative px-6 pb-8" aria-label="Key statistics">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me" kicker="Who I am">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm an AI automation engineer with a background in manufacturing
                engineering and quality management. I build end-to-end
                automation systems that streamline operations and eliminate
                repetitive work.
              </p>
              <p>
                I moved from manufacturing engineering into automation
                engineering, bringing process optimization, structured
                problem-solving, and continuous improvement into the world of AI
                and workflow automation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3">
              {[
                'Engineering Foundation',
                'Process-Driven Delivery',
                'Self-Hosted n8n Infrastructure',
                'RAG & AI Agent Architecture',
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-cyan-400 shrink-0 mt-0.5"
                  />{' '}
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Professional Experience" kicker="Career">
        <div className="space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 90}>
              <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/30 transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-300">
                      <Briefcase size={18} />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">{e.role}</h3>
                      <p className="text-sm text-slate-400">{e.company}</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <ChevronRight
                        size={16}
                        className="text-cyan-400 shrink-0 mt-0.5"
                      />{' '}
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" title="Services" kicker="What I do">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 70}>
                <article className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 h-full hover:bg-white/[0.08] hover:border-blue-500/30 transition">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section id="process" title="How I Work" kicker="The process">
        <Reveal>
          <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
            From a messy manual process to a running system in four steps —
            clear, documented, and built to keep working after handoff.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 4) * 80}>
              <article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 h-full hover:bg-white/[0.08] hover:border-blue-500/30 transition">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {p.step}
                </span>
                <h3 className="mt-3 text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => go('contact')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-blue-500/20"
            >
              Contact for a Quote <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </Section>

      {/* PLATFORMS */}
      <Section
        id="platforms"
        title="Automation by Platform"
        kicker="Where I build"
      >
        <PlatformsShowcase />
      </Section>

      {/* STACK */}
      <Section id="stack" title="Technology Stack" kicker="Tools I build with">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-white transition"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" title="Testimonials" kicker="What clients say">
        <div className="max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
                <Quote size={26} className="text-blue-400/50" />
                <blockquote className="mt-3 text-slate-300 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5">
                  <div className="text-white font-medium text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let's Build Something" kicker="Get in touch">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="space-y-5">
              <p className="text-slate-400 leading-relaxed">
                Have a process you'd love to automate? Send a few details and
                I'll get back to you.
              </p>
              <div className="space-y-3">
                <ContactLink
                  icon={Mail}
                  label={CONFIG.email}
                  href={`mailto:${CONFIG.email}`}
                />
                <ContactLink
                  icon={Linkedin}
                  label="LinkedIn"
                  href={CONFIG.links.linkedin}
                />
                <ContactLink
                  icon={GithubIcon}
                  label="GitHub"
                  href={CONFIG.links.github}
                />
                <ContactLink
                  icon={ExternalLink}
                  label="Upwork"
                  href={CONFIG.links.upwork}
                />
                <ContactLink
                  icon={MessageCircle}
                  label="WhatsApp"
                  href={CONFIG.links.whatsapp}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
              {['name', 'email', 'company'].map((f) => (
                <input
                  key={f}
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  placeholder={
                    f === 'name'
                      ? 'Your name'
                      : f === 'email'
                      ? 'Your email'
                      : 'Company (optional)'
                  }
                  aria-label={f}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition"
                />
              ))}
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your project..."
                aria-label="Project description"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition resize-none"
              />
              <button
                onClick={submit}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                {sent ? 'Opening your email…' : 'Send Message'}{' '}
                <ArrowUpRight size={18} />
              </button>
              {sent && (
                <p className="text-xs text-cyan-300 text-center">
                  Your email app should open with the message pre-filled.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 mt-12 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-white mb-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Rocket size={15} className="text-white" />
            </span>
            {fullName}
          </div>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Building intelligent automation systems that save businesses time,
            reduce costs, and improve operational efficiency through AI and
            workflow automation.
          </p>
          <p className="text-xs text-slate-600 mt-5">
            © {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Search, GraduationCap, Briefcase, FileText, Code2, Download, MapPin } from "lucide-react";

/**
 * Academic personal website template (tab-based)
 * Inspired by the structure/style of louisfaury.com, but split into tabs instead of a long page.
 *
 * How to customise quickly:
 * 1) Update `profile`.
 * 2) Replace items in `publications`, `experience`, `cv`, and `projects`.
 * 3) Add/remove tabs in `tabs` if needed.
 */

const profile = {
  name: "Natinael Neggatu",
  title: "PhD Researcher in Reinforcement Learning",
  org: "University of Warwick",
  location: "London, UK",
  email: "natisol@hotmail.co.uk",
  photo: "/profile.jpg",
  bio: `I develop reinforcement learning methods for offline and offline-to-online settings, with a focus on safety, sample efficiency, and real-world deployment. My work combines theory and large-scale experimentation in Python using PyTorch to build reliable and practical RL agents.`,
  interests: [
    "Offline RL",
	"Multi-Agent RL",
    "Representation Learning",
	"Transformers",
    "Large Language Models",
  ],
  education: [
    {
      degree: "PhD in Reinforcement Learning (ML)",
      institution: "Warwick University",
      years: "2022 – Present",
    },
    {
      degree: "MEng in Information Engineering",
      institution: "University of Cambridge",
      years: "2018 – 2022",
    },
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=BwX7xkQAAAAJ&hl=en",
    github: "https://github.com/nati-warwick",
    linkedin: "https://www.linkedin.com/in/natinael-neggatu-b7b1ba167/",
  },
};

const publications = [
  {
    title: "Action-Free Offline-to-Online Reinforcement Learning via Discretised State Policies",
    venue: "ICLR 2026 (Poster)",
    authors: "Natinael Neggatu, Jeremie Houssineau, Giovanni Montana",
    year: 2026,
    tags: ["Offline-to-Online RL", "Action-Free Offline RL", "Control"],
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2602.00629" },
      { label: "Code", href: "https://github.com/nati-warwick/action-free-offline-to-online-RL" },
      { label: "Poster", href: "https://iclr.cc/virtual/2026/poster/10009328" },
    ],
    abstract:
      "Developed the action-free offline-to-online RL framework and proposed a novel RL algorithm to train discretised state policies from data without action labels to guide online agents, safely accelerating online learning."
  },
  {
    title: "Evaluation-Time Policy Switching for Offline Reinforcement Learning",
    venue: "AAMAS 2025 (Oral and Poster)",
    authors: "Natinael Neggatu, Jeremie Houssineau, Giovanni Montana",
    year: 2025,
    tags: ["Offline RL", "Behavior Cloning", "Uncertainty Quantification"],
    links: [{ label: "Paper", href: "https://www.ifaamas.org/Proceedings/aamas2025/pdfs/p1520.pdf" },
            { label: "Code", href: "https://github.com/nati-warwick/policy_switching"}
    ],
    abstract:
      "Hybrid policy optimisation combining behaviour cloning and uncertainty-sensitive actor-critic fine-tuning.",
  },
];

const experience = [
  {
    role: "PhD Researcher",
    company: "University of Warwick",
    location: "Coventry, UK",
    period: "2022 – 2026",
    bullets: [
      "Publications (top venues): First-author work on robust offline RL and offline-to-online RL (e.g., AAMAS / ICLR submissions).",
      "Developed uncertainty-aware methods to train agents on offline datasets and safely fine-tune online, including evaluation-time policy switching for robustness under distribution shift.",
      "Developed the action-free offline-to-online RL framework and proposed an RL algorithm to train discretised state policies from data without action labels to guide online agents.",
      "Built reproducible PyTorch pipelines for MuJoCo-style continuous-control tasks with seeded runs, ablations, confidence intervals, and scaled GPU training/evaluation.",
      "Tracked experiments and hyperparameter sweeps with Weights & Biases to improve monitoring, comparability, and iteration speed across large runs.",
      "Mentored newer PhD students on RL research practice, including problem formulation, experiment design, and reproducible evaluation.",
    ],
  },
  {
    role: "Quantitative Analyst",
    company: "Superbet",
    location: "",
    period: "2018 – 2020",
    bullets: [
      "Built real-time Bayesian and ML pricing for multiple sports, then productionised models on AWS (Lambda, EC2, S3).",
      "Standardised coding patterns and reusable components, and documented systems in LaTeX; reduced new-sport onboarding from several weeks to days.",
      "Integrated models with trading systems in collaboration with engineers; maintained version control workflows in GitLab and GitHub.",
    ],
  },
  {
    role: "Master's Project",
    company: "University of Cambridge",
    location: "Cambridge, UK",
    period: "2017 – 2018",
    bullets: [
      "Developed stability-optimised recurrent circuits (SOCs) by shaping the eigen-spectrum of recurrent weight matrices in non-linear RNNs, reproducing stable and oscillatory dynamics observed in primary motor cortex recordings.",
      "Implemented control and training procedures to steer network activity in MATLAB and Python (TensorFlow), with experiments tracked for reproducibility.",
      "Performed linear-algebraic analysis of small-scale SOCs (spectral radius) to explain observed phenomena.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Computer Science Department - Cambridge University",
    location: "Cambridge, UK",
    period: "June – September 2017",
    bullets: [
      "Researched and authored a technical paper on neural-network approaches for classifying heterogeneous network traffic.",
      "Benchmarked model performance against established baselines, including decision trees and Naive Bayes, to evaluate gains and limitations.",
      "Built a data-preparation workflow to transform raw logs into analysis-ready datasets for Python and Weka, primarily using Bash, Perl, and C.",
    ],
  },
];

const cv = {
  file: "/cv.pdf",
  updated: "March 2026",
};

const projects = [
  {
    title: "Action-Free Offline To-Online RL via Discretised State Policies",
    description:
      "Reproducible implementation of the action-free offline-to-online RL framework, including discretised state-policy training, benchmark experiments, and evaluation pipelines for safe online adaptation.",
    tech: ["Python", "Pytorch", "Action-Free RL", "MuJoCo", "W&B", "Python", "Matplotlib"],
    href: "https://github.com/nati-warwick/action-free-offline-to-online-RL",
  },
  {
    title: "Evaluation-Time Policy Switching for Offline Reinforcement Learning",
    description:
      "Implementation of evaluation-time policy switching for offline RL, with BC + SAC/TD3 integration and analysis scripts to measure robustness under distribution shift in MuJoCo environments.",
    tech: ["Python", "Pytorch", "Offline RL", "MuJoCo", "W&B", "Matplotlib"],
    href: "https://github.com/nati-warwick/policy_switching",
  },
];

const tabs = [
  { id: "home", label: "Home", icon: FileText },
  { id: "publications", label: "Publications", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "cv", label: "CV", icon: FileText },
  { id: "code", label: "Code", icon: Code2 },
];

const MotionDiv = motion.div;

function SectionCard({ children, dark = false }) {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-black/10 bg-white"
      }`}
    >
      {children}
    </div>
  );
}

function ExternalPill({ label, href, dark = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition hover:scale-[1.02] ${
        dark
          ? "border-white/15 bg-white/5 hover:bg-white/10"
          : "border-black/10 bg-white hover:bg-black/[0.03]"
      }`}
    >
      {label}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function TabButton({ item, active, onClick, dark }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
        active
          ? dark
            ? "border-white/20 bg-white/10"
            : "border-black/15 bg-black/[0.04]"
          : dark
          ? "border-white/10 hover:bg-white/5"
          : "border-black/10 hover:bg-black/[0.03]"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{item.label}</span>
    </button>
  );
}

export default function AcademicTabbedWebsiteTemplate() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [pubQuery, setPubQuery] = useState("");
  const openPublication = (query) => {
    setPubQuery(query);
    setActiveTab("publications");
  };

  const filteredPublications = useMemo(() => {
    const q = pubQuery.trim().toLowerCase();
    if (!q) return publications;
    return publications.filter((p) =>
      [p.title, p.venue, p.authors, ...(p.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [pubQuery]);

  const page = darkMode
    ? "bg-neutral-950 text-neutral-100"
    : "bg-neutral-50 text-neutral-900";
  const muted = darkMode ? "text-neutral-400" : "text-neutral-600";
  const divider = darkMode ? "border-white/10" : "border-black/10";

  return (
    <div className={`min-h-screen ${page}`}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <SectionCard dark={darkMode}>
              <div className="space-y-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setDarkMode((v) => !v)}
                    className={`rounded-xl border p-2 transition ${
                      darkMode
                        ? "border-white/10 hover:bg-white/5"
                        : "border-black/10 hover:bg-black/[0.03]"
                    }`}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                </div>

                <div className="space-y-4">
                  <div
                    className={`mx-auto grid h-56 w-56 place-items-center overflow-hidden rounded-full border ${
                      darkMode
                        ? "border-white/10 bg-white/5"
                        : "border-black/10 bg-white"
                    }`}
                  >
                    {profile.photo ? (
                      <img
                        src={profile.photo}
                        alt={`${profile.name} portrait`}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <span className={`text-2xl font-semibold tracking-wide ${muted}`}>YN</span>
                    )}
                  </div>

                  <div className="space-y-1 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
                    <p className={`text-sm ${muted}`}>{profile.title}</p>
                    <p className={`text-sm ${muted}`}>{profile.org}</p>
                  </div>
                  <div className={`flex items-center justify-center gap-1.5 text-sm ${muted}`}>
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                <div className={`border-t pt-5 ${divider}`}>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className={`rounded-xl border p-2 ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/[0.03]"}`}
                      title="Email"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>

                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-xl border p-2 ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/[0.03]"}`}
                      title="GitHub"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>

                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-xl border p-2 ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/[0.03]"}`}
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>

                    <a
                      href={profile.links.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-xl border p-2 ${darkMode ? "border-white/10 hover:bg-white/5" : "border-black/10 hover:bg-black/[0.03]"}`}
                      title="Google Scholar"
                      aria-label="Google Scholar"
                    >
                      <GraduationCap className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className={`border-t pt-5 ${divider}`}>
                  <h2 className="text-sm font-medium">Interests</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.interests.map((i) => (
                      <span
                        key={i}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          darkMode
                            ? "border-white/10 bg-white/5"
                            : "border-black/10 bg-white"
                        }`}
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`border-t pt-5 ${divider}`}>
                  <h2 className="text-sm font-medium">Education</h2>
                  <div className="mt-2 space-y-3">
                    {profile.education.map((e) => (
                      <div key={`${e.degree}-${e.institution}`}>
                        <p className="text-sm font-medium">{e.degree}</p>
                        <p className={`text-sm ${muted}`}>{e.institution}</p>
                        <p className={`text-xs ${muted}`}>{e.years}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Main content */}
          <div className="space-y-4">
            <SectionCard dark={darkMode}>
              <div className="overflow-x-auto">
                <div className="flex w-max min-w-full flex-nowrap justify-center gap-2">
                  {tabs.map((item) => (
                    <TabButton
                      key={item.id}
                      item={item}
                      active={activeTab === item.id}
                      onClick={() => setActiveTab(item.id)}
                      dark={darkMode}
                    />
                  ))}
                </div>
              </div>
            </SectionCard>

            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="space-y-4"
              >
                {activeTab === "home" && (
                  <>
                    <SectionCard dark={darkMode}>
                      <h3 className="text-base font-semibold">Biography</h3>
                      <p className={`mt-3 text-sm leading-7 ${muted}`}>
                        {profile.bio}
                      </p>
                    </SectionCard>

                    <SectionCard dark={darkMode}>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold">Highlights</h3>
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div
                          className={`rounded-xl border p-4 ${
                            darkMode
                              ? "border-white/10 bg-white/5"
                              : "border-black/10 bg-white"
                          }`}
                        >
                          <p className="text-sm font-medium">Recent Publications</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {[
                              { label: "ICLR 2026 (Poster)", query: "ICLR 2026" },
                              { label: "AAMAS 2025 (Oral + Poster)", query: "AAMAS 2025" },
                            ].map((item) => (
                              <button
                                key={item.label}
                                type="button"
                                onClick={() => openPublication(item.query)}
                                className={`rounded-full border px-3 py-1 text-xs transition ${
                                  darkMode
                                    ? "border-white/15 bg-white/5 hover:bg-white/10"
                                    : "border-black/15 bg-white hover:bg-black/[0.04]"
                                }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div
                          className={`rounded-xl border p-4 md:col-span-2 ${
                            darkMode
                              ? "border-white/10 bg-white/5"
                              : "border-black/10 bg-white"
                          }`}
                        >
                          <p className="text-sm font-medium">Technical Strengths</p>
                          <ul className={`mt-2 list-disc space-y-2 pl-5 text-sm leading-6 ${muted}`}>
                            <li>
                              Build end-to-end RL algorithms in PyTorch and evaluate them on standard benchmarks (e.g., MuJoCo) and custom environments using reproducible pipelines, systematic ablations, and W&B experiment tracking.
                            </li>
                            <li>
                              Develop maintainable research code, clear documentation, and practical workflows that make results easier to reproduce, extend, and deploy.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SectionCard>

                    <SectionCard dark={darkMode}>
                      <h3 className="text-base font-semibold">Beyond Research</h3>
                      <p className={`mt-3 text-sm leading-7 ${muted}`}>
                        I like to stay active outside of research and regularly spend time rowing, cycling, and training at the gym.
                        I also enjoy trying new activities and recently took up salsa dancing.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Rowing", "Cycling", "Gym", "Salsa"].map((hobby) => (
                          <span
                            key={hobby}
                            className={`rounded-full border px-3 py-1 text-xs ${
                              darkMode
                                ? "border-white/10 bg-white/5"
                                : "border-black/10 bg-white"
                            }`}
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </SectionCard>
                  </>
                )}

                {activeTab === "publications" && (
                  <>
                    <SectionCard dark={darkMode}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-base font-semibold">Publications</h3>
                        <label
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                            darkMode
                              ? "border-white/10 bg-white/5"
                              : "border-black/10 bg-white"
                          }`}
                        >
                          <Search className="h-4 w-4" />
                          <input
                            value={pubQuery}
                            onChange={(e) => setPubQuery(e.target.value)}
                            placeholder="Filter publications..."
                            className="w-56 bg-transparent outline-none placeholder:text-neutral-400"
                          />
                        </label>
                      </div>
                    </SectionCard>

                    {filteredPublications.map((pub) => (
                      <SectionCard key={pub.title} dark={darkMode}>
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div className="min-w-0">
                            <h4 className="text-base font-semibold leading-6">{pub.title}</h4>
                            <p className={`mt-1 text-sm ${muted}`}>{pub.venue}</p>
                            <p className={`mt-1 text-sm ${muted}`}>{pub.authors}</p>
                            <p className={`mt-3 text-sm leading-6 ${muted}`}>{pub.abstract}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {pub.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`rounded-full border px-2.5 py-1 text-xs ${
                                    darkMode
                                      ? "border-white/10 bg-white/5"
                                      : "border-black/10 bg-white"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
                            {pub.links.map((l) => (
                              <ExternalPill key={l.label} label={l.label} href={l.href} dark={darkMode} />
                            ))}
                          </div>
                        </div>
                      </SectionCard>
                    ))}

                    {filteredPublications.length === 0 && (
                      <SectionCard dark={darkMode}>
                        <p className={`text-sm ${muted}`}>
                          No publications match your search. Try a title keyword, venue, or tag.
                        </p>
                      </SectionCard>
                    )}
                  </>
                )}

                {activeTab === "experience" && (
                  <>
                    {experience.map((job) => (
                      <SectionCard key={`${job.role}-${job.company}`} dark={darkMode}>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-base font-semibold">{job.role}</h3>
                            <p className={`text-sm ${muted}`}>
                              {job.company}
                              {job.location ? ` · ${job.location}` : ""}
                            </p>
                          </div>
                          <p className={`text-sm ${muted}`}>{job.period}</p>
                        </div>
                        <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-6 ${muted}`}>
                          {job.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </SectionCard>
                    ))}
                  </>
                )}

                {activeTab === "cv" && (
                  <>
                    <SectionCard dark={darkMode}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-base font-semibold">Curriculum Vitae</h3>
                          <p className={`mt-1 text-xs ${muted}`}>Last updated: {cv.updated}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <ExternalPill label="Open CV" href={cv.file} dark={darkMode} />
                          <a
                            href={cv.file}
                            download
                            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition hover:scale-[1.02] ${
                              darkMode
                                ? "border-white/15 bg-white/5 hover:bg-white/10"
                                : "border-black/10 bg-white hover:bg-black/[0.03]"
                            }`}
                          >
                            Download
                            <Download className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </SectionCard>

                    <SectionCard dark={darkMode}>
                      <div
                        className={`overflow-hidden rounded-xl border ${
                          darkMode ? "border-white/10" : "border-black/10"
                        }`}
                      >
                        <iframe
                          src={`${cv.file}#view=FitH`}
                          title={`${profile.name} CV`}
                          className="h-[75vh] w-full"
                        />
                      </div>
                      <p className={`mt-3 text-xs ${muted}`}>
                        If preview is blocked by your browser, use Open CV or Download.
                      </p>
                    </SectionCard>
                  </>
                )}

                {activeTab === "code" && (
                  <>
                    {projects.map((project) => (
                      <SectionCard key={project.title} dark={darkMode}>
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-base font-semibold">{project.title}</h3>
                            <p className={`mt-2 text-sm leading-6 ${muted}`}>{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className={`rounded-full border px-2.5 py-1 text-xs ${
                                    darkMode
                                      ? "border-white/10 bg-white/5"
                                      : "border-black/10 bg-white"
                                  }`}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ExternalPill label="Repository" href={project.href} dark={darkMode} />
                        </div>
                      </SectionCard>
                    ))}
                  </>
                )}
              </MotionDiv>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
}

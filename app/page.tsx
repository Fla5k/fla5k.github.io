"use client";

import { useState, type ElementType } from "react";

import LoadingScreen from "./components/LoadingScreen";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiVuedotjs,
  SiNodedotjs,
  SiNpm,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiPrisma,
  SiSvelte,
  SiMysql,
} from "react-icons/si";

type Language = "id" | "en";

const skills = [
  { name: "HTML", icon: SiHtml5, className: "html" },
  { name: "CSS", icon: SiCss, className: "css" },
  { name: "JavaScript", icon: SiJavascript, className: "javascript" },
  { name: "TypeScript", icon: SiTypescript, className: "typescript" },
  { name: "React", icon: SiReact, className: "react" },
  { name: "Next.js", icon: SiNextdotjs, className: "nextjs" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "tailwind" },
  { name: "Laravel", icon: SiLaravel, className: "laravel" },
  { name: "PHP", icon: SiPhp, className: "php" },
  { name: "Vue.js", icon: SiVuedotjs, className: "vue" },
  { name: "Node.js", icon: SiNodedotjs, className: "node" },
  { name: "npm", icon: SiNpm, className: "npm" },
  { name: "Docker", icon: SiDocker, className: "docker" },
  { name: "Git", icon: SiGit, className: "git" },
  { name: "GitHub", icon: SiGithub, className: "github" },
  { name: "PostgreSQL", icon: SiPostgresql, className: "postgresql" },
  { name: "Prisma", icon: SiPrisma, className: "prisma" },
];

const translations = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Skills",
      projects: "Project",
      contact: "Kontak",
      github: "GitHub ↗",
    },

    hero: {
      eyebrow: "SELAMAT DATANG DI PORTFOLIO SAYA",
      greeting: "Hi, Saya",
      role: "Fresh Graduate · S1 Sistem Informasi",
      description:
        "Saya membangun website dan sistem informasi dengan fokus pada tampilan yang responsif, interaktif, dan mudah digunakan.",
      viewProjects: "Lihat Project",
      downloadCv: "Download CV",
      developer: "Developer",
      problemSolver: "Problem Solver",
      continuousLearner: "Pembelajar",
      portfolio: "PORTFOLIO / 2026",
      basedIn: "Berbasis di",
      focus: "Fokus",
      location: "Sumedang, Indonesia",
      webDevelopment: "Web Development",
      profile: "PROFILE",
    },

    about: {
      number: "01 — TENTANG",
      title: "Membangun pengalaman digital dengan tujuan.",
      large:
        "Saya merupakan lulusan S1 Sistem Informasi yang memiliki pengetahuan dan kompetensi dalam pengembangan website serta sistem informasi.",
      paragraph1:
        "Saya terbiasa menggunakan teknologi web untuk membangun antarmuka yang responsif, interaktif, dan mudah digunakan. Saya juga memiliki pengalaman mengerjakan berbagai project berbasis web selama perkuliahan dan pengembangan project pribadi.",
      paragraph2:
        "Saya terus mengembangkan kemampuan teknis dan terbuka terhadap kesempatan untuk belajar serta berkontribusi dalam lingkungan kerja profesional.",
    },

    skills: {
      number: "02 — TEKNOLOGI",
      title: "Tools yang saya gunakan.",
      description:
        "Teknologi dan tools yang saya gunakan untuk membangun aplikasi web modern.",
      stack: "TECH STACK / 2026",
      technologies: "17 TEKNOLOGI",
    },

    projects: {
      number: "03 — PROJECT",
      title: "Project pilihan.",
      description:
        "Beberapa project yang saya kerjakan selama proses pembelajaran, pengembangan pribadi, dan penyelesaian studi.",

      tablego: {
        description:
          "Platform reservasi meja restoran yang sedang dikembangkan untuk membantu pengguna menemukan restoran dan melakukan reservasi meja secara lebih praktis.",
        status: "Sedang Dikembangkan",
        type: "Project Personal",
        details: "Detail",
      },

      enha: {
        description:
          "Sistem informasi terintegrasi untuk membantu pengelolaan penjualan, stok, transaksi, dan operasional Enha Petshop dengan pendekatan Offline-First.",
        status: "Selesai",
        type: "Project Akhir",
        view: "Lihat",
      },

      sembako: {
        description:
          "Sistem informasi berbasis web untuk membantu pengelolaan data dan operasional toko sembako.",
        status: "Selesai",
        type: "Project Akademik",
        details: "Detail",
      },
    },

    education: {
      number: "04 — PENDIDIKAN",
      title: "Latar belakang akademik.",
      university: "Universitas Komputer Indonesia",
      degree: "S1 Sistem Informasi",
      faculty: "Fakultas Teknik dan Ilmu Komputer — Bandung, Jawa Barat",
      year: "2021 — 2026",
    },

    contact: {
      number: "05 — KONTAK",
      titleFirst: "Mari membuat",
      titleSecond: "sesuatu yang",
      titleThird: "luar biasa.",
      description:
        "Terbuka untuk kesempatan kerja, project, dan kolaborasi di bidang web development.",
      github: "GitHub",
      email: "Email",
      name: "Nama",
      emailLabel: "Email",
      subject: "Subjek",
      message: "Pesan",
      namePlaceholder: "Nama kamu",
      emailPlaceholder: "email@kamu.com",
      subjectPlaceholder: "Apa yang ingin kamu diskusikan?",
      messagePlaceholder: "Tulis pesan kamu di sini...",
      send: "Kirim Pesan",
    },

    footer: {
      copyright: "© 2026 Fadil Muhammad.",
      built: "Designed & Built with Next.js",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      github: "GitHub ↗",
    },

    hero: {
      eyebrow: "WELCOME TO MY PORTFOLIO",
      greeting: "Hi, I'm",
      role: "Fresh Graduate · Information Systems",
      description:
        "I build websites and information systems with a focus on responsive, interactive, and user-friendly experiences.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      developer: "Developer",
      problemSolver: "Problem Solver",
      continuousLearner: "Continuous Learner",
      portfolio: "PORTFOLIO / 2026",
      basedIn: "Based in",
      focus: "Focus",
      location: "Sumedang, Indonesia",
      webDevelopment: "Web Development",
      profile: "PROFILE",
    },

    about: {
      number: "01 — ABOUT",
      title: "Building digital experiences with purpose.",
      large:
        "I am an Information Systems graduate with knowledge and skills in website development and information systems.",
      paragraph1:
        "I am experienced in using web technologies to build responsive, interactive, and user-friendly interfaces. I have also worked on various web-based projects throughout my studies and personal development projects.",
      paragraph2:
        "I continuously develop my technical skills and remain open to opportunities to learn and contribute in a professional environment.",
    },

    skills: {
      number: "02 — TECHNOLOGIES",
      title: "Tools I work with.",
      description:
        "Technologies and tools I use to build modern web applications.",
      stack: "TECH STACK / 2026",
      technologies: "17 TECHNOLOGIES",
    },

    projects: {
      number: "03 — PROJECTS",
      title: "Selected work.",
      description:
        "A selection of projects I worked on during my learning journey, personal development, and academic studies.",

      tablego: {
        description:
          "A restaurant table reservation platform currently under development to help users discover restaurants and make table reservations more conveniently.",
        status: "In Development",
        type: "Personal Project",
        details: "Details",
      },

      enha: {
        description:
          "An integrated information system designed to manage sales, inventory, transactions, and operations at Enha Petshop using an Offline-First approach.",
        status: "Completed",
        type: "Final Project",
        view: "View",
      },

      sembako: {
        description:
          "A web-based information system designed to support data management and daily operations for a grocery store.",
        status: "Completed",
        type: "Academic Project",
        details: "Details",
      },
    },

    education: {
      number: "04 — EDUCATION",
      title: "Academic background.",
      university: "Universitas Komputer Indonesia",
      degree: "Bachelor of Information Systems",
      faculty:
        "Faculty of Engineering and Computer Science — Bandung, West Java",
      year: "2021 — 2026",
    },

    contact: {
      number: "05 — CONTACT",
      titleFirst: "Let's create",
      titleSecond: "something",
      titleThird: "great.",
      description:
        "Open to job opportunities, projects, and collaborations in web development.",
      github: "GitHub",
      email: "Email",
      name: "Name",
      emailLabel: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What would you like to talk about?",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
    },

    footer: {
      copyright: "© 2026 Fadil Muhammad.",
      built: "Designed & Built with Next.js",
    },
  },
};

const projectTechIcons: Record<string, ElementType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Svelte: SiSvelte,
  Docker: SiDocker,
  PHP: SiPhp,
  MySQL: SiMysql,
};

function SkillLogo({
  icon: Icon,
  className,
}: {
  icon: ElementType;
  className: string;
}) {
  return (
    <span className={`tech-logo ${className}`}>
      <Icon />
    </span>
  );
}

function SkillItem({
  name,
  icon,
  className,
}: {
  name: string;
  icon: ElementType;
  className: string;
}) {
  return (
    <div className="tech-item">
      <SkillLogo icon={icon} className={className} />
      <span>{name}</span>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-track">
        {repeatedSkills.map((skill, index) => (
          <SkillItem
            key={`${skill.name}-${index}`}
            name={skill.name}
            icon={skill.icon}
            className={skill.className}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");

  const t = translations[language];

  return (
    <>
      <LoadingScreen />

      <main>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-inner">
            <a href="#" className="logo">
              F
            </a>

            <nav>
              <a href="#about">{t.nav.about}</a>
              <a href="#skills">{t.nav.skills}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>

            <div className="nav-actions">
              <div
                className="language-switcher"
                aria-label="Language selector"
                role="group"
              >
                <button
                  type="button"
                  className={language === "id" ? "active" : ""}
                  onClick={() => setLanguage("id")}
                  aria-label="Switch to Indonesian"
                  aria-pressed={language === "id"}
                >
                  ID
                </button>

                <span className="language-divider">/</span>

                <button
                  type="button"
                  className={language === "en" ? "active" : ""}
                  onClick={() => setLanguage("en")}
                  aria-label="Switch to English"
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
              </div>

              <a
                href="https://github.com/Fla5k"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button"
              >
                {t.nav.github}
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="hero-intro">
                <p className="eyebrow">{t.hero.eyebrow}</p>

                <h1>
                  {t.hero.greeting}
                  <span>
                    Fadil
                    <br />
                    Muhammad.
                  </span>
                </h1>

                <div className="hero-role">
                  <span className="status-dot"></span>
                  {t.hero.role}
                </div>

                <p className="hero-description">{t.hero.description}</p>

                <div className="hero-actions">
                  <a href="#projects" className="button primary">
                    <span>{t.hero.viewProjects}</span>
                    <span>↗</span>
                  </a>

                  <a
                    href="/CV-Fadil-Muhammad.pdf"
                    download
                    className="button secondary"
                  >
                    <span>{t.hero.downloadCv}</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>

              <div className="hero-meta">
                <div>
                  <strong>01</strong>
                  <span>{t.hero.developer}</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>{t.hero.problemSolver}</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>{t.hero.continuousLearner}</span>
                </div>
              </div>
            </div>

            {/* PROFILE VISUAL */}
            <div className="hero-visual reveal">
              <div className="profile-orbit orbit-one"></div>
              <div className="profile-orbit orbit-two"></div>

              <div className="visual-label visual-label-top">
                <span></span>
                {t.hero.portfolio}
              </div>

              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <img
                    src="/public.jpeg"
                    alt="Fadil Muhammad"
                    className="profile-image"
                  />
                </div>

                <div className="profile-info">
                  <div>
                    <span>{t.hero.basedIn}</span>
                    <strong>{t.hero.location}</strong>
                  </div>

                  <div>
                    <span>{t.hero.focus}</span>
                    <strong>{t.hero.webDevelopment}</strong>
                  </div>
                </div>
              </div>

              <div className="floating-badge badge-one">
                <span className="badge-icon">✦</span>
                Front-End Developer
              </div>

              <div className="floating-badge badge-two">
                <span className="badge-icon">●</span>
                Back-End Developer
              </div>

              <div className="floating-badge badge-three">
                <span className="badge-icon">⌘</span>
                UI / UX Designer
              </div>

              <div className="floating-badge badge-four">
                <span className="badge-icon">✦</span>
                Full-Stack Developer
              </div>

              <div className="floating-badge badge-five">
                <span className="badge-icon">●</span>
                AI Engineer
              </div>

              <div className="floating-badge badge-six">
                <span className="badge-icon">⌘</span>
                Web Developer
              </div>

              <div className="visual-index">
                <span>01</span>
                <span>{t.hero.profile}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-number">{t.about.number}</p>
              <h2>{t.about.title}</h2>
            </div>

            <div className="about-grid">
              <div className="reveal">
                <p className="large-text">{t.about.large}</p>
              </div>

              <div className="reveal">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="skills-header container reveal">
            <div>
              <p className="section-number">{t.skills.number}</p>
              <h2>{t.skills.title}</h2>
            </div>

            <p>{t.skills.description}</p>
          </div>

          <div className="tech-marquee-wrapper">
            <MarqueeRow />
            <MarqueeRow reverse />
          </div>

          <div className="skills-footer container">
            <span>{t.skills.stack}</span>
            <span>{t.skills.technologies}</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="projects-intro reveal">
              <div>
                <p className="section-number">{t.projects.number}</p>
                <h2>{t.projects.title}</h2>
              </div>

              <p className="projects-intro-text">{t.projects.description}</p>
            </div>

            <div className="premium-projects-grid">
              {/* TABLEGO */}
              <article className="premium-project-card reveal">
                <div className="premium-project-image">
                  <img
                    src="/projects/tablego.png"
                    alt="Preview website TableGo"
                  />

                  <div className="premium-project-image-top">
                    <span className="premium-project-number">01</span>

                    <span className="premium-project-status">
                      <span></span>
                      {t.projects.tablego.status}
                    </span>
                  </div>

                  <div className="premium-project-overlay">
                    <span className="premium-project-arrow">↗</span>
                  </div>
                </div>

                <div className="premium-project-content">
                  <div className="premium-project-meta">
                    <span>{t.projects.tablego.type}</span>
                  </div>

                  <h3>TableGo</h3>

                  <p>{t.projects.tablego.description}</p>

                  <div className="premium-project-bottom">
                    <div className="premium-project-tags">
                      {["Next.js", "TypeScript", "Prisma", "PostgreSQL"].map(
                        (tag) => {
                          const Icon = projectTechIcons[tag];

                          return (
                            <span key={tag}>
                              {Icon && <Icon />}
                              {tag}
                            </span>
                          );
                        },
                      )}
                    </div>

                    <span className="premium-project-link disabled">
                      {t.projects.tablego.details}
                      <span>↗</span>
                    </span>
                  </div>
                </div>
              </article>

              {/* ENHA PETSHOP */}
              <article className="premium-project-card reveal">
                <div className="premium-project-image">
                  <img
                    src="/projects/enha-petshop.png"
                    alt="Preview website Enha Petshop"
                  />

                  <div className="premium-project-image-top">
                    <span className="premium-project-number">02</span>

                    <span className="premium-project-status">
                      <span></span>
                      {t.projects.enha.status}
                    </span>
                  </div>

                  <div className="premium-project-overlay">
                    <a
                      href="https://sinta.kemdiktisaintek.go.id/authors/profile/258661/?view=iprs#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Enha Petshop"
                      className="premium-project-arrow"
                    >
                      ↗
                    </a>
                  </div>
                </div>

                <div className="premium-project-content">
                  <div className="premium-project-meta">
                    <span>{t.projects.enha.type}</span>
                  </div>

                  <h3>
                    Sistem Informasi Terintegrasi Untuk Manajemen Penjualan dan
                    Stok Pada Enha Petshop Berbasis Offline-First
                  </h3>

                  <p>{t.projects.enha.description}</p>

                  <div className="premium-project-bottom">
                    <div className="premium-project-tags">
                      {["Svelte", "PostgreSQL", "Docker"].map((tag) => {
                        const Icon = projectTechIcons[tag];

                        return (
                          <span key={tag}>
                            {Icon && <Icon />}
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href="https://sinta.kemdiktisaintek.go.id/authors/profile/258661/?view=iprs#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-project-link"
                    >
                      {t.projects.enha.view}
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* SEMBAKO BERKAT */}
              <article className="premium-project-card reveal">
                <div className="premium-project-image">
                  <img
                    src="/projects/sembako-berkat.png"
                    alt="Preview website Sembako Berkat"
                  />

                  <div className="premium-project-image-top">
                    <span className="premium-project-number">03</span>

                    <span className="premium-project-status">
                      <span></span>
                      {t.projects.sembako.status}
                    </span>
                  </div>

                  <div className="premium-project-overlay">
                    <span className="premium-project-arrow">↗</span>
                  </div>
                </div>

                <div className="premium-project-content">
                  <div className="premium-project-meta">
                    <span>{t.projects.sembako.type}</span>
                  </div>

                  <h3>Sembako Berkat</h3>

                  <p>{t.projects.sembako.description}</p>

                  <div className="premium-project-bottom">
                    <div className="premium-project-tags">
                      {["PHP", "MySQL"].map((tag) => {
                        const Icon = projectTechIcons[tag];

                        return (
                          <span key={tag}>
                            {Icon && <Icon />}
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    <span className="premium-project-link disabled">
                      {t.projects.sembako.details}
                      <span>↗</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-number">{t.education.number}</p>
              <h2>{t.education.title}</h2>
            </div>

            <div className="education-card reveal">
              <div className="education-brand">
                <div className="education-logo-wrapper">
                  <img
                    src="/unikom.png"
                    alt="Logo Universitas Komputer Indonesia"
                    className="education-logo"
                  />
                </div>

                <div className="education-year">{t.education.year}</div>
              </div>

              <div className="education-content">
                <h3>{t.education.university}</h3>
                <p>{t.education.degree}</p>
                <p>{t.education.faculty}</p>
              </div>

              <div className="education-arrow">↗</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal">
            <p className="section-number">{t.contact.number}</p>

            <div className="contact-grid">
              <div className="contact-intro">
                <h2>
                  {t.contact.titleFirst}
                  <br />
                  {t.contact.titleSecond} <span>{t.contact.titleThird}</span>
                </h2>

                <p>{t.contact.description}</p>

                <div className="contact-links">
                  <a
                    href="https://github.com/Fla5k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contact.github}
                  </a>

                  <span>/</span>

                  <a href="mailto:fadilharry@gmail.com">{t.contact.email}</a>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="form-group">
                  <label htmlFor="name">{t.contact.name}</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.emailLabel}</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t.contact.subject}</label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.contact.message}</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder={t.contact.messagePlaceholder}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  <span>{t.contact.send}</span>
                  <span>↗</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container footer-inner">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.built}</p>
          </div>
        </footer>
      </main>
    </>
  );
}

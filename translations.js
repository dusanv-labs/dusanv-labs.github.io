/*
 * All site text in both languages.
 * Edit the text here, then commit and push. The site updates automatically.
 * Keep the same keys in "en" and "sr".
 */
const TRANSLATIONS = {
  en: {
    meta: {
      title: "Dušan Vasić – Full Stack Developer",
      description:
        "Full Stack Developer with 4+ years of experience building SaaS web applications, admin portals and REST APIs. TypeScript, NestJS, React, PHP.",
      locale: "en_US"
    },
    cvFile: "cv-en.pdf",
    a11y: {
      skip: "Skip to content",
      nav: "Main navigation",
      menu: "Open menu",
      theme: "Toggle light/dark theme",
      language: "Choose language",
      home: "Back to top"
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Dušan Vasić",
      title: "Full Stack Developer",
      tagline: "I build SaaS web applications, admin portals and REST APIs.",
      contact: "Contact",
      cv: "Download CV",
      photoAlt: "Dušan Vasić, Full Stack Developer"
    },
    about: {
      heading: "About me",
      text:
        "Full Stack Developer with 4+ years of experience building SaaS web applications, admin portals and REST APIs. Currently developing features for a fleet operations and driver scheduling platform (TypeScript, NestJS, React, PostgreSQL), working directly with the client from requirements to delivery. Previously built a PHP/MySQL ticketing platform with online payments, a multi-client admin portal used by 10+ companies, and REST APIs for mobile apps and self-service kiosks. Uses AI-assisted development (Claude Code) as a core part of the daily workflow.",
      facts: [
        { value: "4+", label: "years of experience" },
        { value: "10+", label: "client companies using the admin portal" },
        { value: "Požarevac", label: "Serbia" }
      ]
    },
    experience: {
      heading: "Experience",
      role: "Full Stack Developer",
      company: "Saniva",
      location: "Požarevac, Serbia",
      period: "Feb 2022 – Present",
      projects: [
        {
          name: "Fleet operations and workforce planning SaaS platform",
          period: "Nov 2025 – Present",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL"],
          bullets: [
            "Work directly with the client to gather requirements and deliver new features end-to-end, from data model and REST APIs (NestJS, PostgreSQL) to React UI.",
            "Develop the dispatcher module for driver work planning, daily shift scheduling and absence management, digitizing planning processes previously handled manually.",
            "Built a bulk timetable import from Excel (XLS) files, eliminating manual schedule entry and significantly reducing operator setup time.",
            "Use AI-assisted development (Claude Code) as the primary workflow for implementation, refactoring and test generation, accelerating feature delivery."
          ]
        },
        {
          name: "Passenger transport ticketing and operations platform",
          period: "Feb 2022 – Nov 2025",
          tech: ["PHP", "MVC", "MySQL", "JavaScript"],
          bullets: [
            "Built and extended a multi-client SaaS admin portal used by 10+ client companies, with role-based access control, Excel/PDF reporting and refunds management, automating their day-to-day operations.",
            "Developed a customer-facing ticket sales website with seat reservation, online payments and automated QR-code PDF tickets, enabling fully self-service online sales.",
            "Implemented REST APIs powering the admin portal, mobile applications, self-service ticket kiosks and a smart-city e-bike sharing system.",
            "Developed vehicle tracking on interactive maps (Google Maps API) and dispatcher features, giving operators live visibility of their fleet.",
            "Built a Raspberry Pi digital signage solution (PHP, JavaScript) that plays video ads locally, without relying on a constant network connection.",
            "Optimized slow database queries and pages, resolved production issues and refactored legacy code within a custom PHP MVC architecture."
          ]
        }
      ]
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "Programming Languages", items: ["TypeScript", "JavaScript (Node.js)", "PHP", "SQL", "HTML", "CSS"] },
        { name: "Backend", items: ["NestJS", "REST APIs", "PHP (custom MVC)", "Prisma ORM", "JWT authentication", "Swagger/OpenAPI"] },
        { name: "Frontend", items: ["React", "Tailwind CSS", "jQuery"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL"] },
        { name: "APIs & Integrations", items: ["Google Maps API", "Online payments", "Kiosk and mobile app APIs", "Raspberry Pi devices"] },
        { name: "Tools & Workflow", items: ["Git", "GitHub", "Claude Code (AI-assisted development, prompt & context engineering, MCP)"] },
        { name: "Domain", items: ["SaaS platforms", "Fleet management", "Scheduling and dispatch", "Ticketing"] }
      ]
    },
    projects: {
      heading: "Projects",
      intro: "A personal open-source project, followed by commercial projects I have worked on at Saniva (their source code is proprietary, so they have no public links).",
      badge: "Commercial project",
      githubCta: "More on GitHub",
      items: [
        {
          title: "BookTheCourt – sports court booking",
          badge: "Personal project · open source",
          description: "Full-stack booking app for padel, tennis and football courts: availability calendar, booking in a few taps, admin panel and a revenue report with XLSX/PDF export. English and Serbian.",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
          image: "images/book-the-court.png",
          imageAlt: "BookTheCourt booking page with a calendar, start times and free courts",
          links: [
            { label: "Live demo", url: "https://dusanv-labs.github.io/book-the-court/" },
            { label: "Source code", url: "https://github.com/dusanv-labs/book-the-court" }
          ]
        },
        {
          title: "Fleet operations & driver scheduling",
          description: "Dispatcher module for driver work planning, daily shift scheduling and absence management, plus bulk timetable import from Excel.",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL"]
        },
        {
          title: "Multi-client admin portal",
          description: "SaaS admin portal used by 10+ client companies, with role-based access control, Excel/PDF reporting and refunds management.",
          tech: ["PHP", "MVC", "MySQL"]
        },
        {
          title: "Online ticket sales website",
          description: "Customer-facing website with seat reservation, online payments and automated QR-code PDF tickets for fully self-service sales.",
          tech: ["PHP", "MySQL", "JavaScript"]
        },
        {
          title: "REST APIs and integrations",
          description: "APIs powering the admin portal, mobile applications, self-service ticket kiosks and a smart-city e-bike sharing system.",
          tech: ["PHP", "REST APIs", "MySQL"]
        },
        {
          title: "Vehicle tracking",
          description: "Vehicle tracking on interactive maps and dispatcher features, giving operators live visibility of their fleet.",
          tech: ["Google Maps API", "JavaScript", "PHP"]
        },
        {
          title: "Digital signage",
          description: "Raspberry Pi solution that plays video ads locally, without relying on a constant network connection.",
          tech: ["Raspberry Pi", "PHP", "JavaScript"]
        }
      ]
    },
    education: {
      heading: "Education & Languages",
      degree: "Bachelor of Applied Studies (180 ECTS) — Information Systems and Technologies",
      school: "Belgrade Academy of Business and Arts Applied Studies (BAPUSS)",
      period: "2017 – 2021",
      titleLine: "Professional title: Professional Engineer of Information Systems",
      languagesHeading: "Languages",
      languages: [
        { name: "Serbian", level: "Native" },
        { name: "English", level: "Professional working proficiency (B2)" }
      ]
    },
    contact: {
      heading: "Contact",
      text: "Open to new opportunities and collaboration. The fastest way to reach me is by email.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    footer: {
      built: "Built with HTML, CSS and JavaScript."
    }
  },

  sr: {
    meta: {
      title: "Dušan Vasić – Full Stack Developer",
      description:
        "Full Stack Developer sa više od 4 godine iskustva u razvoju SaaS web aplikacija, admin portala i REST API-ja. TypeScript, NestJS, React, PHP.",
      locale: "sr_RS"
    },
    cvFile: "cv-sr.pdf",
    a11y: {
      skip: "Preskoči na sadržaj",
      nav: "Glavna navigacija",
      menu: "Otvori meni",
      theme: "Promeni svetlu/tamnu temu",
      language: "Izaberi jezik",
      home: "Na vrh stranice"
    },
    nav: {
      about: "O meni",
      experience: "Iskustvo",
      skills: "Veštine",
      projects: "Projekti",
      education: "Obrazovanje",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Zdravo, ja sam",
      name: "Dušan Vasić",
      title: "Full Stack Developer",
      tagline: "Razvijam SaaS web aplikacije, admin portale i REST API-je.",
      contact: "Kontakt",
      cv: "Preuzmi CV",
      photoAlt: "Dušan Vasić, Full Stack Developer"
    },
    about: {
      heading: "O meni",
      text:
        "Full Stack Developer sa više od 4 godine iskustva u razvoju SaaS web aplikacija, admin portala i REST API-ja. Trenutno razvijam funkcionalnosti platforme za upravljanje voznim parkom i planiranje rada vozača (TypeScript, NestJS, React, PostgreSQL) i radim direktno sa klijentom, od definisanja zahteva do isporuke. Ranije sam razvijao PHP/MySQL platformu za prodaju karata sa online plaćanjem, multi-client admin portalom koji koristi 10+ firmi i REST API-jima za mobilne aplikacije i samouslužne kioske. AI-assisted development (Claude Code) je sastavni deo mog svakodnevnog rada.",
      facts: [
        { value: "4+", label: "godine iskustva" },
        { value: "10+", label: "firmi koristi admin portal" },
        { value: "Požarevac", label: "Srbija" }
      ]
    },
    experience: {
      heading: "Radno iskustvo",
      role: "Full Stack Developer",
      company: "Saniva",
      location: "Požarevac, Srbija",
      period: "februar 2022 – danas",
      projects: [
        {
          name: "SaaS platforma za upravljanje voznim parkom i planiranje rada vozača",
          period: "novembar 2025 – danas",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL"],
          bullets: [
            "Direktna saradnja sa klijentom na definisanju zahteva i isporuka novih funkcionalnosti od početka do kraja, od modela podataka i REST API-ja (NestJS, PostgreSQL) do React interfejsa.",
            "Razvoj dispečerskog modula za planiranje rada vozača, dnevni raspored smena i evidenciju odsustva, čime se digitalizuju procesi planiranja koji su se ranije obavljali ručno.",
            "Izrada masovnog uvoza redova vožnje iz Excel (XLS) fajlova, čime je eliminisan ručni unos i značajno skraćeno vreme pripreme rasporeda za operatere.",
            "AI-assisted development (Claude Code) kao osnovni način rada za implementaciju, refaktorisanje i generisanje testova, što ubrzava isporuku novih funkcionalnosti."
          ]
        },
        {
          name: "Platforma za prodaju karata i upravljanje u putničkom saobraćaju",
          period: "februar 2022 – novembar 2025",
          tech: ["PHP", "MVC", "MySQL", "JavaScript"],
          bullets: [
            "Izrada i proširivanje multi-client SaaS admin portala koji koristi 10+ firmi, sa kontrolom pristupa po ulogama, izveštajima (Excel/PDF) i upravljanjem refundacijama, čime je automatizovano svakodnevno poslovanje klijenata.",
            "Razvoj sajta za online prodaju karata sa rezervacijom sedišta, online plaćanjem i automatskim slanjem PDF karata sa QR kodom, što omogućava potpuno samouslužnu kupovinu.",
            "Implementacija REST API-ja za admin portal, mobilne aplikacije, samouslužne kioske za prodaju karata i smart-city sistem za iznajmljivanje električnih bicikala.",
            "Razvoj praćenja vozila na interaktivnim mapama (Google Maps API) i dispečerskih funkcionalnosti, koje operaterima daju pregled voznog parka u realnom vremenu.",
            "Izrada digital signage rešenja na Raspberry Pi uređajima (PHP, JavaScript) za lokalnu reprodukciju video reklama, bez zavisnosti od stalne internet konekcije.",
            "Optimizacija sporih upita i stranica, rešavanje problema u produkciji i refaktorisanje legacy koda u custom PHP MVC arhitekturi."
          ]
        }
      ]
    },
    skills: {
      heading: "Veštine",
      groups: [
        { name: "Programski jezici", items: ["TypeScript", "JavaScript (Node.js)", "PHP", "SQL", "HTML", "CSS"] },
        { name: "Backend", items: ["NestJS", "REST API", "PHP (custom MVC)", "Prisma ORM", "JWT autentifikacija", "Swagger/OpenAPI"] },
        { name: "Frontend", items: ["React", "Tailwind CSS", "jQuery"] },
        { name: "Baze podataka", items: ["PostgreSQL", "MySQL"] },
        { name: "API-ji i integracije", items: ["Google Maps API", "Online plaćanje", "API-ji za kioske i mobilne aplikacije", "Raspberry Pi uređaji"] },
        { name: "Alati i način rada", items: ["Git", "GitHub", "Claude Code (AI-assisted development, prompt i context engineering, MCP)"] },
        { name: "Domen", items: ["SaaS platforme", "Upravljanje voznim parkom", "Planiranje i dispečing", "Prodaja karata"] }
      ]
    },
    projects: {
      heading: "Projekti",
      intro: "Lični open-source projekat, a zatim komercijalni projekti na kojima sam radio u firmi Saniva (njihov izvorni kod je vlasništvo firme, pa nemaju javne linkove).",
      badge: "Komercijalni projekat",
      githubCta: "Više na GitHub-u",
      items: [
        {
          title: "BookTheCourt – rezervacija sportskih terena",
          badge: "Lični projekat · open source",
          description: "Full-stack aplikacija za rezervaciju padel, teniskih i fudbalskih terena: kalendar sa zauzetošću, rezervacija u nekoliko koraka, admin panel i izveštaj o prihodima sa izvozom u XLSX/PDF. Na engleskom i srpskom.",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
          image: "images/book-the-court.png",
          imageAlt: "Stranica za rezervaciju BookTheCourt sa kalendarom, vremenima početka i slobodnim terenima",
          links: [
            { label: "Živi demo", url: "https://dusanv-labs.github.io/book-the-court/" },
            { label: "Izvorni kod", url: "https://github.com/dusanv-labs/book-the-court" }
          ]
        },
        {
          title: "Vozni park i planiranje rada vozača",
          description: "Dispečerski modul za planiranje rada vozača, dnevni raspored smena i evidenciju odsustva, uz masovni uvoz redova vožnje iz Excel-a.",
          tech: ["TypeScript", "NestJS", "React", "PostgreSQL"]
        },
        {
          title: "Multi-client admin portal",
          description: "SaaS admin portal koji koristi 10+ firmi, sa kontrolom pristupa po ulogama, izveštajima (Excel/PDF) i upravljanjem refundacijama.",
          tech: ["PHP", "MVC", "MySQL"]
        },
        {
          title: "Sajt za online prodaju karata",
          description: "Sajt za kupce sa rezervacijom sedišta, online plaćanjem i automatskim slanjem PDF karata sa QR kodom, za potpuno samouslužnu kupovinu.",
          tech: ["PHP", "MySQL", "JavaScript"]
        },
        {
          title: "REST API-ji i integracije",
          description: "API-ji za admin portal, mobilne aplikacije, samouslužne kioske za prodaju karata i smart-city sistem za iznajmljivanje električnih bicikala.",
          tech: ["PHP", "REST API", "MySQL"]
        },
        {
          title: "Praćenje vozila",
          description: "Praćenje vozila na interaktivnim mapama i dispečerske funkcionalnosti, koje operaterima daju pregled voznog parka u realnom vremenu.",
          tech: ["Google Maps API", "JavaScript", "PHP"]
        },
        {
          title: "Digital signage",
          description: "Rešenje na Raspberry Pi uređajima za lokalnu reprodukciju video reklama, bez zavisnosti od stalne internet konekcije.",
          tech: ["Raspberry Pi", "PHP", "JavaScript"]
        }
      ]
    },
    education: {
      heading: "Obrazovanje i jezici",
      degree: "Osnovne strukovne studije (180 ESPB) — Informacioni sistemi i tehnologije",
      school: "Beogradska akademija poslovnih i umetničkih strukovnih studija (BAPUSS)",
      period: "2017 – 2021",
      titleLine: "Stručni naziv: strukovni inženjer informacionih sistema",
      languagesHeading: "Jezici",
      languages: [
        { name: "Srpski", level: "maternji" },
        { name: "Engleski", level: "profesionalni nivo (B2)" }
      ]
    },
    contact: {
      heading: "Kontakt",
      text: "Otvoren sam za nove prilike i saradnju. Najbrže ćete me dobiti putem email-a.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    footer: {
      built: "Napravljeno u HTML-u, CSS-u i JavaScript-u."
    }
  }
};

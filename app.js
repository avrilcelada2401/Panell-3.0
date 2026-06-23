const apps = [
  {
    name: "Importador Universal",
    initials: "IU",
    icon: "importer",
    description:
      "Version 3.0 para transformar Excel y CSV a la Plantilla Universal.",
    href: "https://avrilcelada2401.github.io/Importador-3.0/",
    category: "Operaciones",
    owner: "GitHub Pages",
    status: "online",
    lastUpdated: "Importador 3.0",
    accent: "#0052cc",
    tint: "#e8f1ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Playoff Help QAS",
    initials: "PH",
    icon: "help",
    description: "Acceso al entorno QAS de Playoff Help para pruebas.",
    href: "https://playoffhelpspre.playoffinformatica.com/qas",
    category: "Soporte",
    owner: "Playoff Informatica",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0065ff",
    tint: "#e9f2ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Playoff Track",
    initials: "PT",
    icon: "track",
    description: "Seguimiento de actividad, tareas y estados operativos.",
    href: "https://playoff-track-89466.web.app",
    category: "Operaciones",
    owner: "Firebase",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0057ff",
    tint: "#e8f1ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Feedback Analyzer",
    initials: "FA",
    icon: "feedback",
    description: "Analiza feedback y comentarios para detectar temas clave.",
    href: "https://feedback-analyzer-4f09d.web.app",
    category: "IA",
    owner: "Firebase",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#147dff",
    tint: "#e7f3ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Control Impagados",
    initials: "CI",
    icon: "payments",
    description: "Seguimiento de impagos, estados y acciones de cobro.",
    href: "https://control-impagados-3-0.web.app/",
    category: "Finanzas",
    owner: "Firebase",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0b66e4",
    tint: "#e5f0ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "CS Metrics",
    initials: "CS",
    icon: "metrics",
    description: "Metricas de customer success y seguimiento operativo.",
    href: "https://cs-metrics.vercel.app/",
    category: "Datos",
    owner: "Vercel",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0747a6",
    tint: "#e8eefb",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "NPS Tracker",
    initials: "NP",
    icon: "nps",
    description: "Seguimiento de NPS, respuestas y evolucion de satisfaccion.",
    href: "https://nps-tracker-three.vercel.app/",
    category: "Datos",
    owner: "Vercel",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0c66e4",
    tint: "#e7f2ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Supaclean",
    initials: "SC",
    icon: "clean",
    description: "Limpieza y preparacion de datos para flujos operativos.",
    href: "https://supaclean.web.app/",
    category: "Operaciones",
    owner: "Firebase",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#005be8",
    tint: "#e7f2ff",
    featured: true,
    openInNewTab: true,
  },
  {
    name: "Lifeboat",
    initials: "LB",
    icon: "lifeboat",
    description: "Acceso a Lifeboat para soporte y continuidad operativa.",
    href: "https://lifeboat.playoffinformatica.com/",
    category: "Soporte",
    owner: "Playoff Informatica",
    status: "online",
    lastUpdated: "Web externa",
    accent: "#0057d9",
    tint: "#e7f1ff",
    featured: true,
    openInNewTab: true,
  },
];

const statusLabels = {
  online: "Activo",
  beta: "Beta",
  internal: "Interno",
  maintenance: "Revision",
};

let activeCategory = "Todas";

const searchInput = document.querySelector("#search");
const categoriesNode = document.querySelector("#categories");
const gridNode = document.querySelector("#apps-grid");
const emptyNode = document.querySelector("#empty-state");

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderStats() {
  const categories = new Set(apps.map((app) => app.category));
  document.querySelector("#total-apps").textContent = `${apps.length} apps`;
  document.querySelector("#online-apps").textContent =
    `${apps.filter((app) => app.status === "online").length} activas`;
  document.querySelector("#beta-apps").textContent =
    `${apps.filter((app) => app.status === "beta").length} beta`;
  document.querySelector("#featured-apps").textContent =
    apps.filter((app) => app.featured).length;
  document.querySelector("#area-count").textContent = categories.size;
}

function renderCategories() {
  const categories = ["Todas", ...new Set(apps.map((app) => app.category))];

  categoriesNode.replaceChildren(
    ...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = category;
      button.className = activeCategory === category ? "is-active" : "";
      button.setAttribute("aria-pressed", activeCategory === category);
      button.addEventListener("click", () => {
        activeCategory = category;
        renderCategories();
        renderApps();
      });
      return button;
    }),
  );
}

function renderAppIcon(icon) {
  const icons = {
    importer: `
      <svg viewBox="0 0 64 64" role="img">
        <circle class="icon-body" cx="30" cy="30" r="24"></circle>
        <circle class="icon-cutout" cx="30" cy="30" r="12"></circle>
        <path class="icon-body" d="M30 30h17v26H30V30Z"></path>
        <path class="icon-cutout" d="M18 17h22v6H18zM18 38h14v6H18z"></path>
        <path class="icon-cutout" d="M40 34l8 8-8 8v-5h-9v-6h9v-5Z"></path>
      </svg>
    `,
    help: `
      <svg viewBox="0 0 64 64" role="img">
        <circle class="icon-body" cx="32" cy="32" r="24"></circle>
        <circle class="icon-cutout" cx="32" cy="32" r="12"></circle>
        <path class="icon-body" d="M32 32h18v20H32V32Z"></path>
        <path class="icon-cutout" d="M25 26c0-6 4.7-9.5 10.7-8.1 4.5 1 7.3 4.4 7.3 8.7 0 6.2-5.2 8.5-8.7 10.4v4.2h-7.4v-8.8l4.1-1.9c2.8-1.3 4.5-2.3 4.5-4.3 0-1.8-1.4-3-3.6-3-2.4 0-4.1 1.3-4.2 2.8H25Z"></path>
        <circle class="icon-cutout" cx="30.8" cy="48" r="3.6"></circle>
      </svg>
    `,
    track: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M10 15c0-5 4-9 9-9h26c5 0 9 4 9 9v34c0 5-4 9-9 9H19c-5 0-9-4-9-9V15Z"></path>
        <path class="icon-cutout" d="M20 18h24v7H20zM20 31h15v7H20zM20 44h24v7H20z"></path>
        <circle class="icon-body" cx="45" cy="36" r="13"></circle>
        <path class="icon-cutout" d="M45 27c5 0 9 4 9 9 0 7-9 15-9 15s-9-8-9-15c0-5 4-9 9-9Zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path>
      </svg>
    `,
    feedback: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M10 15c0-5 4-9 9-9h26c5 0 9 4 9 9v19c0 5-4 9-9 9H31L17 54V43h-2c-3 0-5-2-5-5V15Z"></path>
        <circle class="icon-cutout" cx="26" cy="25" r="5"></circle>
        <circle class="icon-cutout" cx="39" cy="25" r="5"></circle>
        <path class="icon-cutout" d="M22 34h22v6H22z"></path>
      </svg>
    `,
    payments: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M8 22c0-7 6-13 13-13h22c7 0 13 6 13 13v20c0 7-6 13-13 13H21C14 55 8 49 8 42V22Z"></path>
        <path class="icon-cutout" d="M8 25h48v8H8z"></path>
        <circle class="icon-body" cx="45" cy="45" r="11"></circle>
        <path class="icon-cutout" d="M41 39h8v5h-5v2h5v5h-8v-5h5v-2h-5v-5Z"></path>
      </svg>
    `,
    metrics: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M13 52V31c0-5 4-9 9-9s9 4 9 9v21H13Z"></path>
        <path class="icon-body" d="M33 52V18c0-5 4-9 9-9s9 4 9 9v34H33Z"></path>
        <path class="icon-cutout" d="M20 31h4v17h-4zM40 18h4v30h-4z"></path>
        <path class="icon-body" d="M12 18c14 7 28 4 39-8l4 8c-13 13-30 17-47 8l4-8Z"></path>
      </svg>
    `,
    nps: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M8 40C8 26.7 18.7 16 32 16s24 10.7 24 24v12H8V40Z"></path>
        <path class="icon-cutout" d="M18 39c0-7.7 6.3-14 14-14s14 6.3 14 14h-7a7 7 0 0 0-14 0h-7Z"></path>
        <path class="icon-cutout" d="M32 20l13 22h-8l-5-9-5 9h-8l13-22Z"></path>
        <circle class="icon-body" cx="32" cy="43" r="8"></circle>
        <circle class="icon-cutout" cx="32" cy="43" r="3"></circle>
      </svg>
    `,
    clean: `
      <svg viewBox="0 0 64 64" role="img">
        <path class="icon-body" d="M32 6c12 13 20 23 20 35a20 20 0 0 1-40 0C12 29 20 19 32 6Z"></path>
        <path class="icon-cutout" d="M21 39c7 5 15 5 23 0v6c-7 6-16 6-23 0v-6Z"></path>
        <path class="icon-body" d="M43 10h8l-3 8 8-3v8l-8-3 3 8h-8l3-8-8 3v-8l8 3-3-8Z"></path>
      </svg>
    `,
    lifeboat: `
      <svg viewBox="0 0 64 64" role="img">
        <circle class="icon-body" cx="32" cy="32" r="25"></circle>
        <circle class="icon-cutout" cx="32" cy="32" r="13"></circle>
        <path class="icon-cutout" d="M29 7h6v15h-6zM29 42h6v15h-6zM7 29h15v6H7zM42 29h15v6H42z"></path>
        <circle class="icon-body" cx="32" cy="32" r="7"></circle>
      </svg>
    `,
  };

  return icons[icon] || icons.importer;
}

function createCard(app) {
  const card = document.createElement("a");
  card.className = `app-card ${app.featured ? "app-card--featured" : ""}`;
  card.href = app.href;

  if (app.openInNewTab) {
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }

  card.style.setProperty("--app-accent", app.accent);
  card.style.setProperty("--app-tint", app.tint);

  card.innerHTML = `
    <div class="app-card__visual" aria-hidden="true">
      <div class="app-card__mark">${renderAppIcon(app.icon)}</div>
      <div class="app-card__mock">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="app-card__content">
      <div class="app-card__heading">
        <div>
          <p class="app-card__category">${app.category}</p>
          <h2>${app.name}</h2>
        </div>
        <span class="launch-symbol" aria-hidden="true"></span>
      </div>
      <p class="app-card__description">${app.description}</p>
    </div>

    <div class="app-card__meta">
      <span class="status status--${app.status}">${statusLabels[app.status]}</span>
      <span>${app.owner}</span>
      <span>${app.lastUpdated}</span>
    </div>
  `;

  return card;
}

function renderApps() {
  const query = normalize(searchInput.value.trim());
  const filteredApps = apps.filter((app) => {
    const matchesCategory =
      activeCategory === "Todas" || app.category === activeCategory;
    const searchable = normalize(
      `${app.name} ${app.description} ${app.category} ${app.owner}`,
    );

    return matchesCategory && (!query || searchable.includes(query));
  });

  gridNode.replaceChildren(...filteredApps.map(createCard));
  emptyNode.hidden = filteredApps.length > 0;
}

searchInput.addEventListener("input", renderApps);

renderStats();
renderCategories();
renderApps();

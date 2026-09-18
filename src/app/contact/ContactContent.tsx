"use client";

import { useLanguage } from "@/i18n";

const contactEmail = "contacto@codewinoptimizer.com";

const content = {
  en: {
    title: "Contact",
    intro:
      "Have a question, found a bug, or want to suggest a feature? These are the best ways to reach the CodeWinOptimizer project.",
    beforeTitle: "Before you write",
    before: [
      "Check the documentation — most questions about tweaks, apps, and features are already answered there, including exact commands and warnings.",
      "For bugs, search the existing GitHub issues first: someone may have already reported it, and there may be a fix or workaround.",
    ],
    cards: [
      {
        label: "Email",
        value: contactEmail,
        desc: "General questions, privacy requests, press, or anything that is not a bug report.",
        href: `mailto:${contactEmail}`,
        external: false,
        icon: "mail" as const,
      },
      {
        label: "GitHub Issues",
        value: "Report a bug or request a feature",
        desc: "Best for technical problems. Include your Windows version, the app version, and the steps to reproduce the issue — screenshots help a lot.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/issues",
        external: true,
        icon: "bug" as const,
      },
      {
        label: "GitHub Repository",
        value: "Contribute to the project",
        desc: "Read the source code, open a pull request, or improve the documentation — contributions of every size are welcome.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App",
        external: true,
        icon: "code" as const,
      },
    ],
    note: "We are a small open-source project: we read everything, but answers can take a few days. Bug reports on GitHub usually get a faster reply. We cannot provide one-to-one Windows support for every hardware configuration, but if a problem is caused by the tool, we want to know.",
  },
  es: {
    title: "Contacto",
    intro:
      "¿Tienes una pregunta, has encontrado un error o quieres proponer una función? Estas son las mejores formas de contactar con el proyecto CodeWinOptimizer.",
    beforeTitle: "Antes de escribir",
    before: [
      "Consulta la documentación — la mayoría de dudas sobre tweaks, apps y funciones ya están resueltas ahí, con los comandos exactos y sus advertencias.",
      "Para errores, busca antes en los issues de GitHub: puede que alguien ya lo haya reportado y exista una solución o un workaround.",
    ],
    cards: [
      {
        label: "Email",
        value: contactEmail,
        desc: "Preguntas generales, solicitudes de privacidad, prensa o cualquier cosa que no sea un bug.",
        href: `mailto:${contactEmail}`,
        external: false,
        icon: "mail" as const,
      },
      {
        label: "Issues de GitHub",
        value: "Reporta un error o pide una función",
        desc: "Lo mejor para problemas técnicos. Incluye tu versión de Windows, la versión de la app y los pasos para reproducirlo — las capturas ayudan mucho.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/issues",
        external: true,
        icon: "bug" as const,
      },
      {
        label: "Repositorio en GitHub",
        value: "Contribuye al proyecto",
        desc: "Lee el código fuente, abre un pull request o mejora la documentación — las contribuciones de cualquier tamaño son bienvenidas.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App",
        external: true,
        icon: "code" as const,
      },
    ],
    note: "Somos un proyecto de código abierto pequeño: lo leemos todo, pero las respuestas pueden tardar unos días. Los reportes en GitHub suelen recibir respuesta antes. No podemos ofrecer soporte uno a uno de Windows para cada configuración de hardware, pero si un problema lo causa la herramienta, queremos saberlo.",
  },
};

function Icon({ name }: { name: "mail" | "bug" | "code" }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#2AD18B",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    );
  }
  if (name === "bug") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4l-1.4 1.4M18.4 5.6l1.4-1.4M12 9v3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function ContactContent() {
  const { locale } = useLanguage();
  const c = content[locale as "en" | "es"] || content.en;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-3 text-white">
        {c.title}
      </h1>
      <p className="text-sm leading-relaxed text-text-muted mb-8">{c.intro}</p>

      <div className="grid gap-4 sm:grid-cols-1">
        {c.cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-neon/40 hover:bg-bg-card-hover"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-dark">
              <Icon name={card.icon} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                {card.label}
              </span>
              <span className="mt-1 block text-sm font-semibold text-white group-hover:text-neon transition-colors">
                {card.value}
              </span>
              <span className="mt-1 block text-sm text-text-muted leading-relaxed">
                {card.desc}
              </span>
            </span>
          </a>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold text-white">{c.beforeTitle}</h2>
      <ul>
        {c.before.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-text-muted leading-relaxed">{c.note}</p>
    </>
  );
}

"use client";

import RichText, { type RichBlock } from "@/components/RichText";
import { useLanguage } from "@/i18n";

const content: Record<"en" | "es", { title: string; blocks: RichBlock[] }> = {
  en: {
    title: "About CodeWinOptimizer",
    blocks: [
      {
        type: "p",
        text: "CodeWinOptimizer is a free, open-source tool that helps you take control of Windows 10 and Windows 11: remove preinstalled apps, install software with WinGet or Chocolatey, apply documented system tweaks, free up disk space, monitor your hardware, and create restore points — all from a single portable .exe with no installation and no telemetry.",
      },
      { type: "h2", text: "What the app does" },
      {
        type: "ul",
        items: [
          "App Manager — install or uninstall 180+ curated apps across 8 categories using WinGet or Chocolatey, with a dynamic action button per app.",
          "System Tweaks — more than 120 tweaks across 14 categories (network, memory, GPU, privacy, telemetry, power, and more). Every tweak documents its exact commands, its impact level, and any warnings.",
          "Windows Features & Quick Fixes — enable or disable Hyper-V, WSL, Sandbox and others, and run common repairs like network reset and SFC/DISM scans.",
          "Disk Cleanup — clean temp files, the recycle bin, prefetch, the Windows Update cache, thumbnails, the DNS cache, and memory dumps.",
          "Startup & Services — see what runs at login and decide what should stay.",
          "System Monitor — a PC health score, hardware cards with live temperatures, per-host latency badges, and built-in network tests.",
          "Restore & Backup — system restore points, full registry backups, and driver backups, so changes can always be undone.",
        ],
      },
      { type: "h2", text: "Why build another Windows optimizer?" },
      {
        type: "p",
        text: "Most optimizer tools ask you to trust them blindly. They are closed-source, bundled with offers, or they phone home behind your back. Windows has real annoyances worth fixing — telemetry, bloatware, resource-hungry background tasks — but fixing them shouldn't require running an installer full of adware or a mystery script from a forum.",
      },
      {
        type: "p",
        text: "CodeWinOptimizer takes the opposite approach: it is local-first (everything runs on your machine), portable (one .exe, works from a USB drive, nothing installed), and transparent (every tweak shows exactly what it changes and why, before you apply it). It is inspired by the excellent WinUtil project, with a friendlier interface and built-in safety nets.",
      },
      { type: "h2", text: "Transparent by design" },
      {
        type: "ul",
        items: [
          "Every tweak is documented with the exact commands it runs — you can review each one before applying it, and read the same commands in the online documentation.",
          "Every tweak lists its impact level and any relevant warnings, so you can make informed decisions.",
          "Before you start, the tool helps you create a system restore point, and it can back up the full registry and your drivers.",
          "The application is MIT-licensed open source. You can read the code, build it yourself, or suggest changes on GitHub.",
          "No telemetry: the app does not send usage statistics or personal data anywhere.",
        ],
      },
      { type: "h2", text: "About this website" },
      {
        type: "p",
        text: "This website is the official home of the project. It contains the full documentation (every tweak, every feature), step-by-step guides for common Windows tasks, and download instructions. You can browse everything without an account, and the site itself runs no analytics or tracking scripts.",
      },
      {
        type: "p",
        text: "Hosting and maintenance are paid for with advertising served through Google AdSense, along with voluntary support from users. Ads never influence the documentation — a tweak is included because it works, not because anyone paid for it.",
      },
      { type: "h2", text: "Who is behind it" },
      {
        type: "p",
        text: "CodeWinOptimizer is designed and developed by OscarDev, an independent developer who builds open-source tools for Windows. The project grows with feedback from its community: bug reports, feature requests, and pull requests are all welcome on GitHub.",
      },
      { type: "h2", text: "Common questions" },
      { type: "h3", text: "Is CodeWinOptimizer really free?" },
      {
        type: "p",
        text: "Yes. The application is free and open source under the MIT License. There is no paid tier, no account, and no locked features. Donations and the website's ads are what keep the project going.",
      },
      { type: "h3", text: "Does it send telemetry?" },
      {
        type: "p",
        text: "No. The app runs entirely on your PC and does not send usage statistics, identifiers, or personal data to us or to third parties. Ironically, one of its most popular features is disabling Windows' own telemetry.",
      },
      { type: "h3", text: "Is it safe to use?" },
      {
        type: "p",
        text: "The tool is used by thousands of people and it is built with safety nets: restore points, backups, documented commands, and impact levels. That said, any system tweak carries some risk — our documentation explains what each change does so you can decide, and we always recommend creating a restore point first and reviewing tweaks marked as high impact.",
      },
      { type: "h3", text: "Which Windows versions are supported?" },
      {
        type: "p",
        text: "Windows 10 and Windows 11, 64-bit, with the WebView2 runtime (already included in current Windows versions). No installation is needed and nothing is left behind if you run it from a USB drive.",
      },
      {
        type: "link",
        text: "Browse the full documentation to see everything the tool can do",
        href: "/docs",
      },
      {
        type: "cta",
        title: "Get CodeWinOptimizer",
        text: "Download the latest portable .exe from GitHub Releases — free, open source, and no telemetry.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/releases/latest",
        label: "Download on GitHub",
        external: true,
      },
    ],
  },
  es: {
    title: "Sobre CodeWinOptimizer",
    blocks: [
      {
        type: "p",
        text: "CodeWinOptimizer es una herramienta gratuita y de código abierto que te ayuda a tomar el control de Windows 10 y Windows 11: elimina aplicaciones preinstaladas, instala software con WinGet o Chocolatey, aplica ajustes documentados, libera espacio en disco, monitoriza tu hardware y crea puntos de restauración — todo desde un único .exe portátil, sin instalación y sin telemetría.",
      },
      { type: "h2", text: "Qué hace la aplicación" },
      {
        type: "ul",
        items: [
          "Gestor de Apps — instala o desinstala más de 180 aplicaciones seleccionadas en 8 categorías usando WinGet o Chocolatey, con botón de acción dinámico.",
          "Ajustes del Sistema — más de 120 tweaks en 14 categorías (red, memoria, GPU, privacidad, telemetría, energía y más). Cada uno documenta sus comandos exactos, su nivel de impacto y sus advertencias.",
          "Características de Windows y correcciones — activa o desactiva Hyper-V, WSL, Sandbox y otras, y ejecuta reparaciones habituales como el reinicio de red o los escaneos SFC/DISM.",
          "Limpieza de Disco — limpia archivos temporales, papelera, prefetch, caché de Windows Update, miniaturas, caché DNS y volcados de memoria.",
          "Inicio y servicios — consulta qué se ejecuta al iniciar sesión y decide qué debe quedarse.",
          "Monitor del Sistema — puntuación de salud del PC, tarjetas de hardware con temperaturas en vivo, latencia por host y tests de red integrados.",
          "Restauración y Backup — puntos de restauración del sistema, copias completas del registro y backup de drivers, para poder deshacer siempre los cambios.",
        ],
      },
      { type: "h2", text: "¿Por qué otra herramienta de optimización?" },
      {
        type: "p",
        text: "La mayoría de los optimizadores piden que confíes en ellos a ciegas: son de código cerrado, vienen con ofertas o envían datos a saber dónde. Windows tiene molestias reales que merece la pena arreglar — telemetría, bloatware, tareas en segundo plano que consumen recursos — pero arreglarlas no debería exigir ejecutar un instalador lleno de adware ni un script misterioso de un foro.",
      },
      {
        type: "p",
        text: "CodeWinOptimizer hace lo contrario: es local (todo se ejecuta en tu máquina), portátil (un solo .exe, funciona desde un USB, no instala nada) y transparente (cada tweak muestra exactamente qué cambia y por qué antes de aplicarlo). Está inspirado en el excelente proyecto WinUtil, con una interfaz más amigable y redes de seguridad integradas.",
      },
      { type: "h2", text: "Transparente por diseño" },
      {
        type: "ul",
        items: [
          "Cada tweak está documentado con los comandos exactos que ejecuta — puedes revisarlo antes de aplicarlo y leer esos mismos comandos en la documentación online.",
          "Cada tweak indica su nivel de impacto y sus advertencias, para que tomes decisiones informadas.",
          "Antes de empezar, la herramienta te ayuda a crear un punto de restauración, y puede hacer copia de seguridad del registro completo y de tus drivers.",
          "La aplicación es código abierto con licencia MIT. Puedes leer el código, compilarlo tú mismo o proponer cambios en GitHub.",
          "Sin telemetría: la app no envía estadísticas de uso ni datos personales a ninguna parte.",
        ],
      },
      { type: "h2", text: "Sobre este sitio web" },
      {
        type: "p",
        text: "Este sitio es la casa oficial del proyecto. Contiene la documentación completa (cada tweak, cada función), guías paso a paso para tareas habituales de Windows e instrucciones de descarga. Puedes consultarlo todo sin cuenta, y el sitio no ejecuta analíticas ni scripts de seguimiento propios.",
      },
      {
        type: "p",
        text: "El alojamiento y el mantenimiento se financian con la publicidad servida por Google AdSense y con el apoyo voluntario de los usuarios. Los anuncios nunca influyen en la documentación — un tweak aparece porque funciona, no porque alguien haya pagado.",
      },
      { type: "h2", text: "Quién está detrás" },
      {
        type: "p",
        text: "CodeWinOptimizer lo diseña y desarrolla OscarDev, un desarrollador independiente que crea herramientas de código abierto para Windows. El proyecto crece con el feedback de su comunidad: reportes de errores, ideas y pull requests son bienvenidos en GitHub.",
      },
      { type: "h2", text: "Preguntas frecuentes" },
      { type: "h3", text: "¿CodeWinOptimizer es realmente gratis?" },
      {
        type: "p",
        text: "Sí. La aplicación es gratuita y de código abierto bajo la Licencia MIT. No hay versión de pago, ni cuentas, ni funciones bloqueadas. Las donaciones y los anuncios del sitio son lo que mantiene vivo el proyecto.",
      },
      { type: "h3", text: "¿Envía telemetría?" },
      {
        type: "p",
        text: "No. La app se ejecuta por completo en tu PC y no nos envía a nosotros ni a terceros estadísticas de uso, identificadores ni datos personales. Irónicamente, una de sus funciones más populares es desactivar la telemetría del propio Windows.",
      },
      { type: "h3", text: "¿Es seguro usarlo?" },
      {
        type: "p",
        text: "La herramienta la usan miles de personas y está construida con redes de seguridad: puntos de restauración, copias de seguridad, comandos documentados y niveles de impacto. Dicho esto, cualquier ajuste del sistema conlleva cierto riesgo — nuestra documentación explica qué hace cada cambio para que decidas, y recomendamos siempre crear un punto de restauración antes y revisar los tweaks marcados como de impacto alto.",
      },
      { type: "h3", text: "¿Qué versiones de Windows son compatibles?" },
      {
        type: "p",
        text: "Windows 10 y Windows 11, 64 bits, con el runtime WebView2 (ya incluido en las versiones actuales de Windows). No necesita instalación y no deja rastro si lo ejecutas desde un USB.",
      },
      {
        type: "link",
        text: "Explora la documentación completa para ver todo lo que puede hacer la herramienta",
        href: "/docs",
      },
      {
        type: "cta",
        title: "Consigue CodeWinOptimizer",
        text: "Descarga el último .exe portátil desde GitHub Releases — gratis, código abierto y sin telemetría.",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/releases/latest",
        label: "Descargar en GitHub",
        external: true,
      },
    ],
  },
};

export default function AboutContent() {
  const { locale } = useLanguage();
  const c = content[locale as "en" | "es"] || content.en;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-white">
        {c.title}
      </h1>
      <RichText blocks={c.blocks} />
    </>
  );
}

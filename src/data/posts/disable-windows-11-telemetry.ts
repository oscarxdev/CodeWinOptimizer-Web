import type { BlogPost } from "./types";

export const disableTelemetry: BlogPost = {
  slug: "disable-windows-11-telemetry",
  date: "2026-09-04",
  readingTime: 9,
  category: { en: "Privacy", es: "Privacidad" },
  title: {
    en: "How to Disable Windows 11 Telemetry (Step by Step)",
    es: "Cómo desactivar la telemetría de Windows 11 (paso a paso)",
  },
  description: {
    en: "Windows 11 always collects some diagnostic data — but you can cut it to the minimum. This guide covers settings, registry values, services, scheduled tasks, and how to verify each change.",
    es: "Windows 11 siempre recopila algunos datos de diagnóstico, pero puedes reducirlos al mínimo. Esta guía cubre ajustes, registro, servicios, tareas programadas y cómo verificar cada cambio.",
  },
  content: {
    en: [
      {
        type: "p",
        text: "Windows 11 collects diagnostic data continuously: which apps you open, how long they run, hardware details, error reports and — depending on your settings — advertising identifiers and typing samples. There is no single switch that turns it all off, but with a handful of careful changes you can cut collection to the minimum Microsoft allows. This guide explains what each setting actually does, the registry values behind it, and how to check that your changes survived the next feature update.",
      },
      { type: "h2", text: "What Windows 11 actually collects" },
      {
        type: "ul",
        items: [
          "Required diagnostic data — the minimum every device sends: basic error reporting, device configuration and the information needed to keep Windows updated and secure.",
          "Optional diagnostic data — inking and typing samples, detailed app usage, browsing activity in some Microsoft apps, and how you use Windows features. This is the part worth turning off.",
          "Advertising ID — a per-user identifier that apps can use to personalize ads.",
          "Activity history — apps, files and websites you opened, used for recommendations.",
          "Tailored experiences — personalized tips and suggestions built from your diagnostic data.",
        ],
      },
      {
        type: "h2",
        text: "Step 1 — Turn off optional diagnostic data in Settings",
      },
      {
        type: "p",
        text: "Open Settings (Win + I) and go to Privacy & security → Diagnostics & feedback. This page controls most of what you need:",
      },
      {
        type: "ul",
        items: [
          "Set Diagnostic data to “Required only” (older builds call it “Basic”).",
          "Turn off “Improve inking and typing”, “Tailored experiences” and “View diagnostic data”.",
          "Delete what has already been collected with the “Delete diagnostic data” button.",
          "Set Feedback frequency to “Never” unless you plan to send feedback manually.",
        ],
      },
      {
        type: "p",
        text: "While you are in Settings, also open Privacy & security → General: turn off the advertising ID and the other suggestion options if you do not use them.",
      },
      {
        type: "h2",
        text: "Step 2 — Lower the telemetry level (Pro, Enterprise and Education)",
      },
      {
        type: "p",
        text: "Windows enforces a floor: Home and Pro always send at least Required diagnostic data, and the “off” (Security, 0) level is only honored on Enterprise and Education editions. So on a normal PC the goal is to make sure nothing above Required is sent. On Pro and above you can do this two ways:",
      },
      {
        type: "ul",
        items: [
          "Group Policy (gpedit.msc): Computer Configuration → Administrative Templates → Windows Components → Data Collection and Preview Builds → Allow Diagnostic Data. Set it to “Send required diagnostic data” (or “Diagnostic data off” on Enterprise).",
          "Registry: HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection → AllowTelemetry (DWORD). 0 = off (Enterprise only), 1 = Required, 2 = Enhanced, 3 = Full (Optional). A value of 1 is the practical minimum.",
        ],
      },
      {
        type: "tip",
        text: "Create a system restore point before editing the registry. If you use CodeWinOptimizer, the privacy tweaks create the restore point for you and log the exact values they change.",
      },
      {
        type: "h2",
        text: "Step 3 — The services and scheduled tasks behind telemetry",
      },
      {
        type: "p",
        text: "Two Windows services do most of the telemetry work. You can set both to Disabled:",
      },
      {
        type: "ul",
        items: [
          "DiagTrack (Connected User Experiences and Telemetry) — collects and uploads diagnostic data. Disabling it stops the pipeline; Windows Update and Defender keep working.",
          "dmwappushservice — handles device-management push messages that a typical home PC never uses.",
        ],
      },
      {
        type: "p",
        text: "Then open Task Scheduler → Microsoft → Windows → Application Experience and the Customer Experience Improvement Program folder. Disable the tasks related to telemetry and feedback individually — do not disable entire folders, because some tasks in those trees are unrelated (startup checks, compatibility scans) and other components may depend on them.",
      },
      {
        type: "warn",
        text: "Changing services is a deeper modification than a settings toggle. Use a tool that records what it changed so you can revert it cleanly — or note down the original startup type (usually “Automatic (Delayed Start)”) before touching anything.",
      },
      { type: "h2", text: "What keeps working (and what stops)" },
      {
        type: "ul",
        items: [
          "Windows Update, Microsoft Defender and the Microsoft Store keep working — they use separate channels from DiagTrack.",
          "Windows Insider builds require optional diagnostic data, so do not apply the full treatment if you belong to the Insider Program.",
          "The Feedback Hub can no longer attach diagnostics to your reports.",
          "Personalized suggestions across Windows become generic — that is the trade-off working as intended.",
        ],
      },
      {
        type: "h2",
        text: "Verify your changes — and re-check after feature updates",
      },
      {
        type: "ul",
        items: [
          "Settings shows Diagnostic data: Required only.",
          "In an elevated terminal: reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection /v AllowTelemetry",
          "In PowerShell: Get-Service DiagTrack, dmwappushservice — both should be Stopped and Disabled.",
          "Major Windows feature updates can reset policies and re-enable scheduled tasks. Re-run the checks after each big update, or keep the tweak applied through a tool that re-applies it.",
        ],
      },
      { type: "h2", text: "Skip the manual work" },
      {
        type: "p",
        text: "CodeWinOptimizer automates this entire guide: it creates a restore point, then applies the documented privacy tweaks — telemetry level, advertising ID, activity history, DiagTrack and the scheduled tasks — showing you the exact command behind each one before it runs, and lets you revert everything from the app.",
      },
      {
        type: "link",
        text: "See the “Disable telemetry” tweak with its exact commands",
        href: "/docs/tweaks/disable-telemetry",
      },
      {
        type: "link",
        text: "Disable the advertising ID tweak",
        href: "/docs/tweaks/disable-advertising-id",
      },
      {
        type: "link",
        text: "Disable activity history tweak",
        href: "/docs/tweaks/disable-activity-history",
      },
      { type: "h2", text: "Summary" },
      {
        type: "p",
        text: "You cannot fully silence Windows 11 — especially on Home, where Required diagnostic data is mandatory. But you can remove everything above that floor: optional data, advertising ID, tailored experiences, DiagTrack and its scheduled tasks. Apply the changes once, verify them with the commands above, and re-check after each feature update.",
      },
    ],
    es: [
      {
        type: "p",
        text: "Windows 11 recopila datos de diagnóstico de forma continua: qué aplicaciones abres, cuánto tiempo las usas, detalles del hardware, informes de errores y — según tu configuración — identificadores de publicidad y muestras de escritura. No existe un interruptor único que lo apague todo, pero con unos pocos cambios cuidadosos puedes reducir la recopilación al mínimo que Microsoft permite. Esta guía explica qué hace realmente cada ajuste, los valores del registro que hay detrás y cómo comprobar que tus cambios han sobrevivido a la siguiente actualización de características.",
      },
      { type: "h2", text: "Qué recopila realmente Windows 11" },
      {
        type: "ul",
        items: [
          "Datos de diagnóstico obligatorios — el mínimo que envía todo dispositivo: informes básicos de errores, configuración del dispositivo y la información necesaria para mantener Windows actualizado y seguro.",
          "Datos de diagnóstico opcionales — muestras de escritura y entintado, uso detallado de apps, actividad de navegación en algunas aplicaciones de Microsoft y cómo usas las funciones de Windows. Esta es la parte que conviene desactivar.",
          "ID de publicidad — un identificador por usuario que las apps pueden usar para personalizar anuncios.",
          "Historial de actividad — apps, archivos y webs que abriste, usado para recomendaciones.",
          "Experiencias personalizadas — consejos y sugerencias hechas a partir de tus datos de diagnóstico.",
        ],
      },
      {
        type: "h2",
        text: "Paso 1 — Desactiva los datos opcionales en Configuración",
      },
      {
        type: "p",
        text: "Abre Configuración (Win + I) y ve a Privacidad y seguridad → Diagnóstico y comentarios. Esta página controla casi todo lo que necesitas:",
      },
      {
        type: "ul",
        items: [
          "Pon Datos de diagnóstico en “Solo los requeridos” (en versiones antiguas, “Básico”).",
          "Desactiva “Mejorar la escritura a mano y la escritura”, “Experiencias personalizadas” y “Ver datos de diagnóstico”.",
          "Elimina lo ya recopilado con el botón “Eliminar datos de diagnóstico”.",
          "Pon la Frecuencia de comentarios en “Nunca” salvo que vayas a enviar comentarios manualmente.",
        ],
      },
      {
        type: "p",
        text: "Ya que estás en Configuración, abre también Privacidad y seguridad → General: desactiva el ID de publicidad y las demás opciones de sugerencias si no las usas.",
      },
      {
        type: "h2",
        text: "Paso 2 — Baja el nivel de telemetría (Pro, Enterprise y Education)",
      },
      {
        type: "p",
        text: "Windows impone un mínimo: Home y Pro siempre envían datos de diagnóstico requeridos, y el nivel “desactivado” (Seguridad, 0) solo se respeta en ediciones Enterprise y Education. Así que en un PC normal el objetivo es asegurarse de que no se envíe nada por encima de Requerido. En Pro o superior puedes hacerlo de dos formas:",
      },
      {
        type: "ul",
        items: [
          "Directiva de grupo (gpedit.msc): Configuración del equipo → Plantillas administrativas → Componentes de Windows → Recopilación de datos y versiones preliminares → Permitir datos de diagnóstico. Ponlo en “Enviar datos de diagnóstico requeridos” (o “Datos de diagnóstico desactivados” en Enterprise).",
          "Registro: HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection → AllowTelemetry (DWORD). 0 = desactivado (solo Enterprise), 1 = Requerido, 2 = Mejorado, 3 = Completo (Opcional). El valor 1 es el mínimo práctico.",
        ],
      },
      {
        type: "tip",
        text: "Crea un punto de restauración antes de editar el registro. Si usas CodeWinOptimizer, sus tweaks de privacidad crean el punto de restauración por ti y registran los valores exactos que cambian.",
      },
      {
        type: "h2",
        text: "Paso 3 — Los servicios y tareas programadas detrás de la telemetría",
      },
      {
        type: "p",
        text: "Dos servicios de Windows hacen la mayor parte del trabajo de telemetría. Puedes poner ambos en Deshabilitado:",
      },
      {
        type: "ul",
        items: [
          "DiagTrack (Experiencias del usuario conectado y telemetría) — recopila y sube los datos de diagnóstico. Deshabilitarlo detiene el flujo; Windows Update y Defender siguen funcionando.",
          "dmwappushservice — gestiona mensajes push de administración de dispositivos que un PC doméstico típico nunca usa.",
        ],
      },
      {
        type: "p",
        text: "Después abre el Programador de tareas → Microsoft → Windows → Application Experience y la carpeta Customer Experience Improvement Program. Deshabilita individualmente las tareas relacionadas con telemetría y comentarios — no deshabilites carpetas enteras, porque algunas tareas de esas ramas no tienen relación (comprobaciones de inicio, escaneos de compatibilidad) y otros componentes pueden depender de ellas.",
      },
      {
        type: "warn",
        text: "Cambiar servicios es una modificación más profunda que un simple interruptor de configuración. Usa una herramienta que registre lo que cambia para poder revertirlo limpiamente — o anota el tipo de inicio original (normalmente “Automático (inicio retrasado)”) antes de tocar nada.",
      },
      { type: "h2", text: "Qué sigue funcionando (y qué deja de hacerlo)" },
      {
        type: "ul",
        items: [
          "Windows Update, Microsoft Defender y Microsoft Store siguen funcionando — usan canales distintos a DiagTrack.",
          "Las compilaciones de Windows Insider requieren datos de diagnóstico opcionales, así que no apliques el tratamiento completo si perteneces al programa Insider.",
          "El Centro de comentarios ya no podrá adjuntar diagnósticos a tus informes.",
          "Las sugerencias personalizadas de Windows pasan a ser genéricas — ese es el intercambio funcionando como se espera.",
        ],
      },
      {
        type: "h2",
        text: "Verifica tus cambios — y vuelve a comprobarlos tras las actualizaciones",
      },
      {
        type: "ul",
        items: [
          "Configuración muestra Datos de diagnóstico: Solo los requeridos.",
          "En una terminal elevada: reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection /v AllowTelemetry",
          "En PowerShell: Get-Service DiagTrack, dmwappushservice — ambos deben estar Stopped y Disabled.",
          "Las actualizaciones de características importantes pueden restablecer directivas y reactivar tareas programadas. Repite las comprobaciones tras cada actualización grande, o mantén aplicado el tweak con una herramienta que lo reaplique.",
        ],
      },
      { type: "h2", text: "Ahorra el trabajo manual" },
      {
        type: "p",
        text: "CodeWinOptimizer automatiza toda esta guía: crea un punto de restauración y aplica los tweaks de privacidad documentados — nivel de telemetría, ID de publicidad, historial de actividad, DiagTrack y las tareas programadas — mostrándote el comando exacto de cada uno antes de ejecutarlo, y permite revertirlo todo desde la app.",
      },
      {
        type: "link",
        text: "Ver el tweak «Desactivar telemetría» con sus comandos exactos",
        href: "/docs/tweaks/disable-telemetry",
      },
      {
        type: "link",
        text: "Tweak para desactivar el ID de publicidad",
        href: "/docs/tweaks/disable-advertising-id",
      },
      {
        type: "link",
        text: "Tweak para desactivar el historial de actividad",
        href: "/docs/tweaks/disable-activity-history",
      },
      { type: "h2", text: "Resumen" },
      {
        type: "p",
        text: "No puedes silenciar Windows 11 por completo — especialmente en Home, donde los datos requeridos son obligatorios. Pero sí puedes eliminar todo lo que está por encima de ese mínimo: datos opcionales, ID de publicidad, experiencias personalizadas, DiagTrack y sus tareas programadas. Aplica los cambios una vez, verifícalos con los comandos de arriba y vuelve a comprobarlos tras cada actualización de características.",
      },
    ],
  },
};

const es = {
  nav: {
    features: "Características",
    preview: "Vista previa",
    techStack: "Tecnología",
    docs: "Docs",
    guides: "Guías",
    about: "Acerca de",
    starOnGitHub: "Estrella en GitHub",
    download: "Descargar",
  },
  hero: {
    badge: "Código abierto · Portable · Gratis",
    title1: "Toma el control de",
    title2: "tu Windows.",
    description:
      "Una herramienta de optimización local-first que te da el control. Restauración del sistema, gestión de apps, ajustes del registro, tuning de rendimiento — todo desde un único ejecutable portable.",
    download: "Descargar para Windows",
    viewOnGitHub: "Ver en GitHub",
    subtitle:
      "Windows 10/11 · Un solo .exe con O&O ShutUp10++ embebido · Sin instalación · Auto-elevación a Administrador",
    install: {
      label: "Instala en una línea (PowerShell admin)",
      copy: "Copiar",
      copied: "¡Copiado!",
      hint: "Sin descargas. Siempre la última versión.",
    },
  },
  features: {
    heading1: "Todo lo que necesitas para",
    heading2: "optimizar Windows.",
    subheading:
      "Desde restaurar el sistema hasta tuning de rendimiento — todas las herramientas en un ejecutable portable.",
    items: [
      {
        title: "Restauración del sistema",
        description:
          "Crea puntos de restauración con nombres personalizados. Omite el bloqueo de 24h de Windows mediante ajuste del registro. Backup completo del registro a archivos .reg de los 5 hives. Backup y restauración de drivers.",
      },
      {
        title: "Gestor de apps",
        description:
          "181 apps en 8 categorías incluyendo Microsoft Tools (.NET SDK 6/8/9/10, suite Sysinternals, PowerShell 7, PowerToys). Instalar/Desinstalar vía WinGet o Chocolatey con un botón dinámico que cambia según el estado de instalación. Cabecera con buscador sticky que permanece visible al hacer scroll.",
      },
      {
        title: "Más de 140 ajustes",
        description:
          "Ajustes completos en 14 categorías: red, memoria, GPU, privacidad, rendimiento, esenciales, avanzados, firewall, Nagle, temporizadores de latencia, UI y eliminación de bloat. Ejecución robusta vía cmdlets de PowerShell (Get/Disable-WindowsOptionalFeature, NetFirewallRule, CIM) — sin más wmic/netsh frágiles. Toolbar sticky con Seleccionar Todo global, badges X/Y de progreso por categoría, y lanzador de ShutUp10++ con un click.",
      },
      {
        title: "Características de Windows",
        description:
          "Activar/desactivar .NET Framework, Hyper-V, WSL, Sandbox, NFS, recuperación F8 y más. Correcciones rápidas: reinicio de red, sincronización NTP, escaneo SFC/DISM, reinicio de Windows Update. Features con verificación de estado que omiten limpiamente cuando no están y nunca se quedan colgadas esperando descargas de Windows Update.",
      },
      {
        title: "Gestor de inicio",
        description:
          "Visibilidad y control total sobre cada entrada de auto-arranque de Windows en una pestaña. Lista las claves Run (HKLM, HKCU, WOW6432Node), carpetas Inicio (usuario + todos los usuarios), tareas AppX UWP (Discord, Terminal, WhatsApp, Xbox, etc.) y tareas programadas con triggers Logon/Boot. El toggle por entrada usa el mismo valor binario StartupApproved que escribe el Administrador de tareas — totalmente reversible. Búsqueda, filtro (todos/on/off), iconos por tipo y conteos en vivo.",
      },
      {
        title: "Monitor del sistema",
        description:
          "Panel Impacto arriba: snapshots persistidos (historial rolling en %LOCALAPPDATA%) con tarjetas delta-first para Disco libre, Programas de inicio, Servicios activos y Procesos — codificados por color frente a la visita anterior. Más el dashboard en tiempo real 3x2: uso de CPU y GPU con temperatura, barras de uso por disco, uptime, latencia de red y un Salud del PC (0-100, A+ a F).",
      },
      {
        title: "Terminal lateral",
        description:
          "Salida de comandos en tiempo real anclada a la derecha, redimensionable arrastrando de 280px a 70% del ancho con la anchura persistida en localStorage. Colapsable a una franja vertical de 36px. Acciones de copiar y limpiar. 6 colores de acento + 6 fuentes, persistido en localStorage. O&O ShutUp10++ embebido para endurecimiento de privacidad con un click.",
      },
    ],
  },
  stats: {
    appsAvailable: "Apps disponibles",
    systemTweaks: "Ajustes del sistema",
    categories: "Categorías",
    accentColors: "Colores de acento",
    packageManagers: "Gestores de paquetes",
    singleExe: "Solo un .exe",
  },
  preview: {
    heading1: "Míralo",
    heading2: "en acción.",
    subheading:
      "Una interfaz moderna con tema oscuro diseñada para power users.",
    labels: [
      "Restauración",
      "Apps",
      "Ajustes",
      "Características",
      "Monitor",
      "Limpieza",
      "Actualizaciones",
      "Configuración",
      "Inicio",
    ],
  },
  discord: {
    heading: "Únete a OscarHub en Discord",
    subheading: "Recibe ayuda, comparte feedback y mantente al día.",
    button: "Unirse a OscarHub",
  },
  tech: {
    heading1: "Construido con",
    heading2: "tecnología moderna.",
    items: [
      { label: "Backend", value: "Go + Wails v2 runtime" },
      { label: "Frontend", value: "Vanilla JS, CSS (tema oscuro)" },
      { label: "Ventana", value: "WebView2 (Edge Chromium)" },
      { label: "Gestores de paquetes", value: "WinGet, Chocolatey" },
      {
        label: "Herramientas del sistema",
        value: "PowerShell, DISM, bcdedit, reg.exe, nvidia-smi",
      },
      {
        label: "Monitorización",
        value: "gopsutil (CPU/RAM), nvidia-smi (GPU), WMI",
      },
    ],
    howToHeading1: "Cómo",
    howToHeading2: "ejecutarlo.",
    quickStart: "Inicio rápido",
    steps: [
      "Descarga el último .exe de GitHub Releases",
      "Ejecuta CodeWinOptimizer.exe como Administrador",
      "(Recomendado) Crea un punto de restauración primero",
      "Usa cualquier pestaña: instala apps, aplica ajustes, ejecuta correcciones",
    ],
    prerequisites: "Requisitos:",
    prerequisitesText:
      " Go 1.20+, Wails v2, Windows 10/11 con WebView2 runtime.",
    antivirusNotice: "Aviso antivirus:",
    antivirusText:
      " Esta herramienta usa PowerShell, DISM, WMI y comandos del registro. Algunos antivirus pueden marcar el .exe como sospechoso. Todo el código es open source — ",
    reviewSource: "revisa el código",
    orBuild: " o compílalo tú mismo.",
  },
  faq: {
    heading1: "Preguntas",
    heading2: "frecuentes.",
    items: [
      {
        q: "¿Qué es CodeWinOptimizer y qué hace?",
        a: "CodeWinOptimizer es un optimizador y debloater de Windows gratuito y de código abierto para Windows 10 y 11. Desde un único .exe portátil puedes instalar o desinstalar 181 apps vía WinGet o Chocolatey, aplicar más de 140 ajustes de registro, privacidad y rendimiento, activar o desactivar características de Windows, gestionar programas de inicio, limpiar archivos basura, monitorizar tu PC con una puntuación de salud, y crear puntos de restauración antes de cualquier cambio.",
      },
      {
        q: "¿Es CodeWinOptimizer una alternativa a WinUtil?",
        a: "Sí. CodeWinOptimizer cubre los mismos casos de uso que WinUtil — instalar apps, aplicar ajustes de Windows, quitar bloatware, reparar Windows y gestionar actualizaciones — pero como aplicación de Windows portátil con una GUI moderna en lugar de un script de PowerShell. Añade extras que WinUtil no incluye, como un gestor de inicio reversible, un monitor del sistema con salud del PC (0-100), limpieza de disco y backup de drivers.",
      },
      {
        q: "¿Es CodeWinOptimizer gratis y de código abierto?",
        a: "Sí. CodeWinOptimizer es 100% gratis y open source en GitHub. No hay suscripciones, ni límites de prueba, ni cuentas, ni funciones 'pro' de pago. Todo lo que hace el optimizador es visible en el código y se ejecuta íntegramente en tu máquina.",
      },
      {
        q: "¿Es seguro? ¿CodeWinOptimizer contiene telemetría o anuncios?",
        a: "CodeWinOptimizer es local-first: no contiene telemetría, ni analíticas, ni anuncios, y nunca se conecta a ningún servidor. Cada ajuste muestra el comando exacto de PowerShell o del registro antes de aplicarlo, los cambios son reversibles, y la app recomienda crear un punto de restauración y un backup completo del registro (5 hives) primero.",
      },
      {
        q: "¿CodeWinOptimizer acelera Windows o mejora el rendimiento en juegos?",
        a: "Ataca justo lo que ralentiza Windows: bloatware y apps preinstaladas, telemetría y servicios en segundo plano, programas de inicio y latencia de red (Nagle, temporizadores de latencia, TCP/IP). Perfiles como el de Gaming desactivan funciones que consumen recursos y priorizan el rendimiento en primer plano. Los resultados dependen del hardware, pero la mayoría de usuarios nota arranques más rápidos y menor uso de CPU, RAM y disco en segundo plano.",
      },
      {
        q: "¿Qué versiones de Windows son compatibles?",
        a: "Windows 10 y Windows 11 (64 bits) con el runtime WebView2. La herramienta no necesita instalación: descarga el .exe desde GitHub Releases, ejecútalo como Administrador, crea un punto de restauración y podrás usarlo desde una USB en cualquier máquina.",
      },
    ],
  },
  footer: {
    website: "OscarDev",
    tagline:
      "Optimizador de Windows gratuito y de código abierto. Local, portátil y sin telemetría.",
    product: "Producto",
    resources: "Recursos",
    legal: "Legal",
    docs: "Documentación",
    guides: "Guías y Tutoriales",
    about: "Sobre el proyecto",
    github: "GitHub",
    releases: "Descargas",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    contact: "Contacto",
    license: "Licencia MIT",
    disclaimer:
      "CodeWinOptimizer es un proyecto independiente de código abierto y no está afiliado, respaldado ni patrocinado por Microsoft Corporation. Windows es una marca registrada de Microsoft Corporation.",
  },
  lang: "Español",
};

export default es;

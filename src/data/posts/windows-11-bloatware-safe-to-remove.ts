import type { BlogPost } from "./types";

export const removeBloatware: BlogPost = {
  slug: "windows-11-bloatware-safe-to-remove",
  date: "2026-09-12",
  readingTime: 10,
  category: { en: "Debloat", es: "Debloat" },
  title: {
    en: "Which Preinstalled Windows 11 Apps Are Safe to Remove",
    es: "Qué apps preinstaladas de Windows 11 se pueden quitar sin riesgo",
  },
  description: {
    en: "A clean Windows 11 install still comes with dozens of apps you never chose. Here is the line between removable apps and system components — with the safe list, the careful list, and the never-touch list.",
    es: "Una instalación limpia de Windows 11 sigue trayendo decenas de apps que nunca elegiste. Esta es la línea entre apps eliminables y componentes del sistema — con la lista segura, la de cuidado y la de no tocar jamás.",
  },
  content: {
    en: [
      {
        type: "p",
        text: "A fresh Windows 11 installation still ships with news widgets, promo stubs, Xbox services and cloud trials you never asked for. Removing them is safe and satisfying — as long as you know where the line between “preinstalled app” and “system component” lies. This guide gives you the line: what is safe to remove, what needs care, what to never touch, and how to do it without breaking updates.",
      },
      { type: "h2", text: "The rule of thumb" },
      {
        type: "ul",
        items: [
          "Store apps are removable and reinstallable: if it came from the Microsoft Store, you can remove it and get it back later from the Store or with a single WinGet command.",
          "Windows features are different: .NET, WebView2, the Store itself, shell components and drivers are infrastructure. Remove them and things break — typically the next update, or the Start menu.",
          "Never run a debloat script you cannot read, and that does not log what it changes. If a tool doesn't show you the list of changes before it runs, close it.",
        ],
      },
      { type: "h2", text: "Safe to remove on most PCs" },
      {
        type: "ul",
        items: [
          "News and interests apps: Microsoft News, Weather, Tips (Get Started), Solitaire Collection, Maps, Get Help.",
          "Promo and trial apps: Spotify, Disney+, Prime Video, LinkedIn, Skype, Clipchamp and Office Hub stubs — if you never use them.",
          "Mail & Calendar, To Do and People — once you have set up a replacement (new Outlook, Thunderbird or webmail).",
          "The Xbox stack: Xbox, Xbox Game Bar, Gaming Services — only on PCs that never game or use Game Pass. If you just want the overlay gone, disable Game Bar instead of removing it.",
          "OEM clutter: vendor support assistants, trial antivirus suites, manufacturer stores and utilities. Use the vendor's own uninstall tool when one is provided.",
        ],
      },
      { type: "h2", text: "Remove with care" },
      {
        type: "ul",
        items: [
          "OneDrive: unlink it first (“Unlink this PC”), make sure your files are synced or move them to a local folder, and only then uninstall. Never delete the OneDrive folder blindly — that is one of the few ways to actually lose data doing this.",
          "Microsoft Edge: it is deeply integrated with the system, and WebView2 apps depend on the same runtime. Forcing its removal breaks updates. Keep it installed, make your preferred browser the default, and disable the Edge features you dislike instead.",
          "Photos, Notepad, Paint, Snipping Tool: removable, but set up your replacements first. Windows may also reinstall some of these through updates or new feature packs.",
          "Widgets and Copilot: better disabled (taskbar settings) than uninstalled. Windows tends to reinstall or re-enable them, and failed removal attempts can break the taskbar.",
          "Teams (personal) and Phone Link: safe to remove if unused, but they may return with some feature updates — check after major upgrades.",
        ],
      },
      { type: "h2", text: "Do not remove" },
      {
        type: "ul",
        items: [
          "Microsoft Store and App Installer — App Installer is the engine behind winget, the safest way to manage software.",
          "WebView2 Runtime, .NET runtimes and Visual C++ redistributables — hundreds of applications depend on them.",
          "Defender components, Windows Security / Security Health, and shell hosts (Start Menu Experience, ShellExperienceHost, Search).",
          "Dependency packages the Store manages (VCLibs, UWP frameworks) — never delete these manually.",
          "Anything Settings flags as a system component, and anything you cannot easily reinstall.",
        ],
      },
      { type: "h2", text: "How to remove apps safely" },
      {
        type: "p",
        text: "There are three standard ways, from gentlest to most scriptable:",
      },
      {
        type: "ol",
        items: [
          "Settings → Apps → Installed apps → “…” → Uninstall. The simplest, and it never lies about what is a system component.",
          "WinGet in a terminal: winget uninstall “App Name”. Shows exact package matches and works well in batch.",
          "PowerShell: Get-AppxPackage <Name> | Remove-AppxPackage removes it for the current user. Remove-AppxProvisionedPackage -Online -PackageName <name> (admin) also stops it installing for new accounts.",
        ],
      },
      {
        type: "p",
        text: "Reinstalling is just as easy: search the Microsoft Store, or winget install <id>.",
      },
      {
        type: "tip",
        text: "Create a restore point before a batch removal and keep a note of the exact packages you removed. Those five minutes will save you an hour if you change your mind.",
      },
      { type: "h2", text: "A cleaner path: documented app management" },
      {
        type: "p",
        text: "CodeWinOptimizer approaches this differently from debloat scripts: its App Manager lists 180+ curated apps with one-click install or uninstall through WinGet or Chocolatey, shows what is already installed before you touch anything, and its debloat tweaks use documented WinGet commands you can read first and revert later.",
      },
      {
        type: "link",
        text: "Read the App Manager documentation",
        href: "/docs/apps",
      },
      {
        type: "link",
        text: "See the “Remove bloatware” tweak and its exact commands",
        href: "/docs/tweaks/remove-bloatware",
      },
      {
        type: "link",
        text: "See the “Disable OneDrive” tweak (if you keep it installed but off)",
        href: "/docs/tweaks/disable-onedrive",
      },
      { type: "h2", text: "Summary" },
      {
        type: "p",
        text: "Preinstalled apps are removable; system components are not. Stick to Store apps you recognize, unlink OneDrive before you touch it, leave Edge and the runtime stack alone, and keep a list of what you removed. That is a clean Windows — without a broken one.",
      },
    ],
    es: [
      {
        type: "p",
        text: "Una instalación reciente de Windows 11 sigue viniendo con widgets de noticias, apps promocionales, servicios de Xbox y pruebas de nube que nunca pediste. Quitarlas es seguro y satisfactorio — siempre que sepas dónde está la frontera entre “app preinstalada” y “componente del sistema”. Esta guía te da esa frontera: qué es seguro quitar, qué requiere cuidado, qué no tocar jamás y cómo hacerlo sin romper las actualizaciones.",
      },
      { type: "h2", text: "La regla general" },
      {
        type: "ul",
        items: [
          "Las apps de la Store son eliminables y reinstalables: si vino de Microsoft Store, puedes quitarla y recuperarla después desde la Store o con un solo comando de WinGet.",
          "Las características de Windows son otra cosa: .NET, WebView2, la propia Store, los componentes del shell y los drivers son infraestructura. Quítalos y algo se rompe — normalmente la siguiente actualización o el menú Inicio.",
          "Nunca ejecutes un script de debloat que no puedas leer y que no registre lo que cambia. Si una herramienta no te muestra la lista de cambios antes de ejecutarse, ciérrala.",
        ],
      },
      { type: "h2", text: "Seguro de quitar en la mayoría de PCs" },
      {
        type: "ul",
        items: [
          "Apps de noticias e intereses: Microsoft News, El Tiempo, Consejos (Get Started), Solitaire Collection, Mapas, Get Help.",
          "Apps promocionales y de prueba: Spotify, Disney+, Prime Video, LinkedIn, Skype, Clipchamp y los stubs de Office Hub — si nunca las usas.",
          "Correo y Calendario, To Do y People — una vez que hayas configurado un sustituto (el nuevo Outlook, Thunderbird o webmail).",
          "El paquete Xbox: Xbox, Xbox Game Bar, Gaming Services — solo en PCs que nunca juegan ni usan Game Pass. Si solo quieres quitar el overlay, desactiva Game Bar en vez de desinstalarla.",
          "Basura del fabricante (OEM): asistentes de soporte, antivirus de prueba, tiendas y utilidades del fabricante. Usa la herramienta de desinstalación del propio fabricante cuando la ofrezca.",
        ],
      },
      { type: "h2", text: "Quitar con cuidado" },
      {
        type: "ul",
        items: [
          "OneDrive: primero desvincúlalo (“Desvincular este PC”), asegúrate de que tus archivos están sincronizados o muévelos a una carpeta local, y solo entonces desinstala. Nunca borres la carpeta de OneDrive a ciegas — es una de las pocas formas de perder datos de verdad haciendo esto.",
          "Microsoft Edge: está profundamente integrado en el sistema y las apps WebView2 dependen del mismo runtime. Forzar su eliminación rompe las actualizaciones. Déjalo instalado, pon tu navegador preferido como predeterminado y desactiva las funciones de Edge que no te gusten.",
          "Fotos, Notepad, Paint, Recortes: son eliminables, pero prepara antes tus sustitutos. Además, Windows puede reinstalar algunas mediante actualizaciones o paquetes de características.",
          "Widgets y Copilot: mejor desactivarlos (configuración de la barra de tareas) que desinstalarlos. Windows tiende a reinstalarlos o reactivarlos, y los intentos fallidos de eliminación pueden romper la barra de tareas.",
          "Teams (personal) y Vínculo con el teléfono: seguros de quitar si no los usas, pero pueden volver con algunas actualizaciones de características — revisa tras las actualizaciones grandes.",
        ],
      },
      { type: "h2", text: "No quitar" },
      {
        type: "ul",
        items: [
          "Microsoft Store y App Installer — App Installer es el motor detrás de winget, la forma más segura de gestionar software.",
          "WebView2 Runtime, runtimes de .NET y redistribuibles de Visual C++ — cientos de aplicaciones dependen de ellos.",
          "Componentes de Defender, Seguridad de Windows / Security Health y los hosts del shell (Experiencia del menú Inicio, ShellExperienceHost, Búsqueda).",
          "Paquetes de dependencias que gestiona la Store (VCLibs, frameworks UWP) — no los borres nunca a mano.",
          "Todo lo que Configuración marque como componente del sistema, y todo lo que no puedas reinstalar fácilmente.",
        ],
      },
      { type: "h2", text: "Cómo quitar apps de forma segura" },
      {
        type: "p",
        text: "Hay tres formas estándar, de la más suave a la más automatizable:",
      },
      {
        type: "ol",
        items: [
          "Configuración → Aplicaciones → Aplicaciones instaladas → “…” → Desinstalar. La más simple, y nunca miente sobre qué es un componente del sistema.",
          "WinGet en una terminal: winget uninstall “Nombre de la app”. Muestra las coincidencias exactas de paquetes y funciona bien en lote.",
          "PowerShell: Get-AppxPackage <Nombre> | Remove-AppxPackage la elimina para el usuario actual. Remove-AppxProvisionedPackage -Online -PackageName <nombre> (como administrador) evita además que se instale en cuentas nuevas.",
        ],
      },
      {
        type: "p",
        text: "Reinstalar es igual de fácil: busca en Microsoft Store o usa winget install <id>.",
      },
      {
        type: "tip",
        text: "Crea un punto de restauración antes de un lote de eliminaciones y anota los paquetes exactos que quitaste. Esos cinco minutos te ahorrarán una hora si cambias de opinión.",
      },
      { type: "h2", text: "Un camino más limpio: gestión de apps documentada" },
      {
        type: "p",
        text: "CodeWinOptimizer lo enfoca de forma distinta a los scripts de debloat: su Gestor de Apps lista más de 180 aplicaciones seleccionadas con instalación o desinstalación a un clic mediante WinGet o Chocolatey, muestra qué está ya instalado antes de que toques nada, y sus tweaks de debloat usan comandos WinGet documentados que puedes leer antes y revertir después.",
      },
      {
        type: "link",
        text: "Leer la documentación del Gestor de Apps",
        href: "/docs/apps",
      },
      {
        type: "link",
        text: "Ver el tweak «Eliminar bloatware» y sus comandos exactos",
        href: "/docs/tweaks/remove-bloatware",
      },
      {
        type: "link",
        text: "Ver el tweak «Desactivar OneDrive» (si lo mantienes instalado pero apagado)",
        href: "/docs/tweaks/disable-onedrive",
      },
      { type: "h2", text: "Resumen" },
      {
        type: "p",
        text: "Las apps preinstaladas son eliminables; los componentes del sistema, no. Quédate con las apps de la Store que reconozcas, desvincula OneDrive antes de tocarlo, deja en paz Edge y la pila de runtimes, y guarda una lista de lo que quitaste. Eso es un Windows limpio — sin romperlo.",
      },
    ],
  },
};

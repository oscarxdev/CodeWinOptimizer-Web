import type { BlogPost } from "./types";

export const speedUpBoot: BlogPost = {
  slug: "speed-up-windows-11-boot",
  date: "2026-09-08",
  readingTime: 10,
  category: { en: "Performance", es: "Rendimiento" },
  title: {
    en: "How to Speed Up Windows 11 Boot and Login Times",
    es: "Cómo acelerar el arranque e inicio de sesión de Windows 11",
  },
  description: {
    en: "A slow boot is almost always something running before you. Measure the problem, audit startup programs and services, handle Fast Startup, and fix the storage issues that actually cause slow starts.",
    es: "Un arranque lento casi siempre es algo que se ejecuta antes que tú. Mide el problema, audita programas y servicios de inicio, controla el Inicio rápido y arregla los problemas de almacenamiento que de verdad lo causan.",
  },
  content: {
    en: [
      {
        type: "p",
        text: "When Windows takes minutes to become usable, the cause is rarely a mystery: something is running before you. The fix is a methodical audit, not a “disable everything” script. This guide shows you how to measure your boot time, what to cut, what to leave alone, and which popular “optimizations” are actually harmful.",
      },
      { type: "h2", text: "Measure before you change anything" },
      {
        type: "ul",
        items: [
          "Task Manager (Ctrl + Shift + Esc) → Startup apps. Windows rates every entry with an impact score (Low / Medium / High), and the top-right corner shows the last BIOS time.",
          "Event Viewer → Applications and Services Logs → Microsoft → Windows → Diagnostics-Performance → Operational. Event ID 100 logs the duration of each boot in milliseconds — a perfect baseline.",
          "Collect a few days of data before judging: the first boots after updates are always slower, and a cold boot (full power off) takes longer than a restart.",
        ],
      },
      { type: "h2", text: "1. Audit what starts with Windows" },
      {
        type: "ul",
        items: [
          "In Task Manager → Startup apps, disable what you don't need at login: cloud sync clients, game launchers (Steam, Epic, Battle.net), update checkers (Adobe, Java), RGB and peripheral software once your profiles are saved on-device.",
          "Keep enabled: your security software, audio drivers, and anything you genuinely rely on the moment you log in. Disabling is reversible — Windows never deletes the program.",
          "Trust the impact score with judgment: “High” usually means several seconds of CPU and disk activity at every login. If you don't recognize the publisher, look it up before disabling it.",
          "Check the legacy startup folders too: press Win + R and open shell:startup and shell:common startup. Installers still drop shortcuts there.",
        ],
      },
      { type: "h2", text: "2. Be selective with services" },
      {
        type: "p",
        text: "Windows manages its services well. Only a few are worth touching, and only if you understand the trade-off:",
      },
      {
        type: "ul",
        items: [
          "SysMain (formerly Superfetch): on modern SSDs with 16 GB of RAM, disabling it is usually harmless and can reduce idle disk activity — but on systems with a mechanical hard drive it can make apps launch slower, because its preloading is genuinely useful there. Test both states.",
          "Windows Search indexing: instead of disabling the service, limit what it indexes in Settings → Privacy & security → Searching Windows, or rebuild the index once. If search is slow, a smaller index helps more than a dead service.",
          "Print Spooler: if you never print, disabling it removes a well-known attack surface — just remember to re-enable it before you need to print.",
          "Fax and Remote Registry: rarely needed on a home PC and safe to disable if any of them are running.",
        ],
      },
      {
        type: "warn",
        text: "Avoid scripts that “debloat” by disabling dozens of services. The boot-time gain is usually milliseconds, while the broken features and log errors can take hours to diagnose and fix.",
      },
      { type: "h2", text: "3. Decide on Fast Startup and hibernation" },
      {
        type: "p",
        text: "Fast Startup (a hybrid shutdown) saves the Windows kernel state to disk so the next start is quicker. It is enabled by default and it is fine for most PCs — but it causes real problems in specific situations:",
      },
      {
        type: "ul",
        items: [
          "Dual-booting: the saved state can leave the other operating system's partitions in a locked or dirty state. Disable Fast Startup if you dual-boot Linux or another Windows.",
          "Firmware and driver updates: some updates require a true cold boot to apply correctly.",
          "Strange state bugs: if Windows misbehaves after Shut down but behaves after Restart, Fast Startup is the first suspect.",
        ],
      },
      {
        type: "p",
        text: "Disable it in Control Panel → Power Options → “Choose what the power buttons do” → Change settings that are currently unavailable → uncheck “Turn on fast startup”. Do not run powercfg /h off unless you also want to remove hibernation entirely — that command deletes hiberfil.sys and disables hibernate too.",
      },
      { type: "h2", text: "4. Trim login-time extras" },
      {
        type: "ul",
        items: [
          "Remove unused preinstalled apps: each one can register background tasks and services — our debloat guide (linked below) covers exactly which ones are safe to remove.",
          "Turn off “Show recommendations for tips” and the Windows welcome experience under Settings → System → Notifications and Settings → Personalization → Start. They fetch content at every login.",
          "Look for installer junk in Task Scheduler: open Task Scheduler Library and disable recognizable third-party update tasks from apps you no longer use.",
          "If sign-in itself is slow, check Settings → Accounts → Sign-in options: Windows Hello gestures and work/school sign-in policies can add seconds that no tweak removes.",
        ],
      },
      { type: "h2", text: "5. Keep the drive and drivers healthy" },
      {
        type: "ul",
        items: [
          "SSDs slow down dramatically when nearly full: keep at least 10–15% of the drive free.",
          "Never defragment an SSD — Windows auto-trims it. “Optimize Drives” already treats SSDs correctly, so let it do its job.",
          "Update chipset and storage drivers from your motherboard or laptop vendor. On new platforms, generic drivers can cause slow device initialization at boot.",
          "Check drive health (CrystalDiskInfo or the manufacturer's tool). A failing drive is the number-one cause of a boot that suddenly got dramatically slower — if SMART reports problems, back up first and investigate the disk before tweaking anything else.",
        ],
      },
      { type: "h2", text: "If it is still slow: find the slow phase" },
      {
        type: "p",
        text: "A long BIOS/firmware time points to hardware: enable fast boot in BIOS, disconnect unused USB drives, or update the firmware. A long Windows phase with disk at 100% suggests a driver, an indexing scan or antivirus activity. A slow desktop load points back to startup apps or a corrupted user profile. The Diagnostics-Performance log from step one tells you which phase is bad — start there instead of guessing.",
      },
      {
        type: "tip",
        text: "Create a restore point before making a batch of changes. CodeWinOptimizer's performance tweaks (startup delay, background apps, power plan) each document the exact command they run and can be reverted individually.",
      },
      { type: "h2", text: "Automate the safe parts" },
      {
        type: "p",
        text: "If you prefer documented one-click changes over manual auditing, CodeWinOptimizer includes a Startup Manager that lists everything registered to start with Windows and lets you toggle entries without deleting anything, plus tweaks for startup delay, background apps and the power plan — all shown with their exact commands before they run.",
      },
      {
        type: "link",
        text: "Read the Startup Manager documentation",
        href: "/docs/startup",
      },
      {
        type: "link",
        text: "Guide: which preinstalled Windows 11 apps are safe to remove",
        href: "/blog/windows-11-bloatware-safe-to-remove",
      },
      {
        type: "link",
        text: "See the “Disable startup delay” tweak",
        href: "/docs/tweaks/disable-startup-delay",
      },
      {
        type: "link",
        text: "See the “Disable background apps” tweak",
        href: "/docs/tweaks/disable-background-apps",
      },
      { type: "h2", text: "Summary" },
      {
        type: "p",
        text: "Fast boot times come from a short list of startup programs, sane services, healthy storage and current drivers. Measure first, cut what you recognize, leave the internals alone, and remember that the most dramatic fix of all is a dying drive you replace before it takes your data with it.",
      },
    ],
    es: [
      {
        type: "p",
        text: "Cuando Windows tarda minutos en ser utilizable, la causa rara vez es un misterio: hay algo ejecutándose antes que tú. La solución es una auditoría metódica, no un script de “desactivarlo todo”. Esta guía te enseña a medir tu tiempo de arranque, qué recortar, qué dejar en paz y qué “optimizaciones” populares son en realidad perjudiciales.",
      },
      { type: "h2", text: "Mide antes de cambiar nada" },
      {
        type: "ul",
        items: [
          "Administrador de tareas (Ctrl + Shift + Esc) → Aplicaciones de inicio. Windows puntúa cada entrada con un impacto (Bajo / Medio / Alto), y arriba a la derecha se muestra el último tiempo de BIOS.",
          "Visor de eventos → Registros de aplicaciones y servicios → Microsoft → Windows → Diagnostics-Performance → Operational. El evento ID 100 registra la duración de cada arranque en milisegundos — una línea base perfecta.",
          "Recoge datos de varios días antes de juzgar: los primeros arranques tras actualizar siempre son más lentos, y un arranque en frío (apagado total) tarda más que un reinicio.",
        ],
      },
      { type: "h2", text: "1. Audita lo que arranca con Windows" },
      {
        type: "ul",
        items: [
          "En Administrador de tareas → Aplicaciones de inicio, desactiva lo que no necesitas al iniciar sesión: clientes de sincronización en la nube, lanzadores de juegos (Steam, Epic, Battle.net), comprobadores de actualizaciones (Adobe, Java), software de RGB y periféricos una vez guardados tus perfiles en el dispositivo.",
          "Mantén activado: tu seguridad, los drivers de audio y todo lo que de verdad necesites nada más entrar. Desactivar es reversible — Windows nunca desinstala el programa.",
          "Interpreta la puntuación de impacto con criterio: “Alto” suele significar varios segundos de CPU y disco en cada inicio de sesión. Si no reconoces al editor, búscalo antes de desactivarlo.",
          "Revisa también las carpetas de inicio clásicas: pulsa Win + R y abre shell:startup y shell:common startup. Los instaladores todavía dejan accesos ahí.",
        ],
      },
      { type: "h2", text: "2. Sé selectivo con los servicios" },
      {
        type: "p",
        text: "Windows gestiona bien sus servicios. Solo unos pocos merecen que los toques, y únicamente si entiendes el intercambio:",
      },
      {
        type: "ul",
        items: [
          "SysMain (antes Superfetch): en SSD modernos con 16 GB de RAM, deshabilitarlo suele ser inofensivo y puede reducir la actividad de disco en reposo — pero en equipos con disco mecánico puede hacer que las apps tarden más en abrir, porque la precarga ahí sí aporta. Prueba ambos estados.",
          "Indexación de Windows Search: en vez de deshabilitar el servicio, limita qué indexa en Configuración → Privacidad y seguridad → Buscar en Windows, o reconstruye el índice una vez. Si la búsqueda va lenta, un índice más pequeño ayuda más que un servicio muerto.",
          "Cola de impresión (Print Spooler): si nunca imprimes, deshabilitarla elimina una superficie de ataque conocida — solo recuerda reactivarla antes de necesitar imprimir.",
          "Fax y Registro remoto: rara vez se necesitan en un PC doméstico y son seguros de deshabilitar si alguno está en ejecución.",
        ],
      },
      {
        type: "warn",
        text: "Evita scripts que “debloatean” deshabilitando decenas de servicios. La ganancia en arranque suele ser de milisegundos, mientras que las funciones rotas y los errores en los registros pueden llevarte horas de diagnóstico y reparación.",
      },
      { type: "h2", text: "3. Decide sobre el Inicio rápido y la hibernación" },
      {
        type: "p",
        text: "El Inicio rápido (apagado híbrido) guarda el estado del kernel en disco para que el siguiente arranque sea más veloz. Viene activado por defecto y para la mayoría de PCs está bien — pero causa problemas reales en situaciones concretas:",
      },
      {
        type: "ul",
        items: [
          "Arranque dual: el estado guardado puede dejar las particiones del otro sistema operativo bloqueadas o en estado sucio. Desactiva el Inicio rápido si tienes arranque dual con Linux u otro Windows.",
          "Actualizaciones de firmware y drivers: algunas requieren un apagado en frío real para aplicarse bien.",
          "Bugs de estado extraño: si Windows va mal después de Apagar pero bien después de Reiniciar, el Inicio rápido es el primer sospechoso.",
        ],
      },
      {
        type: "p",
        text: "Desactívalo en Panel de control → Opciones de energía → “Elegir el comportamiento de los botones de encendido” → Cambiar la configuración actualmente no disponible → desmarca “Activar inicio rápido”. No ejecutes powercfg /h off salvo que quieras eliminar también la hibernación por completo — ese comando borra hiberfil.sys y desactiva hibernate.",
      },
      { type: "h2", text: "4. Recorta los extras del inicio de sesión" },
      {
        type: "ul",
        items: [
          "Elimina las apps preinstaladas que no uses: cada una puede registrar tareas y servicios en segundo plano — nuestra guía de debloat (enlazada abajo) cubre exactamente cuáles son seguras.",
          "Desactiva “Mostrar sugerencias para obtener consejos” y la experiencia de bienvenida en Configuración → Sistema → Notificaciones y Configuración → Personalización → Inicio. Cargan contenido en cada inicio de sesión.",
          "Busca basura de instaladores en el Programador de tareas: abre la Biblioteca del Programador de tareas y deshabilita las tareas de actualización de apps que ya no uses.",
          "Si el inicio de sesión en sí va lento, revisa Configuración → Cuentas → Opciones de inicio de sesión: los gestos de Windows Hello y las directivas de cuentas profesionales pueden añadir segundos que ningún tweak elimina.",
        ],
      },
      { type: "h2", text: "5. Mantén sanos el disco y los drivers" },
      {
        type: "ul",
        items: [
          "Los SSD se ralentizan drásticamente cuando están casi llenos: mantén al menos un 10–15% del disco libre.",
          "Nunca desfragmentes un SSD — Windows lo recorta (TRIM) automáticamente. “Optimizar unidades” ya trata los SSD correctamente, deja que haga su trabajo.",
          "Actualiza los drivers de chipset y almacenamiento desde el fabricante de tu placa o portátil. En plataformas nuevas, los drivers genéricos pueden causar inicializaciones lentas al arrancar.",
          "Comprueba la salud del disco (CrystalDiskInfo o la herramienta del fabricante). Un disco fallando es la causa número uno de un arranque que de pronto se volvió dramáticamente lento — si SMART reporta problemas, haz copia de seguridad primero e investiga el disco antes de tocar nada más.",
        ],
      },
      { type: "h2", text: "Si sigue lento: encuentra la fase lenta" },
      {
        type: "p",
        text: "Un tiempo largo de BIOS/firmware apunta al hardware: activa el inicio rápido en BIOS, desconecta USBs que no uses o actualiza el firmware. Una fase larga de Windows con el disco al 100% sugiere un driver, un escaneo de indexación o el antivirus. Una carga lenta del escritorio apunta a las aplicaciones de inicio o a un perfil de usuario corrupto. El registro Diagnostics-Performance del primer paso te dice qué fase va mal — empieza por ahí en vez de adivinar.",
      },
      {
        type: "tip",
        text: "Crea un punto de restauración antes de hacer un lote de cambios. Los tweaks de rendimiento de CodeWinOptimizer (retraso de inicio, apps en segundo plano, plan de energía) documentan el comando exacto que ejecutan y se pueden revertir por separado.",
      },
      { type: "h2", text: "Automatiza la parte segura" },
      {
        type: "p",
        text: "Si prefieres cambios documentados a un clic antes que auditar a mano, CodeWinOptimizer incluye un Gestor de Inicio que lista todo lo registrado para arrancar con Windows y te permite activar o desactivar entradas sin borrar nada, más tweaks para el retraso de inicio, las apps en segundo plano y el plan de energía — todos mostrados con sus comandos exactos antes de ejecutarse.",
      },
      {
        type: "link",
        text: "Leer la documentación del Gestor de Inicio",
        href: "/docs/startup",
      },
      {
        type: "link",
        text: "Guía: qué apps preinstaladas de Windows 11 se pueden quitar sin riesgo",
        href: "/blog/windows-11-bloatware-safe-to-remove",
      },
      {
        type: "link",
        text: "Ver el tweak «Desactivar retraso de inicio»",
        href: "/docs/tweaks/disable-startup-delay",
      },
      {
        type: "link",
        text: "Ver el tweak «Desactivar apps en segundo plano»",
        href: "/docs/tweaks/disable-background-apps",
      },
      { type: "h2", text: "Resumen" },
      {
        type: "p",
        text: "Los arranques rápidos vienen de una lista corta de programas de inicio, servicios razonables, almacenamiento sano y drivers al día. Mide primero, recorta lo que reconozcas, deja las tripas del sistema en paz y recuerda que el arreglo más drástico de todos es un disco moribundo al que reemplazas antes de que se lleve tus datos.",
      },
    ],
  },
};

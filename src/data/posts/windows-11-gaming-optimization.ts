import type { BlogPost } from "./types";

export const gamingOptimization: BlogPost = {
  slug: "windows-11-gaming-optimization",
  date: "2026-09-16",
  readingTime: 11,
  category: { en: "Gaming", es: "Gaming" },
  title: {
    en: "Windows 11 Gaming Optimization: What Actually Works",
    es: "Optimización de Windows 11 para gaming: lo que funciona de verdad",
  },
  description: {
    en: "Drivers, power, background load and latency: the ordered list of changes that measurably improve frame times on Windows 11 — plus the popular tweaks that are myths, and how to measure results properly.",
    es: "Drivers, energía, carga en segundo plano y latencia: la lista ordenada de cambios que mejoran de verdad los tiempos de fotograma en Windows 11 — más los mitos populares y cómo medir resultados como un profesional.",
  },
  content: {
    en: [
      {
        type: "p",
        text: "Most “gaming optimization” advice is placebo, superstition, or actively harmful. The real gains come from a short list of things: current drivers, sane power settings, less background work, and measurements you can trust. Here is the order that actually matters — and the popular tweaks you should skip.",
      },
      { type: "h2", text: "1. Drivers and firmware come first" },
      {
        type: "ul",
        items: [
          "Install the latest GPU driver directly from NVIDIA, AMD or Intel — not from Windows Update, which lags months behind. Choose the clean-install option.",
          "If you switch GPU brands, remove the old driver with DDU (Display Driver Uninstaller) in safe mode before installing the new one. Driver leftovers cause stutter and crashes.",
          "Update chipset and storage drivers from your laptop or motherboard vendor. On new platforms these fix stuttering that no registry tweak will touch.",
          "Enable Resizable BAR in the BIOS if your GPU and motherboard support it — some games gain 5–10% for free. Verify it in GPU-Z after enabling.",
          "Update the motherboard BIOS when a specific fix is documented; not because newer is always better.",
        ],
      },
      { type: "h2", text: "2. Power and thermals" },
      {
        type: "ul",
        items: [
          "Use a High performance or Ultimate Performance power plan. Worst case, set the Windows power mode to “Best performance” and plug laptops in while gaming.",
          "Laptops: watch thermals with HWiNFO64 during a real session. If the CPU or GPU drops clocks when hot, the fix is cooling (lift the laptop, repaste, undervolt) — no software tweak replaces it.",
          "If you see stutter right after the machine gets warm, suspect thermal throttling before you suspect Windows.",
          "Windows 11 “Energy Saver” and battery saver should be off while gaming.",
        ],
      },
      { type: "h2", text: "3. Windows settings that matter" },
      {
        type: "ul",
        items: [
          "Game Mode: leave it on. It prioritizes the foreground game and suppresses background interruptions.",
          "Background recording: turn off “Record in the background while playing” in Game Bar → Captures. This is one of the few settings with a consistent, measurable effect.",
          "Overlays: disable the ones you do not use (Discord, GeForce Experience, Game Bar). Each overlay hooks the rendering pipeline.",
          "Hardware-accelerated GPU scheduling (HAGS): Settings → System → Display → Graphics → Change default graphics settings. Test with and without — some games improve, a few regress.",
          "Mouse: turn off “Enhance pointer precision” for consistent aim, and set the polling rate to maximum in your mouse software.",
          "VRR (G-Sync / FreeSync): enable it in the driver and on the monitor, and cap your frame rate slightly below the refresh rate for the smoothest pacing.",
        ],
      },
      { type: "h2", text: "4. Cut background load" },
      {
        type: "ul",
        items: [
          "Do a startup audit — a sync client uploading files or a launcher fetching updates does more damage to frame times than any registry tweak can fix.",
          "Add your games folder as an antivirus exclusion only if you trust the source of your installs; it reduces stutter in some titles at a small security cost.",
          "Watch RAM usage in Task Manager → Performance. 16 GB is the practical minimum for modern AAA games; if the system is swapping to disk mid-game, you will feel it as stutter.",
          "Stop RGB and monitoring suites from polling sensors aggressively — they can interrupt the game for microseconds hundreds of times per second.",
        ],
      },
      { type: "h2", text: "5. Network latency" },
      {
        type: "ul",
        items: [
          "Ethernet beats Wi-Fi for stability. If you must use Wi-Fi, switch off Wi-Fi power saving in the adapter properties and use the 5 GHz or 6 GHz band.",
          "Nagle's algorithm: for competitive games that batch small packets badly, the classic fix is TcpAckFrequency = 1 and TCPNoDelay = 1 on the game's network interface. Effect varies per game — measure it, don't assume it.",
          "Network throttling index: Windows throttles network traffic for multimedia; setting NetworkThrottlingIndex to ffffffff in the registry removes that cap for games.",
          "DNS changes rarely affect in-game ping — anyone claiming otherwise is usually selling something. Matchmaking and server distance matter far more.",
        ],
      },
      { type: "h2", text: "Myths worth skipping" },
      {
        type: "ul",
        items: [
          "“Disable the page file”: games and anti-cheat need it. Removing it causes crashes and out-of-memory errors.",
          "“Disable Defender”: not worth losing your protection. Use exclusions for game folders instead.",
          "“RAM cleaners”: emptying the standby cache hurts performance — Windows caches files because it expects to need them again.",
          "“Registry cleaner” packs and mystery “gaming optimizers”: no measurable gains, plenty of risk.",
          "“Disable core isolation (HVCI)”: it can recover a few percent in some games, but it removes a real security layer. That is an informed choice, not a free win.",
        ],
      },
      { type: "h2", text: "6. Measure like a pro" },
      {
        type: "ul",
        items: [
          "Average FPS hides stutter. Look at frame times and 1% / 0.1% lows with PresentMon, CapFrameX, or your GPU driver's overlay.",
          "Change one thing at a time, and re-test the same scene for the same duration.",
          "Monitor CPU/GPU temperatures and clocks during the run: periodic dips usually mean thermal or power limits, not software.",
          "Trust the games you actually play — gains in a synthetic benchmark do not always transfer.",
        ],
      },
      {
        type: "tip",
        text: "CodeWinOptimizer bundles the safe, documented versions of these changes: the latency and Nagle tweaks, network throttling, the complete gaming profile, and a monitor with latency badges and connection tests so you can verify the result.",
      },
      {
        type: "link",
        text: "Browse the latency and network tweaks",
        href: "/docs/tweaks",
      },
      {
        type: "link",
        text: "See the “Complete gaming profile” tweak",
        href: "/docs/tweaks/complete-gaming-profile",
      },
      {
        type: "link",
        text: "See the Network Throttling tweak",
        href: "/docs/tweaks/disable-network-throttling",
      },
      {
        type: "link",
        text: "Read the System Monitor documentation (latency, DNS and speed tests)",
        href: "/docs/monitor",
      },
      { type: "h2", text: "Summary" },
      {
        type: "p",
        text: "Drivers, cooling, power settings and a quiet background get you 95% of the way. Test everything, skip the snake oil, and measure frame times instead of average FPS. Your 1% lows — and your aim — will thank you.",
      },
    ],
    es: [
      {
        type: "p",
        text: "La mayor parte de los consejos de “optimización para gaming” son placebo, superstición o directamente perjudiciales. Las ganancias reales vienen de una lista corta de cosas: drivers actualizados, configuración de energía sensata, menos trabajo en segundo plano y mediciones en las que puedas confiar. Este es el orden que de verdad importa — y los tweaks populares que deberías saltarte.",
      },
      { type: "h2", text: "1. Los drivers y el firmware van primero" },
      {
        type: "ul",
        items: [
          "Instala el último driver de GPU directamente desde NVIDIA, AMD o Intel — no desde Windows Update, que va meses por detrás. Elige la opción de instalación limpia.",
          "Si cambias de marca de GPU, elimina el driver antiguo con DDU (Display Driver Uninstaller) en modo seguro antes de instalar el nuevo. Los restos de drivers causan stutter y cuelgues.",
          "Actualiza los drivers de chipset y almacenamiento desde el fabricante de tu portátil o placa base. En plataformas nuevas, esto arregla tirones que ningún tweak del registro toca.",
          "Activa Resizable BAR en la BIOS si tu GPU y placa lo soportan — algunos juegos ganan un 5–10% gratis. Verifica que está activo con GPU-Z.",
          "Actualiza la BIOS de la placa cuando haya un arreglo concreto documentado; no porque lo nuevo sea siempre mejor.",
        ],
      },
      { type: "h2", text: "2. Energía y temperaturas" },
      {
        type: "ul",
        items: [
          "Usa un plan de energía de Alto rendimiento o Rendimiento máximo. En el peor caso, pon el modo de energía de Windows en “Máximo rendimiento” y enchufa el portátil mientras juegas.",
          "Portátiles: vigila las temperaturas con HWiNFO64 durante una sesión real. Si la CPU o la GPU bajan frecuencias al calentarse, el arreglo es refrigeración (levantar el portátil, cambiar la pasta térmica, undervolt) — ningún tweak de software lo sustituye.",
          "Si ves tirones justo después de que la máquina se caliente, sospecha de thermal throttling antes que de Windows.",
          "El “Ahorro de energía” de Windows 11 y el ahorro de batería deben estar desactivados mientras juegas.",
        ],
      },
      { type: "h2", text: "3. Ajustes de Windows que sí importan" },
      {
        type: "ul",
        items: [
          "Modo de juego: déjalo activado. Prioriza el juego en primer plano y suprime algunas interrupciones en segundo plano.",
          "Grabación en segundo plano: desactiva “Grabar en segundo plano mientras juego” en Game Bar → Capturas. Es uno de los pocos ajustes con un efecto constante y medible.",
          "Overlays: desactiva los que no uses (Discord, GeForce Experience, Game Bar). Cada overlay se engancha al pipeline de renderizado.",
          "Programación de GPU acelerada por hardware (HAGS): Configuración → Sistema → Pantalla → Gráficos → Cambiar la configuración de gráficos predeterminada. Prueba con y sin ella — algunos juegos mejoran, unos pocos empeoran.",
          "Ratón: desactiva “Mejorar la precisión del puntero” para apuntar de forma consistente, y pon la tasa de sondeo al máximo en el software de tu ratón.",
          "VRR (G-Sync / FreeSync): actívalo en el driver y en el monitor, y limita los FPS un poco por debajo de la tasa de refresco para el frame pacing más suave.",
        ],
      },
      { type: "h2", text: "4. Recorta la carga en segundo plano" },
      {
        type: "ul",
        items: [
          "Haz una auditoría de inicio — un cliente de sincronización subiendo archivos o un lanzador descargando actualizaciones hacen más daño a los tiempos de fotograma que cualquier tweak del registro.",
          "Añade la carpeta de tus juegos como exclusión del antivirus solo si confías en el origen de tus instalaciones; reduce el stutter en algunos títulos a cambio de un pequeño coste de seguridad.",
          "Vigila el uso de RAM en Administrador de tareas → Rendimiento. 16 GB es el mínimo práctico para los AAA modernos; si el sistema está paginando a disco a mitad de partida, lo notarás como tirones.",
          "Evita que las suites de RGB y monitorización sondeen sensores agresivamente — pueden interrumpir el juego durante microsegundos cientos de veces por segundo.",
        ],
      },
      { type: "h2", text: "5. Latencia de red" },
      {
        type: "ul",
        items: [
          "Ethernet gana a Wi-Fi en estabilidad. Si tienes que usar Wi-Fi, desactiva el ahorro de energía del adaptador y usa la banda de 5 GHz o 6 GHz.",
          "Algoritmo de Nagle: para juegos competitivos que empaquetan mal los paquetes pequeños, el arreglo clásico es TcpAckFrequency = 1 y TCPNoDelay = 1 en la interfaz de red del juego. El efecto varía según el juego — mídelo, no lo asumas.",
          "Network throttling index: Windows limita el tráfico de red para multimedia; poner NetworkThrottlingIndex en ffffffff en el registro elimina ese límite para los juegos.",
          "Cambiar el DNS rara vez afecta al ping en partida — quien afirme lo contrario suele estar vendiendo algo. El emparejamiento y la distancia al servidor importan mucho más.",
        ],
      },
      { type: "h2", text: "Mitos que conviene saltarse" },
      {
        type: "ul",
        items: [
          "“Desactiva el archivo de paginación”: los juegos y los anti-cheat lo necesitan. Quitarlo provoca cuelgues y errores de memoria.",
          "“Desactiva Defender”: no merece la pena perder tu protección. Usa exclusiones para las carpetas de juegos.",
          "“Limpiadores de RAM”: vaciar la caché en espera perjudica el rendimiento — Windows cachea archivos porque espera necesitarlos de nuevo.",
          "Packs de “limpiadores de registro” y “optimizadores gaming” misteriosos: cero ganancias medibles, mucho riesgo.",
          "“Desactiva el aislamiento de núcleo (HVCI)”: puede recuperar un pequeño porcentaje en algunos juegos, pero elimina una capa de seguridad real. Es una decisión informada, no una victoria gratis.",
        ],
      },
      { type: "h2", text: "6. Mide como un profesional" },
      {
        type: "ul",
        items: [
          "Los FPS medios esconden el stutter. Mira los tiempos de fotograma y los mínimos del 1% / 0,1% con PresentMon, CapFrameX o el overlay de tu driver de GPU.",
          "Cambia una sola cosa a la vez y vuelve a medir la misma escena durante el mismo tiempo.",
          "Monitoriza temperaturas y frecuencias de CPU/GPU durante la prueba: las caídas periódicas suelen indicar límites térmicos o de energía, no software.",
          "Fíate de los juegos que realmente juegas — las ganancias en un benchmark sintético no siempre se trasladan.",
        ],
      },
      {
        type: "tip",
        text: "CodeWinOptimizer incluye las versiones seguras y documentadas de estos cambios: los tweaks de latencia y Nagle, el network throttling, el perfil completo de gaming y un monitor con badges de latencia y tests de conexión para verificar el resultado.",
      },
      {
        type: "link",
        text: "Explorar los tweaks de latencia y red",
        href: "/docs/tweaks",
      },
      {
        type: "link",
        text: "Ver el tweak «Perfil completo de gaming»",
        href: "/docs/tweaks/complete-gaming-profile",
      },
      {
        type: "link",
        text: "Ver el tweak de Network Throttling",
        href: "/docs/tweaks/disable-network-throttling",
      },
      {
        type: "link",
        text: "Leer la documentación del Monitor del Sistema (latencia, DNS y tests de velocidad)",
        href: "/docs/monitor",
      },
      { type: "h2", text: "Resumen" },
      {
        type: "p",
        text: "Drivers, refrigeración, energía y un sistema en calma te llevan al 95% del camino. Prueba todo, sáltate las pócimas milagrosas y mide tiempos de fotograma en lugar de FPS medios. Tus mínimos del 1% — y tu puntería — te lo agradecerán.",
      },
    ],
  },
};

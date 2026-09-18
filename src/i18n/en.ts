const en = {
  nav: {
    features: "Features",
    preview: "Preview",
    techStack: "Tech Stack",
    docs: "Docs",
    guides: "Guides",
    about: "About",
    starOnGitHub: "Star on GitHub",
    download: "Download",
  },
  hero: {
    badge: "Open Source · Portable · Free",
    title1: "Take control of",
    title2: "your Windows.",
    description:
      "A local-first Windows optimization tool that puts you in charge. System restore, app management, registry tweaks, performance tuning — all from a single, portable executable.",
    download: "Download for Windows",
    viewOnGitHub: "View on GitHub",
    subtitle:
      "Windows 10/11 · Single .exe with bundled O&O ShutUp10++ · No installation required · Auto-elevates to Administrator",
    install: {
      label: "Install in one line (PowerShell admin)",
      copy: "Copy",
      copied: "Copied!",
      hint: "No downloads. Always the latest version.",
    },
  },
  features: {
    heading1: "Everything you need to",
    heading2: "optimize Windows.",
    subheading:
      "From system restore to performance tuning — all the tools you need in one portable executable.",
    items: [
      {
        title: "System Restore",
        description:
          "Create system restore points with custom names. Bypasses the Windows 24h cooldown via registry tweak. Full registry backup to .reg files across all 5 hives. Driver backup & restore.",
      },
      {
        title: "App Manager",
        description:
          "181 apps across 8 categories including Microsoft Tools (.NET SDK 6/8/9/10, Sysinternals suite, PowerShell 7, PowerToys). Install/Uninstall via WinGet or Chocolatey with a dynamic button that switches based on installation state. Sticky search header that stays visible while scrolling.",
      },
      {
        title: "140+ System Tweaks",
        description:
          "Comprehensive tweaks across 14 categories: network, memory, GPU, privacy, performance, essential, advanced, firewall, Nagle, latency timers, UI & bloat removal. Robust execution via PowerShell cmdlets (Get/Disable-WindowsOptionalFeature, NetFirewallRule, CIM) — no more brittle wmic/netsh. Sticky toolbar with global Select All, per-category X/Y progress badges, and one-click ShutUp10++ launcher.",
      },
      {
        title: "Windows Features",
        description:
          "Enable/disable .NET Framework, Hyper-V, WSL, Sandbox, NFS, F8 Boot Recovery, and more. Quick fixes: network reset, NTP sync, SFC/DISM scan, Windows Update reset. State-checked features that skip cleanly when absent and never hang on Windows Update payload downloads.",
      },
      {
        title: "Startup Manager",
        description:
          "Full visibility and control over every Windows auto-start entry in one tab. Lists Run keys (HKLM, HKCU, WOW6432Node), Startup folders (user + all-users), AppX UWP startup tasks (Discord, Terminal, WhatsApp, Xbox, etc.) and scheduled tasks with Logon/Boot triggers. Per-item toggle uses the same StartupApproved binary that Task Manager writes — fully reversible. Search, filter (all/on/off), per-row type icons, live counts.",
      },
      {
        title: "System Monitor",
        description:
          "Impact Dashboard at the top: persisted snapshots (rolling history in %LOCALAPPDATA%) with delta-first metric cards for Disk Free, Startup Programs, Running Services and Processes — color-coded vs the previous visit. Plus the real-time 3x2 dashboard: CPU & GPU usage with temperature, per-drive usage bars, uptime, network latency, and a PC Health Score (0-100, A+ to F).",
      },
      {
        title: "Side-Docked Terminal",
        description:
          "Real-time command output docked to the right side, drag-resizable from 280px to 70% width with the width persisted in localStorage. Collapsible to a 36px vertical strip. Copy & clear actions. 6 accent colors + 6 fonts, persisted via localStorage. Bundled O&O ShutUp10++ for one-click privacy hardening.",
      },
    ],
  },
  stats: {
    appsAvailable: "Apps available",
    systemTweaks: "System tweaks",
    categories: "Categories",
    accentColors: "Accent colors",
    packageManagers: "Package managers",
    singleExe: "Single .exe",
  },
  preview: {
    heading1: "See it",
    heading2: "in action.",
    subheading: "A dark-themed, modern interface designed for power users.",
    labels: [
      "Restore",
      "Apps",
      "Tweaks",
      "Features",
      "Monitor",
      "Cleanup",
      "Updates",
      "Settings",
      "Startup",
    ],
  },
  discord: {
    heading: "Join OscarHub on Discord",
    subheading: "Get help, share feedback, and stay up to date.",
    button: "Join OscarHub",
  },
  tech: {
    heading1: "Built with",
    heading2: "modern tech.",
    items: [
      { label: "Backend", value: "Go + Wails v2 runtime" },
      { label: "Frontend", value: "Vanilla JS, CSS (dark theme)" },
      { label: "Window", value: "WebView2 (Edge Chromium)" },
      { label: "Package Managers", value: "WinGet, Chocolatey" },
      {
        label: "System Tools",
        value: "PowerShell, DISM, bcdedit, reg.exe, nvidia-smi",
      },
      {
        label: "Monitoring",
        value: "gopsutil (CPU/RAM), nvidia-smi (GPU), WMI",
      },
    ],
    howToHeading1: "How to",
    howToHeading2: "run.",
    quickStart: "Quick Start",
    steps: [
      "Download the latest .exe from GitHub Releases",
      "Run CodeWinOptimizer.exe as Administrator",
      "(Recommended) Create a restore point first",
      "Use any tab: install apps, apply tweaks, run fixes",
    ],
    prerequisites: "Prerequisites:",
    prerequisitesText:
      " Go 1.20+, Wails v2, Windows 10/11 with WebView2 runtime.",
    antivirusNotice: "Antivirus notice:",
    antivirusText:
      " This tool uses PowerShell, DISM, WMI, and registry commands. Some antivirus may flag the .exe as suspicious. All code is open source — ",
    reviewSource: "review the source",
    orBuild: " or build it yourself.",
  },
  faq: {
    heading1: "Frequently asked",
    heading2: "questions.",
    items: [
      {
        q: "What is CodeWinOptimizer and what does it do?",
        a: "CodeWinOptimizer is a free, open-source Windows optimizer and debloater for Windows 10 and 11. From a single portable .exe you can install or uninstall 181 apps via WinGet or Chocolatey, apply 140+ registry, privacy and performance tweaks, enable or disable Windows features, manage startup programs, clean junk files, monitor your PC with a health score, and create system restore points before any change.",
      },
      {
        q: "Is CodeWinOptimizer a WinUtil alternative?",
        a: "Yes. CodeWinOptimizer covers the same use cases as WinUtil — install apps, apply Windows tweaks, remove bloatware, fix Windows and manage updates — but as a portable Windows application with a modern GUI instead of a PowerShell script. It adds extras WinUtil does not include, like a reversible startup manager, a system monitor with a PC Health Score (0-100), disk cleanup and driver backup.",
      },
      {
        q: "Is CodeWinOptimizer free and open source?",
        a: 'Yes. CodeWinOptimizer is 100% free and open source on GitHub. There are no subscriptions, no trial limits, no accounts and no paid "pro" features. Everything the optimizer does is visible in the code, and it runs entirely on your machine.',
      },
      {
        q: "Is it safe? Does CodeWinOptimizer contain telemetry or ads?",
        a: "CodeWinOptimizer is local-first: it contains no telemetry, no analytics and no ads, and it never phones home. Every tweak shows the exact PowerShell or registry command before you apply it, changes are reversible, and the app recommends creating a system restore point and a full 5-hive registry backup first.",
      },
      {
        q: "Will CodeWinOptimizer speed up Windows or improve gaming performance?",
        a: "It targets exactly the things that slow Windows down: bloatware and preinstalled apps, telemetry and background services, startup programs, and network latency (Nagle, latency timers, TCP/IP). Presets like the Gaming profile disable resource-hungry features and prioritize foreground performance. Results depend on your hardware, but most users notice faster boot times and lower background CPU, RAM and disk usage.",
      },
      {
        q: "Which Windows versions are supported?",
        a: "Windows 10 and Windows 11 (64-bit) with the WebView2 runtime. The tool needs no installation: download the .exe from GitHub Releases, run it as Administrator, create a restore point, and you can use it from a USB drive on any machine.",
      },
    ],
  },
  footer: {
    website: "OscarDev",
    tagline:
      "Free, open-source Windows optimizer. Local-first, portable, and telemetry-free.",
    product: "Product",
    resources: "Resources",
    legal: "Legal",
    docs: "Documentation",
    guides: "Guides & Tutorials",
    about: "About the project",
    github: "GitHub",
    releases: "Releases",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    license: "MIT License",
    disclaimer:
      "CodeWinOptimizer is an independent open-source project and is not affiliated with, endorsed by, or sponsored by Microsoft Corporation. Windows is a trademark of Microsoft Corporation.",
  },
  lang: "English",
};

export default en;

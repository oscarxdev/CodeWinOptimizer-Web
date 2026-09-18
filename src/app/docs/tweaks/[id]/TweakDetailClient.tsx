"use client";

import { useLanguage } from "@/i18n";
import Link from "next/link";

type TweakEntry = {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  benefit: { en: string; es: string };
  impact: string;
  commands: string[];
  warnings: { en: string[]; es: string[] };
};

type TweakCategory = {
  id: string;
  name: { en: string; es: string };
  icon: string;
  tweaks: TweakEntry[];
};

type RelatedTweak = {
  id: string;
  name: { en: string; es: string };
};

interface Props {
  tweak: TweakEntry;
  category: TweakCategory;
  related: RelatedTweak[];
}

const impactColors: Record<string, string> = {
  high: "text-red-400 bg-red-400/10 border-red-400/20",
  medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  low: "text-neon bg-neon/10 border-neon/20",
};

function stripEmoji(text: string): string {
  return text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}‍️]+\s*/u, "");
}

const labels = {
  en: {
    back: "All Tweaks",
    benefit: "Benefit",
    impact: "Impact",
    commands: "Commands",
    commandsHint:
      "Run these commands in an elevated PowerShell window (Run as Administrator). This is exactly what CodeWinOptimizer executes for this tweak.",
    warnings: "Warnings",
    revertTitle: "How to revert this tweak",
    revertApp:
      "In CodeWinOptimizer: disable the tweak again — the app restores the original values it recorded when it was applied.",
    revertManual:
      "Manually: reverse the change — re-enable the service, delete the registry value you created, or restore the previous value shown when you ran the commands.",
    revertRestore:
      "With System Restore: press Win + R, run rstrui, and select the restore point that was created before the change.",
    faqTitle: "Frequently asked questions",
    faqRestartQ: "Do I need to restart?",
    faqRestartA:
      "Some changes apply immediately (many registry and network values). Others — services, GPU scheduling, power settings — only take full effect after signing out or restarting. If the change seems to have no effect, restart before troubleshooting.",
    faqUpdatesQ: "Will it survive Windows updates?",
    faqUpdatesA:
      "Most values persist, but major Windows feature updates can reset policies, services and scheduled tasks. After a big update, come back to this page and re-check the tweak — the app also shows the current state before applying anything.",
    faqRevertQ: "Is it reversible?",
    faqRevertHigh:
      "Yes, but this is a high-impact tweak: create a system restore point before applying it. You can revert it from CodeWinOptimizer (which records the original values), by restoring the previous values manually, or with System Restore.",
    faqRevertMedium:
      "Yes. It is a medium-impact change: keep a restore point around before applying it, and revert it from the app or with System Restore if anything feels off.",
    faqRevertLow:
      "Yes. It is a low-impact, easily reversible change: disable it in the app or restore the original value shown when you ran the commands.",
    faqManualQ: "Can I apply it manually?",
    faqManualA:
      "Yes — every command listed above is exactly what the app runs. Open PowerShell as Administrator and run them one at a time, checking the output. For a guided flow with a restore point and one-click revert, use the app.",
    related: "Related tweaks",
  },
  es: {
    back: "Todos los Ajustes",
    benefit: "Beneficio",
    impact: "Impacto",
    commands: "Comandos",
    commandsHint:
      "Ejecuta estos comandos en una ventana de PowerShell elevada (Ejecutar como Administrador). Es exactamente lo que CodeWinOptimizer ejecuta para este ajuste.",
    warnings: "Advertencias",
    revertTitle: "Cómo revertir este ajuste",
    revertApp:
      "En CodeWinOptimizer: desactiva el tweak de nuevo — la app restaura los valores originales que registró al aplicarlo.",
    revertManual:
      "Manualmente: invierte el cambio — vuelve a habilitar el servicio, elimina el valor del registro que creaste o restaura el valor anterior que mostró el comando.",
    revertRestore:
      "Con Restaurar sistema: pulsa Win + R, ejecuta rstrui y selecciona el punto de restauración creado antes del cambio.",
    faqTitle: "Preguntas frecuentes",
    faqRestartQ: "¿Necesito reiniciar?",
    faqRestartA:
      "Algunos cambios se aplican al instante (muchos valores del registro y de red). Otros — servicios, programación de GPU, energía — solo surten efecto completo tras cerrar sesión o reiniciar. Si el cambio parece no hacer nada, reinicia antes de diagnosticar.",
    faqUpdatesQ: "¿Sobrevivirá a las actualizaciones de Windows?",
    faqUpdatesA:
      "La mayoría de valores persisten, pero las actualizaciones de características importantes pueden restablecer directivas, servicios y tareas programadas. Tras una actualización grande, vuelve a esta página y comprueba de nuevo el tweak — la app también muestra el estado actual antes de aplicar nada.",
    faqRevertQ: "¿Es reversible?",
    faqRevertHigh:
      "Sí, pero es un tweak de impacto alto: crea un punto de restauración antes de aplicarlo. Puedes revertirlo desde CodeWinOptimizer (que registra los valores originales), restaurando los valores anteriores a mano o con Restaurar sistema.",
    faqRevertMedium:
      "Sí. Es un cambio de impacto medio: mantén un punto de restauración antes de aplicarlo y revíértelo desde la app o con Restaurar sistema si algo no funciona bien.",
    faqRevertLow:
      "Sí. Es un cambio de impacto bajo y fácil de revertir: desactívalo en la app o restaura el valor original que mostró el comando.",
    faqManualQ: "¿Puedo aplicarlo manualmente?",
    faqManualA:
      "Sí — cada comando de arriba es exactamente lo que ejecuta la app. Abre PowerShell como Administrador y ejecútalos de uno en uno, revisando la salida. Para un flujo guiado con punto de restauración y reversión a un clic, usa la app.",
    related: "Ajustes relacionados",
  },
};

export default function TweakDetailClient({ tweak, category, related }: Props) {
  const { locale } = useLanguage();
  const l = labels[locale as keyof typeof labels] || labels.en;

  const faq = [
    { q: l.faqRestartQ, a: l.faqRestartA },
    { q: l.faqUpdatesQ, a: l.faqUpdatesA },
    {
      q: l.faqRevertQ,
      a:
        tweak.impact === "high"
          ? l.faqRevertHigh
          : tweak.impact === "medium"
            ? l.faqRevertMedium
            : l.faqRevertLow,
    },
    { q: l.faqManualQ, a: l.faqManualA },
  ];

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/docs/tweaks"
          className="text-xs text-text-muted hover:text-neon transition-colors"
        >
          &larr; <span className="hover:underline">{l.back}</span>
        </Link>
        <p className="text-xs text-text-muted mt-1">
          {category.name[locale as "en" | "es"]}
        </p>
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-2">
        {stripEmoji(tweak.name[locale as "en" | "es"])}
      </h1>
      <p className="text-sm text-text-muted mb-6 leading-relaxed">
        {tweak.description[locale as "en" | "es"]}
      </p>

      <div className="grid gap-6">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.benefit}
          </h2>
          <p className="text-sm text-neon">
            {tweak.benefit[locale as "en" | "es"]}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.impact}
          </h2>
          <span
            className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase ${impactColors[tweak.impact] || impactColors.low}`}
          >
            {tweak.impact}
          </span>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.commands} ({tweak.commands.length})
          </h2>
          <p className="mb-3 text-xs text-text-muted leading-relaxed">
            {l.commandsHint}
          </p>
          <div className="space-y-2">
            {tweak.commands.map((cmd, i) => (
              <pre
                key={i}
                className="rounded-lg border border-border bg-bg-dark p-3 text-xs font-mono text-text-muted overflow-x-auto"
              >
                {cmd}
              </pre>
            ))}
          </div>
        </div>

        {tweak.warnings[locale as "en" | "es"]?.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              {l.warnings}
            </h2>
            <ul className="space-y-2">
              {tweak.warnings[locale as "en" | "es"].map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-red-300/80 rounded-lg border border-red-400/10 bg-red-400/5 p-3"
                >
                  <svg className="mt-0.5 shrink-0" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.revertTitle}
          </h2>
          <ul className="space-y-2 text-sm text-text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-neon">•</span>
              <span>{l.revertApp}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-neon">•</span>
              <span>{l.revertManual}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-neon">•</span>
              <span>{l.revertRestore}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.faqTitle}
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-semibold text-white">{item.q}</h3>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              {l.related}
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/docs/tweaks/${r.id}`}
                  className="rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs text-text-muted transition-all hover:border-neon/40 hover:text-neon"
                >
                  {stripEmoji(r.name[locale as "en" | "es"])}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import RichText, { type RichBlock } from "@/components/RichText";
import { useLanguage } from "@/i18n";

const contactEmail = "contacto@codewinoptimizer.com";

const content: Record<
  "en" | "es",
  { title: string; updated: string; blocks: RichBlock[] }
> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 18, 2026",
    blocks: [
      {
        type: "p",
        text: 'CodeWinOptimizer is an independent, open-source project ("we", "us"). We maintain this website at codewinoptimizer.com and the CodeWinOptimizer desktop application. This policy explains what data the website and the app do — and do not — collect, and the choices you have.',
      },
      { type: "h2", text: "The short version" },
      {
        type: "ul",
        items: [
          "You can browse this entire website without creating an account.",
          "We do not run our own analytics, tracking pixels, or fingerprinting scripts.",
          "The only thing the site stores in your browser is your language preference (English or Spanish), kept in localStorage.",
          "This site displays ads through Google AdSense. Google and its partners may use cookies to show personalized or non-personalized ads, depending on your region and consent.",
          "The CodeWinOptimizer desktop app runs entirely on your PC. It does not send usage data, statistics, or telemetry to us.",
        ],
      },
      { type: "h2", text: "Data you provide to us" },
      {
        type: "p",
        text: `If you contact us by email — for example to report a bug, ask a question, or make a privacy request — we receive your email address and the content of your message. We use it only to reply and to keep track of support conversations. We do not add you to newsletters and we do not sell or share your address with third parties.`,
      },
      { type: "h2", text: "Data stored in your browser" },
      {
        type: "p",
        text: "The website stores a single preference in your browser's localStorage: cwo-locale, which remembers whether you chose English or Spanish. This value never leaves your device and is never sent to our servers. The site itself does not set any first-party tracking cookies.",
      },
      { type: "h2", text: "Server logs" },
      {
        type: "p",
        text: "Like almost all websites, our hosting provider may automatically record basic technical information in server logs — such as IP address, browser type, referring page, and pages visited — for security, abuse prevention, and diagnostics. These logs are rotated regularly and are not used to identify individual visitors.",
      },
      { type: "h2", text: "Advertising: Google AdSense" },
      {
        type: "p",
        text: "This website is supported by advertising delivered through Google AdSense. When ads are shown, Google and its certified partners may use cookies (including Google's advertising cookies), device identifiers, and similar technologies to measure ad performance and — where you have given consent, or where permitted by law — to personalize the ads you see.",
      },
      {
        type: "ul",
        items: [
          "Where required (for example in the EEA, the UK, and Switzerland), a consent message is shown before personalized advertising cookies are used. You can change or withdraw your choice at any time.",
          "You can opt out of personalized advertising on Google at any time.",
        ],
      },
      {
        type: "link",
        text: "Google Ad Settings — opt out of personalized advertising",
        href: "https://adssettings.google.com",
        external: true,
      },
      {
        type: "link",
        text: "aboutads.info — opt out of many third-party advertising cookies",
        href: "https://www.aboutads.info/choices",
        external: true,
      },
      {
        type: "link",
        text: "How Google uses information from sites or apps that use its services",
        href: "https://policies.google.com/technologies/partner-sites",
        external: true,
      },
      { type: "h2", text: "Cookies" },
      {
        type: "p",
        text: "The website does not set first-party cookies: your language preference is stored in localStorage, not in a cookie. Cookies may be set by third-party advertising (Google AdSense and its partners) as described above, and by our hosting provider strictly for security purposes. You can block or delete cookies at any time in your browser settings — the website will keep working normally.",
      },
      { type: "h2", text: "Third-party services" },
      {
        type: "ul",
        items: [
          "Google AdSense — advertising. See Google's Privacy Policy and the partner sites page linked above.",
          "GitHub — hosts the application's source code, releases, and issue tracker. GitHub's privacy statement applies to your use of those services.",
          "Our hosting provider — serves this website and processes the technical logs described above on our behalf.",
        ],
      },
      { type: "h2", text: "How we use data, and legal bases" },
      {
        type: "p",
        text: "When you email us, we process your message in order to answer you (based on your consent and our legitimate interest in supporting users). Server logs are processed under our legitimate interest in keeping the site secure and available. Personalized advertising, where applicable, is based on your consent.",
      },
      { type: "h2", text: "Your rights" },
      {
        type: "p",
        text: `Depending on where you live, you may have the right to access, correct, delete, or restrict the processing of your personal data, to object to processing, and to withdraw consent at any time. To exercise these rights, email us at ${contactEmail}. EU/EEA residents can also lodge a complaint with their local data protection authority. California residents: we do not sell personal information as defined by the CCPA.`,
      },
      { type: "h2", text: "Data retention" },
      {
        type: "p",
        text: "Emails you send us are kept only as long as needed to handle the conversation, and are deleted on request. Server logs are kept for a short, rotating period.",
      },
      { type: "h2", text: "Children" },
      {
        type: "p",
        text: "This website and app are not directed at children under 13, and we do not knowingly collect personal data from them. If you believe a child has sent us personal data, contact us and we will delete it.",
      },
      { type: "h2", text: "Changes to this policy" },
      {
        type: "p",
        text: "If we update this policy we will change the date at the top of this page. Significant changes will be highlighted on this page. Continued use of the site after changes means you accept the updated policy.",
      },
      { type: "h2", text: "Contact" },
      {
        type: "p",
        text: `Questions about this policy, or requests about your data: ${contactEmail}.`,
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 18 de septiembre de 2026",
    blocks: [
      {
        type: "p",
        text: 'CodeWinOptimizer es un proyecto independiente de código abierto ("nosotros"). Mantenemos este sitio web en codewinoptimizer.com y la aplicación de escritorio CodeWinOptimizer. Esta política explica qué datos recopilan — y cuáles no — el sitio y la aplicación, y qué opciones tienes.',
      },
      { type: "h2", text: "Resumen rápido" },
      {
        type: "ul",
        items: [
          "Puedes navegar por todo el sitio sin crear ninguna cuenta.",
          "No ejecutamos analíticas propias, píxeles de seguimiento ni scripts de fingerprinting.",
          "Lo único que guarda el sitio en tu navegador es tu preferencia de idioma (inglés o español), almacenada en localStorage.",
          "Este sitio muestra anuncios a través de Google AdSense. Google y sus socios pueden usar cookies para mostrar anuncios personalizados o no personalizados, según tu región y tu consentimiento.",
          "La aplicación de escritorio CodeWinOptimizer se ejecuta íntegramente en tu PC. No nos envía datos de uso, estadísticas ni telemetría.",
        ],
      },
      { type: "h2", text: "Datos que nos proporcionas" },
      {
        type: "p",
        text: "Si nos contactas por email — por ejemplo, para reportar un error, hacer una pregunta o ejercer un derecho de privacidad — recibimos tu dirección de correo y el contenido de tu mensaje. Solo los usamos para responderte y llevar un seguimiento de las conversaciones de soporte. No te suscribimos a boletines ni compartimos tu dirección con terceros.",
      },
      { type: "h2", text: "Datos almacenados en tu navegador" },
      {
        type: "p",
        text: "El sitio guarda una única preferencia en el localStorage de tu navegador: cwo-locale, que recuerda si elegiste inglés o español. Este valor nunca sale de tu dispositivo ni se envía a nuestros servidores. El sitio no establece cookies de seguimiento propias.",
      },
      { type: "h2", text: "Registros del servidor" },
      {
        type: "p",
        text: "Como en casi todos los sitios web, nuestro proveedor de alojamiento puede registrar automáticamente información técnica básica en los logs del servidor — como dirección IP, tipo de navegador, página de referencia y páginas visitadas — por seguridad, prevención de abusos y diagnóstico. Estos registros se rotan periódicamente y no se usan para identificar a visitantes concretos.",
      },
      { type: "h2", text: "Publicidad: Google AdSense" },
      {
        type: "p",
        text: "Este sitio se sostiene gracias a la publicidad servida por Google AdSense. Cuando se muestran anuncios, Google y sus socios certificados pueden usar cookies (incluidas las cookies publicitarias de Google), identificadores de dispositivo y tecnologías similares para medir el rendimiento de los anuncios y — cuando has dado tu consentimiento o la ley lo permite — para personalizar los anuncios que ves.",
      },
      {
        type: "ul",
        items: [
          "Cuando es obligatorio (por ejemplo, en el EEE, el Reino Unido y Suiza), se muestra un mensaje de consentimiento antes de usar cookies de publicidad personalizada. Puedes cambiar o retirar tu elección en cualquier momento.",
          "Puedes desactivar la publicidad personalizada de Google en cualquier momento.",
        ],
      },
      {
        type: "link",
        text: "Configuración de anuncios de Google — desactivar la publicidad personalizada",
        href: "https://adssettings.google.com",
        external: true,
      },
      {
        type: "link",
        text: "aboutads.info — rechazar las cookies de muchos anunciantes externos",
        href: "https://www.aboutads.info/choices",
        external: true,
      },
      {
        type: "link",
        text: "Cómo usa Google la información de sitios o apps que utilizan sus servicios",
        href: "https://policies.google.com/technologies/partner-sites",
        external: true,
      },
      { type: "h2", text: "Cookies" },
      {
        type: "p",
        text: "El sitio no establece cookies propias: tu preferencia de idioma se guarda en localStorage, no en una cookie. Puede haber cookies de terceros por la publicidad (Google AdSense y sus socios), como se describe arriba, y de nuestro proveedor de alojamiento estrictamente por seguridad. Puedes bloquear o eliminar cookies en cualquier momento desde la configuración de tu navegador — el sitio seguirá funcionando con normalidad.",
      },
      { type: "h2", text: "Servicios de terceros" },
      {
        type: "ul",
        items: [
          "Google AdSense — publicidad. Consulta la Política de Privacidad de Google y la página de socios enlazada arriba.",
          "GitHub — aloja el código fuente, las descargas y el sistema de issues de la aplicación. Se aplica la declaración de privacidad de GitHub.",
          "Nuestro proveedor de alojamiento — sirve este sitio y procesa los registros técnicos descritos arriba por cuenta nuestra.",
        ],
      },
      { type: "h2", text: "Cómo usamos los datos y bases legales" },
      {
        type: "p",
        text: "Cuando nos escribes, procesamos tu mensaje para poder responderte (con base en tu consentimiento y nuestro interés legítimo en dar soporte). Los registros del servidor se procesan por nuestro interés legítimo en mantener el sitio seguro y disponible. La publicidad personalizada, cuando aplica, se basa en tu consentimiento.",
      },
      { type: "h2", text: "Tus derechos" },
      {
        type: "p",
        text: `Según dónde vivas, puedes tener derecho a acceder, corregir, eliminar o limitar el tratamiento de tus datos personales, a oponerte al mismo y a retirar tu consentimiento en cualquier momento. Para ejercerlos, escríbenos a ${contactEmail}. Los residentes en la UE/EEE también pueden presentar una reclamación ante su autoridad de protección de datos. Residentes en California: no vendemos información personal según la definición de la CCPA.`,
      },
      { type: "h2", text: "Conservación de datos" },
      {
        type: "p",
        text: "Los emails que nos envías se conservan solo el tiempo necesario para gestionar la conversación y se eliminan si lo solicitas. Los registros del servidor se conservan durante un periodo breve y rotativo.",
      },
      { type: "h2", text: "Menores" },
      {
        type: "p",
        text: "Este sitio y la aplicación no están dirigidos a menores de 13 años, y no recopilamos conscientemente datos personales de ellos. Si crees que un menor nos ha enviado datos personales, contáctanos y los eliminaremos.",
      },
      { type: "h2", text: "Cambios en esta política" },
      {
        type: "p",
        text: "Si actualizamos esta política, cambiaremos la fecha que aparece al principio de la página. Los cambios importantes se destacarán en esta misma página. Seguir usando el sitio tras los cambios implica que aceptas la política actualizada.",
      },
      { type: "h2", text: "Contacto" },
      {
        type: "p",
        text: `Preguntas sobre esta política o solicitudes sobre tus datos: ${contactEmail}.`,
      },
    ],
  },
};

export default function PrivacyContent() {
  const { locale } = useLanguage();
  const c = content[locale as "en" | "es"] || content.en;

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">
        {c.title}
      </h1>
      <p className="text-xs text-text-muted mb-8">{c.updated}</p>
      <RichText blocks={c.blocks} />
    </>
  );
}

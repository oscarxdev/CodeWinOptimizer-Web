"use client";

import RichText, { type RichBlock } from "@/components/RichText";
import { useLanguage } from "@/i18n";

const contactEmail = "contacto@codewinoptimizer.com";

const content: Record<
  "en" | "es",
  { title: string; updated: string; blocks: RichBlock[] }
> = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: September 18, 2026",
    blocks: [
      {
        type: "p",
        text: "These Terms of Use govern your access to and use of the CodeWinOptimizer website (codewinoptimizer.com). By using the site, you agree to these terms. If you do not agree with them, please do not use the site.",
      },
      { type: "h2", text: "1. What this website is" },
      {
        type: "p",
        text: "This website provides information, documentation, and guides about CodeWinOptimizer, a free and open-source Windows optimization application. The application itself is downloaded from GitHub Releases — this site does not sell software, services, or subscriptions.",
      },
      { type: "h2", text: "2. License of the application" },
      {
        type: "p",
        text: "CodeWinOptimizer is free software released under the MIT License. Your use of the application is governed by that license. The content of this website (documentation and guides) is provided for informational purposes only and does not modify or extend the MIT License.",
      },
      {
        type: "link",
        text: "Read the MIT License on GitHub",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/blob/main/LICENSE",
        external: true,
      },
      { type: "h2", text: "3. System changes are your responsibility" },
      {
        type: "warn",
        text: "The application and the guides on this site can modify Windows settings, services, scheduled tasks, and the registry. Always create a system restore point before applying tweaks, and read the warnings shown for each tweak.",
      },
      {
        type: "p",
        text: "You apply any tweak, cleanup task, or system change at your own initiative and at your own risk. Make sure you keep backups of important data. The documentation describes what each action does, but every computer is different and results can vary.",
      },
      { type: "h2", text: "4. Acceptable use" },
      {
        type: "ul",
        items: [
          "Do not use the site in any way that is unlawful or that infringes the rights of others.",
          "Do not attempt to disrupt, overload, or gain unauthorized access to the site or its infrastructure.",
          "Do not scrape the site at rates that degrade service for other visitors.",
          "Do not misrepresent your affiliation with CodeWinOptimizer or imply that we endorse you or your product.",
        ],
      },
      { type: "h2", text: "5. Third-party links and advertising" },
      {
        type: "p",
        text: "The site contains links to third-party websites (for example, GitHub or project pages of apps listed in the documentation). We are not responsible for the content or practices of those sites. Advertising on this site is served by Google AdSense: ads are not selected or endorsed by us, and we do not control which specific ads are displayed.",
      },
      { type: "h2", text: "6. Intellectual property and trademarks" },
      {
        type: "p",
        text: "The site's original content (text, documentation, and design) is © OscarDev unless stated otherwise. CodeWinOptimizer's source code is licensed under the MIT License. Microsoft, Windows, and related marks are trademarks of Microsoft Corporation. CodeWinOptimizer is an independent project and is not affiliated with, endorsed by, or sponsored by Microsoft.",
      },
      { type: "h2", text: "7. Disclaimer of warranties" },
      {
        type: "p",
        text: 'The website and its content are provided "as is" and "as available", without warranties of any kind, express or implied, including — to the maximum extent permitted by law — implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted or error-free, or that its information is complete or up to date.',
      },
      { type: "h2", text: "8. Limitation of liability" },
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, or system stability, arising from your use of the site or of the application, even if advised of the possibility of such damages. Nothing in these terms limits liability that cannot be limited by law.",
      },
      { type: "h2", text: "9. Changes to these terms" },
      {
        type: "p",
        text: "We may update these terms from time to time; the date at the top of this page will change accordingly. Continued use of the site after changes means you accept the revised terms.",
      },
      { type: "h2", text: "10. Governing law and contact" },
      {
        type: "p",
        text: `These terms are governed by the laws applicable at the operator's principal place of business, without prejudice to any mandatory consumer protection rules that apply in your country of residence. Questions about these terms: ${contactEmail}.`,
      },
    ],
  },
  es: {
    title: "Términos de Uso",
    updated: "Última actualización: 18 de septiembre de 2026",
    blocks: [
      {
        type: "p",
        text: "Estos Términos de Uso regulan tu acceso y uso del sitio web CodeWinOptimizer (codewinoptimizer.com). Al usar el sitio, aceptas estos términos. Si no estás de acuerdo con ellos, no utilices el sitio.",
      },
      { type: "h2", text: "1. Qué es este sitio web" },
      {
        type: "p",
        text: "Este sitio ofrece información, documentación y guías sobre CodeWinOptimizer, una aplicación de optimización de Windows gratuita y de código abierto. La aplicación se descarga desde GitHub Releases — este sitio no vende software, servicios ni suscripciones.",
      },
      { type: "h2", text: "2. Licencia de la aplicación" },
      {
        type: "p",
        text: "CodeWinOptimizer es software libre publicado bajo la Licencia MIT. El uso de la aplicación se rige por esa licencia. El contenido de este sitio (documentación y guías) tiene carácter informativo y no modifica ni amplía la Licencia MIT.",
      },
      {
        type: "link",
        text: "Leer la Licencia MIT en GitHub",
        href: "https://github.com/oscarxdev/CodeWinOptimizer-App/blob/main/LICENSE",
        external: true,
      },
      { type: "h2", text: "3. Los cambios en el sistema son tu responsabilidad" },
      {
        type: "warn",
        text: "La aplicación y las guías de este sitio pueden modificar ajustes de Windows, servicios, tareas programadas y el registro. Crea siempre un punto de restauración antes de aplicar tweaks y lee las advertencias de cada uno.",
      },
      {
        type: "p",
        text: "Aplicas cada tweak, tarea de limpieza o cambio del sistema por tu propia iniciativa y bajo tu propio riesgo. Asegúrate de tener copias de seguridad de los datos importantes. La documentación describe lo que hace cada acción, pero cada equipo es distinto y los resultados pueden variar.",
      },
      { type: "h2", text: "4. Uso aceptable" },
      {
        type: "ul",
        items: [
          "No uses el sitio de forma ilegal ni que vulnere los derechos de terceros.",
          "No intentes interrumpir, sobrecargar ni acceder sin autorización al sitio o a su infraestructura.",
          "No hagas scraping a un ritmo que degrade el servicio para otros visitantes.",
          "No tergiverses tu relación con CodeWinOptimizer ni sugieras que te respaldamos a ti o a tu producto.",
        ],
      },
      { type: "h2", text: "5. Enlaces de terceros y publicidad" },
      {
        type: "p",
        text: "El sitio contiene enlaces a webs de terceros (por ejemplo, GitHub o páginas de proyecto de las apps listadas en la documentación). No somos responsables del contenido ni de las prácticas de esos sitios. La publicidad de este sitio la sirve Google AdSense: los anuncios no son seleccionados ni respaldados por nosotros y no controlamos qué anuncios concretos se muestran.",
      },
      { type: "h2", text: "6. Propiedad intelectual y marcas" },
      {
        type: "p",
        text: "El contenido original del sitio (textos, documentación y diseño) es © OscarDev salvo que se indique lo contrario. El código fuente de CodeWinOptimizer está publicado bajo la Licencia MIT. Microsoft, Windows y sus marcas relacionadas son propiedad de Microsoft Corporation. CodeWinOptimizer es un proyecto independiente y no está afiliado, respaldado ni patrocinado por Microsoft.",
      },
      { type: "h2", text: "7. Exención de garantías" },
      {
        type: "p",
        text: 'El sitio y su contenido se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas, incluidas — en la máxima medida permitida por la ley — las garantías implícitas de comerciabilidad, idoneidad para un fin concreto y no infracción. No garantizamos que el sitio esté libre de interrupciones o errores, ni que su información esté completa o actualizada.',
      },
      { type: "h2", text: "8. Limitación de responsabilidad" },
      {
        type: "p",
        text: "En la máxima medida permitida por la ley aplicable, no seremos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de pérdidas de datos, beneficios o estabilidad del sistema, derivados del uso del sitio o de la aplicación, incluso si se nos hubiera advertido de esa posibilidad. Nada en estos términos limita la responsabilidad que no pueda limitarse legalmente.",
      },
      { type: "h2", text: "9. Cambios en estos términos" },
      {
        type: "p",
        text: "Podemos actualizar estos términos ocasionalmente; la fecha que figura al principio de la página cambiará en consecuencia. Seguir usando el sitio tras los cambios implica que aceptas los términos revisados.",
      },
      { type: "h2", text: "10. Ley aplicable y contacto" },
      {
        type: "p",
        text: `Estos términos se rigen por las leyes aplicables en el lugar principal de actividad del operador, sin perjuicio de las normas imperativas de protección de consumidores que apliquen en tu país de residencia. Preguntas sobre estos términos: ${contactEmail}.`,
      },
    ],
  },
};

export default function TermsContent() {
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

// Content for the site-wide Privacy Policy page (/[lang]/privacidad |
// datenschutz | privacy-policy). Unlike littleEyes.ts, this page IS public
// and indexable (standard practice for a legal page) — see
// src/pages/{es,de,en}/privacidad.astro (etc.) and
// src/components/PrivacyPolicyContent.astro. Linked from the Little Eyes
// consent form and from the site footer, since the general contact form
// also collects personal data and previously had no privacy policy linked
// anywhere.
//
// NOTE: this is a template drafted to cover the data this site actually
// collects today (the contact form, WhatsApp, and the Little Eyes image
// consent form) — it is not a substitute for review by a lawyer or GDPR
// consultant, especially given it covers data about minors.

import type { Lang } from './routes';

export const PRIVACY_POLICY_LAST_UPDATED: Record<Lang, string> = {
  es: '2 de octubre de 2026',
  en: '2 October 2026',
  de: '2. Oktober 2026',
};

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyPolicyText {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  controllerHeading: string;
  controllerParagraph: string;
  sections: PrivacySection[];
  backHome: string;
}

export const PRIVACY_POLICY_TEXT: Record<Lang, PrivacyPolicyText> = {
  es: {
    metaTitle: 'Política de privacidad | Lupo',
    metaDescription: 'Qué datos personales recojo a través de esta web, para qué los uso y qué derechos tienes.',
    h1: 'Política de privacidad',
    intro:
      'Esta página explica qué datos personales recojo a través de esta web, para qué los uso y qué derechos tienes.',
    controllerHeading: '¿Quién es el responsable del tratamiento?',
    controllerParagraph: 'Javier Cordero Pariente (Lupo Photography), DNI 61561896G, Deià, Mallorca (Illes Balears), España.',
    sections: [
      {
        heading: '¿Qué datos recojo y para qué?',
        paragraphs: [
          'Formulario de contacto: cuando escribes a través del formulario de contacto o del botón de WhatsApp, recojo tu nombre, email y el mensaje que me envíes, para poder responder a tu consulta sobre sesiones de fotografía o vídeo.',
          'Little Eyes — consentimiento de imagen: si tu hijo/a participa en el taller Little Eyes, recojo el nombre del niño/a y tu respuesta a las casillas de consentimiento del formulario (uso de imágenes, grupo de WhatsApp del taller, nombre en la etiqueta de la foto), junto con el idioma, la fecha y hora del envío y la versión del texto de consentimiento que aceptaste. Esto me permite acreditar que diste tu permiso y en qué condiciones.',
        ],
      },
      {
        heading: '¿Con qué base legal?',
        paragraphs: [
          'Tu consentimiento (artículo 6.1.a del RGPD). Puedes retirarlo en cualquier momento escribiéndome, sin que eso afecte a la licitud del tratamiento hecho antes de la retirada.',
        ],
      },
      {
        heading: '¿Con quién comparto tus datos?',
        paragraphs: [
          'Los formularios de esta web se envían a través de Formspree, un proveedor de formularios que actúa como encargado del tratamiento y que puede procesar los datos fuera del Espacio Económico Europeo. No vendo, alquilo ni cedo tus datos a terceros con fines comerciales.',
          'Las imágenes de Little Eyes nunca se publican en internet, redes sociales o mi web, ni se suben a herramientas de inteligencia artificial — se usan solo en la pantalla de clase, en las exposiciones del colegio y para las familias, como se explica en el propio formulario de consentimiento.',
        ],
      },
      {
        heading: '¿Cuánto tiempo conservo tus datos?',
        paragraphs: [
          'Los mensajes del formulario de contacto, el tiempo necesario para responder tu consulta y gestionar la sesión contratada. Las imágenes y el consentimiento de Little Eyes, hasta que termine el curso (junio de 2027), momento en el que se eliminan. Puedes pedir que borre tus datos antes, en cualquier momento.',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: [
          'Tienes derecho a acceder a tus datos, rectificarlos, solicitar su supresión, limitar u oponerte a su tratamiento, y pedir la portabilidad de los que me hayas facilitado. Para ejercerlos, escríbeme.',
        ],
      },
      {
        heading: '¿Dónde puedes reclamar?',
        paragraphs: [
          'Si consideras que no he tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).',
        ],
      },
      {
        heading: 'Cookies y analítica',
        paragraphs: [
          'Esta web no usa cookies de seguimiento ni herramientas de analítica en este momento. Si eso cambia en el futuro, actualizaré esta página.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        paragraphs: [
          'Puedo actualizar esta política si cambian los servicios de la web. La fecha de la última actualización aparece al principio de esta página.',
        ],
      },
    ],
    backHome: 'Volver al inicio',
  },
  en: {
    metaTitle: 'Privacy Policy | Lupo',
    metaDescription: 'What personal data I collect through this website, what I use it for, and what rights you have.',
    h1: 'Privacy Policy',
    intro: 'This page explains what personal data I collect through this website, what I use it for, and what rights you have.',
    controllerHeading: 'Who is the controller?',
    controllerParagraph: 'Javier Cordero Pariente (Lupo Photography), DNI 61561896G, Deià, Mallorca (Balearic Islands), Spain.',
    sections: [
      {
        heading: 'What data do I collect, and why?',
        paragraphs: [
          "Contact form: when you write through the contact form or the WhatsApp button, I collect your name, email and the message you send, so I can reply to your enquiry about a photography or video session.",
          "Little Eyes — image consent: if your child takes part in the Little Eyes workshop, I collect the child's name and your answer to the consent checkboxes in the form (use of images, the course WhatsApp group, first name on the photo label), along with the language, the date and time you submitted it, and the version of the consent text you agreed to. This lets me show that you gave permission, and under what conditions.",
        ],
      },
      {
        heading: "What's the legal basis?",
        paragraphs: [
          'Your consent (Article 6.1.a GDPR). You can withdraw it at any time by writing to me, without affecting the lawfulness of processing carried out before the withdrawal.',
        ],
      },
      {
        heading: 'Who do I share your data with?',
        paragraphs: [
          "Forms on this website are sent through Formspree, a form-processing provider that acts as a data processor and may process data outside the European Economic Area. I don't sell, rent or share your data with third parties for commercial purposes.",
          "Little Eyes images are never published online, on social media or on my website, and are never uploaded to artificial intelligence tools — they're only used on the classroom screen, at the school exhibitions and for the families, as explained in the consent form itself.",
        ],
      },
      {
        heading: 'How long do I keep your data?',
        paragraphs: [
          "Contact-form messages, for as long as needed to answer your enquiry and manage the session you booked. Little Eyes images and consent, until the course ends (June 2027), when they're deleted. You can ask me to delete your data sooner, at any time.",
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          "You have the right to access your data, correct it, request its deletion, restrict or object to its processing, and request portability of what you've given me. To exercise these rights, write to me.",
        ],
      },
      {
        heading: 'Where can you complain?',
        paragraphs: [
          "If you believe I haven't handled your data correctly, you can file a complaint with the Spanish Data Protection Agency (aepd.es) or your own country's data protection authority.",
        ],
      },
      {
        heading: 'Cookies and analytics',
        paragraphs: [
          "This website doesn't currently use tracking cookies or analytics tools. If that changes, I'll update this page.",
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          "I may update this policy if the website's services change. The date of the last update appears at the top of this page.",
        ],
      },
    ],
    backHome: 'Back to home',
  },
  de: {
    metaTitle: 'Datenschutzerklärung | Lupo',
    metaDescription: 'Welche personenbezogenen Daten ich über diese Website erhebe, wofür ich sie verwende und welche Rechte du hast.',
    h1: 'Datenschutzerklärung',
    intro:
      'Diese Seite erklärt, welche personenbezogenen Daten ich über diese Website erhebe, wofür ich sie verwende und welche Rechte du hast.',
    controllerHeading: 'Wer ist verantwortlich?',
    controllerParagraph: 'Javier Cordero Pariente (Lupo Photography), DNI 61561896G, Deià, Mallorca (Balearen), Spanien.',
    sections: [
      {
        heading: 'Welche Daten erhebe ich und wofür?',
        paragraphs: [
          'Kontaktformular: Wenn du über das Kontaktformular oder den WhatsApp-Button schreibst, erhebe ich deinen Namen, deine E-Mail-Adresse und die Nachricht, die du mir schickst, um auf deine Anfrage zu einer Foto- oder Videosession antworten zu können.',
          'Little Eyes — Einwilligung zur Bildnutzung: Wenn dein Kind am Little-Eyes-Kurs teilnimmt, erhebe ich den Namen des Kindes und deine Antwort auf die Einwilligungs-Kästchen im Formular (Nutzung der Bilder, WhatsApp-Gruppe des Kurses, Vorname auf dem Bildschild), zusammen mit der Sprache, dem Zeitpunkt deiner Einwilligung und der Version des Einwilligungstexts, dem du zugestimmt hast. So kann ich nachweisen, dass du deine Zustimmung gegeben hast und unter welchen Bedingungen.',
        ],
      },
      {
        heading: 'Auf welcher Rechtsgrundlage?',
        paragraphs: [
          'Deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst sie jederzeit widerrufen, indem du mir schreibst, ohne dass dies die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt.',
        ],
      },
      {
        heading: 'Mit wem teile ich deine Daten?',
        paragraphs: [
          'Die Formulare dieser Website werden über Formspree versendet, einen Formular-Dienstleister, der als Auftragsverarbeiter fungiert und Daten möglicherweise außerhalb des Europäischen Wirtschaftsraums verarbeitet. Ich verkaufe, vermiete oder gebe deine Daten nicht zu kommerziellen Zwecken an Dritte weiter.',
          'Little-Eyes-Bilder werden niemals im Internet, in sozialen Netzwerken oder auf meiner Website veröffentlicht und niemals in KI-Werkzeuge hochgeladen — sie werden nur auf dem Bildschirm im Kursraum, bei den Schulausstellungen und für die Familien verwendet, wie im Einwilligungsformular selbst beschrieben.',
        ],
      },
      {
        heading: 'Wie lange speichere ich deine Daten?',
        paragraphs: [
          'Nachrichten aus dem Kontaktformular, so lange wie nötig, um deine Anfrage zu beantworten und die gebuchte Session abzuwickeln. Little-Eyes-Bilder und die Einwilligung, bis der Kurs endet (Juni 2027), danach werden sie gelöscht. Du kannst jederzeit um eine frühere Löschung deiner Daten bitten.',
        ],
      },
      {
        heading: 'Deine Rechte',
        paragraphs: [
          'Du hast das Recht auf Auskunft über deine Daten, Berichtigung, Löschung, Einschränkung oder Widerspruch gegen die Verarbeitung sowie auf Übertragbarkeit der Daten, die du mir gegeben hast. Um diese Rechte auszuüben, schreib mir.',
        ],
      },
      {
        heading: 'Wo kannst du dich beschweren?',
        paragraphs: [
          'Wenn du der Meinung bist, dass ich deine Daten nicht korrekt behandelt habe, kannst du dich bei der spanischen Datenschutzbehörde (aepd.es) oder der Datenschutzbehörde deines eigenen Landes beschweren.',
        ],
      },
      {
        heading: 'Cookies und Analyse-Tools',
        paragraphs: [
          'Diese Website verwendet derzeit keine Tracking-Cookies oder Analyse-Tools. Sollte sich das ändern, aktualisiere ich diese Seite.',
        ],
      },
      {
        heading: 'Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Ich kann diese Datenschutzerklärung aktualisieren, wenn sich die Dienste der Website ändern. Das Datum der letzten Aktualisierung steht oben auf dieser Seite.',
        ],
      },
    ],
    backHome: 'Zurück zur Startseite',
  },
};

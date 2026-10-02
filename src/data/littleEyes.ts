// Content for the private "Little Eyes" image-consent form (/[-lang]/little-eyes).
// This page is intentionally NOT part of any content collection (services,
// locations, pages, extras): it must stay out of the sitemap, the nav and
// the footer, and is only ever shared directly via WhatsApp — see
// src/pages/{es,de,en}/little-eyes.astro and src/components/LittleEyesForm.astro.
//
// Controller identity (name/DNI/location), the withdrawal-of-consent inbox
// (lupo.cordero@gmail.com), and the privacy-policy link are all filled in —
// see controllerLine / moreInfoPrefix / privacyLinkLabel in each language
// block, and src/data/privacyPolicy.ts for the linked page itself. The
// optional "add me to the course WhatsApp group" consent was removed
// (2026-10-02) at the owner's request.

import type { Lang } from './routes';

export const LITTLE_EYES_TEXT_VERSION = '2026-10-02';

export interface LittleEyesText {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  promisesHeading: string;
  promises: string[];
  controllerLine: string;
  moreInfoPrefix: string;
  privacyLinkLabel: string;
  fields: {
    childName: string;
    consentImages: string;
    consentFirstName: string;
  };
  requiredNote: string;
  button: string;
  error: string;
  thanks: string;
}

export const LITTLE_EYES_TEXT: Record<Lang, LittleEyesText> = {
  es: {
    metaTitle: 'Little Eyes · Consentimiento de imagen | Lupo',
    metaDescription: 'Formulario privado de consentimiento de imagen para el taller Little Eyes.',
    h1: 'Little Eyes · Consentimiento de imagen',
    intro: 'Para que vuestro hijo/a participe en Little Eyes necesitamos vuestro permiso. Son 20 segundos.',
    promisesHeading: 'Lo que prometo',
    promises: [
      'Tenemos previstos talleres puntuales en los que se harán fotos, retratos y vídeos cortos de los niños y niñas, con fines de aprendizaje (verlos juntos en clase, exposiciones en el colegio).',
      'Las imágenes solo se muestran en la pantalla de clase, en las exposiciones del colegio (22 dic, 23 mar y 15 jun) y a las familias.',
      'No se publican en internet, ni en redes sociales, ni en mi web. No se venden ni se ceden a terceros.',
      'Nunca se suben fotos de los niños y niñas a herramientas de inteligencia artificial.',
      'Las guardo en un único lugar seguro y las borro al terminar el curso (junio de 2027). Cada niño se lleva sus fotos impresas.',
      'Podéis retirar el permiso cuando queráis escribiendo a lupo.cordero@gmail.com: borraré las imágenes de vuestro hijo/a.',
    ],
    controllerLine: 'Responsable: Javier Cordero Pariente, DNI 61561896G, Deià, Mallorca.',
    moreInfoPrefix: 'Más información:',
    privacyLinkLabel: 'política de privacidad',
    fields: {
      childName: 'Nombre y apellidos del niño/a',
      consentImages:
        'Soy su padre, madre o tutor legal y doy mi consentimiento para que se hagan y se usen imágenes de mi hijo/a como se describe arriba.',
      consentFirstName:
        'El nombre de mi hijo/a puede aparecer en la etiqueta de su foto en la exposición (si no, solo las iniciales).',
    },
    requiredNote: '* obligatorio',
    button: 'Enviar',
    error: 'Escribe el nombre del niño/a y marca la casilla obligatoria.',
    thanks: '¡Gracias! Hemos recibido vuestro consentimiento. Nos vemos el martes 6 de octubre. 📸',
  },
  en: {
    metaTitle: 'Little Eyes · Image consent | Lupo',
    metaDescription: 'Private image-consent form for the Little Eyes workshop.',
    h1: 'Little Eyes · Image consent',
    intro: 'To let your child take part in Little Eyes we need your permission. It takes 20 seconds.',
    promisesHeading: 'What I promise',
    promises: [
      'We have occasional workshops planned in which the children will have photos, portraits and short videos taken, for learning purposes (viewing together in class, exhibitions at the school).',
      'The images are only shown on the classroom screen, at the school exhibitions (22 Dec, 23 Mar and 15 Jun) and to the families.',
      'They are not published online, on social media or on my website. They are not sold or passed to third parties.',
      'Photos of the children are never uploaded to artificial intelligence tools.',
      'I keep them in one secure place and delete them when the course ends (June 2027). Each child takes home their printed photos.',
      "You can withdraw your consent at any time by writing to lupo.cordero@gmail.com: I will delete your child's images.",
    ],
    controllerLine: 'Controller: Javier Cordero Pariente, DNI 61561896G, Deià, Mallorca.',
    moreInfoPrefix: 'More information:',
    privacyLinkLabel: 'privacy policy',
    fields: {
      childName: "Child's full name",
      consentImages:
        'I am the child’s parent or legal guardian and I consent to images of my child being taken and used as described above.',
      consentFirstName:
        "My child's first name may appear on the label of their photo at the exhibition (otherwise initials only).",
    },
    requiredNote: '* required',
    button: 'Send',
    error: "Please enter the child's name and tick the required box.",
    thanks: 'Thank you! We have received your consent. See you on Tuesday 6 October. 📸',
  },
  de: {
    metaTitle: 'Little Eyes · Einwilligung zur Bildnutzung | Lupo',
    metaDescription: 'Private Einwilligungserklärung zur Bildnutzung für den Little-Eyes-Kurs.',
    h1: 'Little Eyes · Einwilligung zur Bildnutzung',
    intro: 'Damit euer Kind bei Little Eyes mitmachen kann, brauchen wir eure Erlaubnis. Das dauert 20 Sekunden.',
    promisesHeading: 'Das verspreche ich',
    promises: [
      'Es sind gelegentliche Kurseinheiten geplant, in denen Fotos, Porträts und kurze Videos der Kinder zu Lernzwecken gemacht werden (gemeinsam ansehen im Unterricht, Ausstellungen in der Schule).',
      'Die Bilder werden nur auf dem Bildschirm im Kursraum, bei den Ausstellungen in der Schule (22. Dez., 23. März und 15. Juni) und für die Familien gezeigt.',
      'Sie werden nicht im Internet, nicht in sozialen Netzwerken und nicht auf meiner Website veröffentlicht. Sie werden nicht verkauft und nicht an Dritte weitergegeben.',
      'Fotos der Kinder werden niemals in KI-Werkzeuge hochgeladen.',
      'Ich speichere sie an einem sicheren Ort und lösche sie nach Kursende (Juni 2027). Jedes Kind nimmt seine Abzüge mit nach Hause.',
      'Ihr könnt die Einwilligung jederzeit widerrufen: schreibt an lupo.cordero@gmail.com, und ich lösche die Bilder eures Kindes.',
    ],
    controllerLine: 'Verantwortlicher: Javier Cordero Pariente, DNI 61561896G, Deià, Mallorca.',
    moreInfoPrefix: 'Mehr Informationen:',
    privacyLinkLabel: 'Datenschutzerklärung',
    fields: {
      childName: 'Vor- und Nachname des Kindes',
      consentImages:
        'Ich bin Mutter, Vater oder gesetzlicher Vertreter des Kindes und willige ein, dass Bilder meines Kindes wie oben beschrieben gemacht und verwendet werden.',
      consentFirstName: 'Der Vorname meines Kindes darf auf dem Bildschild bei der Ausstellung stehen (sonst nur die Initialen).',
    },
    requiredNote: '* Pflichtfeld',
    button: 'Absenden',
    error: 'Bitte den Namen des Kindes eintragen und das Pflichtfeld ankreuzen.',
    thanks: 'Danke! Wir haben eure Einwilligung erhalten. Bis Dienstag, 6. Oktober. 📸',
  },
};

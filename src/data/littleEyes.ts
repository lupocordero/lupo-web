// Content for the private "Little Eyes" image-consent form (/[-lang]/little-eyes).
// This page is intentionally NOT part of any content collection (services,
// locations, pages, extras): it must stay out of the sitemap, the nav and
// the footer, and is only ever shared directly via WhatsApp — see
// src/pages/{es,de,en}/little-eyes.astro and src/components/LittleEyesForm.astro.
//
// NOTE: [LEGAL NAME], [TAX ID], [EMAIL] and [PRIVACY POLICY URL] below are
// placeholders left on purpose — fill them in once you have the real values
// (see controllerLine / promises in each language block).

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
  moreInfoLabel: string;
  fields: {
    childName: string;
    consentImages: string;
    consentWhatsapp: string;
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
      'Hago fotos y vídeos cortos de los niños durante las clases, solo para el taller (aprender, verlos juntos, exposiciones en el colegio).',
      'Las imágenes solo se muestran en la pantalla de clase, en las exposiciones del colegio (22 dic, 23 mar y 15 jun) y a las familias.',
      'No se publican en internet, ni en redes sociales, ni en mi web. No se venden ni se ceden a terceros.',
      'Nunca se suben fotos de los niños a herramientas de inteligencia artificial.',
      'Las guardo en un único lugar seguro y las borro al terminar el curso (junio de 2027). Cada niño se lleva sus fotos impresas.',
      'Podéis retirar el permiso cuando queráis escribiendo a [EMAIL]: borraré las imágenes de vuestro hijo/a.',
    ],
    controllerLine: 'Responsable: [LEGAL NAME], [TAX ID], Palma (Illes Balears).',
    moreInfoLabel: 'Más información: [PRIVACY POLICY URL]',
    fields: {
      childName: 'Nombre y apellidos del niño/a',
      consentImages:
        'Soy su padre, madre o tutor legal y doy mi consentimiento para que se hagan y se usen imágenes de mi hijo/a como se describe arriba.',
      consentWhatsapp:
        'Podéis añadirme al grupo de WhatsApp del taller (los números son visibles para el resto de familias).',
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
      'I take photos and short videos of the children during classes, only for the course (learning, viewing together, exhibitions at the school).',
      'The images are only shown on the classroom screen, at the school exhibitions (22 Dec, 23 Mar and 15 Jun) and to the families.',
      'They are not published online, on social media or on my website. They are not sold or passed to third parties.',
      'Photos of the children are never uploaded to artificial intelligence tools.',
      'I keep them in one secure place and delete them when the course ends (June 2027). Each child takes home their printed photos.',
      "You can withdraw your consent at any time by writing to [EMAIL]: I will delete your child's images.",
    ],
    controllerLine: 'Controller: [LEGAL NAME], [TAX ID], Palma (Balearic Islands).',
    moreInfoLabel: 'More information: [PRIVACY POLICY URL]',
    fields: {
      childName: "Child's full name",
      consentImages:
        'I am the child’s parent or legal guardian and I consent to images of my child being taken and used as described above.',
      consentWhatsapp: 'You may add me to the course WhatsApp group (numbers are visible to the other families).',
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
      'Ich mache während der Kurse Fotos und kurze Videos der Kinder, ausschließlich für den Kurs (lernen, gemeinsam ansehen, Ausstellungen in der Schule).',
      'Die Bilder werden nur auf dem Bildschirm im Kursraum, bei den Ausstellungen in der Schule (22. Dez., 23. März und 15. Juni) und für die Familien gezeigt.',
      'Sie werden nicht im Internet, nicht in sozialen Netzwerken und nicht auf meiner Website veröffentlicht. Sie werden nicht verkauft und nicht an Dritte weitergegeben.',
      'Fotos der Kinder werden niemals in KI-Werkzeuge hochgeladen.',
      'Ich speichere sie an einem sicheren Ort und lösche sie nach Kursende (Juni 2027). Jedes Kind nimmt seine Abzüge mit nach Hause.',
      'Ihr könnt die Einwilligung jederzeit widerrufen: schreibt an [EMAIL], und ich lösche die Bilder eures Kindes.',
    ],
    controllerLine: 'Verantwortlicher: [LEGAL NAME], [TAX ID], Palma (Balearen).',
    moreInfoLabel: 'Mehr Informationen: [PRIVACY POLICY URL]',
    fields: {
      childName: 'Vor- und Nachname des Kindes',
      consentImages:
        'Ich bin Mutter, Vater oder gesetzlicher Vertreter des Kindes und willige ein, dass Bilder meines Kindes wie oben beschrieben gemacht und verwendet werden.',
      consentWhatsapp:
        'Ihr könnt mich in die WhatsApp-Gruppe des Kurses aufnehmen (die Nummern sind für die anderen Familien sichtbar).',
      consentFirstName: 'Der Vorname meines Kindes darf auf dem Bildschild bei der Ausstellung stehen (sonst nur die Initialen).',
    },
    requiredNote: '* Pflichtfeld',
    button: 'Absenden',
    error: 'Bitte den Namen des Kindes eintragen und das Pflichtfeld ankreuzen.',
    thanks: 'Danke! Wir haben eure Einwilligung erhalten. Bis Dienstag, 6. Oktober. 📸',
  },
};

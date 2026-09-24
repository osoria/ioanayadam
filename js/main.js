/* ==========================================================================
   Invitación de boda · Ioana & Adam
   ========================================================================== */

/* ---- CONFIGURACIÓN (edita aquí) ---- */
const CONFIG = {
  // Fecha y hora de la ceremonia (hora local)
  weddingDate: '2027-07-17T16:30:00',
  // Número de WhatsApp para confirmar asistencia (código de país sin "+")
  whatsapp: '34642297641',
  // Hashtag para compartir fotos
  hashtag: '#ioanayadam'
};

/* ---- Traducciones ---- */
const translations = {
  es: {
    welcome: 'Bienvenidos a la invitación de Ioana y Adam',
    musicNote: 'La música de fondo es parte de la experiencia',
    enterMusic: 'Ingresar con música',
    enterNoMusic: 'Ingresar sin música',
    date: '17.07.2027',
    quote: 'El amor es la poesía de los sentidos',
    countdownLabel: 'Faltan',
    days: 'días',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
    invitationKicker: 'Con todo nuestro amor',
    invitationTitle: 'Será un día inolvidable y queremos vivirlo contigo',
    invitationText: 'Nos hace muy felices invitarte a celebrar nuestro amor, el comienzo de una nueva etapa de nuestra vida.',
    ceremonyKicker: 'Ceremonia',
    ceremonyTitle: 'Ceremonia religiosa',
    ceremonyDate: 'Sábado 17 de julio de 2027 · 16:30 h',
    ceremonyPlace: 'Iglesia El Loreto de Tarragona',
    howToGet: 'Cómo llegar',
    addCalendar: 'Agendar',
    banquetKicker: 'Celebración',
    banquetTitle: 'Banquete',
    banquetDate: 'Sábado 17 de julio de 2027 · 19:00 h',
    banquetPlace: 'Casablanca Miami Platja',
    rsvpKicker: 'Confirma tu asistencia',
    rsvpTitle: '¿Vienes a celebrarlo con nosotros?',
    rsvpText: 'Es importante que confirmes tu asistencia antes del 1 de junio de 2027.',
    rsvpButton: 'Confirmar asistencia',
    rsvpMessage: 'Hola, confirmo mi asistencia a la boda de Ioana y Adam',
    galleryKicker: 'Galería',
    galleryTitle: 'Retratos de nuestro amor',
    galleryText: 'Un minuto, un segundo, un instante que queda en la eternidad',
    detailsKicker: 'Información',
    detailsTitle: 'Detalles de la boda',
    dresscodeTitle: 'Dress Code',
    dresscodeText: 'Os pedimos un look elegante: traje para ellos y vestido de fiesta para ellas. Colores sugeridos: azul, beige y dorado.',
    musicTitle: 'Música',
    musicText: 'La canción de esta invitación es «The Power of Love» de Céline Dion, una de nuestras favoritas.',
    tipsTitle: 'Tips y Notas',
    tipsText: 'Os esperamos 15 minutos antes en la iglesia. Tras la ceremonia nos trasladaremos al banquete en Casablanca Miami Platja.',
    giftsTitle: 'Regalos',
    giftsText: 'El mejor regalo es vuestra presencia. Si queréis tener un detalle con nosotros, os lo agradecemos de corazón.',
    hashtagTitle: 'Compartimos este día junto a ti',
    hashtagText: 'Comparte tus fotos y vídeos de este hermoso día',
    footerMade: 'Hecho con ♥ para Ioana y Adam'
  },
  ro: {
    welcome: 'Bine ați venit la invitația Ioanei și a lui Adam',
    musicNote: 'Muzica de fundal face parte din experiență',
    enterMusic: 'Intră cu muzică',
    enterNoMusic: 'Intră fără muzică',
    date: '17.07.2027',
    quote: 'Iubirea este poezia simțurilor',
    countdownLabel: 'Au mai rămas',
    days: 'zile',
    hours: 'ore',
    minutes: 'minute',
    seconds: 'secunde',
    invitationKicker: 'Cu toată dragostea noastră',
    invitationTitle: 'Va fi o zi de neuitat și vrem să o trăim împreună cu tine',
    invitationText: 'Ne bucurăm enorm să te invităm să sărbătorești alături de noi dragostea noastră și începutul unei noi etape din viața noastră.',
    ceremonyKicker: 'Ceremonia',
    ceremonyTitle: 'Ceremonia religioasă',
    ceremonyDate: 'Sâmbătă 17 iulie 2027 · 16:30',
    ceremonyPlace: 'Biserica El Loreto din Tarragona',
    howToGet: 'Cum ajung',
    addCalendar: 'Adaugă în calendar',
    banquetKicker: 'Petrecerea',
    banquetTitle: 'Banchetul',
    banquetDate: 'Sâmbătă 17 iulie 2027 · 19:00',
    banquetPlace: 'Casablanca Miami Platja',
    rsvpKicker: 'Confirmă prezența',
    rsvpTitle: 'Vii să sărbătorești alături de noi?',
    rsvpText: 'Este important să confirmi prezența până la 1 iunie 2027.',
    rsvpButton: 'Confirmă prezența',
    rsvpMessage: 'Bună, confirm prezența la nunta Ioanei și a lui Adam',
    galleryKicker: 'Galerie',
    galleryTitle: 'Portretele iubirii noastre',
    galleryText: 'Un minut, o secundă, o clipă care rămâne în eternitate',
    detailsKicker: 'Informații',
    detailsTitle: 'Detalii despre nuntă',
    dresscodeTitle: 'Ținuta (Dress Code)',
    dresscodeText: 'Vă rugăm să purtați o ținută elegantă: costum pentru bărbați și rochie de seară pentru femei. Culori sugerate: albastru, bej și auriu.',
    musicTitle: 'Muzică',
    musicText: 'Melodia acestei invitații este «The Power of Love» de Céline Dion, una dintre preferatele noastre.',
    tipsTitle: 'Sfaturi și note',
    tipsText: 'Vă așteptăm la biserică cu 15 minute înainte. După ceremonie ne vom îndrepta spre banchetul de la Casablanca Miami Platja.',
    giftsTitle: 'Cadouri',
    giftsText: 'Cel mai frumos cadou este prezența voastră. Dacă doriți să ne oferiți ceva, vă mulțumim din suflet.',
    hashtagTitle: 'Împărtășim această zi alături de tine',
    hashtagText: 'Distribuie fotografiile și videoclipurile tale din această zi frumoasă',
    footerMade: 'Făcut cu ♥ pentru Ioana și Adam'
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Enlace RSVP (WhatsApp)
  const rsvpBtn = document.getElementById('rsvpBtn');
  const msg = encodeURIComponent(translations[lang].rsvpMessage);
  rsvpBtn.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + msg;

  // Hashtag
  document.getElementById('hashtagBtn').textContent = CONFIG.hashtag;
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});
/* ---- Música ---- */
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const intro = document.getElementById('intro');
const main = document.getElementById('main');

function enterSite(withMusic) {
  if (withMusic) {
    bgMusic.volume = 0.55;
    bgMusic.play().then(() => {
      musicToggle.classList.add('playing');
      musicToggle.hidden = false;
    }).catch(() => {});
  } else {
    musicToggle.hidden = false;
  }
  intro.classList.add('fade-out');
  main.classList.remove('hidden');
  document.body.style.overflow = '';
  setTimeout(() => { intro.remove(); }, 900);
}

document.getElementById('enterMusic').addEventListener('click', () => enterSite(true));
document.getElementById('enterNoMusic').addEventListener('click', () => enterSite(false));

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      musicToggle.classList.add('playing');
    }).catch(() => {});
  } else {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
  }
});

/* ---- Cuenta atrás ---- */
const targetDate = new Date(CONFIG.weddingDate).getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const now = Date.now();
  let diff = targetDate - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

/* ---- Lightbox galería ---- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => openLightbox(item.getAttribute('data-full')));
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

/* ---- Animaciones al hacer scroll ---- */
document.querySelectorAll(
  '.invitation-inner, .event-card, .gallery-head, .gallery-item, .rsvp-inner, .detail-card, .hashtag-inner, .footer'
).forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ---- Copiar hashtag ---- */
const hashtagBtn = document.getElementById('hashtagBtn');
const hashtagCopied = document.getElementById('hashtagCopied');
hashtagBtn.addEventListener('click', () => {
  const text = hashtagBtn.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  hashtagCopied.classList.add('show');
  setTimeout(() => hashtagCopied.classList.remove('show'), 1600);
});

/* ---- Inicialización ---- */
document.body.style.overflow = 'hidden';
applyLanguage(currentLang);
updateCountdown();
setInterval(updateCountdown, 1000);



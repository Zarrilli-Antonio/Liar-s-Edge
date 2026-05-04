const languages = ['it', 'en', 'fr', 'es'];
const languageLabels = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

const uiStrings = {
  it: {
    eyebrow: 'Pronto per GitHub Pages',
    heroTitle: 'Question Library Builder',
    heroLead: 'Crea un JSON multilingua con traduzioni per it, en, fr e es, poi scaricalo o aprilo dal QR code.',
    uiLanguage: 'Lingua interfaccia',
    libraryName: 'Nome libreria',
    defaultLanguage: 'Lingua predefinita',
    addQuestion: '+ Aggiungi domanda',
    loadExample: 'Carica esempio',
    downloadJson: 'Scarica JSON',
    questions: 'Domande',
    preview: 'Anteprima JSON',
    copy: 'Copia',
    copied: 'Copiato',
    formatHint: 'Il formato finale è compatibile con l\'app: ogni domanda contiene translations con le lingue disponibili.',
    qrTitle: 'QR Download',
    copyShareLink: 'Copia link',
    qrHint: 'Scansiona il QR per aprire la pagina con il JSON già pronto per il download.',
    shareUrlLabel: 'Link condivisibile',
    questionHeading: 'Domanda',
    remove: 'Rimuovi',
    questionCount: (count) => `${count} domande`,
    jsonLoading: 'Caricamento...',
    importPrompt: 'Apri con il QR per importare e scaricare il file JSON.',
    templateTip: 'Ogni domanda può contenere translations con it/en/fr/es.',
    loadSelected: 'Carica dati dal link',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  en: {
    eyebrow: 'GitHub Pages ready',
    heroTitle: 'Question Library Builder',
    heroLead: 'Create a multilingual JSON with it, en, fr and es translations, then download it or open it from the QR code.',
    uiLanguage: 'UI language',
    libraryName: 'Library name',
    defaultLanguage: 'Default language',
    addQuestion: '+ Add question',
    loadExample: 'Load example',
    downloadJson: 'Download JSON',
    questions: 'Questions',
    preview: 'JSON preview',
    copy: 'Copy',
    copied: 'Copied',
    formatHint: 'The final format is compatible with the app: every question contains translations for the available languages.',
    qrTitle: 'QR Download',
    copyShareLink: 'Copy link',
    qrHint: 'Scan the QR to open the page with the JSON ready to download.',
    shareUrlLabel: 'Shareable link',
    questionHeading: 'Question',
    remove: 'Remove',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Loading...',
    importPrompt: 'Open with the QR to import and download the JSON file.',
    templateTip: 'Each question can include translations with it/en/fr/es.',
    loadSelected: 'Load data from link',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  fr: {
    eyebrow: 'Prêt pour GitHub Pages',
    heroTitle: 'Question Library Builder',
    heroLead: 'Créez un JSON multilingue avec les traductions it, en, fr et es, puis téléchargez-le ou ouvrez-le depuis le QR code.',
    uiLanguage: 'Langue de l\'interface',
    libraryName: 'Nom de la bibliothèque',
    defaultLanguage: 'Langue par défaut',
    addQuestion: '+ Ajouter une question',
    loadExample: 'Charger l\'exemple',
    downloadJson: 'Télécharger JSON',
    questions: 'Questions',
    preview: 'Aperçu JSON',
    copy: 'Copier',
    copied: 'Copié',
    formatHint: 'Le format final est compatible avec l\'application : chaque question contient translations avec les langues disponibles.',
    qrTitle: 'QR Download',
    copyShareLink: 'Copier le lien',
    qrHint: 'Scannez le QR pour ouvrir la page avec le JSON prêt à être téléchargé.',
    shareUrlLabel: 'Lien partageable',
    questionHeading: 'Question',
    remove: 'Supprimer',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Chargement...',
    importPrompt: 'Ouvrez avec le QR pour importer et télécharger le fichier JSON.',
    templateTip: 'Chaque question peut inclure des translations avec it/en/fr/es.',
    loadSelected: 'Charger les données du lien',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  es: {
    eyebrow: 'Listo para GitHub Pages',
    heroTitle: 'Question Library Builder',
    heroLead: 'Crea un JSON multilingüe con traducciones para it, en, fr y es, luego descárgalo o ábrelo desde el QR code.',
    uiLanguage: 'Idioma de la interfaz',
    libraryName: 'Nombre de la librería',
    defaultLanguage: 'Idioma predeterminado',
    addQuestion: '+ Añadir pregunta',
    loadExample: 'Cargar ejemplo',
    downloadJson: 'Descargar JSON',
    questions: 'Preguntas',
    preview: 'Vista previa JSON',
    copy: 'Copiar',
    copied: 'Copiado',
    formatHint: 'El formato final es compatible con la app: cada pregunta contiene translations con los idiomas disponibles.',
    qrTitle: 'QR Download',
    copyShareLink: 'Copiar enlace',
    qrHint: 'Escanea el QR para abrir la página con el JSON listo para descargar.',
    shareUrlLabel: 'Enlace compartible',
    questionHeading: 'Pregunta',
    remove: 'Eliminar',
    questionCount: (count) => `${count} preguntas`,
    jsonLoading: 'Cargando...',
    importPrompt: 'Abre con el QR para importar y descargar el archivo JSON.',
    templateTip: 'Cada pregunta puede incluir translations con it/en/fr/es.',
    loadSelected: 'Cargar datos del enlace',
    libraryPlaceholder: "Liar's Edge Custom Library"
  }
};

const state = {
  uiLanguage: 'it',
  libraryName: "Liar's Edge Custom Library",
  defaultLanguage: 'it',
  questions: []
};

const els = {
  eyebrowText: document.getElementById('eyebrowText'),
  heroTitle: document.getElementById('heroTitle'),
  heroLead: document.getElementById('heroLead'),
  uiLanguageLabel: document.getElementById('uiLanguageLabel'),
  uiLanguage: document.getElementById('uiLanguage'),
  libraryNameLabel: document.getElementById('libraryNameLabel'),
  libraryName: document.getElementById('libraryName'),
  defaultLanguageLabel: document.getElementById('defaultLanguageLabel'),
  defaultLanguage: document.getElementById('defaultLanguage'),
  addQuestionBtn: document.getElementById('addQuestionBtn'),
  loadExampleBtn: document.getElementById('loadExampleBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  questionsTitle: document.getElementById('questionsTitle'),
  previewTitle: document.getElementById('previewTitle'),
  copyBtn: document.getElementById('copyBtn'),
  formatHint: document.getElementById('formatHint'),
  qrTitle: document.getElementById('qrTitle'),
  copyShareLinkBtn: document.getElementById('copyShareLinkBtn'),
  qrHint: document.getElementById('qrHint'),
  shareUrl: document.getElementById('shareUrl'),
  qrCode: document.getElementById('qrCode'),
  questionsContainer: document.getElementById('questionsContainer'),
  jsonPreview: document.getElementById('jsonPreview'),
  questionCount: document.getElementById('questionCount'),
  questionTemplate: document.getElementById('questionTemplate')
};

function t(key, ...args) {
  const pack = uiStrings[state.uiLanguage] || uiStrings.it;
  const value = pack[key];
  return typeof value === 'function' ? value(...args) : value;
}

function createBlankQuestion() {
  const translations = {};
  languages.forEach((code) => {
    translations[code] = { question: '', correctAnswer: '' };
  });
  return { translations };
}

function loadExample() {
  state.libraryName = "Liar's Edge Multilingual Library";
  state.defaultLanguage = 'it';
  state.questions = [
    {
      translations: {
        it: { question: 'Qual è la capitale della Francia?', correctAnswer: 'Parigi' },
        en: { question: 'What is the capital of France?', correctAnswer: 'Paris' },
        fr: { question: 'Quelle est la capitale de la France ?', correctAnswer: 'Paris' },
        es: { question: '¿Cuál es la capital de Francia?', correctAnswer: 'París' }
      }
    },
    {
      translations: {
        it: { question: 'Quanti continenti ci sono sulla Terra?', correctAnswer: '7' },
        en: { question: 'How many continents are there on Earth?', correctAnswer: '7' },
        fr: { question: 'Combien y a-t-il de continents sur Terre ?', correctAnswer: '7' },
        es: { question: '¿Cuántos continentes hay en la Tierra?', correctAnswer: '7' }
      }
    }
  ];
  syncInputs();
  render();
}

function addQuestion(question = createBlankQuestion()) {
  state.questions.push(question);
  render();
}

function removeQuestion(index) {
  state.questions.splice(index, 1);
  render();
}

function syncInputs() {
  els.uiLanguage.value = state.uiLanguage;
  els.libraryName.value = state.libraryName;
  els.defaultLanguage.value = state.defaultLanguage;
  updateStaticText();
}

function updateStaticText() {
  document.documentElement.lang = state.uiLanguage;
  els.eyebrowText.textContent = t('eyebrow');
  els.heroTitle.textContent = t('heroTitle');
  els.heroLead.textContent = t('heroLead');
  els.uiLanguageLabel.textContent = t('uiLanguage');
  els.libraryNameLabel.textContent = t('libraryName');
  els.defaultLanguageLabel.textContent = t('defaultLanguage');
  els.addQuestionBtn.textContent = t('addQuestion');
  els.loadExampleBtn.textContent = t('loadExample');
  els.downloadBtn.textContent = t('downloadJson');
  els.questionsTitle.textContent = t('questions');
  els.previewTitle.textContent = t('preview');
  els.copyBtn.textContent = t('copy');
  els.formatHint.innerHTML = `${t('formatHint')} <code>translations</code>.`;
  els.qrTitle.textContent = t('qrTitle');
  els.copyShareLinkBtn.textContent = t('copyShareLink');
  els.qrHint.textContent = t('qrHint');
}

function collectStateFromForm() {
  state.libraryName = els.libraryName.value.trim() || t('libraryPlaceholder');
  state.defaultLanguage = els.defaultLanguage.value;
  state.uiLanguage = els.uiLanguage.value;

  const cards = [...els.questionsContainer.querySelectorAll('.question-card')];
  state.questions = cards.map((card) => {
    const translations = {};
    languages.forEach((code) => {
      const group = card.querySelector(`.translation-group[data-lang="${code}"]`);
      translations[code] = {
        question: group.querySelector('.q-text').value.trim(),
        correctAnswer: group.querySelector('.a-text').value.trim()
      };
    });
    return { translations };
  });
}

function buildJson() {
  collectStateFromForm();
  return {
    libraryName: state.libraryName,
    language: state.defaultLanguage,
    questions: state.questions.filter((q) => {
      const anyFilled = languages.some((code) => q.translations[code].question || q.translations[code].correctAnswer);
      return anyFilled;
    })
  };
}

function encodePayload(data) {
  const json = JSON.stringify(data);
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function decodePayload(payload) {
  const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const json = decodeURIComponent(escape(atob(padded)));
  return JSON.parse(json);
}

function buildShareUrl(data) {
  const payload = encodePayload(data);
  const baseUrl = `${location.origin}${location.pathname}`;
  return `${baseUrl}?payload=${encodeURIComponent(payload)}&autodownload=1`;
}

function updatePreview() {
  const data = buildJson();
  const pretty = JSON.stringify(data, null, 2);
  els.jsonPreview.value = pretty;
  els.questionCount.textContent = t('questionCount', data.questions.length);
  const shareUrl = buildShareUrl(data);
  els.shareUrl.value = shareUrl;
  renderQr(shareUrl);
  updateStaticText();
}

function render() {
  els.questionsContainer.innerHTML = '';

  if (state.questions.length === 0) {
    addQuestion(createBlankQuestion());
    return;
  }

  state.questions.forEach((question, index) => {
    const node = els.questionTemplate.content.cloneNode(true);
    const card = node.querySelector('.question-card');
    const idx = node.querySelector('.question-index');
    idx.textContent = `${t('questionHeading')} ${index + 1}`;

    node.querySelector('.questionHeading').textContent = t('questionHeading');
    node.querySelector('.removeBtn').textContent = t('remove');
    node.querySelector('.removeBtn').addEventListener('click', () => removeQuestion(index));

    languages.forEach((code) => {
      const group = node.querySelector(`.translation-group[data-lang="${code}"]`);
      group.querySelector('.q-text').value = question.translations[code]?.question ?? '';
      group.querySelector('.a-text').value = question.translations[code]?.correctAnswer ?? '';
      group.querySelector('h4').textContent = languageLabels[code];
    });

    card.addEventListener('input', updatePreview);
    els.questionsContainer.appendChild(node);
  });

  updatePreview();
}

function renderQr(shareUrl) {
  els.qrCode.innerHTML = '';
  if (typeof QRCode !== 'function') {
    els.qrCode.textContent = t('jsonLoading');
    return;
  }
  new QRCode(els.qrCode, {
    text: shareUrl,
    width: 240,
    height: 240,
    correctLevel: QRCode.CorrectLevel.M
  });
}

function downloadJson() {
  const data = buildJson();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'question-library.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

async function copyJson() {
  await navigator.clipboard.writeText(els.jsonPreview.value);
  els.copyBtn.textContent = t('copied');
  setTimeout(() => (els.copyBtn.textContent = t('copy')), 1400);
}

async function copyShareLink() {
  await navigator.clipboard.writeText(els.shareUrl.value);
  els.copyShareLinkBtn.textContent = t('copied');
  setTimeout(() => (els.copyShareLinkBtn.textContent = t('copyShareLink')), 1400);
}

function loadFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const payload = params.get('payload');
  if (!payload) return;

  try {
    const data = decodePayload(payload);
    if (data.libraryName) state.libraryName = data.libraryName;
    if (data.language && languages.includes(data.language)) state.defaultLanguage = data.language;
    state.questions = Array.isArray(data.questions) ? data.questions : [];
    syncInputs();
    render();

    if (params.get('autodownload') === '1') {
      setTimeout(downloadJson, 200);
    }
  } catch (error) {
    console.error('Unable to load shared JSON:', error);
  }
}

els.uiLanguage.addEventListener('change', () => {
  state.uiLanguage = els.uiLanguage.value;
  syncInputs();
  render();
});
els.libraryName.addEventListener('input', () => {
  state.libraryName = els.libraryName.value;
  updatePreview();
});
els.defaultLanguage.addEventListener('change', () => {
  state.defaultLanguage = els.defaultLanguage.value;
  updatePreview();
});
els.addQuestionBtn.addEventListener('click', () => addQuestion());
els.loadExampleBtn.addEventListener('click', loadExample);
els.downloadBtn.addEventListener('click', downloadJson);
els.copyBtn.addEventListener('click', copyJson);
els.copyShareLinkBtn.addEventListener('click', copyShareLink);

window.addEventListener('DOMContentLoaded', () => {
  loadFromQuery();
  if (state.questions.length === 0) {
    addQuestion();
  }
  syncInputs();
  render();
});

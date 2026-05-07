const languages = ['it', 'en', 'fr', 'es'];
const languageLabels = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

const uiStrings = {
  it: {
    // Navigation
    navHome: 'Home',
    navBuilder: 'Question Builder',
    
    // Home page
    homeTitle: 'About Liar\'s Edge',
    homeDescription: 'A bluffing and deduction game for 2-8 players on a single device.',
    howPlayTitle: 'How It Works',
    howPlayDesc: 'One player asks a question. Others answer—but only one tells the truth! The questioner scores points by accusing liars without accusing the truth-teller.',
    customQuestionsTitle: 'Custom Questions',
    customQuestionsDesc: 'Create your own question library with multilingual support for Italian, English, French, and Spanish.',
    storeQuestionsTitle: 'Import & Save',
    storeQuestionsDesc: 'Build or download question libraries as JSON files. Save them in the app to use across multiple games.',
    offlineTitle: 'Fully Offline',
    offlineDesc: 'Play anywhere with no internet required. All data is stored locally on your device.',
    ctaTitle: 'Ready to Play?',
    ctaDescription: 'Download the Liar\'s Edge app or create a question library using the builder.',
    gotoBuilder: 'Go to Question Builder',
    
    // Builder
    heroTitle: 'Question Library Builder',
    heroLead: 'Crea un JSON multilingua con traduzioni per it, en, fr e es, poi riscaricalo.',
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
    importHint: 'Puoi modificare il contenuto e scaricarlo di nuovo.',
    questionHeading: 'Domanda',
    remove: 'Rimuovi',
    questionCount: (count) => `${count} domande`,
    jsonLoading: 'Caricamento...',
    templateTip: 'Ogni domanda può contenere translations con it/en/fr/es.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  en: {
    // Navigation
    navHome: 'Home',
    navBuilder: 'Question Builder',
    
    // Home page
    homeTitle: 'About Liar\'s Edge',
    homeDescription: 'A bluffing and deduction game for 2-8 players on a single device.',
    howPlayTitle: 'How It Works',
    howPlayDesc: 'One player asks a question. Others answer—but only one tells the truth! The questioner scores points by accusing liars without accusing the truth-teller.',
    customQuestionsTitle: 'Custom Questions',
    customQuestionsDesc: 'Create your own question library with multilingual support for Italian, English, French, and Spanish.',
    storeQuestionsTitle: 'Import & Save',
    storeQuestionsDesc: 'Build or download question libraries as JSON files. Save them in the app to use across multiple games.',
    offlineTitle: 'Fully Offline',
    offlineDesc: 'Play anywhere with no internet required. All data is stored locally on your device.',
    ctaTitle: 'Ready to Play?',
    ctaDescription: 'Download the Liar\'s Edge app or create a question library using the builder.',
    gotoBuilder: 'Go to Question Builder',
    
    // Builder
    heroTitle: 'Question Library Builder',
    heroLead: 'Create a multilingual JSON with it, en, fr and es translations, then download it again.',
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
    importHint: 'You can edit the content and download it again.',
    questionHeading: 'Question',
    remove: 'Remove',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Loading...',
    templateTip: 'Each question can include translations with it/en/fr/es.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  fr: {
    // Navigation
    navHome: 'Accueil',
    navBuilder: 'Générateur de Questions',
    
    // Home page
    homeTitle: 'À propos de Liar\'s Edge',
    homeDescription: 'Un jeu de bluff et de déduction pour 2-8 joueurs sur un seul appareil.',
    howPlayTitle: 'Comment ça Marche',
    howPlayDesc: 'Un joueur pose une question. Les autres répondent—mais seul l\'un dit la vérité ! Le questionneur gagne des points en accusant les menteurs sans accuser le diseur de vérité.',
    customQuestionsTitle: 'Questions Personnalisées',
    customQuestionsDesc: 'Créez votre propre bibliothèque de questions avec support multilingue pour l\'italien, l\'anglais, le français et l\'espagnol.',
    storeQuestionsTitle: 'Importer et Enregistrer',
    storeQuestionsDesc: 'Construisez ou téléchargez des bibliothèques de questions en tant que fichiers JSON. Enregistrez-les dans l\'application pour les utiliser dans plusieurs jeux.',
    offlineTitle: 'Entièrement Hors Ligne',
    offlineDesc: 'Jouez n\'importe où sans connexion Internet requise. Toutes les données sont stockées localement sur votre appareil.',
    ctaTitle: 'Prêt à Jouer ?',
    ctaDescription: 'Téléchargez l\'application Liar\'s Edge ou créez une bibliothèque de questions à l\'aide du générateur.',
    gotoBuilder: 'Aller au Générateur de Questions',
    
    // Builder
    heroTitle: 'Question Library Builder',
    heroLead: 'Créez un JSON multilingue avec les traductions it, en, fr et es, puis téléchargez-le à nouveau.',
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
    importHint: 'Vous pouvez modifier le contenu puis le télécharger à nouveau.',
    questionHeading: 'Question',
    remove: 'Supprimer',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Chargement...',
    templateTip: 'Chaque question peut inclure des translations avec it/en/fr/es.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  es: {
    // Navigation
    navHome: 'Inicio',
    navBuilder: 'Generador de Preguntas',
    
    // Home page
    homeTitle: 'Acerca de Liar\'s Edge',
    homeDescription: 'Un juego de bluff y deducción para 2-8 jugadores en un solo dispositivo.',
    howPlayTitle: 'Cómo Funciona',
    howPlayDesc: '¡Un jugador hace una pregunta. Otros responden—pero solo uno dice la verdad! El interrogador gana puntos acusando a los mentirosos sin acusar al que dice la verdad.',
    customQuestionsTitle: 'Preguntas Personalizadas',
    customQuestionsDesc: 'Crea tu propia biblioteca de preguntas con soporte multilingüe para italiano, inglés, francés y español.',
    storeQuestionsTitle: 'Importar y Guardar',
    storeQuestionsDesc: 'Construye o descarga bibliotecas de preguntas como archivos JSON. Guárdalos en la aplicación para usarlos en múltiples juegos.',
    offlineTitle: 'Totalmente Offline',
    offlineDesc: 'Juega en cualquier lugar sin conexión a Internet. Todos los datos se almacenan localmente en tu dispositivo.',
    ctaTitle: '¿Listo para Jugar?',
    ctaDescription: 'Descarga la aplicación Liar\'s Edge o crea una biblioteca de preguntas usando el generador.',
    gotoBuilder: 'Ir al Generador de Preguntas',
    
    // Builder
    heroTitle: 'Question Library Builder',
    heroLead: 'Crea un JSON multilingüe con traducciones para it, en, fr y es, luego descárgalo otra vez.',
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
    importHint: 'Puedes modificar el contenido y descargarlo otra vez.',
    questionHeading: 'Pregunta',
    remove: 'Eliminar',
    questionCount: (count) => `${count} preguntas`,
    jsonLoading: 'Cargando...',
    templateTip: 'Cada pregunta puede incluir translations con it/en/fr/es.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  }
};

const state = {
  uiLanguage: 'en',  // Default to English
  libraryName: "Liar's Edge Custom Library",
  defaultLanguage: 'en',
  questions: []
};

const els = {
  // Navigation
  navHome: document.getElementById('navHome'),
  navBuilder: document.getElementById('navBuilder'),
  homePage: document.getElementById('homePage'),
  builderPage: document.getElementById('builderPage'),
  gotoBuilderBtn: document.getElementById('gotoBuilderBtn'),
  
  // Home page
  homeTitle: document.getElementById('homeTitle'),
  homeDescription: document.getElementById('homeDescription'),
  howPlayTitle: document.getElementById('howPlayTitle'),
  howPlayDesc: document.getElementById('howPlayDesc'),
  customQuestionsTitle: document.getElementById('customQuestionsTitle'),
  customQuestionsDesc: document.getElementById('customQuestionsDesc'),
  storeQuestionsTitle: document.getElementById('storeQuestionsTitle'),
  storeQuestionsDesc: document.getElementById('storeQuestionsDesc'),
  offlineTitle: document.getElementById('offlineTitle'),
  offlineDesc: document.getElementById('offlineDesc'),
  ctaTitle: document.getElementById('ctaTitle'),
  ctaDescription: document.getElementById('ctaDescription'),
  
  // Builder page
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
  importHint: document.getElementById('importHint'),
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

function normalizeQuestionItem(item) {
  const translations = {};
  languages.forEach((code) => {
    translations[code] = { question: '', correctAnswer: '' };
  });

  const originalTranslations = item?.translations && typeof item.translations === 'object' ? item.translations : null;
  let fallback = null;

  if (originalTranslations) {
    languages.forEach((code) => {
      const source = originalTranslations[code];
      if (source && typeof source === 'object') {
        const question = String(source.question ?? '').trim();
        const correctAnswer = String(source.correctAnswer ?? '').trim();
        translations[code] = { question, correctAnswer };
        if (!fallback && (question || correctAnswer)) {
          fallback = { question, correctAnswer };
        }
      }
    });
  }

  if (!fallback) {
    const question = String(item?.question ?? '').trim();
    const correctAnswer = String(item?.correctAnswer ?? '').trim();
    if (question || correctAnswer) {
      fallback = { question, correctAnswer };
    }
  }

  if (fallback) {
    const languageCode = languages.includes(item?.language) ? item.language : state.defaultLanguage;
    translations[languageCode] = { ...fallback };

    languages.forEach((code) => {
      const current = translations[code];
      if (!current.question && !current.correctAnswer) {
        translations[code] = { ...fallback };
      }
    });
  }

  return { translations };
}

function loadExample() {
  state.libraryName = "Liar's Edge Multilingual Library";
  state.defaultLanguage = 'en';
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
  
  // Home page text
  if (els.homeTitle) els.homeTitle.textContent = t('homeTitle');
  if (els.homeDescription) els.homeDescription.textContent = t('homeDescription');
  if (els.howPlayTitle) els.howPlayTitle.textContent = t('howPlayTitle');
  if (els.howPlayDesc) els.howPlayDesc.textContent = t('howPlayDesc');
  if (els.customQuestionsTitle) els.customQuestionsTitle.textContent = t('customQuestionsTitle');
  if (els.customQuestionsDesc) els.customQuestionsDesc.textContent = t('customQuestionsDesc');
  if (els.storeQuestionsTitle) els.storeQuestionsTitle.textContent = t('storeQuestionsTitle');
  if (els.storeQuestionsDesc) els.storeQuestionsDesc.textContent = t('storeQuestionsDesc');
  if (els.offlineTitle) els.offlineTitle.textContent = t('offlineTitle');
  if (els.offlineDesc) els.offlineDesc.textContent = t('offlineDesc');
  if (els.ctaTitle) els.ctaTitle.textContent = t('ctaTitle');
  if (els.ctaDescription) els.ctaDescription.textContent = t('ctaDescription');
  if (els.gotoBuilderBtn) els.gotoBuilderBtn.textContent = t('gotoBuilder');
  
  // Builder page text
  if (els.heroTitle) els.heroTitle.textContent = t('heroTitle');
  if (els.heroLead) els.heroLead.textContent = t('heroLead');
  if (els.uiLanguageLabel) els.uiLanguageLabel.textContent = t('uiLanguage');
  if (els.libraryNameLabel) els.libraryNameLabel.textContent = t('libraryName');
  if (els.defaultLanguageLabel) els.defaultLanguageLabel.textContent = t('defaultLanguage');
  if (els.addQuestionBtn) els.addQuestionBtn.textContent = t('addQuestion');
  if (els.loadExampleBtn) els.loadExampleBtn.textContent = t('loadExample');
  if (els.downloadBtn) els.downloadBtn.textContent = t('downloadJson');
  if (els.questionsTitle) els.questionsTitle.textContent = t('questions');
  if (els.previewTitle) els.previewTitle.textContent = t('preview');
  if (els.copyBtn) els.copyBtn.textContent = t('copy');
  if (els.formatHint) els.formatHint.innerHTML = `${t('formatHint')} <code>translations</code>.`;
  if (els.importHint) els.importHint.textContent = t('importHint');
  if (els.questionCount) els.questionCount.textContent = t('questionCount', buildJson().questions.length);
}

function switchPage(pageId) {
  // Hide all pages
  if (els.homePage) els.homePage.classList.remove('active');
  if (els.builderPage) els.builderPage.classList.remove('active');
  
  // Deactivate all nav buttons
  if (els.navHome) els.navHome.classList.remove('active');
  if (els.navBuilder) els.navBuilder.classList.remove('active');
  
  // Show selected page and activate button
  if (pageId === 'home') {
    if (els.homePage) els.homePage.classList.add('active');
    if (els.navHome) els.navHome.classList.add('active');
  } else if (pageId === 'builder') {
    if (els.builderPage) els.builderPage.classList.add('active');
    if (els.navBuilder) els.navBuilder.classList.add('active');
  }
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
    questions: state.questions.filter((q) => languages.some((code) => q.translations[code].question || q.translations[code].correctAnswer))
  };
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

function updatePreview() {
  const data = buildJson();
  els.jsonPreview.value = JSON.stringify(data, null, 2);
  els.questionCount.textContent = t('questionCount', data.questions.length);
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

// Navigation buttons
if (els.navHome) {
  els.navHome.addEventListener('click', () => switchPage('home'));
}
if (els.navBuilder) {
  els.navBuilder.addEventListener('click', () => switchPage('builder'));
}
if (els.gotoBuilderBtn) {
  els.gotoBuilderBtn.addEventListener('click', () => switchPage('builder'));
}

window.addEventListener('DOMContentLoaded', () => {
  if (state.questions.length === 0) {
    addQuestion();
  }
  syncInputs();
  render();
  switchPage('home');  // Start on home page
});

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
    heroLead: 'Crea, importa e modifica un JSON multilingua con traduzioni per it, en, fr e es, poi riscaricalo.',
    uiLanguage: 'Lingua interfaccia',
    libraryName: 'Nome libreria',
    defaultLanguage: 'Lingua predefinita',
    addQuestion: '+ Aggiungi domanda',
    loadExample: 'Carica esempio',
    importJson: 'Carica JSON',
    dropZoneTitle: 'Trascina qui il JSON',
    dropZoneHint: 'oppure usa il pulsante Carica JSON',
    downloadJson: 'Scarica JSON',
    questions: 'Domande',
    preview: 'Anteprima JSON',
    copy: 'Copia',
    copied: 'Copiato',
    formatHint: 'Il formato finale è compatibile con l\'app: ogni domanda contiene translations con le lingue disponibili.',
    importHint: 'Puoi caricare un JSON esistente, modificarlo e riscaricarlo.',
    questionHeading: 'Domanda',
    remove: 'Rimuovi',
    questionCount: (count) => `${count} domande`,
    jsonLoading: 'Caricamento...',
    importPrompt: 'Importa un JSON esistente per modificarlo.',
    templateTip: 'Ogni domanda può contenere translations con it/en/fr/es.',
    importError: 'Il file JSON non è valido o non segue il formato previsto.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  en: {
    eyebrow: 'GitHub Pages ready',
    heroTitle: 'Question Library Builder',
    heroLead: 'Create, import and edit a multilingual JSON with it, en, fr and es translations, then download it again.',
    uiLanguage: 'UI language',
    libraryName: 'Library name',
    defaultLanguage: 'Default language',
    addQuestion: '+ Add question',
    loadExample: 'Load example',
    importJson: 'Load JSON',
    dropZoneTitle: 'Drop the JSON here',
    dropZoneHint: 'or use the Load JSON button',
    downloadJson: 'Download JSON',
    questions: 'Questions',
    preview: 'JSON preview',
    copy: 'Copy',
    copied: 'Copied',
    formatHint: 'The final format is compatible with the app: every question contains translations for the available languages.',
    importHint: 'You can load an existing JSON, edit it and download it again.',
    questionHeading: 'Question',
    remove: 'Remove',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Loading...',
    importPrompt: 'Import an existing JSON to edit it.',
    templateTip: 'Each question can include translations with it/en/fr/es.',
    importError: 'The JSON file is invalid or does not match the expected format.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  fr: {
    eyebrow: 'Prêt pour GitHub Pages',
    heroTitle: 'Question Library Builder',
    heroLead: 'Créez, importez et modifiez un JSON multilingue avec les traductions it, en, fr et es, puis téléchargez-le à nouveau.',
    uiLanguage: 'Langue de l\'interface',
    libraryName: 'Nom de la bibliothèque',
    defaultLanguage: 'Langue par défaut',
    addQuestion: '+ Ajouter une question',
    loadExample: 'Charger l\'exemple',
    importJson: 'Charger JSON',
    dropZoneTitle: 'Déposez le JSON ici',
    dropZoneHint: 'ou utilisez le bouton Charger JSON',
    downloadJson: 'Télécharger JSON',
    questions: 'Questions',
    preview: 'Aperçu JSON',
    copy: 'Copier',
    copied: 'Copié',
    formatHint: 'Le format final est compatible avec l\'application : chaque question contient translations avec les langues disponibles.',
    importHint: 'Vous pouvez charger un JSON existant, le modifier puis le télécharger à nouveau.',
    questionHeading: 'Question',
    remove: 'Supprimer',
    questionCount: (count) => `${count} questions`,
    jsonLoading: 'Chargement...',
    importPrompt: 'Importez un JSON existant pour le modifier.',
    templateTip: 'Chaque question peut inclure des translations avec it/en/fr/es.',
    importError: 'Le fichier JSON est invalide ou ne respecte pas le format attendu.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  },
  es: {
    eyebrow: 'Listo para GitHub Pages',
    heroTitle: 'Question Library Builder',
    heroLead: 'Crea, importa y modifica un JSON multilingüe con traducciones para it, en, fr y es, luego descárgalo otra vez.',
    uiLanguage: 'Idioma de la interfaz',
    libraryName: 'Nombre de la librería',
    defaultLanguage: 'Idioma predeterminado',
    addQuestion: '+ Añadir pregunta',
    loadExample: 'Cargar ejemplo',
    importJson: 'Cargar JSON',
    dropZoneTitle: 'Suelta el JSON aquí',
    dropZoneHint: 'o usa el botón Cargar JSON',
    downloadJson: 'Descargar JSON',
    questions: 'Preguntas',
    preview: 'Vista previa JSON',
    copy: 'Copiar',
    copied: 'Copiado',
    formatHint: 'El formato final es compatible con la app: cada pregunta contiene translations con los idiomas disponibles.',
    importHint: 'Puedes cargar un JSON existente, modificarlo y descargarlo otra vez.',
    questionHeading: 'Pregunta',
    remove: 'Eliminar',
    questionCount: (count) => `${count} preguntas`,
    jsonLoading: 'Cargando...',
    importPrompt: 'Importa un JSON existente para editarlo.',
    templateTip: 'Cada pregunta puede incluir translations con it/en/fr/es.',
    importError: 'El archivo JSON no es válido o no sigue el formato esperado.',
    libraryPlaceholder: "Liar's Edge Custom Library"
  }
};

const state = {
  uiLanguage: 'en',
  libraryName: "Liar's Edge Custom Library",
  defaultLanguage: 'en',
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
  importJsonLabel: document.getElementById('importJsonLabel'),
  importJsonInput: document.getElementById('importJsonInput'),
  dropZone: document.getElementById('dropZone'),
  dropZoneTitle: document.getElementById('dropZoneTitle'),
  dropZoneHint: document.getElementById('dropZoneHint'),
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

function loadImportedJson(data) {
  if (!data || typeof data !== 'object') {
    throw new Error(t('importError'));
  }

  const questions = Array.isArray(data.questions) ? data.questions : [];
  state.libraryName = String(data.libraryName ?? t('libraryPlaceholder')).trim() || t('libraryPlaceholder');
  state.defaultLanguage = languages.includes(data.language) ? data.language : 'it';
  state.questions = questions.map(normalizeQuestionItem).filter((entry) =>
    languages.some((code) => entry.translations[code].question || entry.translations[code].correctAnswer)
  );

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
  els.importJsonLabel.textContent = t('importJson');
  els.dropZoneTitle.textContent = t('dropZoneTitle');
  els.dropZoneHint.textContent = t('dropZoneHint');
  els.downloadBtn.textContent = t('downloadJson');
  els.questionsTitle.textContent = t('questions');
  els.previewTitle.textContent = t('preview');
  els.copyBtn.textContent = t('copy');
  els.formatHint.innerHTML = `${t('formatHint')} <code>translations</code>.`;
  els.importHint.textContent = t('importHint');
  els.questionCount.textContent = t('questionCount', buildJson().questions.length);
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

async function importJsonFile(file) {
  if (!file) return;

  const text = await file.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    alert(t('importError'));
    return;
  }

  try {
    loadImportedJson(parsed);
  } catch {
    alert(t('importError'));
  }
}

function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  els.dropZone.classList.remove('drag-over');

  const [file] = event.dataTransfer?.files || [];
  if (file) {
    importJsonFile(file);
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
els.importJsonInput.addEventListener('change', (event) => {
  const [file] = event.target.files || [];
  importJsonFile(file);
  event.target.value = '';
});
els.dropZone.addEventListener('click', () => els.importJsonInput.click());
els.dropZone.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    els.importJsonInput.click();
  }
});
els.dropZone.addEventListener('dragenter', (event) => {
  event.preventDefault();
  els.dropZone.classList.add('drag-over');
});
els.dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  els.dropZone.classList.add('drag-over');
});
els.dropZone.addEventListener('dragleave', (event) => {
  event.preventDefault();
  els.dropZone.classList.remove('drag-over');
});
els.dropZone.addEventListener('drop', handleDrop);
els.downloadBtn.addEventListener('click', downloadJson);
els.copyBtn.addEventListener('click', copyJson);

window.addEventListener('DOMContentLoaded', () => {
  if (state.questions.length === 0) {
    addQuestion();
  }
  syncInputs();
  render();
});

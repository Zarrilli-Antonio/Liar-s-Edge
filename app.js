const languages = ['it', 'en', 'fr', 'es'];
const languageLabels = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

const state = {
  libraryName: "Liar's Edge Custom Library",
  defaultLanguage: 'it',
  questions: []
};

const els = {
  libraryName: document.getElementById('libraryName'),
  defaultLanguage: document.getElementById('defaultLanguage'),
  addQuestionBtn: document.getElementById('addQuestionBtn'),
  loadExampleBtn: document.getElementById('loadExampleBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  copyBtn: document.getElementById('copyBtn'),
  questionsContainer: document.getElementById('questionsContainer'),
  jsonPreview: document.getElementById('jsonPreview'),
  questionCount: document.getElementById('questionCount'),
  questionTemplate: document.getElementById('questionTemplate')
};

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
  els.libraryName.value = state.libraryName;
  els.defaultLanguage.value = state.defaultLanguage;
}

function collectStateFromForm() {
  state.libraryName = els.libraryName.value.trim() || "Liar's Edge Custom Library";
  state.defaultLanguage = els.defaultLanguage.value;

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

function updatePreview() {
  const data = buildJson();
  els.jsonPreview.value = JSON.stringify(data, null, 2);
  els.questionCount.textContent = `${data.questions.length} domande`;
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
    idx.textContent = `Domanda ${index + 1}`;

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
  els.copyBtn.textContent = 'Copiato';
  setTimeout(() => (els.copyBtn.textContent = 'Copia'), 1400);
}

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

addQuestion();
render();

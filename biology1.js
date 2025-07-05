document.addEventListener('DOMContentLoaded', () => {
    // --- Quiz Questions Data ---
 // --- Quiz Questions Data ---
const questions = [
  // Genetics
  {
    questionText: "In peas, the allele for tall plant (T) is dominant over dwarf (t). A tall plant is crossed with a dwarf plant. What is the genotype of the tall parent if all offspring are tall?",
    imgURL: null,
    choices: ["TT", "Tt", "tt", "Cannot tell"],
    correctAnswer: "TT",
    markValue: 2,
    difficulty: "medium",
    topic: "Genetics",
    explanation: "If all progeny from a tall × dwarf cross are tall, the tall parent must be homozygous dominant (TT) so they only pass the T allele."
  },
  {
    questionText: "In Mendel’s monohybrid cross (Aa × Aa), the phenotypic ratio in F₂ is:",
    imgURL: null,
    choices: ["9 : 3 : 3", "3 : 1", "1 : 2 : 1", "1 : 1"],
    correctAnswer: "3 : 1",
    markValue: 2,
    difficulty: "medium",
    topic: "Genetics",
    explanation: "In a single-trait (monohybrid) cross, the F₂ phenotypic ratio is 3 dominant : 1 recessive."
  },
  {
    questionText: "A test cross involves crossing an individual with:",
    imgURL: null,
    choices: ["Homozygous dominant", "Homozygous recessive", "Heterozygous", "Self-pollinated"],
    correctAnswer: "Homozygous recessive",
    markValue: 2,
    difficulty: "medium",
    topic: "Genetics",
    explanation: "A test cross uses a homozygous recessive individual to determine the genotype of the unknown (dominant) parent."
  },
  {
    questionText: "Which of the following shows co‑dominance?",
    imgURL: null,
    choices: ["Pea seed shape", "Human blood group AB", "Mendelian round vs wrinkled pea", "Erminette chicken colour"],
    correctAnswer: "Human blood group AB",
    markValue: 2,
    difficulty: "medium",
    topic: "Genetics",
    explanation: "In blood group AB, both A and B alleles are equally expressed, demonstrating co‑dominance."
  },
  {
    questionText: "If a pea plant with genotype RrYy (round yellow) is self‑crossed, what fraction shows round green seeds?",
    imgURL: null,
    choices: ["3/16", "1/16", "3/4", "9/16"],
    correctAnswer: "3/16",
    markValue: 2,
    difficulty: "medium",
    topic: "Genetics",
    explanation: "Round (R_) occurs 3/4 of the time; green (yy) occurs 1/4 of the time; so 3/4 × 1/4 = 3/16."
  },

  // Absorption by Roots
  {
    questionText: "Root hairs increase absorption by:",
    imgURL: null,
    choices: ["Increasing metabolic rate", "Increasing surface area", "Secreting enzymes", "Reducing water potential"],
    correctAnswer: "Increasing surface area",
    markValue: 1,
    difficulty: "easy",
    topic: "Absorption by Roots",
    explanation: "Root hairs maximize contact with soil particles, greatly increasing the surface area available for water and mineral uptake."
  },
  {
    questionText: "Which mechanism helps water move across root cortex cells?",
    imgURL: null,
    choices: ["Transpiration", "Diffusion", "Osmosis", "Guttation"],
    correctAnswer: "Osmosis",
    markValue: 1,
    difficulty: "easy",
    topic: "Absorption by Roots",
    explanation: "Water moves from soil into the root cortex cells through osmosis, from higher to lower water potential."
  },
  {
    questionText: "The Casparian strip in the endodermis:",
    imgURL: null,
    choices: ["Prevents water entering", "Directs water through the symplast", "Stores nutrients", "Causes root pressure"],
    correctAnswer: "Directs water through the symplast",
    markValue: 1,
    difficulty: "easy",
    topic: "Absorption by Roots",
    explanation: "The Casparian strip blocks the apoplastic pathway, forcing water and solutes to enter the symplast for selective uptake."
  },
  {
    questionText: "Which ion is absorbed actively by roots?",
    imgURL: null,
    choices: ["Potassium (K⁺)", "Oxygen", "Glucose", "Water vapour"],
    correctAnswer: "Potassium (K⁺)",
    markValue: 1,
    difficulty: "easy",
    topic: "Absorption by Roots",
    explanation: "Potassium ions are taken up against their concentration gradient via active transport, requiring metabolic energy."
  },
  {
    questionText: "Water potential in the cell sap of root hairs is usually:",
    imgURL: null,
    choices: ["Higher than soil", "Lower than soil", "Equal to soil", "Zero"],
    correctAnswer: "Lower than soil",
    markValue: 1,
    difficulty: "easy",
    topic: "Absorption by Roots",
    explanation: "A more negative (lower) water potential in the cell sap draws water into root hairs from the soil."
  },

  // Transpiration
  {
    questionText: "The primary site of transpiration in a leaf is the:",
    imgURL: null,
    choices: ["Stomata", "Cuticle", "Root hairs", "Xylem vessels"],
    correctAnswer: "Stomata",
    markValue: 2,
    difficulty: "medium",
    topic: "Transpiration",
    explanation: "Most water vapour exits the leaf through stomatal pores on the epidermis."
  },
  {
    questionText: "Transpiration helps in:",
    imgURL: null,
    choices: [
      "Transport of minerals",
      "Cooling leaf surfaces",
      "Maintaining water uptake",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    markValue: 2,
    difficulty: "medium",
    topic: "Transpiration",
    explanation: "Transpiration creates tension in the xylem for mineral transport, cools leaves by evaporation, and sustains water uptake."
  },
  {
    questionText: "Which factor reduces the transpiration rate?",
    imgURL: null,
    choices: [
      "Windy conditions",
      "High temperature",
      "High humidity",
      "Bright sunlight"
    ],
    correctAnswer: "High humidity",
    markValue: 2,
    difficulty: "medium",
    topic: "Transpiration",
    explanation: "When air is already saturated with moisture, the water vapour gradient from leaf to air is reduced, lowering transpiration."
  },
  {
    questionText: "Water can travel from roots to leaves through:",
    imgURL: null,
    choices: ["Phloem", "Xylem", "Cortex", "Phloem parenchyma"],
    correctAnswer: "Xylem",
    markValue: 2,
    difficulty: "medium",
    topic: "Transpiration",
    explanation: "Cohesion‑tension in the xylem vessels pulls water up from roots to leaves."
  },
  {
    questionText: "Guttation differs from transpiration because it:",
    imgURL: null,
    choices: [
      "Evaporates water",
      "Occurs via hydathodes",
      "Occurs only under dry conditions",
      "Only in daytime"
    ],
    correctAnswer: "Occurs via hydathodes",
    markValue: 2,
    difficulty: "medium",
    topic: "Transpiration",
    explanation: "Guttation is the exudation of liquid water droplets at leaf margins through hydathodes, not by evaporation."
  },

  // Photosynthesis
  {
    questionText: "Which gas is released during photosynthesis?",
    imgURL: null,
    choices: ["CO₂", "O₂", "N₂", "H₂"],
    correctAnswer: "O₂",
    markValue: 2,
    difficulty: "medium",
    topic: "Photosynthesis",
    explanation: "Oxygen is produced when water molecules are split during the light-dependent reactions."
  },
  {
    questionText: "The green colour of leaves is due to:",
    imgURL: null,
    choices: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
    correctAnswer: "Chlorophyll",
    markValue: 2,
    difficulty: "medium",
    topic: "Photosynthesis",
    explanation: "Chlorophyll absorbs red and blue light and reflects green light, giving leaves their colour."
  },
  {
    questionText: "The first stable product of the Calvin cycle is:",
    imgURL: null,
    choices: ["Glucose", "ATP", "3‑phosphoglyceric acid (PGA)", "RuBP"],
    correctAnswer: "3‑phosphoglyceric acid (PGA)",
    markValue: 2,
    difficulty: "medium",
    topic: "Photosynthesis",
    explanation: "CO₂ combines with RuBP to form an unstable 6‑carbon intermediate that splits into two molecules of PGA."
  },
  {
    questionText: "In which part of the chloroplast does the Calvin cycle occur?",
    imgURL: null,
    choices: ["Thylakoid membrane", "Stroma", "Grana lamella", "Inner envelope"],
    correctAnswer: "Stroma",
    markValue: 2,
    difficulty: "medium",
    topic: "Photosynthesis",
    explanation: "The stroma contains the enzymes required for the light-independent reactions (Calvin cycle)."
  },
  {
    questionText: "Which of the following is not directly needed for the light reactions?",
    imgURL: null,
    choices: ["Light", "Water", "NADP⁺", "CO₂"],
    correctAnswer: "CO₂",
    markValue: 2,
    difficulty: "medium",
    topic: "Photosynthesis",
    explanation: "CO₂ is fixed during the Calvin cycle, not in the light-dependent reactions."
  }
];
  
  
    // --- DOM Elements ---
    const introSection = document.getElementById('intro-section');
    const studentNameInput = document.getElementById('student-name');
    const startQuizButton = document.getElementById('start-quiz-button');
    const nameErrorDiv = document.getElementById('name-error');

    const quizSection = document.getElementById('quiz-section');
    const quizNavigation = document.getElementById('quiz-navigation');
    const questionCard = document.getElementById('question-card');
    const questionTextElement = document.getElementById('question-text');
    const questionImageElement = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');
    const prevButton = document.getElementById('prev-button');
    const skipButton = document.getElementById('skip-button');
    const nextButton = document.getElementById('next-button');
    const submitQuizButton = document.getElementById('submit-quiz-button');

    const resultsSection = document.getElementById('results-section');
    const resultsStudentName = document.getElementById('results-student-name');
    const totalMarksEarnedElement = document.getElementById('total-marks-earned');
    const totalPossibleMarksElement = document.getElementById('total-possible-marks');
    const percentageScoreElement = document.getElementById('percentage-score');
    const topicBreakdownChartCanvas = document.getElementById('topic-breakdown-chart');
    const reviewCardsContainer = document.getElementById('review-cards-container');
    const reattemptQuizButton = document.getElementById('reattempt-quiz-button');
    const screenshotButton = document.getElementById('screenshot-button');
    const resultsContentToCapture = document.getElementById('results-content-to-capture');
    const performanceBadge = document.getElementById('performance-badge');


    // --- Quiz State Variables ---
    let currentQuestionIndex = 0;
    let studentName = '';
    let answers = []; // Stores chosen string or 'skipped' or null (for unanswered/unskipped)
    let quizChart = null; // To store the Chart.js instance

    // Google Apps Script URL for logging results (REPLACE THIS WITH YOUR ACTUAL DEPLOYED URL)
    const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwI1aazJ2wyo562WGSbmVAD60H_obvrZw0LEsWNr8OlaqrAaJOtiIEoWUvcx-aMBVci/exec'; // e.g., 'https://script.google.com/macros/s/AKfycbz_YOUR_DEPLOYMENT_ID/exec'

    // --- Helper Functions ---

    /**
     * Toggles the visibility of different quiz sections.
     * @param {HTMLElement} sectionToShow - The section to make active.
     */
    function showSection(sectionToShow) {
        document.querySelectorAll('.quiz-section').forEach(section => {
            section.classList.remove('active');
        });
        sectionToShow.classList.add('active');
    }

    /**
     * Initializes the quiz state and UI.
     */
    function initializeQuiz() {
        currentQuestionIndex = 0;
       

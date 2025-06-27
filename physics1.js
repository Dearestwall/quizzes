document.addEventListener('DOMContentLoaded', () => {
    // --- Quiz Questions Data ---
 // --- Quiz Questions Data ---
const questions = [
    {
        questionText: "Observe the given ray diagram for a concave lens. If an object is placed beyond 2F1, what will be the nature and size of the image formed?",
        imgURL: "https://i.ibb.co/8nYpW1CB/image.png",
        choices: ["Virtual, Erect, Diminished", "Real, Inverted, Magnified", "Virtual, Inverted, Diminished", "Real, Erect, Magnified"],
        correctAnswer: "Virtual, Erect, Diminished",
        markValue: 2,
        difficulty: "medium",
        topic: "Light",
        explanation: "A concave lens (diverging lens) always forms a virtual, erect, and diminished image, regardless of the object's position, when the object is real. The image is always formed between the optical center and F1 on the same side as the object."
    },
    {
        questionText: "Consider a circuit where three resistors are connected in series to a battery. How does the current and voltage behave across each resistor?",
        imgURL: null,
        choices: ["Current remains the same, voltage increases across each resistor.", "Current divides, voltage remains the same across each resistor.", "Current remains the same, voltage divides across each resistor.", "Both current and voltage remain the same across each resistor."],
        correctAnswer: "Current remains the same, voltage divides across each resistor.",
        markValue: 1,
        difficulty: "easy",
        topic: "Electricity",
        explanation: "In a series circuit, there is only one path for the current, so the current remains the same through all components. However, the total voltage of the source is divided among the resistors, with the voltage drop across each resistor proportional to its resistance."
    },
    {
        questionText: "Study the characteristics of the electromagnetic spectrum. Which of the following statements is true regarding the electromagnetic spectrum?",
        imgURL: "https://i.ibb.co/HTYXZBhQ/image.png",
        choices: ["Radio waves have the shortest wavelength, while gamma rays have the longest wavelength.", "Visible light is a small part of the spectrum, with violet light having a longer wavelength than red light.", "As you move from radio waves to gamma rays, the wavelength decreases and frequency increases.", "All electromagnetic waves travel at different speeds in a vacuum."],
        correctAnswer: "As you move from radio waves to gamma rays, the wavelength decreases and frequency increases.",
        markValue: 2,
        difficulty: "medium",
        topic: "Light",
        explanation: "The electromagnetic spectrum is ordered by increasing frequency and decreasing wavelength. From radio waves to gamma rays, the energy of the photons also increases. Wavelength and frequency are inversely proportional for electromagnetic waves in a vacuum."
    },
    {
        questionText: "Identify the class of lever represented by a seesaw in action.",
        imgURL: "https://i.ibb.co/Rpjc6kqv/image.png",
        choices: ["Class 1 lever", "Class 2 lever", "Class 3 lever", "Not a lever"],
        correctAnswer: "Class 1 lever",
        markValue: 1,
        difficulty: "easy",
        topic: "Machines",
        explanation: "In a Class 1 lever, the fulcrum (pivot point) is located between the effort (force applied) and the load (resistance/weight being moved). A seesaw is a classic example of a Class 1 lever."
    },
    {
        questionText: "A block of mass 'm' is placed on an inclined plane making an angle θ with the horizontal. Which expression represents the component of gravitational force perpendicular to the inclined plane?",
        imgURL: "https://i.ibb.co/xt8VymV1/image.png",
        choices: ["mg cos θ", "mg sin θ", "mg", "Zero"],
        correctAnswer: "mg cos θ",
        markValue: 5,
        difficulty: "hard",
        topic: "Force",
        explanation: "When an object is on an inclined plane, the gravitational force (mg) acts vertically downwards. This force can be resolved into two components: one perpendicular to the plane (mg cos θ) and one parallel to the plane (mg sin θ). The perpendicular component is balanced by the normal force from the surface."
    },
    {
        questionText: "Which of the following statements about image formation by lenses or mirrors is correct?",
        imgURL: null,
        choices: ["A real image is always inverted.", "A virtual image can be projected onto a screen.", "A convex mirror forms both real and virtual images.", "The focal length of a concave lens is positive."],
        correctAnswer: "A real image is always inverted.",
        markValue: 2,
        difficulty: "medium",
        topic: "Light",
        explanation: "A fundamental characteristic of real images (formed by the actual convergence of light rays) is that they are always inverted with respect to the object. Virtual images cannot be projected onto a screen and are always erect."
    },
    {
        questionText: "What happens to the total resistance of a circuit when more resistors are added in series?",
        imgURL: null,
        choices: ["The resistance decreases.", "The current increases.", "The total resistance increases.", "The voltage across each resistor increases."],
        correctAnswer: "The total resistance increases.",
        markValue: 1,
        difficulty: "easy",
        topic: "Electricity",
        explanation: "In a series circuit, the total resistance is the sum of the individual resistances (R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ...). Therefore, adding more resistors in series directly increases the total resistance of the circuit."
    },
    {
        questionText: "Sound waves with frequencies higher than 20,000 Hz are used in medical imaging and to detect objects underwater. What are these waves called?",
        imgURL: null,
        choices: ["Ultrasound", "Infrasound", "Audible sound", "Supersonic sound"],
        correctAnswer: "Ultrasound",
        markValue: 1,
        difficulty: "easy",
        topic: "Sound",
        explanation: "Ultrasound refers to sound waves that have a frequency greater than 20 kilohertz (20,000 Hz), which is above the range of human hearing. They are used in various applications like medical scans (sonography) and SONAR."
    },
    {
        questionText: "Why is a soft iron core used in the solenoid of an electromagnet?",
        imgURL: null,
        choices: ["It causes the current in the coil to increase.", "It increases the strength of the magnetic field produced by the solenoid.", "It converts the solenoid into a permanent magnet.", "It decreases the magnetic field produced by the solenoid."],
        correctAnswer: "It increases the strength of the magnetic field produced by the solenoid.",
        markValue: 2,
        difficulty: "medium",
        topic: "Electromagnetism",
        explanation: "Soft iron is a ferromagnetic material that can be easily magnetized and demagnetized. When placed inside a solenoid, it concentrates the magnetic field lines passing through the core, thereby significantly increasing the strength of the electromagnet's magnetic field."
    },
    {
        questionText: "Consider a circuit with several light bulbs connected in parallel to a power source. If more light bulbs are added in parallel, what effect will this have on the total current drawn from the source and the total resistance of the circuit?",
        imgURL: "https://i.ibb.co/s97Ymhqx/image.png",
        choices: ["The current will increase, and the total resistance will decrease.", "The current will decrease, and the total resistance will increase.", "The voltage across each resistor will decrease.", "The current through each individual resistor will increase."],
        correctAnswer: "The current will increase, and the total resistance will decrease.",
        markValue: 2,
        difficulty: "medium",
        topic: "Electricity",
        explanation: "In a parallel circuit, adding more resistors (light bulbs) provides additional paths for the current, effectively decreasing the overall (equivalent) resistance of the circuit. According to Ohm's Law (I = V/R), with a constant voltage and decreased total resistance, the total current drawn from the source will increase."
    },
    {
        questionText: "A student uses a convex lens as a magnifying glass. Where must the object be placed relative to the lens to obtain a magnified, virtual, and erect image?",
        imgURL: null,
        choices: ["The object is placed at the principal focus.", "The object is placed between the optical centre and the principal focus.", "The object is placed at 2F<sub>1</sub>.", "The object is placed beyond 2F<sub>1</sub>."],
        correctAnswer: "The object is placed between the optical centre and the principal focus.",
        markValue: 2,
        difficulty: "medium",
        topic: "Light",
        explanation: "For a convex lens to function as a magnifying glass, it must form a magnified, virtual, and erect image. This occurs specifically when the object is placed between the optical centre (O) and the principal focus (F<sub>1</sub>) of the convex lens."
    },
    {
        questionText: "When white light passes through a prism, it splits into its constituent colours (VIBGYOR). Which phenomenon of light is primarily responsible for this observation?",
        imgURL: "https://i.ibb.co/0vj93SX/image.png",
        choices: ["Refraction", "Reflection", "Dispersion", "Diffraction"],
        correctAnswer: "Refraction",
        markValue: 1,
        difficulty: "easy",
        topic: "Light",
        explanation: "The splitting of white light into its constituent colors by a prism is called dispersion. This phenomenon is a consequence of refraction, where different colors of light (having different wavelengths and thus different speeds in the medium) bend at slightly different angles as they pass through the prism."
    },
    {
        questionText: "Fleming's Left-Hand Rule is used to determine the direction of which of the following?",
        imgURL: "https://i.ibb.co/MDdLvb03/image.png",
        choices: ["The force acting on a current-carrying conductor in a magnetic field.", "The direction of induced current in a conductor.", "The direction of magnetic field lines around a current-carrying wire.", "The strength of the magnetic field produced by a solenoid."],
        correctAnswer: "The force acting on a current-carrying conductor in a magnetic field.",
        markValue: 2,
        difficulty: "medium",
        topic: "Electromagnetism",
        explanation: "Fleming's Left-Hand Rule is used to find the direction of the force (or motion) experienced by a current-carrying conductor when it is placed in an external magnetic field. The thumb points to Force, the forefinger to Magnetic Field, and the middle finger to Current (FBI rule)."
    },
    {
        questionText: "When water boils at its boiling point, it absorbs latent heat of vaporization. Which of the following statements correctly describes what happens during this process?",
        imgURL: null,
        choices: ["It is a chemical change.", "The temperature of the boiling water decreases.", "The internal energy of the water molecules increases.", "It occurs at a temperature below the boiling point."],
        correctAnswer: "The internal energy of the water molecules increases.",
        markValue: 2,
        difficulty: "medium",
        topic: "Heat",
        explanation: "During boiling, the temperature of the water remains constant at its boiling point. The absorbed latent heat of vaporization is used to overcome the intermolecular forces, converting liquid water into a gas (steam). This energy increases the potential energy of the molecules, thus increasing the total internal energy of the system."
    },
    {
        questionText: "What is the effect of increasing the amplitude of oscillation of a simple pendulum?",
        imgURL: null,
        choices: ["It increases the period of oscillation.", "It increases the frequency of oscillation.", "It increases the energy of the pendulum.", "It changes the acceleration due to gravity."],
        correctAnswer: "It increases the energy of the pendulum.",
        markValue: 1,
        difficulty: "easy",
        topic: "Waves & Sound",
        explanation: "The amplitude of oscillation is directly related to the energy of the oscillating system. A larger amplitude means the pendulum bob reaches a greater height, implying it possesses more potential energy and therefore has higher total mechanical energy."
    },
    {
        questionText: "Observe the given circuit diagram showing three resistors A, B, and C connected to a battery. Describe the arrangement of these resistors.",
        imgURL: "https://i.ibb.co/9m2nK1kS/image.png",
        choices: ["A and B are in series, C is in parallel with the combination of A and B.", "A, B, and C are all in series.", "A, B, and C are all in parallel.", "A is in parallel with B, and C is in series with the combination."],
        correctAnswer: "A and B are in series, C is in parallel with the combination of A and B.",
        markValue: 5,
        difficulty: "hard",
        topic: "Electricity",
        explanation: "Following the current path, the current flows sequentially through A and then B, indicating they are in series. The current then splits, with one path going through the series combination of A and B, and another through C, signifying that C is in parallel with the equivalent resistance of A and B."
    },
    {
        questionText: "What is the primary energy conversion that takes place in an electric motor?",
        imgURL: null,
        choices: ["It converts electrical energy into mechanical energy.", "It converts mechanical energy into electrical energy.", "It converts chemical energy into electrical energy.", "It converts heat energy into electrical energy."],
        correctAnswer: "It converts electrical energy into mechanical energy.",
        markValue: 1,
        difficulty: "easy",
        topic: "Electromagnetism",
        explanation: "An electric motor operates on the principle of the magnetic effect of electric current. It takes in electrical energy and uses it to produce rotational motion (mechanical energy)."
    },
    {
        questionText: "Which of the following statements accurately represents one of the laws of reflection?",
        imgURL: null,
        choices: ["The angle of incidence is equal to the angle of refraction.", "The incident ray, the reflected ray, and the normal to the surface at the point of incidence all lie in the same plane.", "Light always travels in a straight line in a vacuum.", "The angle of reflection is always greater than the angle of incidence."],
        correctAnswer: "The incident ray, the reflected ray, and the normal to the surface at the point of incidence all lie in the same plane.",
        markValue: 1,
        difficulty: "easy",
        topic: "Light",
        explanation: "The laws of reflection state two things: 1) The angle of incidence is equal to the angle of reflection (∠i = ∠r). 2) The incident ray, the reflected ray, and the normal to the surface at the point of incidence all lie in the same plane."
    },
    {
        questionText: "Which of the following is a correct characteristic or effect of a magnetic field?",
        imgURL: null,
        choices: ["It causes a force on a current-carrying conductor.", "It always induces a current in a stationary conductor.", "Its strength is inversely proportional to the current producing it.", "It can only be produced by permanent magnets."],
        correctAnswer: "It causes a force on a current-carrying conductor.",
        markValue: 2,
        difficulty: "medium",
        topic: "Electromagnetism",
        explanation: "A magnetic field exerts a force on any current-carrying conductor or moving charge placed within it. This principle is fundamental to the operation of electric motors and other electromagnetic devices."
    },
    {
        questionText: "Which statement accurately compares different regions of the electromagnetic spectrum?",
        imgURL: null,
        choices: ["Red light has a shorter wavelength than blue light.", "Gamma rays are visible to the human eye.", "X-rays have higher frequency and shorter wavelength than ultraviolet radiation.", "Microwaves are used for medical imaging like MRI."],
        correctAnswer: "X-rays have higher frequency and shorter wavelength than ultraviolet radiation.",
        markValue: 2,
        difficulty: "medium",
        topic: "Light",
        explanation: "In the electromagnetic spectrum, as you move from radio waves to gamma rays, frequency increases and wavelength decreases. X-rays are positioned after ultraviolet radiation, meaning they have higher frequency and shorter wavelength."
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
        answers = new Array(questions.length).fill(null); // Initialize answers array with nulls
        studentNameInput.value = ''; // Clear name input for re-attempts
        nameErrorDiv.textContent = '';
        nameErrorDiv.classList.remove('active'); // Hide error message on init
        submitQuizButton.style.display = 'none'; // Hide submit button initially
        renderNavigationDots();
        renderQuestion();
    }

    /**
     * Renders the navigation dots (for each question).
     */
    function renderNavigationDots() {
        quizNavigation.innerHTML = '';
        questions.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.dataset.index = index;
            dot.addEventListener('click', () => jumpToQuestion(index));
            quizNavigation.appendChild(dot);
        });
        updateNavigationDots();
    }

    /**
     * Updates the color of navigation dots based on answer status.
     */
    function updateNavigationDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('answered', 'skipped');
            if (answers[index] !== null && answers[index] !== 'skipped') {
                dot.classList.add('answered'); // User has chosen an answer
            } else if (answers[index] === 'skipped') {
                dot.classList.add('skipped'); // Question is explicitly skipped
            }
            if (index === currentQuestionIndex) {
                dot.style.border = '2px solid #9b59b6'; // Highlight current question
            } else {
                dot.style.border = 'none';
            }
        });
    }

    /**
     * Renders the current question's text, image, and choices.
     */
    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        questionTextElement.textContent = question.questionText;

        // Handle image display
        if (question.imgURL) {
            questionImageElement.src = question.imgURL;
            questionImageElement.style.display = 'block';
            questionImageElement.alt = "Question related image"; // Add alt text for accessibility
        } else {
            questionImageElement.src = '';
            questionImageElement.style.display = 'none';
            questionImageElement.alt = "";
        }

        choicesContainer.innerHTML = '';
        question.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice;
            button.addEventListener('click', () => selectChoice(choice));
            choicesContainer.appendChild(button);
        });

        // Highlight selected choice if already answered
        // Only if it's not skipped
        if (answers[currentQuestionIndex] !== null && answers[currentQuestionIndex] !== 'skipped') {
            const selectedChoiceButton = Array.from(choicesContainer.children).find(btn => btn.textContent === answers[currentQuestionIndex]);
            if (selectedChoiceButton) {
                selectedChoiceButton.classList.add('selected');
            }
        }

        // Update skip button text and class
        skipButton.textContent = answers[currentQuestionIndex] === 'skipped' ? 'Unskip' : 'Skip';
        skipButton.classList.toggle('skipped', answers[currentQuestionIndex] === 'skipped');

        updateNavigationButtons();
        updateNavigationDots();
        checkSubmitButtonVisibility();

        // REMOVED: questionCard.scrollTop = 0; // Removed scroll reset
    }

    /**
     * Handles selection of a choice for the current question.
     * @param {string} selectedChoice - The choice string selected by the user.
     */
    function selectChoice(selectedChoice) {
        // If the question was skipped, unskip it first before selecting an answer
        if (answers[currentQuestionIndex] === 'skipped') {
            answers[currentQuestionIndex] = null; // Effectively unskip
        }
        answers[currentQuestionIndex] = selectedChoice;
        renderQuestion(); // Re-render to update selected state, buttons, and dots
    }

    /**
     * Navigates to a specific question, marking intermediate unanswered questions as skipped.
     * @param {number} index - The index of the question to jump to.
     */
    function jumpToQuestion(index) {
        if (index >= 0 && index < questions.length) {
            // Mark unattempted questions between current and target as 'skipped'
            const start = Math.min(currentQuestionIndex, index);
            const end = Math.max(currentQuestionIndex, index);

            for (let i = start + 1; i < end; i++) {
                if (answers[i] === null) { // Only mark as skipped if not already answered or skipped
                    answers[i] = 'skipped';
                }
            }
            currentQuestionIndex = index;
            renderQuestion();
        }
    }

    /**
     * Updates the enabled/disabled state and visibility of "Previous" and "Next" buttons.
     */
    function updateNavigationButtons() {
        prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    }

    /**
     * Moves to the next question.
     */
    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        }
    }

    /**
     * Moves to the previous question.
     */
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    }

    /**
     * Toggles the "skipped" status for the current question and advances to the next.
     */
    function toggleSkipQuestion() {
        if (answers[currentQuestionIndex] === 'skipped') {
            answers[currentQuestionIndex] = null; // Unskip
        } else {
            answers[currentQuestionIndex] = 'skipped'; // Skip
        }
        // Auto-redirect to next question if not at the end
        if (currentQuestionIndex < questions.length - 1) {
            nextQuestion();
        } else {
            renderQuestion(); // Re-render current question to update skip button text/dot color
        }
    }

    /**
     * Checks if all questions have been answered or skipped and updates submit button visibility.
     */
    function checkSubmitButtonVisibility() {
        const allAddressed = answers.every(answer => answer !== null);
        submitQuizButton.style.display = allAddressed ? 'block' : 'none';
    }

    /**
     * Submits the quiz, calculates results, and displays the results section.
     */
    function submitQuiz() {
        showSection(resultsSection);
        displayResults();
        logQuizResult(); // Log results to Google Apps Script
    }

    /**
     * Calculates and displays the quiz results using review cards.
     */
    function displayResults() {
        let totalMarksEarned = 0;
        let totalPossibleMarks = 0;
        const topicScores = {}; // To store correct/attempted counts per topic

        // Initialize topic scores and calculate total possible marks
        questions.forEach(q => {
            if (!topicScores[q.topic]) {
                topicScores[q.topic] = { correct: 0, attempted: 0 };
            }
            totalPossibleMarks += q.markValue;
        });

        reviewCardsContainer.innerHTML = ''; // Clear previous results

        questions.forEach((question, index) => {
            const studentAnswer = answers[index];
            const isCorrect = (studentAnswer === question.correctAnswer);
            let marksEarned = 0;

            const card = document.createElement('div');
            card.classList.add('review-card');

            // Determine card color based on answer status
            if (studentAnswer === 'skipped') {
                card.classList.add('skipped-card');
            } else if (isCorrect) {
                card.classList.add('correct');
            } else {
                card.classList.add('wrong');
            }

            card.innerHTML = `
                <h3>Question ${index + 1}</h3>
                <p class="question-statement">${question.questionText}</p>
                <p><strong>Difficulty:</strong> ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}</p>
                <p><strong>Your Answer:</strong> <span class="your-answer">${studentAnswer === 'skipped' ? 'Skipped' : (studentAnswer || 'Unanswered')}</span></p>
                <p><strong>Correct Answer:</strong> <span class="correct-answer">${question.correctAnswer}</span></p>
                <p class="marks-earned">Marks Earned: ${marksEarned}</p>
                <div class="explanation">
                    <p><strong>Explanation:</strong> ${question.explanation}</p>
                </div>
                <span class="toggle-explanation">Show Explanation</span>
            `;

            // Update marks earned and topic scores
            if (studentAnswer === 'skipped') {
                // Marks earned is already 0
                card.querySelector('.marks-earned').textContent = 'Marks Earned: 0';
            } else {
                if (isCorrect) {
                    marksEarned = question.markValue;
                    totalMarksEarned += marksEarned;
                    topicScores[question.topic].correct++;
                }
                card.querySelector('.marks-earned').textContent = `Marks Earned: ${marksEarned}`;
                if (studentAnswer !== null) { // Only count if they actually tried to answer (not just null from initialization)
                    topicScores[question.topic].attempted++;
                }
            }

            // Add event listener to toggle explanation
            const toggleButton = card.querySelector('.toggle-explanation');
            const explanationDiv = card.querySelector('.explanation');
            toggleButton.addEventListener('click', () => {
                explanationDiv.classList.toggle('active');
                toggleButton.textContent = explanationDiv.classList.contains('active') ? 'Hide Explanation' : 'Show Explanation';
            });

            reviewCardsContainer.appendChild(card);
        });

        resultsStudentName.textContent = studentName;
        totalMarksEarnedElement.textContent = totalMarksEarned;
        totalPossibleMarksElement.textContent = totalPossibleMarks;
        const percentage = totalPossibleMarks === 0 ? 0 : ((totalMarksEarned / totalPossibleMarks) * 100).toFixed(2);
        percentageScoreElement.textContent = percentage;

        renderPerformanceBadge(parseFloat(percentage)); // Render the new badge
        renderTopicBreakdownChart(topicScores);
    }

    /**
     * Renders a performance badge based on the score percentage.
     * @param {number} percentage - The student's score percentage.
     */
    function renderPerformanceBadge(percentage) {
        let badgeText = '';
        let badgeClass = '';

        if (percentage >= 90) {
            badgeText = 'Excellent Performance!';
            badgeClass = 'excellent';
        } else if (percentage >= 70) {
            badgeText = 'Good Job!';
            badgeClass = 'good';
        } else if (percentage >= 50) {
            badgeText = 'Average Score';
            badgeClass = 'average';
        } else {
            badgeText = 'Keep Practicing!';
            badgeClass = 'needs-improvement';
        }

        performanceBadge.textContent = badgeText;
        // Clear previous classes and add the new one
        performanceBadge.className = 'performance-badge ' + badgeClass;
    }

    /**
     * Renders the Chart.js bar chart for topic breakdown.
     * @param {object} topicScores - An object containing correct and attempted counts per topic.
     */
    function renderTopicBreakdownChart(topicScores) {
        const topics = Object.keys(topicScores);
        const correctCounts = topics.map(topic => topicScores[topic].correct);
        const attemptedCounts = topics.map(topic => topicScores[topic].attempted);

        if (quizChart) {
            quizChart.destroy(); // Destroy previous chart instance if it exists
        }

        quizChart = new Chart(topicBreakdownChartCanvas, {
            type: 'bar',
            data: {
                labels: topics,
                datasets: [
                    {
                        label: 'Correct Answers',
                        data: correctCounts,
                        backgroundColor: 'rgba(40, 167, 69, 0.6)', // Green
                        borderColor: 'rgba(40, 167, 69, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Attempted Questions',
                        data: attemptedCounts,
                        backgroundColor: 'rgba(52, 152, 219, 0.6)', // Blue
                        borderColor: 'rgba(52, 152, 219, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Questions'
                        },
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Topic'
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.raw;
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    /**
     * Handles taking a screenshot of the results content.
     */
    function takeScreenshot() {
        if (!resultsContentToCapture) {
            console.error("Screenshot target element not found!");
            alert("Could not find the content to screenshot. Please try again.");
            return;
        }

        // Temporarily hide scrollbars if they appear on the main body
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        html2canvas(resultsContentToCapture, {
            scale: window.devicePixelRatio,
            logging: false,
            useCORS: true,
            // You might need to set `ignoreElements` if there are interactive elements
            // like the Chart.js tooltip that appear on hover and shouldn't be captured.
            // ignoreElements: (element) => element.classList.contains('chartjs-tooltip'),
        }).then(canvas => {
            document.body.style.overflow = originalOverflow; // Restore overflow

            const link = document.createElement('a');
            link.download = `${studentName}_quiz_results_${new Date().toLocaleDateString('en-CA')}.png`; // 'en-CA' for YYYY-MM-DD
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch(error => {
            document.body.style.overflow = originalOverflow; // Restore overflow on error
            console.error("Error taking screenshot:", error);
            alert("Failed to take screenshot. Please ensure all content is loaded and try again. Error: " + error.message);
        });
    }

    /**
     * Logs the quiz result (student name and answers array) to Google Apps Script via fetch POST.
     */
    async function logQuizResult() {
        const resultData = {
            studentName: studentName,
            timestamp: new Date().toISOString(),
            answers: answers,
            totalMarksEarned: totalMarksEarnedElement.textContent,
            totalPossibleMarks: totalPossibleMarksElement.textContent,
            percentageScore: percentageScoreElement.textContent,
        };

        if (APPS_SCRIPT_WEB_APP_URL === 'https://script.google.com/macros/s/AKfycbwI1aazJ2wyo562WGSbmVAD60H_obvrZw0LEsWNr8OlaqrAaJOtiIEoWUvcx-aMBVci/exec') {
            console.warn("Please replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE' with your actual Google Apps Script Web App URL to enable logging.");
            return;
        }

        try {
            const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resultData),
            });
            console.log('Quiz result sent to Google Apps Script. (Check Apps Script logs for confirmation)');
        } catch (error) {
            console.error('Error sending quiz result to Google Apps Script:', error);
        }
    }


    // --- Event Listeners ---
    startQuizButton.addEventListener('click', () => {
        studentName = studentNameInput.value.trim();
        if (studentName) {
            nameErrorDiv.classList.remove('active'); // Hide error if successful
            nameErrorDiv.textContent = '';
            showSection(quizSection);
            initializeQuiz();
        } else {
            nameErrorDiv.textContent = 'Please enter your name to start the quiz.';
            nameErrorDiv.classList.add('active'); // Show error
            studentNameInput.focus(); // Focus on the input field
        }
    });

    // Clear error message when user starts typing
    studentNameInput.addEventListener('input', () => {
        if (studentNameInput.value.trim() !== '') {
            nameErrorDiv.classList.remove('active');
            nameErrorDiv.textContent = '';
        }
    });


    prevButton.addEventListener('click', prevQuestion);
    nextButton.addEventListener('click', nextQuestion);
    skipButton.addEventListener('click', toggleSkipQuestion);
    submitQuizButton.addEventListener('click', submitQuiz);
    reattemptQuizButton.addEventListener('click', () => {
        showSection(introSection);
        if (quizChart) {
            quizChart.destroy(); // Destroy chart when re-attempting
            quizChart = null;
        }
    });

    screenshotButton.addEventListener('click', takeScreenshot);

    // --- Initial Setup ---
    showSection(introSection); // Show intro screen on load
});

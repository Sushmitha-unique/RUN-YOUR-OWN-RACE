const quizData = [
    {
      question: ' The total spin resulting from a d7 configuration',
      options: ['+1', '+3', '2', '7'],
      answer: '+3',
    },
    {
      question: 'Paulis exclusion principle states that',
      options: ['Nucleus of an atom contains no negative charge',
       'Electrons move in circular orbits around the nucleus',
        'Electrons occupy orbitals of lowest energy', 
        'All the four quantum numbers of two electrons in an atom cannot be equal'],
      answer: '7All the four quantum numbers of two electrons in an atom cannot be equal',
    },
    {
      question: 'Which of the following principles/rules limits the maximum number of electrons in an orbital to two',
      options: ['Aufbau principle', 'Pauli exclusion principle', 'Hunds rule of maximum multiplicity', 'Heisenbergs uncertainty principle'],
      answer: 'Pauli exclusion principle',
    },
    {
      question: 'Threshold energy is also called',
      options: ['work function', 'potential energy', 'kinetic enery', 'sum of (P.E) and (K.E)'],
      answer: 'work function',
    },
    {
      question: 'Assuming the velocity to be same, which sub-atomic particle possesses smallest de Broglie wavelength',
      options: [
        'An electron ',
        ' A proton',
        'An alpha particle',
        'All have same wavelength',
      ],
      answer: 'An alpha particle',
    },
    {
      question: ' By what factor the velocity of an electron in a Bohrs orbit for a hydrogen atom will change if the value of principal quantum number is doubled?',
      options: ['Velocity is halved', 'Velocity is doubled', 'Velocity is quadrupled', 'Velocity remains unchanged'],
      answer: 'Velocity is halved',
    },
    {
      question: 'The atomic number of an element represents',
      options: [
        ' Number of neutrons in the nucleus ',
        'Number of protons in the nucleus',
        'Atomic weight of element',
        'Valency of element',
      ],
      answer: 'Number of protons in the nucleus',
    },
    {
      question: 'Bohr model can explain spectrum of',
      options: ['the hydrogen atom only', 'an atom or ion having one electron only', 'the hydrogen molecule only', 'the sodium atom only'],
      answer: 'an atom or ion having one electron only',
    },
    {
      question: 'Which electronic level would allow the hydrogen atom to absorb a photon but not to emit a photon',
      options: [
        '3s',
        '2p',
        '2s',
        '1s',
      ],
      answer: '1s',
    },
    {
      question: 'The principle and azimuthal quantum number of electrons in 4f orbitals are',
      options: ['4,2', '4,4', '4,3', '3,4'],
      answer: '4,3',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
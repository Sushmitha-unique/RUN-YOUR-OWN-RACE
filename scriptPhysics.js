const quizData = [
    {
      question: ' If x = at + bt2, where x is the distance travelled by the body in kilometers while t is the time in seconds, then the unit of b is',
      options: ['km/s', 'kms', 'km/s2', 'kms2'],
      answer: 'km/s2',
    },
    {
      question: 'The pair of physical quantities that has the different dimensions is :',
      options: ['Reynolds number and coefficient of friction', 'Curie and frequency of a light wave', 'Latent heat and gravitational potential', 'Plancks constant and torque'],
      answer: 'Plancks constant and torque',
    },
    {
      question: 'The relative error in the determination of the surface area of a sphere is a. Then the relative error in the determination of its volume is',
      options: ['2/3a', '22/3a', '3/2a', 'a'],
      answer: '3/2a',
    },
    {
      question: 'The current voltage relation of a diode is given by I = (e1000 V/T  1) mA, where the applied voltage V is in volts and the temperature T is in degree kelvin. If a student makes an error measuring 0.01 ± V while measuring the current of 5 mA at 300 K, what will be the error in the value of current in mA?',
      answer: '0.2',
    },
    {
      question: 'The density of a material in SI unit is 128 kg m3. In certain units in which the unit of length is 25 cm and the unit of mass is 50 g, the numerical value of density of the material is:',
      answer: '40',
    },
    {
      question: ' If the screw on a screw-gauge is given six rotations, it moves by 3 mm on the main scale. If there are 50 divisions on the circular scale the least count (in cm) of the screw gauge is:',
      answer: '0.001',
    },
    {
      question: 'A particle of mass 0.3 kg subject to a force F =  kx with k = 15 N/m . What will be its initial acceleration if it is released from a point 20 cm away from the origin ?',
      options: [
        ' 15  m/s2',
        '3  m/s2 ',
        '10  m/s2',
        '5  m/s2',
      ],
      answer: '10 m/s2',
    },
    {
      question: 'A lift is moving down with acceleration a. A man in the lift drops a ball inside the lift. The acceleration of the ball as observed by the man in the lift and a man standing stationary on the ground are respectively',
      options: ['g, g', 'g  a, g  a', 'g  a, g', 'a, g'],
      answer: 'g  a, g',
    },
    {
      question: 'A body of mass 2kg  slides down with an acceleration of  3m/s2 on a rough inclined plane having a slope of  30°. The external force required to take the same body up the plane with the same acceleration will be: (g = 10m/s2)',
      options: [
        '4N',
        '14N',
        '6N',
        '20N',
      ],
      answer: '20N',
    },
    {
      question:'A ball of mass 0.2 kg is thrown vertically upwards by applying a force by hand. If the hand moves 0.2 m while applying the force and the ball goes upto 2 m height further, find the magnitude of the force. (Consider g = 10 m/s2).',
      options: ['4N', '16N', '20N', '22N'],
      answer: '22N',
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
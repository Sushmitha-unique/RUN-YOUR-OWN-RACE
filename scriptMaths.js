const quizData = [
    {
      question: ' If the coefficient of x7 in ( ax2 + 1/bx)11 is equal to the coefficient of x7 in (ax  1/bx2)11 , then ab',
      options: ['1', '1/2', '2', '3'],
      answer: '1',
    },
    {
      question: 'If the probability density function of a random variable X is f(x) = x/2 in 0 d x d 2, then P(X > 1.5 | X > 1) is equal to',
      options: ['7/16', '3/4', '7/12', '21/64'],
      answer: '7/12',
    },
    {
      question: 'The product of perpendiculars drawn from the origin to the lines represented by the equation, ax2 + 2hxy + by2 + 2gx + 2fy + c = 0, will be',
      options: ['ab/root(a^2-b^2+4h^2)', 'bc/root(a^2-b^2+4h^2)', 'ca/root(a^2+b^2+4h^2)', 'c/root(a^2-b^2+4h^2)'],
      answer: 'c/root(a^2-b^2+4h^2)',
    },
    {
      question: 'If two distinct chords, drawn from the point (p, q) on the circle x2 + y2 = px + qy, (where pq ` 0) are bisected by the x-axis, then',
      options: ['p2 = q2', 'p2 = 8q2', 'p2 < 8q2', 'p2 > 8q2'],
      answer: 'p2 > 8q2',
    },
    {
      question: 'A circle C1 of radius 2 touches both x-axis and y-axis. Another circle C2 whose radius is greater than 2 touches circle C1 and both the axes. Then the radius of circle C2 is',
      options: [
        ' 6  42',
        ' 6 + 42',
        '6  43',
        '6 + 43',
      ],
      answer: '6 + 42',
    },
    {
      question: ' If tan ¸= sin ±  cos ± / sin ± + cos ± , then sin± + cos± and sin±  cos± must be equal to ',
      options: ['2 cos ¸,2 sin ¸', '2 sin ¸ , 2 cos ¸', '2 sin ¸, 2 sin ¸', '2 cos ¸, 2 cos ¸'],
      answer: '2 cos ¸,2 sin ¸',
    },
    {
      question: 'A pair of straight lines drawn through the origin form with the line 2x + 3y = 6 an isosceles right angled triangle, then the area of the triangle thus formed is',
      options: [
        '  = 36/13 ',
        ' = 12/17 ',
        ' = 13/5',
        'none of these',
      ],
      answer: ' = 36/13',
    },
    {
      question: 'In a school 80 students like chocolate, 40 like coffee if the number of students doesnt like any of them is equal to the number of students who like both of them then what is the total number of students in the school?',
      options: ['115', '90', '120', 'None of these'],
      answer: '120',
    },
    {
      question: 'Let A = {q : sin(q) = tan(q)} and B = {q : cos(q) = 1} be two sets. Then :',
      options: [
        'A = B',
        'A not a subset of B',
        'B not a subset of A',
        'A is subset of B and B-A != null',
      ],
      answer: 'A not a subset of B',
    },
    {
      question: 'In a college of 300 students every student reads 5 newspapers and every newspaper is read by 60 students. The number of newpapers is',
      options: ['at least 30', 'at most 20', 'exactly 25', 'None of these'],
      answer: 'exactly 25',
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
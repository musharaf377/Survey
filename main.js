
    
    function startSurvey() {
    document.getElementById('introSection').style.display = 'none';
    document.getElementById('surveyContent').style.display = 'block';
  }

  const surveyData = [{
      segment: "Communication & Collaboration",
      icon: "🔴",
      iconClass: "red",
      questions: [{
          question: "How would you rate your ability to explain your design decisions?",
          options: [{
              text: "I mostly rely on visuals to speak for themselves",
              points: 1
            },
            {
              text: "I try to explain my design, but it often lacks structure",
              points: 2
            },
            {
              text: "I explain design choices clearly when asked",
              points: 3
            },
            {
              text: "I proactively explain my decisions using logic and user context",
              points: 4
            }
          ]
        },
        {
          question: "When presenting your design to a team or client:",
          options: [{
              text: "I avoid presenting; I prefer others to handle it",
              points: 1
            },
            {
              text: "I present occasionally but feel unsure while speaking",
              points: 2
            },
            {
              text: "I share designs with some confidence",
              points: 3
            },
            {
              text: "I lead presentations, guiding the conversation and feedback",
              points: 4
            }
          ]
        },
        {
          question: "During team critiques or discussions, I usually:",
          options: [{
              text: "Listen silently, I feel too new to contribute",
              points: 1
            },
            {
              text: "Share small opinions if asked directly",
              points: 2
            },
            {
              text: "Ask questions and offer feedback if I have ideas",
              points: 3
            },
            {
              text: "Actively participate and help improve designs",
              points: 4
            }
          ]
        },
        {
          question: "My use of AI in design includes:",
          options: [{
              text: "I haven't explored AI tools much yet",
              points: 1
            },
            {
              text: "I sometimes use ChatGPT or images for inspiration",
              points: 2
            },
            {
              text: "I use AI for ideation and wireframes",
              points: 3
            },
            {
              text: "I integrate AI across the workflow from research to delivery",
              points: 4
            }
          ]
        },
        {
          question: "When reviewing a poor design file:",
          options: [{
              text: "I struggle to notice what's wrong",
              points: 1
            },
            {
              text: "I notice problems but can't suggest solutions",
              points: 2
            },
            {
              text: "I suggest a few layout or spacing improvements",
              points: 3
            },
            {
              text: "I break down usability and business misalignments clearly",
              points: 4
            }
          ]
        }
      ]
    },
    {
      segment: "Visual Judgment & Process Awareness",
      icon: "🟡",
      iconClass: "yellow",
      questions: [{
          question: "How well do you understand Musemind's visual identity?",
          options: [{
              text: "I haven't studied it closely yet",
              points: 1
            },
            {
              text: "I've seen some work but didn't analyze details",
              points: 2
            },
            {
              text: "I try to follow their style when I design",
              points: 3
            },
            {
              text: "I've studied their portfolio and can replicate their style",
              points: 4
            }
          ]
        },
        {
          question: "How often do you check Musemind's Dribbble/Behance?",
          options: [{
              text: "Rarely—maybe once or twice",
              points: 1
            },
            {
              text: "Occasionally, when I remember",
              points: 2
            },
            {
              text: "A few times a month to get inspired",
              points: 3
            },
            {
              text: "I check weekly or before starting any project",
              points: 4
            }
          ]
        },
        {
          question: "When working on a UI kit or component system:",
          options: [{
              text: "I've never created or worked on one",
              points: 1
            },
            {
              text: "I can build components but struggle with logic",
              points: 2
            },
            {
              text: "I reuse and extend components properly",
              points: 3
            },
            {
              text: "I contribute to and organize design systems efficiently",
              points: 4
            }
          ]
        },
        {
          question: "Can you recreate a past Musemind project pixel-perfectly?",
          options: [{
              text: "No, I haven't tried that before",
              points: 1
            },
            {
              text: "I can make a rough version with similar layout",
              points: 2
            },
            {
              text: "Yes, with good precision but not exact",
              points: 3
            },
            {
              text: "Yes, I can match visuals and structure closely",
              points: 4
            }
          ]
        },
        {
          question: "How aware are you of dev handoff constraints?",
          options: [{
              text: "I don't know how dev handoff works",
              points: 1
            },
            {
              text: "I export assets and hope devs figure it out",
              points: 2
            },
            {
              text: "I annotate files and inspect for spacing/responsiveness",
              points: 3
            },
            {
              text: "I prepare dev-friendly files and ensure feasibility",
              points: 4
            }
          ]
        },
        {
          question: "When you receive feedback from a senior designer:",
          options: [{
              text: "I feel defensive or confused",
              points: 1
            },
            {
              text: "I listen but forget what to change",
              points: 2
            },
            {
              text: "I apply it and try to learn the reasoning",
              points: 3
            },
            {
              text: "I welcome it and often ask deeper questions",
              points: 4
            }
          ]
        },
        {
          question: "Do you understand how product decisions are made?",
          options: [{
              text: "Not really, I focus only on visuals",
              points: 1
            },
            {
              text: "I've heard terms but not sure how it works",
              points: 2
            },
            {
              text: "I know about user needs and market fit",
              points: 3
            },
            {
              text: "I consider business goals and product impact in my designs",
              points: 4
            }
          ]
        }
      ]
    },
    {
      segment: "Resume, Projects & Applying",
      icon: "🔵",
      iconClass: "blue",
      questions: [{
          question: "What does your current resume look like?",
          options: [{
              text: "I haven't made a design-specific resume yet",
              points: 1
            },
            {
              text: "It's 2+ pages with mixed focus",
              points: 2
            },
            {
              text: "It's 1-page but a bit wordy",
              points: 3
            },
            {
              text: "A focused, 1-page resume highlighting key skills and projects",
              points: 4
            }
          ]
        },
        {
          question: "Do you have at least 2 solid case studies?",
          options: [{
              text: "Not yet, I'm working on them",
              points: 1
            },
            {
              text: "I have visual projects but no real case studies",
              points: 2
            },
            {
              text: "I've written some with process insights",
              points: 3
            },
            {
              text: "Yes—strong, thoughtful, and clear case studies",
              points: 4
            }
          ]
        },
        {
          question: "Do your projects show focus (SaaS, mobile, etc.)?",
          options: [{
              text: "My projects are random (logo, posters, etc.)",
              points: 1
            },
            {
              text: "A few mobile/web UIs, not connected to product use",
              points: 2
            },
            {
              text: "Most projects focus on SaaS or digital tools",
              points: 3
            },
            {
              text: "My projects match Musemind's niches clearly",
              points: 4
            }
          ]
        }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let answers = [];
  let allQuestions = [];

  function initializeSurvey() {
    surveyData.forEach((segment, segmentIndex) => {
      segment.questions.forEach((question, questionIndex) => {
        allQuestions.push({
          ...question,
          segment: segment.segment,
          segmentIcon: segment.icon,
          segmentIconClass: segment.iconClass,
          isFirstInSegment: questionIndex === 0
        });
      });
    });

    displayQuestion();
  }

  function displayQuestion() {
    const questionSection = document.getElementById('questionSection');
    const question = allQuestions[currentQuestionIndex];

    let segmentHeader = '';
    if (question.isFirstInSegment) {
      segmentHeader = `
                    <div class="segment-header">
                        <div class="segment-icon ${question.segmentIconClass}">${question.segmentIcon}</div>
                        <div class="segment-title">${question.segment}</div>
                    </div>
                `;
    }

    questionSection.innerHTML = `
                ${segmentHeader}
                <h2>${question.question}</h2>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" onclick="selectOption(${index})" data-index="${index}">
                            <div class="option-label">Option ${String.fromCharCode(65 + index)}</div>
                            <div class="option-text">${option.text}</div>
                        </div>
                    `).join('')}
                </div>
            `;

    if (answers[currentQuestionIndex] !== undefined) {
      selectOption(answers[currentQuestionIndex], false);
    }

    updateProgress();
    updateNavigation();

    questionSection.classList.remove('fade-in');
    setTimeout(() => questionSection.classList.add('fade-in'), 10);
  }

  function selectOption(optionIndex, shouldUpdateNavigation = true) {
    document.querySelectorAll('.option').forEach(option => {
      option.classList.remove('selected');
    });

    const selectedOption = document.querySelector(`[data-index="${optionIndex}"]`);
    selectedOption.classList.add('selected');

    answers[currentQuestionIndex] = optionIndex;

    if (shouldUpdateNavigation) {
      updateNavigation();
    }
  }

  function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent =
      `Question ${currentQuestionIndex + 1} of ${allQuestions.length}`;
  }

  function updateNavigation() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.disabled = currentQuestionIndex === 0;

    const hasAnswer = answers[currentQuestionIndex] !== undefined;
    nextButton.disabled = !hasAnswer;

    if (currentQuestionIndex === allQuestions.length - 1) {
      nextButton.textContent = 'Show Results →';
    } else {
      nextButton.textContent = 'Next →';
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion();
    }
  }

  function nextQuestion() {
    if (answers[currentQuestionIndex] !== undefined) {
      if (currentQuestionIndex < allQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
      } else {
        showResults();
      }
    }
  }

  function getScoreMessage(score) {
    if (score >= 50 && score <= 60) {
      return "Ready for Application: You align with how Musemind works. Apply with confidence.";
    } else if (score >= 40 && score <= 49) {
      return "Almost Ready: Strong direction! Strengthen your case studies, clarity, and team collaboration. You’re close.";
    } else if (score >= 30 && score <= 39) {
      return "On the Path: You’re learning the right things—focus on polish, communication, and quality. You’re moving in the right direction.";
    } else {
      return "Getting Started: Time to build foundational skills and explore the Musemind design mindset. Focus on consistent learning and exposure.";
    }
  }

  function showResults() {
    const totalScore = calculateTotalScore();
    const segmentScores = calculateSegmentScores();

    document.getElementById('questionSection').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';

    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';

    resultsSection.innerHTML = `
                <div class="score-display">${totalScore}</div>
                <div class="score-label">Total Score out of ${allQuestions.length * 4}</div>
                <div class="score-message">${getScoreMessage(totalScore)}</div>
                
                <div class="score-breakdown">
                    <h3 style="margin-bottom: 16px; color: #374151; font-size: 18px;">Score Breakdown</h3>
                    ${segmentScores.map(segment => `
                        <div class="breakdown-item">
                            <div class="breakdown-label">${segment.name}</div>
                            <div class="breakdown-score">${segment.score}/${segment.maxScore}</div>
                        </div>
                    `).join('')}
                </div>
                
                <button class="view-details-btn" onclick="showAnswerDetails()">
                    View Answer Details
                </button>
                <button class="restart-button" onclick="restartSurvey()">
                    Take Survey Again
                </button>
            `;
  }

  function showAnswerDetails() {
    const modal = document.getElementById('answerModal');
    const modalContent = document.getElementById('modalAnswers');

    let answersHTML = '';
    answers.forEach((answerIndex, questionIndex) => {
      const question = allQuestions[questionIndex];
      const selectedAnswer = question.options[answerIndex];

      answersHTML += `
                    <div class="answer-item">
                        <div class="answer-details">
                            <div class="question-text">Q${questionIndex + 1}: ${question.question}</div>
                            <div class="answer-text">${selectedAnswer.text}</div>
                        </div>
                        <div class="answer-points">${selectedAnswer.points}</div>
                    </div>
                `;
    });

    modalContent.innerHTML = answersHTML;
    modal.classList.add('show');
  }

  function closeModal() {
    const modal = document.getElementById('answerModal');
    modal.classList.remove('show');
  }

  function calculateTotalScore() {
    return answers.reduce((total, answerIndex, questionIndex) => {
      const question = allQuestions[questionIndex];
      return total + question.options[answerIndex].points;
    }, 0);
  }

  function calculateSegmentScores() {
    const scores = [];
    let questionIndex = 0;

    surveyData.forEach(segment => {
      let segmentScore = 0;
      const segmentQuestionCount = segment.questions.length;

      for (let i = 0; i < segmentQuestionCount; i++) {
        const answerIndex = answers[questionIndex + i];
        const question = allQuestions[questionIndex + i];
        segmentScore += question.options[answerIndex].points;
      }

      scores.push({
        name: segment.segment,
        score: segmentScore,
        maxScore: segmentQuestionCount * 4
      });

      questionIndex += segmentQuestionCount;
    });

    return scores;
  }

  function restartSurvey() {
    currentQuestionIndex = 0;
    answers = [];
    
    document.getElementById('introSection').style.display = 'block';
    document.getElementById('surveyContent').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
  }

  initializeSurvey();
import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: 'Solve for x. 2x−6=14',
      answerOptions: [
        { answerText: 'x=20', isCorrect: false },
        { answerText: 'x=30', isCorrect: false },
        { answerText: 'x=10', isCorrect: true },
        { answerText: 'x=8', isCorrect: false },
      ],
    },
    {
      questionText: 'Solve 2+3',
      answerOptions: [
        { answerText: '8', isCorrect: false },
        { answerText: '5', isCorrect: true },
        { answerText: '10', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      questionText: 'What is 20*4',
      answerOptions: [
        { answerText: '80', isCorrect: true },
        { answerText: '0', isCorrect: false },
        { answerText: '100', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: 'What is 2+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 5+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 1+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '3', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 2*2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 2+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 2/2',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '1', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 5*2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '10', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 6*2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '12', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 5+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 12/2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '6', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 11/2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '5', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 8+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '10', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 7+2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '9', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  randomArrayShuffle(questions);
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

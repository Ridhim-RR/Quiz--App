import React, { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  function handleClick(isCorrect) {
    if (isCorrect) {
      setScore((prevValue) => {
        return ++prevValue;
      });
    }

    if (currentIndex === questions.length - 1) {
      setFinishedQuiz(true);
    } else {
      setCurrentIndex((prevValue) => {
        return prevValue + 1;
      });
    }
  }
  return (
    <div className="app">
      {finishedQuiz ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentIndex + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentIndex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentIndex].answerOptions.map((ans) => {
              return (
                <button onClick={() => handleClick(ans.isCorrect)}>
                  {ans.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

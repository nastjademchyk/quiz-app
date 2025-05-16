import StartBtn from '../StartBtn/StartBtn';
import s from './Quiz.module.css';
import React, { useState } from 'react';

const Quiz = ({ questions, onRetake }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = index => {
    setSelected(index);
    if (index === questions[currentIndex].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>
          Your score: {score} out of {questions.length}
        </p>
        <StartBtn text="Retake" onClick={onRetake} />
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className={s.quiz}>
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, idx) => (
          <li className={s.list} key={idx}>
            <button
              className={`${s.questions} ${
                selected !== null
                  ? idx === currentQuestion.correctIndex
                    ? s.correct
                    : selected === idx
                    ? s.incorrect
                    : ''
                  : ''
              }`}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <button className={s.next} onClick={handleNext}>
          {currentIndex + 1 < questions.length ? 'Next' : 'Finish'}
        </button>
      )}
    </div>
  );
};

export default Quiz;

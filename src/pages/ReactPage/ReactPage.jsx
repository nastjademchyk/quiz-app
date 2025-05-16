import s from './ReactPage.module.css';
import StartBtn from '../../components/StartBtn/StartBtn.jsx';
import Quiz from '../../components/Quiz/Quiz.jsx';
import { useState } from 'react';
import { reactQuestions } from '../../data/reactquestions.js';
import { useTimer } from 'react-timer-hook';
import { FaReact } from 'react-icons/fa';

const ReactPage = () => {
  const [started, setStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizKey, setQuizKey] = useState(0);
  const time = new Date();
  time.setMinutes(time.getMinutes() + 10);

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      setQuizFinished(true);
    },
  });

  const handleStart = () => {
    setStarted(true);
    restart(time);
  };

  const handleRetake = () => {
    setQuizFinished(false);
    setQuizKey(prevKey => prevKey + 1);
    const newTime = new Date();
    newTime.setMinutes(newTime.getMinutes() + 10);
    restart(newTime, true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1>React Quiz</h1>
        <FaReact size={30} />
      </div>

      {!started && (
        <>
          <p className={s.text}>
            This quiz will test your React knowledge. Press Start to begin.
          </p>
          <StartBtn text="Start" onClick={handleStart} />
        </>
      )}

      {started && !quizFinished && (
        <>
          <div className={s.timer}>
            ⏱ Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <Quiz
            key={quizKey}
            questions={reactQuestions}
            onRetake={handleRetake}
            onFinish={() => setQuizFinished(true)}
          />
        </>
      )}

      {quizFinished && (
        <div className={s.result}>
          <h2>Quiz completed!</h2>
          <p>Thanks for taking the HTML quiz.</p>
          <StartBtn onClick={handleRetake} text="Retake" />
        </div>
      )}
    </div>
  );
};

export default ReactPage;

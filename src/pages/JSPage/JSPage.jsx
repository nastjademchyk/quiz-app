import JsQuiz from '../../components/JsQuiz/JsQuiz';
import s from './JSPage.module.css';
import { questions } from '../../data/jsquestions.js';
import { useState } from 'react';
import StartBtn from '../../components/StartBtn/StartBtn.jsx';
import { IoLogoJavascript } from 'react-icons/io5';
import { useTimer } from 'react-timer-hook';

const JSPage = () => {
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
        <h1>JavaScript Quiz</h1>
        <IoLogoJavascript size={30} />
      </div>

      {!started && (
        <>
          <p className={s.text}>
            This quiz takes approximately 10 minutes to complete. Press Start to
            begin.
          </p>
          <StartBtn text="Start" onClick={handleStart} />
        </>
      )}

      {started && !quizFinished && (
        <>
          <div className={s.timer}>
            ⏱ Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <JsQuiz
            key={quizKey}
            questions={questions}
            onFinish={() => setQuizFinished(true)}
            onRetake={handleRetake}
          />
        </>
      )}

      {quizFinished && (
        <div className={s.result}>
          <h2>Time's up!</h2>
          <p>The quiz has ended. Thank you for participating!</p>
          <StartBtn onClick={handleRetake} text="Retake" />
        </div>
      )}
    </div>
  );
};

export default JSPage;

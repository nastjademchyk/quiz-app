import s from './HTMLPage.module.css';
import Quiz from '../../components/Quiz/Quiz.jsx';
import StartBtn from '../../components/StartBtn/StartBtn.jsx';
import { htmlQuestions } from '../../data/htmlquestions.js';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { PiFileHtmlDuotone } from 'react-icons/pi';

const HTMLPage = () => {
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
        <h1>HTML Quiz</h1>
        <PiFileHtmlDuotone size={30} />
      </div>

      {!started && (
        <>
          <p className={s.text}>
            This quiz will test your HTML knowledge. Press Start to begin.
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
            questions={htmlQuestions}
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
export default HTMLPage;

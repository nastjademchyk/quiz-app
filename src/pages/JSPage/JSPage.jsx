import JsQuiz from '../../components/JsQuiz/JsQuiz';
import s from './JSPage.module.css';
import { questions } from '../../data/jsquestions.js';
import { useState } from 'react';
import StartBtn from '../../components/StartBtn/StartBtn.jsx';
import { IoLogoJavascript } from 'react-icons/io5';

const JSPage = () => {
  const [started, setStarted] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1>JavaScript Quiz</h1>
        <IoLogoJavascript size={30} />
      </div>
      {!started && (
        <p className={s.text}>
          This quiz takes approximately 10 minutes to complete. Press Start to
          begin.
        </p>
      )}
      {!started ? (
        <StartBtn onClick={() => setStarted(true)} />
      ) : (
        <JsQuiz questions={questions} />
      )}
    </div>
  );
};

export default JSPage;

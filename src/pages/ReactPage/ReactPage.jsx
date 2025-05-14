import s from './ReactPage.module.css';
import StartBtn from '../../components/StartBtn/StartBtn.jsx';

const ReactPage = () => {
  return (
    <div className={s.wrapper}>
      Here will be React quiz
      <StartBtn />
    </div>
  );
};

export default ReactPage;

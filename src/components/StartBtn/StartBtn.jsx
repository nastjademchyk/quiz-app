import s from './StartBtn.module.css';

const StartBtn = ({ onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      Start
    </button>
  );
};

export default StartBtn;

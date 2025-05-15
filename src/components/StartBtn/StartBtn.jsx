import s from './StartBtn.module.css';

const StartBtn = ({ onClick, text }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default StartBtn;

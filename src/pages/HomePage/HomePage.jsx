import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome to the quiz website</h1>
      <div className={s.tests}>
        <ul className={s.options}>
          <li>
            <Link to="/html" className={s.button}>
              HTML
            </Link>
          </li>
          <li>
            <Link to="/js" className={s.button}>
              JavaScript
            </Link>
          </li>

          <li>
            <Link to="/react" className={s.button}>
              React
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

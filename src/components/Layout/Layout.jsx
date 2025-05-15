import s from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { BiLogoGithub } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <div className={s.homeIcon}>
          <Link to="/" className={s.homeIcon}>
            <FaHome />
          </Link>
        </div>
        <Outlet />
      </main>
      <footer>
        <div className={s.contacts}>
          <div className={s.details}>
            <BiLogoGithub />{' '}
            <a
              className={s.link}
              href="https://github.com/nastjademchyk"
              target="_blank"
              rel="noreferrer"
            >
              nastjademchyk
            </a>
          </div>
          <div className={s.details}>
            <MdOutlineMailOutline />{' '}
            <a href="mailto:nastjademchyk@gmail.com" className={s.link}>
              nastjademchyk@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

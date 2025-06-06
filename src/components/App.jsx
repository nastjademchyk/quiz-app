import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import JSPage from '../pages/JSPage/JSPage.jsx';
import HTMLPage from '../pages/HTMLPage/HTMLPage.jsx';
import ReactPage from '../pages/ReactPage/ReactPage.jsx';
import Layout from './Layout/Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/js" element={<JSPage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

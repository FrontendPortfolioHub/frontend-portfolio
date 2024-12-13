import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from "./components/Header";
import { About } from './pages/About/About';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import { Footer } from './components/Footer';
import { FooterMobile } from './components/FooterMobile';
import { useMainContext } from './context/MainContext';

export const App = () => {
  const {currentPage} = useMainContext();

  return (
    <div className="app-container">
      <div className="mobile__content">
        <Outlet/>
        {currentPage !== 'home' && <FooterMobile />}
      </div>
      {/*<div className="desktop__content">
        <Header />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </div>*/}
    </div>
  );
};

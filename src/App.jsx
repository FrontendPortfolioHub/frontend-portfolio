import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from "./components/Header";
import { About } from './pages/About/About';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="app-container">
      <div className="mobile__content">
        <Outlet/>
      </div>
      <div className="desktop__content">
        <Header />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

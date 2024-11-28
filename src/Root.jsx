import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  </Router>
);

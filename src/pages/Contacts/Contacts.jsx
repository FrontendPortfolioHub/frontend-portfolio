import { Link } from 'react-router-dom';
import './Contacts';

export const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="container">
        <Link className="back__link text-accent" to="/">
          back...
        </Link>
        <h1 className="page__title text-secondary">Contacts</h1>
        <p className="contacts-page__description">Always in touch for you...</p>
        <ul className="contacts-list">
          <li className="contacts-item">
            <p className="contacts-title text-accent">Call me...</p>
            <a href="tel:+4916096294939" className="contacts-link text-secondary">
              +4916096294939
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-accent">Chat me in telegram...</p>
            <a
              href="https://t.me/@Paul_Master"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-link text-secondary"
            >
              @Paul_Master
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-accent">Drop me a line...</p>
            <a
              href="mailto:maystrenko.p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-link text-secondary"
            >
              maystrenko.p@gmail.com
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-accent">
              or use the form below...
            </p>
            <form action=""></form>
          </li>
        </ul>
      </div>
    </div>
  );
};

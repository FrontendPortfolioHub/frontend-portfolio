import { Link } from 'react-router-dom';
import './Contacts';
import { useEffect } from 'react';
import { useMainContext } from '../../context/MainContext';
import { scrollToTop } from '../../utils/scrollToTop';
import { BackLink } from '../../components/BackLink/BackLink';

export const Contacts = () => {
  const {setCurrentPage} = useMainContext();
  useEffect(() => {
    scrollToTop();
    setCurrentPage('contacts');
  }, []);

  return (
    <div className="page contacts">
      <div className="container">
        <BackLink />
        <h1 className="page__title text-secondary">Contacts</h1>
        <p className="contacts-page__description">Always in touch for you...</p>
        <ul className="contacts-list">
          <li className="contacts-item">
            <p className="contacts-title text-secondary">Call me...</p>
            <a
              href="tel:+4916096294939"
              className="contacts-link text-accent"
            >
              +4916096294939
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-secondary">
              Chat with me on Telegram...
            </p>
            <a
              href="https://t.me/@Pavlo_Maistrenko"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-link text-accent"
            >
              @Pavlo_Maistrenko
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-secondary">Drop me a line...</p>
            <a
              href="mailto:maystrenko.p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts-link text-accent"
            >
              maystrenko.p@gmail.com
            </a>
          </li>
          <li className="contacts-item">
            <p className="contacts-title text-secondary">
              or use the form below...
            </p>
            <form action="/submit" method="post" className="contact-form">
              <label htmlFor="name" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name..."
                required
              />

              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your e-mail..."
                required
              />

              <label htmlFor="message" />
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>

              <button type="submit" className="contact-form__button">Send</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

import { useState } from 'react';
import './LanguageSelector';
import { useMainContext } from '../../../context/MainContext';
import classNames from 'classnames';

export const LanguageSelector = () => {
  const { language, toggleLanguage } = useMainContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="language-selector">
      <button
        className={classNames('language-selector__item', {
          en: language === 'en',
          uk: language === 'uk',
          de: language === 'de',
        })}
        onClick={toggleDropdownVisibility}
      />
      {isDropdownVisible && (
        <div className="language-selector__dropdown">
          <button
            className={classNames('language-selector__item de', {
              hidden: language === 'de',
            })}
            onClick={() => {
              toggleLanguage('de');
              toggleDropdownVisibility();
            }}
          />
          <button
            className={classNames('language-selector__item uk', {
              hidden: language === 'uk',
            })}
            onClick={() => {
              toggleLanguage('uk');
              toggleDropdownVisibility();
            }}
          />
          <button
            className={classNames('language-selector__item en', {
              hidden: language === 'en',
            })}
            onClick={() => {
              toggleLanguage('en');
              toggleDropdownVisibility();
            }}
          />
        </div>
      )}
    </div>
  );
};

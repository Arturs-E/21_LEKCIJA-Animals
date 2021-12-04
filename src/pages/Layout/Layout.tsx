import React, { useEffect, useState } from 'react';
import './Layout.scss';
import { MdLibraryAdd } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLocale } from '../../redux/languageSlice';
import Button from '../../components/Buttons/Button';
import LanguageFormModal from '../../components/FormModals/LanguageFormModal';

const Layout = () => {
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const languagesData = useAppSelector((state) => state.languages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('animal-filter-languages', JSON.stringify(languagesData));
  }, [languagesData]);

  const onSelect = (value: string) => {
    dispatch(setLocale(value));
  };

  const closeModal = () => {
    setIsLanguageModalVisible(false);
  };

  return (
    <div>
      <div className="page-container">
        <div className="header-wrapper">
          <div className="header">
            <nav>
              <NavLink to="/">
                <img
                  src="./assets/images/logo.png"
                  alt="animal-logo"
                  className="header__logo"
                />
              </NavLink>
            </nav>
            <div className="header__navigation-wrapper">
              <nav className="header__navigation">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive
                    ? 'header__navigation-link header__navigation-link--active'
                    : 'header__navigation-link')}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/translations"
                  className={({ isActive }) => (isActive
                    ? 'header__navigation-link header__navigation-link--active'
                    : 'header__navigation-link')}
                >
                  Translations
                </NavLink>
              </nav>
            </div>
            <div className="header__language-selection">
              <select
                className="header__select-language"
                onChange={(e) => onSelect(e.target.value)}
              >
                {languagesData
                  .languages
                  .map((item) => <option key={item}>{item}</option>)}
              </select>
              <Button
                title={<MdLibraryAdd />}
                clickHandler={() => setIsLanguageModalVisible(true)}
                additionalClasses="button--icon"
              />
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <Outlet />
          {isLanguageModalVisible && <LanguageFormModal closeModal={() => closeModal()} />}
        </div>
      </div>
    </div>
  );
};

export default Layout;

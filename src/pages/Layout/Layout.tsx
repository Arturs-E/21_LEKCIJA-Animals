import React, { useState } from 'react';
import './Layout.scss';
import { MdLibraryAdd } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLocale } from '../../redux/languageSlice';
import Button from '../../components/Buttons/Button';
import LanguageFormModal from '../../components/FormModals/LanguageFormModal';

const Layout = () => {
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const languages = useAppSelector((state) => state.languages.languages);
  const dispatch = useAppDispatch();

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
              <Link to="/">
                <img
                  src="./assets/images/logo.png"
                  alt="animal-logo"
                  className="header__logo"
                />
              </Link>
            </nav>
            <div className="header__language-selection">
              <select
                className="header__select-language"
                onChange={(e) => onSelect(e.target.value)}
              >
                {languages.map((item) => <option key={item}>{item.toUpperCase()}</option>)}
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

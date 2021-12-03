import React, { useState } from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
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
            <h1 className="header__logo">Placeholder for logo</h1>
            <div className="header__language-selection">
              <select onChange={(e) => onSelect(e.target.value)}>
                {languages.map((item) => <option key={item}>{item.toUpperCase()}</option>)}
              </select>
              <Button title="+" clickHandler={() => setIsLanguageModalVisible(true)} />
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

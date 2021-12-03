import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLocale } from '../../redux/languageSlice';
import Button from '../../components/Buttons/Button';

const Layout = () => {
  const languages = useAppSelector((state) => state.languages.languages);
  const dispatch = useAppDispatch();

  const onSelect = (value: string) => {
    dispatch(setLocale(value));
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
              <Button title="+" />
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

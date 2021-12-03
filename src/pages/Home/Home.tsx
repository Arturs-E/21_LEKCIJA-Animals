import React, { useState } from 'react';
import './Home.scss';
import AnimalFormModal from '../../components/FormModals/AnimalFormModal';
import { useAppSelector } from '../../redux/hooks';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const animalData = useAppSelector((state) => state.animals);
  const activeLocale = useAppSelector((state) => state.languages.locale);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div>
        {
          animalData.map(({ name, imgSrc, species }) => (
            <div key={name[activeLocale]}>
              <h4>{name[activeLocale]}</h4>
              <span>{imgSrc}</span>
              <h5>{species}</h5>
            </div>
          ))
        }
      </div>
      <button onClick={() => setIsModalVisible(true)}>Add animal</button>
      {isModalVisible && <AnimalFormModal closeModal={() => closeModal()} />}
    </div>
  );
};

export default Home;

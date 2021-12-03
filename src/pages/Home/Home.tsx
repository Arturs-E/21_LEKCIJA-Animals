import React, { useState } from 'react';
import './Home.scss';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../redux/hooks';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const animalData = useAppSelector((state) => state.animals);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div>
        {
          animalData.map(({ name, imgSrc, species }) => (
            <div key={name.en}>
              <h4>{name.en}</h4>
              <span>{imgSrc}</span>
              <h5>{species}</h5>
            </div>
          ))
        }
      </div>
      <button onClick={() => setIsModalVisible(true)}>Add animal</button>
      {isModalVisible && <Modal closeModal={() => closeModal()} />}
    </div>
  );
};

export default Home;

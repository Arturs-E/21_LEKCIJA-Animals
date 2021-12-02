import React, { useState } from 'react';
import './Home.scss';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div>Tests</div>
      <button onClick={() => setIsModalVisible(true)}>Add animal</button>
      {isModalVisible && <Modal closeModal={() => closeModal()} />}
    </div>
  );
};

export default Home;

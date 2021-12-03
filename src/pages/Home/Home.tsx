import React, { useEffect, useState } from 'react';
import './Home.scss';
import AnimalFormModal from '../../components/FormModals/AnimalFormModal';
import { useAppSelector } from '../../redux/hooks';
import Button from '../../components/Buttons/Button';
import AnimalCard from '../../components/AnimalCards/AnimalCard';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const animalData = useAppSelector((state) => state.animals);
  const activeLocale = useAppSelector((state) => state.languages.locale);

  useEffect(() => {
    localStorage.setItem('animal-filter', JSON.stringify(animalData));
  }, [animalData]);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="animals">
      <div className="animals__animal-card-grid">
        {
          animalData.length > 0
            ? animalData.map(({
              id, name, imgSrc, species,
            }) => (
              <AnimalCard key={id} name={name[activeLocale]} imgUrl={imgSrc} species={species} />
            ))
            : <h2>No animals added yet!</h2>
        }
      </div>
      <Button title="Add animal" clickHandler={() => setIsModalVisible(true)} />
      {isModalVisible && <AnimalFormModal closeModal={() => closeModal()} />}
    </section>
  );
};

export default Home;

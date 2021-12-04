import React, { useEffect, useState } from 'react';
import './Home.scss';
import AnimalFormModal from '../../components/FormModals/AnimalFormModal';
import { useAppSelector } from '../../redux/hooks';
import Button from '../../components/Buttons/Button';
import AnimalCard from '../../components/AnimalCards/AnimalCard';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const animalData = useAppSelector((state) => state.animals);
  const activeLocale = useAppSelector((state) => state.languages.locale);

  useEffect(() => {
    localStorage.setItem('animal-filter', JSON.stringify(animalData));
  }, [animalData]);

  const uniqueAnimalSpecies = animalData
    .map((item) => item.species)
    .filter((item, index, arr) => index === arr.indexOf(item));

  const filteredAnimalData = () => {
    if (activeFilter === 'all') {
      return animalData;
    }
    return animalData.filter((item) => item.species === activeFilter);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="animals">
      <div className="animals__filter-section">
        {
          ['all', ...uniqueAnimalSpecies]
            .map((item) => (
              <div
                key={item}
                className={activeFilter === item
                  ? 'animals__filter-buttons animals__filter-buttons--active'
                  : 'animals__filter-buttons'}
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </div>
            ))
        }
      </div>
      <div className="animals__animal-card-grid">
        {
          animalData.length > 0
            ? filteredAnimalData().map(({
              id, name, imgSrc, species,
            }) => (
              <AnimalCard key={id} name={name[activeLocale]} imgUrl={imgSrc} species={species} />
            ))
            : <h2>No animals added yet!</h2>
        }
      </div>
      <div className="animals__add-animal-button-wrapper">
        <Button title="Add animal" clickHandler={() => setIsModalVisible(true)} />
      </div>
      {isModalVisible && (
      <AnimalFormModal
        uniqueAnimalSpecies={uniqueAnimalSpecies}
        closeModal={() => closeModal()}
      />
      )}
    </section>
  );
};

export default Home;

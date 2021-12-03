import React, { FC } from 'react';
import './AnimalCard.scss';

type AnimalCardProps = {
  name: string;
  imgUrl: string;
  species: string;
}

const AnimalCard:FC<AnimalCardProps> = ({ name, imgUrl, species }) => (
  <div className="animal-card">
    <img src={imgUrl} alt={name} className="animal-card__image" />
    <div className="animal-card__info-section">
      <h3 className="animal-card__name">{name}</h3>
      <span className="animal-card__species">{species}</span>
    </div>
  </div>
);

export default AnimalCard;

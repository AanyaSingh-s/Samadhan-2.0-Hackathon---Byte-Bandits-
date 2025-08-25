import React from 'react';
import './ProfileCard.css';
const ProfileCard = ({ name, title, imageUrl, description }) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
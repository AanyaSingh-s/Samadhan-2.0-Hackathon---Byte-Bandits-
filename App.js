import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css'; // Assuming you have a basic App.css

function App() {
  const userProfile = {
    name: 'Jane Doe',
    title: 'Software Engineer',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'A passionate developer with expertise in React and Node.js. Enjoys building scalable and efficient web applications.',
  };

  return (
    <div className="app-container">
      <ProfileCard
        name={userProfile.name}
        title={userProfile.title}
        imageUrl={userProfile.imageUrl}
        description={userProfile.description}
      />
    </div>
  );
}

export default App;
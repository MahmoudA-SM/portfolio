import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import Row from './components/Home/Row';
import Modal from './components/UI/Modal';
import { projects, experience, education, profile } from './data/content';
import About from './components/Home/About';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const featured = projects[0];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero item={featured} onMoreInfo={() => handleItemClick(featured)} />

      <About profile={profile} />

      <Row title="Projects" items={projects} isLargeRow onItemClick={handleItemClick} />
      <Row title="Work Experience" items={experience} onItemClick={handleItemClick} />
      <Row title="Education" items={education} onItemClick={handleItemClick} />

      <Modal item={selectedItem} onClose={handleCloseModal} />

      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default App;

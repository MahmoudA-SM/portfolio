import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import Row from './components/Home/Row';
import Modal from './components/UI/Modal';
import { projects, experience, education, profile } from './data/content';
import './App.css';
import ExperiencePage from './components/Experience/ExperiencePage';
import About from './components/Home/About';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('home');
  const featured = projects[0];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleNavigate = (next) => {
    setSelectedItem(null);
    setView(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} />
      {view === 'home' && (
        <>
          <Hero item={featured} onMoreInfo={() => handleItemClick(featured)} />
          <About profile={profile} />
          <Row title="Projects" items={projects} isLargeRow onItemClick={handleItemClick} />
          <Row title="Work Experience" items={experience} onItemClick={handleItemClick} />
          <Row title="Education" items={education} onItemClick={handleItemClick} />
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </>
      )}
      {view === 'experience' && (
        <ExperiencePage
          items={experience}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
          onCloseModal={() => setSelectedItem(null)}
        />
      )}

      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default App;

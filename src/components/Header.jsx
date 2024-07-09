import React, { useState, useEffect, useRef } from 'react';
import '../style/header.scss';

const Header = () => {
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSectionsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSections = () => {
    setSectionsVisible(!sectionsVisible);
  };

  return (
    <header>
      <h1>Mon Portfolio</h1>
      <div className="header-buttons">
        <div className="sections-dropdown" ref={dropdownRef}>
          <button className="sections-button" onClick={toggleSections}>
            Sections
          </button>
          {sectionsVisible && (
            <nav>
              <ul>
                <li><a href="#about" onClick={() => setSectionsVisible(false)}>À propos</a></li>
                <li><a href="#projects" onClick={() => setSectionsVisible(false)}>Projets</a></li>
                <li><a href="#contact" onClick={() => setSectionsVisible(false)}>Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

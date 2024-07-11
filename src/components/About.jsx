import React, { useState } from 'react';
import '../style/about.scss';

const About = () => {
  // Déclaration de l'état local visibleSections avec useState
  const [visibleSections, setVisibleSections] = useState({
    skills: false,
    education: false,
    goals: false,
  });

  // Fonction pour basculer l'état d'une section spécifique
  const toggleSection = (section) => {
    setVisibleSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <p>Je suis un développeur web débutant ayant pour but de parfaire mes compétences et d'élargir mes connaissances (avec l'aide d'un peu ... beaucoup de café).</p>

      <div className="section-container">
        <div className="section-headers">
          <div className="section-header" onClick={() => toggleSection('skills')}>
            <h3>Compétences</h3>
            <div className={`content ${visibleSections.skills ? 'visible' : ''}`}>
              <ul>
                <li>Développement front-end avec HTML, CSS et JavaScript.</li>
                <li>Conception et intégration d'interfaces utilisateur réactives.</li>
                <li>Gestion de projets web et collaboration en équipe.</li>
              </ul>
            </div>
          </div>
          <div className="section-header" onClick={() => toggleSection('education')}>
            <h3>Formation</h3>
            <div className={`content ${visibleSections.education ? 'visible' : ''}`}>
              <p>J'ai suivi une formation de développeur web - intégrateur avec Openclassrooms, où j'ai acquis des compétences approfondies en HTML, CSS, JavaScript et développement web.</p>
            </div>
          </div>
          <div className="section-header" onClick={() => toggleSection('goals')}>
            <h3>Objectifs professionnels</h3>
            <div className={`content ${visibleSections.goals ? 'visible' : ''}`}>
              <p>Je suis passionné par l'apprentissage continu et je cherche à approfondir mes compétences en développement et à contribuer à des projets innovants.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

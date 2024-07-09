import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../style/projects.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importer les images dynamiquement
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp}');

const loadImages = async () => {
  const imageUrls = {};
  for (const path in images) {
    const module = await images[path]();
    imageUrls[path.replace('../assets/images/', '')] = module.default;
  }
  return imageUrls;
};

const projectData = [
  {
    title: "Argent Bank",
    shortDescription: "Une application bancaire en ligne, moderne, permettant aux utilisateurs de gérer leurs comptes et leurs informations en toute sécurité.",
    fullDescription: "Le projet Argent Bank est une application bancaire en ligne développée dans le cadre d'un parcours de formation sur OpenClassrooms. L'application offre une interface utilisateur moderne et réactive, permettant aux utilisateurs de gérer leurs comptes bancaires en toute sécurité. Les principales fonctionnalités incluent la connexion sécurisée, la visualisation des soldes de comptes, l'historique des transactions, et la possibilité de gérer les informations personnelles. Ce projet met en œuvre des technologies web actuelles telles que React pour le front-end et Node.js pour le back-end, garantissant une expérience utilisateur fluide et sécurisée.",
    github: "https://github.com/Alex-b6/P11-ArgentBank-website",
    images: ["ArgentBank1.webp", "ArgentBank2.webp", "ArgentBank3.webp", "ArgentBank4.webp"]
  },
  {
    title: "Print-it",
    shortDescription: "Une application web de personnalisation et de commande de produits imprimés, utilisée pour faire nos premiers pas avec Javascript.",
    fullDescription: "Dans le cadre de ce projet, il était demandé de dynamiser ce site internet. Afin d'effectuer nos débuts avec Javascript, il a fallu suivre plusieurs étapes pour réaliser le carrousel. Nous avons commencés par mettre à jour le HTML en y ajoutant les flèches. une fois intégrées, nous devions rendre ces dernières interactives avec des 'Eventlisteners'. Après cette étape, il a fallu ajouter des bullet points puis mettre en place la logique de défillement tout en réalisant une boucle.",
    github: "https://github.com/Alex-b6/Print-it",
    images: ["Print-it1.webp", "Print-it2.webp", "Print-it3.webp", "Print-it4.webp"]
  },
  // Ajoutez d'autres projets ici
];

const Modal = ({ project, onClose, imageUrls }) => {
  if (!project) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <div className="carousel">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={imageUrls[image]} alt={`${project.title} ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <p className="short-description">{project.shortDescription}</p>
        <p className="full-description">{project.fullDescription}</p>
        <div className="modal-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    loadImages().then(setImageUrls);
  }, []);

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project" key={index} onClick={() => openModal(project)}>
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
          </div>
        ))}
      </div>
      {modalIsOpen && <Modal project={selectedProject} onClose={closeModal} imageUrls={imageUrls} />}
    </section>
  );
};

export default Projects;

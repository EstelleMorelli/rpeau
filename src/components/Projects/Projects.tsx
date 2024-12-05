import { NavLink } from 'react-router-dom';
import './Projects.scss';

function Projects() {
    const projectsImages = import.meta.glob('/src/assets/projects/*.{jpeg,jpg,png}');
    const projectsImagesArray = Object.keys(projectsImages);
return (
    <div className="Projects">
        <h2 className='Projects--maintitle'> LES PROJETS </h2>
        <div className="Projects--images">
        {projectsImagesArray.slice(0,6).map((imagePath, index) => (
          <img
            key={index}
            src={imagePath.replace('/src/assets', './images')} // Adapter le chemin pour la balise <img>
            alt={`Projet ${index + 1}`}
            className="Projects--image"
          />
        ))}
      </div>
      <nav>
            <NavLink
            to="/projets"
            className="SeeMoreBtn"
            >
            VOIR TOUS LES PROJETS
            </NavLink>
        </nav>
    </div>
  );
}

export default Projects;
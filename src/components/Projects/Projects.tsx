import './Projects.scss';

function Projects() {
    const projectsImages = import.meta.glob('/src/assets/projects/*.{jpeg,jpg,png}');
    console.log(projectsImages);
    const projectsImagesArray = Object.keys(projectsImages);
    console.log(projectsImagesArray);
return (
    <div className="Projects">
        <h2 className='Projects--maintitle'> LES PROJETS </h2>
        <div className="Projects-images">
        {projectsImagesArray.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath.replace('/src/assets', '../../../public/images')} // Adapter le chemin pour la balise <img>
            alt={`Projet ${index + 1}`}
            className="Projects--image"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
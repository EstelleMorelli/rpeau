import './ProjectsGallery.scss';

function ProjectsGallery() {
    const ProjectsGalleryImages = import.meta.glob('/src/assets/projects/*.{jpeg,jpg,png}');
    const ProjectsGalleryImagesArray = Object.keys(ProjectsGalleryImages);

    return (
        <div className="ProjectsGallery">
            <h2 className="ProjectsGallery--maintitle">LES PROJETS</h2>
            <div className="row">
                {/* Dynamically render columns */}
                {[...Array(2)].map((_, columnIndex) => (
                    <div key={columnIndex} className="column">
                        {ProjectsGalleryImagesArray.slice(
                            columnIndex * Math.ceil(ProjectsGalleryImagesArray.length / 2),
                            (columnIndex + 1) * Math.ceil(ProjectsGalleryImagesArray.length / 2)
                        ).map((imagePath, index) => (
                            <img
                                key={index}
                                src={imagePath.replace('/src/assets', '/images')} // Adjust path for public folder
                                alt={`Projet ${index + 1}`}
                                className="ProjectsGallery--image"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsGallery;

import { X } from 'react-feather';
import './ProjectsGallery.scss';
import { useState } from 'react';

function ProjectsGallery() {
    const ProjectsGalleryImages = import.meta.glob('/src/assets/projects/*.{jpeg,jpg,png}');
    const ProjectsGalleryImagesArray = Object.keys(ProjectsGalleryImages);
    const [isPopUpOpen, setPopUp] = useState(false);
    const [popupImage, SetPopupImage] = useState('');

    const handleProjectsGalleryImageClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setPopUp(!isPopUpOpen);
        SetPopupImage(e.currentTarget.src);
    }
    const handlePopupCloseBtn = () => {
        setPopUp(false);
    }
    return ( 
    <div className='ProjectsGallery'>
        <h2 className='ProjectsGallery--maintitle'> LES PROJETS </h2> 
        { isPopUpOpen &&
        <div className="Projects--popup__bg" onClick={handlePopupCloseBtn}> 
            <div className="Projects--popup__content">
                <button className='Projects--popup__close' onClick={handlePopupCloseBtn} > <X size="30" className='logo'/> </button>
                <img className='Projects--popup__image' src={popupImage} alt=''></img>
            </div> 
        </div>
        }
            <div className='grid'>
                {ProjectsGalleryImagesArray.map((imagePath, index) => ( 
                    <div className="grid-item" key={index}>
                    <img key={index} src={imagePath.replace('/src/assets', './images')} // Adapter le chemin pour la balise <img> 
                    alt={`Projet ${index + 1}`}
                    className="grid-img"
                    onClick={handleProjectsGalleryImageClick} 
                    />
                    </div> 
                ))} 
            </div>
    </div>
    ); 
} 

export default ProjectsGallery;

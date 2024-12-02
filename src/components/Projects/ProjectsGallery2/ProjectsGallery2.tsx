import { X } from 'react-feather';
import './ProjectsGallery2.scss';
import { useState } from 'react';

function ProjectsGallery2() {
    const ProjectsGalleryImages = import.meta.glob('/src/assets/projects/*.{jpeg,jpg,png}');
    const ProjectsGalleryImagesArray = Object.keys(ProjectsGalleryImages);
    const [isPopUpOpen, setPopUp] = useState(false);
    const [popupImage, SetPopupImage] = useState('');

    const handleProjectsGalleryImageClick = (e) => {
        setPopUp(!isPopUpOpen);
        SetPopupImage(e.target.src);
    }
    const handlePopupCloseBtn = () => {
        setPopUp(false);
    }
    return ( 
    <div className='ProjectsGallery2'>
        <h2 className='ProjectsGallery2--maintitle'> LES PROJETS </h2> 
        { isPopUpOpen &&
        <div className="Projects--popup__bg" onClick={handlePopupCloseBtn}> 
            <div className="Projects--popup__content">
                <button className='Projects--popup__close' onClick={handlePopupCloseBtn} > <X /> </button>
                <img className='Projects--popup__image' src={popupImage} alt=''></img>
            </div> 
        </div>
        }
            <div className='grid'>
                {ProjectsGalleryImagesArray.map((imagePath, index) => ( 
                    <div className="grid-item">
                    <img key={index} src={imagePath.replace('/src/assets', '../../../../public/images')} // Adapter le chemin pour la balise <img> 
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

export default ProjectsGallery2;

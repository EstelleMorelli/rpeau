import './Intro.scss';
import { Smartphone } from 'react-feather';
import profilPicture from '../../../../public/images/fakeProfilPicture.jpg';

function Intro() {

  return (
    <div className="Intro">
        <h1 className='Intro--maintitle'>Artisan pompes de relevage </h1>
        <h2 className='Intro--subtitle'> Installation, Maintenance, Dépannage </h2>
        <p className='Intro--text'> Assainissement & micro stations <br/>
        Drainage & eau pluviales <br/>
        Traitement & pompage d'eau potable  <br/>
        Tuyauterie & soudures inox</p>
        <div className='Intro--contact'>
          <Smartphone className='contact--phone__logo' size={25}/>
          <a href="tel:&#48;&#54;&#55;&#50;&#48;&#54;&#48;&#49;&#53;&#51;">&#48;&#54; &#55;&#50; &#48;&#54; &#48;&#49; &#53;&#51;</a>
        </div>
        <article>
          <div className='Presentation--wrapper'>
          <h3 className='Presentation--title'> Bienvenue chez RP'EAU, votre partenaire en solutions hydrauliques et assainissement !</h3>
          <p className='Presentation--text'>
          Je m'appelle Pierre-Olivier Rodot, et depuis plus de 11 ans, je mets mon expertise au service des particuliers, professionnels et collectivités. Passionné par mon métier, j'ai construit ma carrière en travaillant dans des entreprises spécialisées dans l'installation industrielle et la maintenance. Originaire du Jura, diplômé d’un BTS GEMO et de deux licences, j’interviens aujourd'hui dans toute la Bourgogne Franche-Comté et l’Ain pour vous accompagner dans vos projets liés à l’eau et à l’assainissement.
          </p>

          </div>
          <img className='Presentation--picture' src={profilPicture} />
        </article>

    </div>
  );
}

export default Intro; 
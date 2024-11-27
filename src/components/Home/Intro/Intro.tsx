import './Intro.scss';
import { Smartphone } from 'react-feather';

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
    </div>
  );
}

export default Intro; 
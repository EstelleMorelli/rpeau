import './Maintenance.scss';
import maintenance from '../../../public/images/maintenance-web.png';
import { NavLink } from 'react-router-dom';

function Maintenance() {

  return (
    <div className="Maintenance">
        <h2 className='Maintenance--maintitle'> Page en cours de construction </h2>
        <div className='Maintenance--logo__wrapper'>
          <img className='Maintenance--logo' src={maintenance} />
          </div>
          <p className='Maintenance--text'> Merci de votre compréhension !</p>
        <nav>
            <NavLink
            to="/"
            className="BackToHomeLink"
            >
            Retourner à la page d'accueil
            </NavLink>
        </nav>
    </div>
  );
}

export default Maintenance;
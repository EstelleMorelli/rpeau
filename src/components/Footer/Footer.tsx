import { NavLink } from 'react-router';
import './Footer.scss';
import { Phone, Mail } from 'react-feather';

function Footer() {

  return (
    <div className="Footer">
        <h3 className='Footer--maintitle'> CONTACT RP'EAU </h3>
        <div className='Footer--icon__wrapper'>
          <a href="tel:&#48;&#54;&#55;&#50;&#48;&#54;&#48;&#49;&#53;&#51;">
            <Phone className='Footer--icon phone' size={40}/>
          </a>
          <nav>
            <NavLink
            to="/contact"
            >
              <Mail className='Footer--icon mail' size={40}/>
            </NavLink>
          </nav>
        </div>
    </div>
  );
}

export default Footer;
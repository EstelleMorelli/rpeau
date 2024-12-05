import { NavLink } from 'react-router';
import './Footer.scss';
import { Phone, Mail } from 'react-feather';

function Footer() {

  return (
    <div className="Footer">
      <footer>
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
        </footer>
        <div className='Footer--conception'> 
  Conception et Réalisation :  
  <a href="mailto:&#100;&#101;&#118;&#46;&#109;&#111;&#114;&#101;&#108;&#108;&#105;&#101;&#115;&#116;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
     Estelle MORELLI 
  </a> 
</div>

    </div>
  );
}

export default Footer;
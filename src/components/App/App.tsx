
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppSelector } from '../../store/hooks-redux';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import CGU from '../CGU/CGU';
import LoginForm from '../LoginForm/LoginForm';
import Admin from '../Admin/Admin';
import ProjectsGallery from '../Projects/ProjectsGallery/ProjectsGallery';
import { ArrowUpCircle } from 'react-feather';
import About from '../About/About';

function App() {
  const connectedUser = useAppSelector((state) => state.appReducer.connectedUser);
  const isLoading = useAppSelector((state)=> state.appReducer.isLoading);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Pour un scroll fluide
    });
    const gridElement = document.querySelector('.grid');
    if (gridElement) {
      gridElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
   <div className="App">
    {isLoading && <Loader />}
    {!isLoading &&
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/apropos" element={<><About /> <Footer/></>} />
        <Route path="/services" element={<><Services /> <Footer/></>} />
        <Route path="/projets" element={<><ProjectsGallery /> <Footer/></>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/mentions-legales" element={<CGU />} />
        <Route path="/connexion" element={<LoginForm />} />
        {connectedUser &&  <Route path="/admin" element={<Admin />} />}
      </Routes>
      <button type="button" className="scrollupbutton" onClick={scrollToTop}>
      <ArrowUpCircle className='scrollupbutton--logo' size={36} />
    </button>
      </>
      
    }
  </div>
  );

}
export default App;

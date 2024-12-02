
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppSelector } from '../../store/hooks-redux';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm';
import Maintenance from '../Maintenance/Maintenance';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import CGU from '../CGU/CGU';
import LoginForm from '../LoginForm/LoginForm';
import Admin from '../Admin/Admin';
import ProjectsGallery from '../Projects/ProjectsGallery/ProjectsGallery';
import ProjectsGallery2 from '../Projects/ProjectsGallery2/ProjectsGallery2';

function App() {
  const connectedUser = useAppSelector((state) => state.appReducer.connectedUser);
  const isLoading = useAppSelector((state)=> state.appReducer.isLoading);
  return (
   <div className="App">
    {isLoading && <Loader />}
    {!isLoading &&
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/apropos" element={<><Maintenance /> <Footer/></>} />
        <Route path="/services" element={<><Services /> <Footer/></>} />
        <Route path="/projets" element={<><ProjectsGallery /> <Footer/></>} />
        <Route path="/projets2" element={<><ProjectsGallery2 /> <Footer/></>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/mentions-legales" element={<CGU />} />
        <Route path="/connexion" element={<LoginForm />} />
        {connectedUser &&  <Route path="/admin" element={<Admin />} />}
      </Routes>
      </>
    }
  </div>
  );

}
export default App;

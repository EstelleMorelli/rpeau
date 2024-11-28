
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppSelector } from '../../store/hooks-redux';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm';

function App() {

  const isLoading = useAppSelector((state)=> state.appReducer.isLoading);
  return (
   <div className="App">
    {isLoading && <Loader />}
    {!isLoading &&
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </>
    }
  </div>
  );

}
export default App

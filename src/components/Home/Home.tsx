import Footer from '../Footer/Footer';
import './Home.scss';
import Intro from './Intro/Intro';
import Services from './Services/Services';

function Home() {

  return (
    <div className="Home">
      <Intro />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
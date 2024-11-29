import Footer from '../Footer/Footer';
import './Home.scss';
import Intro from './Intro/Intro';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';

function Home() {

  return (
    <div className="Home">
      <Intro />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
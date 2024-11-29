import './CGU.scss';
import { cgu } from '../../utils/cgu';

function CGU() {
  return (
    <div className='CGU'>
      <h2 className='CGU--title'>Conditions Générales d'Utilisation</h2>
      <aside className='CGU--update'> Date de mise à jour : 29/11/2024.</aside>
      {cgu.map((item, index) => (
        <section className='CGU--section' key={index}>
          <h3 className='CGU--subtitle'>{item.title}</h3>
          <p className='CGU--text'>{item.text}</p>
        </section>
      ))}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CGU;
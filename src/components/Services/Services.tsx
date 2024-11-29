import './Services.scss';
import service1 from '../../../public/images/services/service1.png'; 
import service2 from '../../../public/images/services/service2.png'; 
import service3 from '../../../public/images/services/service3.png'; 
import service4 from '../../../public/images/services/service4.png'; 
function Services() {

  return (
    <div className="Services">
        <h2 className='Services--maintitle'> LES SERVICES </h2>
        <section className='Services--section'>
          <div className='Service--logo__circle'>
          <img className='Service--logo' src={service1} />
          </div>
          <h3 className='Services--subtitle'>Relevage des eaux usées</h3>
          <p className='Services--text'>Dans le cas de sous-sols enterrés ou de bâtiments situés en contrebas par rapport au réseau d'égouts, l'installation d'une pompe électrique de relevage est indispensable.</p>
        </section>
        <section className='Services--section'>
        <div className='Service--logo__circle'>
          <img className='Service--logo' src={service2} />
          </div>
          <h3 className='Services--subtitle'>Récupération des eaux de pluie</h3>
          <p className='Services--text'>La récupération de l’eau de pluie représente une solution écologique pour divers usages comme l’arrosage des jardins, le remplissage des piscines. </p>
        </section>
        <section className='Services--section'>
        <div className='Service--logo__circle'>
        <img className='Service--logo' src={service3} />
        </div>
          <h3 className='Services--subtitle'>Traitement et pompage de l'eau potable</h3>
          <p className='Services--text'>Le traitement est essentiel pour garantir une distribution d’eau potable de qualité. Les surpresseurs assurent un rôle crucial en maintenant un approvisionnement optimal et une pression adéquate, particulièrement dans les bâtiments élevés ou les zones où le réseau manque de puissance.</p>
        </section>
        <section className='Services--section'>
        <div className='Service--logo__circle'>
        <img className='Service--logo' src={service4} />
        </div>
        <h3 className='Services--subtitle'>Entretien des installations</h3>
        <p className='Services--text'>Les systèmes de relevage et les micro-stations requièrent un entretien annuel. Je propose des interventions pour ces équipements.</p>
        </section>
    </div>
  );
}

export default Services;
import './About.scss';


function About() {

  return (
    <div className="About">
      <article className='About--wrapper'>
        <h2 className='About--maintitle'> A PROPOS </h2>
        <h3 className='About--subtitle1'> Bienvenue chez RP'EAU, votre partenaire en solutions hydrauliques et assainissement ! </h3>
        <p className='About--intro'> Je m'appelle Pierre-Olivier Rodot, et depuis plus de 11 ans, je mets mon expertise au service des particuliers, professionnels et collectivités. Passionné par mon métier, j'ai construit ma carrière en travaillant dans des entreprises spécialisées dans l'installation industrielle et la maintenance. Originaire du Jura, diplômé d’un BTS GEMO et de deux licences, j’interviens aujourd'hui dans toute la Bourgogne Franche-Comté et l’Ain pour vous accompagner dans vos projets liés à l’eau et à l’assainissement.</p>
        <h4> Ce que je vous propose : </h4>
        <strong> Maintenance </strong>
        <p> Je veille à ce que vos équipements restent performants : </p>
        <ul className='About--list1'>
          <li>Entretien des surpresseurs d’eau potable.</li>
          <li>Vérifications électromécaniques pour vos microstations, pompes, et installations d’assainissement, d’eau potable ou pluviale.</li>
          <li>Diagnostics et tests de fonctionnement des pompes et armoires de commande pour prévenir les pannes.</li>
        </ul>

        <strong> Réparations </strong>
        <p>Quand vos équipements ont besoin d’une intervention, je suis là pour :</p>
        <ul className='About--list1'>
          <li>Réparer les éléments de tuyauterie et systèmes hydrauliques.</li>
          <li>Remplacer les pièces défectueuses : flotteurs de niveau, pompes, surpresseurs d’eau potable, etc.</li>
        </ul>

        <strong> Installations neuves </strong>
        <p>Vous avez un nouveau projet ? Je m'occupe de :  </p>
        <ul className='About--list1'>
          <li>L’installation de surpresseurs d’eau potable et de postes de relevage complets (instrumentation, pompes, armoires de commande).</li>
          <li>La mise en place de microstations : armoires de commande, manchettes d’aération, compresseurs.</li>
          <li>L'installation de stations d’épuration pour collectivités et industriels.</li>
          <li>Réalisation de soudures inox et montage de tuyauterie sur mesure.</li>
        </ul>

        <h3 className='About--subtitle2'> Pourquoi travailler avec moi ? </h3>
        <p> Chez RP'EAU, chaque projet est unique. Je prends le temps de comprendre vos besoins pour vous proposer des solutions durables et efficaces. Vous pouvez compter sur : </p>
        <ul className='About--list2'>
          <li>Mon savoir-faire acquis sur le terrain et grâce à des années d’expérience.</li>
          <li>Une approche de proximité, que vous soyez un particulier, une entreprise ou une collectivité.</li>
          <li>Des interventions rapides et adaptées pour garantir la fiabilité de vos installations.</li>
        </ul>
        <p> Je suis fier de contribuer à vos projets en garantissant des systèmes d’eau performants et pérennes.</p>
        <p className='About--endphrase'> Contactez-moi dès aujourd'hui, et construisons ensemble des solutions adaptées à vos besoins !</p>
      </article>
    </div>
  );
}

export default About;
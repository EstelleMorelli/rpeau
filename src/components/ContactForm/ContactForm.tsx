import { useNavigate } from 'react-router-dom';
import './ContactForm.scss';
import { useAppDispatch } from '../../store/hooks-redux';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
    //image_url:'/images/logo_rpeau.png',
  });

  const [errors, setErrors] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      message: '',
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.nom) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.telephone || !phoneRegex.test(formData.telephone)) newErrors.telephone = 'Téléphone invalide';

    setErrors(newErrors);
    // Vérification approfondie : toutes les valeurs doivent être vides pour être valides
  const hasErrors = Object.values(newErrors).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0; // Si un tableau d'erreurs n'est pas vide, c'est une erreur
    }
    return value !== ''; // Si une chaîne n'est pas vide, c'est une erreur
  });

  return !hasErrors; // Retourne true si aucune erreur n'est détectée
  };

  const handleSubmit = (e) => {
    e.preventDefault();;
    if (!validateForm()) return;
    const sendFirstEmail = emailjs.send(
      'service_7hdbkvc',
      'template_3xtbnhl',
      formData,
      '5WW9m7KJQpzSxiYZT'
    );
    const sendSecondEmail = emailjs.send(
      'service_7hdbkvc',
      'template_2gs8spi',
      formData,
      '5WW9m7KJQpzSxiYZT'
    );

    Promise.all([sendFirstEmail, sendSecondEmail])
      .then(() => {
        alert('La demande a été envoyée avec succès, vous allez recevoir un email de confirmation.');
        setFormData({
          nom: '',
          prenom: '',
          telephone: '',
          email: '',
          message: '',
        });
        navigate('/');
      })
      .catch(() => {
        alert('Erreur lors de l\'envoi des demandes');
      });
  };

  return (
    <div className="Contact">
        <h1 className='Contact--maintitle'> CONTACT </h1>
        <aside className='Contact--text'>
        Je propose des devis gratuits et assure des interventions rapides. N'hésitez pas à me contacter pour obtenir davantage d'informations sur mes prestations et services !
        </aside>
        <form className="ContactForm" onSubmit={handleSubmit}>
          <div className='ContactForm--wrapper'>
            {/* CHAMP POUR LE NOM*/}
            {errors.nom && <p className="error">{errors.nom}</p>}
              <div className='form-group'>
                  <label>Nom</label>
                  <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
              </div>
            {/* CHAMP POUR LE PRENOM*/}
            {errors.prenom && <p className="error">{errors.prenom}</p>}
              <div className='form-group'>
                  <label>Prénom</label>
                  <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
              </div>
            {/* CHAMP POUR LE TELEPHONE*/}
              {errors.telephone && <p className="error">{errors.telephone}</p>}
              <div className='form-group'>
                  <label>Téléphone</label>
                  <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
              </div>
            {/* CHAMP POUR L'EMAIL*/}
              {errors.email && <p className="error">{errors.email}</p>}
              <div className='form-group'>
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            {/* CHAMP POUR LE MESSAGE PERSONNALISE*/}
              <div className='form-group'>
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
        </div>
        <div className='form-group__button'>
      <button type="submit">Envoyer</button>
      </div>
    </form>
    </div>
  );
}

export default ContactForm;
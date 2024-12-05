import './LoginForm.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks-redux';
import login from '../../store/middlewares/login';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // États locaux pour les champs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Récupération des états Redux utiles
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorLogin = useAppSelector((state) => state.appReducer.loginError);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    // C'est seulement ici qu'on interagit avec Redux
    const result = await dispatch(login({ email, password }));
    if(result.payload.user.name) {
    // Optionnel : vider les champs après soumission
      setEmail('');
      setPassword('');
      navigate('/admin');
    }
    
    } catch {
      alert(`erreur lors du login`);
    }
  };

  return (
    <div className='Login'>
      <p> {errorLogin} </p>
    <form className= "Login--form" onSubmit={handleSubmit}>
      
      <div className='form-group s1'>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='form-group s1'>
        <label htmlFor="password">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button 
        type="submit"
      >
        Se connecter
      </button>
    </form>
    </div>
  );
};

export default LoginForm;
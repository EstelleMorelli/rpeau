import './Admin.scss';
import { useAppSelector } from '../../store/hooks-redux';

function Admin() {
    const connectedUser = useAppSelector((state)=> state.appReducer.connectedUser);
  return (
    <div className='Admin'>
        <p> Bonjour {connectedUser}</p>
    </div>
  );
}

export default Admin;
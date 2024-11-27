import ReactDOM from 'react-dom/client';
import './index.scss';
/*
-- BrowserRouter --
https://reactrouter.com/docs/en/v6/api#browserrouter
Composant de react-routeur-dom : il utilise l'HistoryAPI HTML5 pour surveiller l’historique des URL (avec un ecouteur d'event popState)  et stocke l'URL courante.
On englobe notre composant racine App avec <BrowserRouter>
*/
import { BrowserRouter } from 'react-router-dom';

/*
-- Provider --
On englobe notre composant principal avec le Store Provider pour pouvoir accéder au store et utiliser nos hooks useSelector et useDispacth dans tout nos composants.
*/
import { Provider } from 'react-redux';

import store from './store/store';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() =>
  new Promise<{ default: React.ComponentType }>((resolve) =>
    setTimeout(() => resolve(import('./components/App/App')), 3000)
  )
);

// On injecte notre application dans le DOM
root.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import LanguageProvider from './context/LanguageContext';
import App from './App';
import GlobalProvider from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(

  <GlobalProvider>
    <LanguageProvider>
      <Router>
        <App />
      </Router>
    </LanguageProvider>
  </GlobalProvider>
);

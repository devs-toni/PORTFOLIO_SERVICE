import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import LanguageProvider from './context/LanguageContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(

  <LanguageProvider>
    <Router>
      <App />
    </Router>
  </LanguageProvider>
);

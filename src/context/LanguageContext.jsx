import { createContext, useState, useContext } from 'react';
import tranlations from '../Translation.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
}

const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState('en');
  const [text, setText] = useState(tranlations[lang]);

  const handleLanguage = (e) => { }

  const data = { lang, text };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export default LanguageProvider;
import { createContext, useContext, useState } from "react";
import Db from '../db/Database.json';


const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {

  const [database, setDatabase] = useState(Db['db']);

  const data = {
    database
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider;
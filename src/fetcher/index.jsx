
import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const FetchContest = createContext();

export const useFetch = () => {
  return useContext(FetchContest);
}

export function DataProvider({ children }) {

  const WTI_PRICE = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=PET.RWTC.D';
  //World Oil Production
  const OIL_PRODUCTION_WLD = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=INTL.53-1-WORL-TBPD.A';
  //Oil Consuption by Country
  const OIL_CONSUPTIONS_COUNTRIES = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=INTL.5-2-SRB-TBPD.A';
  //Oil Production by Country
  const OIL_PRODUCTION_COUNTRIES = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=INTL.53-1-SRB-TBPD.A';

  const [worldOilProd, setWorldOilProd] = useState([]);
  const [oilProdCountries, setOilProdCountries] = useState([]);

  const getData = async () => {
    const response = await axios.get(OIL_PRODUCTION_WLD);
    setWorldOilProd(response);
  }

  useEffect(()=> {
    getData();
  }, []);

  const values = {
    worldOilProd,
    oilProdCountries
  }

  return (
    <FetchContest.Provider value={values}>
      {
        children
      }
    </FetchContest.Provider>
    
  )
}
  
  
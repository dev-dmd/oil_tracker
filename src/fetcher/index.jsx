
import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import countriesList from './countries.json';

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
  const OIL_PRODUCTION_COUNTRIES = [];
   //Country geography code
  for(let i = 0; i < countriesList.lists.length; i++){
    let COUNTRIES_CODE_LIST = `http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=INTL.53-1-${countriesList.lists[i].COUNTRY_CODE}-TBPD.A`;
    OIL_PRODUCTION_COUNTRIES.push(COUNTRIES_CODE_LIST);
  }
  // console.log(OIL_PRODUCTION_COUNTRIES)

  const [worldOilProd, setWorldOilProd] = useState([]);
  const [oilProdCountries, setOilProdCountries] = useState({
    countriesName: '',
    values: ''
  });

  const getData = async () => {
    const response = await axios.get(OIL_PRODUCTION_WLD);
    setWorldOilProd(response);
  }

  const getProductionCountries = async () => {
    let countries = [];
    let i;
    for(i = 0; i < OIL_PRODUCTION_COUNTRIES.length; i++ ){
      let countrie = OIL_PRODUCTION_COUNTRIES[i];
      countries.push(countrie);
    }

    for(let i = 0; i < 10; i++){
      const allCountries = await axios.get(countries[i]);
      if(allCountries.data.hasOwnProperty('data')){ continue; }
      setOilProdCountries({
        ...oilProdCountries,
        countriesName: allCountries.data,
        values: allCountries.data
      });
    }
    
    // console.log(countries.data.series[0].geography === countriesList.lists[0].COUNTRY_CODE ? countriesList.lists[0].COUNTRY_NAME : 'NaN');
    // console.log(values.data.series[0].data[0][1]);
    // setOilProdCountries({
    //   countriesName: 'Serbia',
    //   values: '14.123'
    // })
  }

  console.log(oilProdCountries);

  useEffect(()=> {
    getData();
    getProductionCountries();
  }, []);

  const values = {
    worldOilProd,
    
  }

  return (
    <FetchContest.Provider value={values}>
      {
        children
      }
    </FetchContest.Provider>
    
  )
}
  
  
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import uuid from 'react-uuid';

import GridContainer from './layouts/Grid/GridContainer';
import GridItem from './layouts/Grid/GridItems';

const baseUrl = `http://api.eia.gov`;
const apiKey = 'api_key=c10de4f134f66672b5c80ff6c0eda8c4';

const App = () => {
  const [worldProduction, setWorldProduction] = useState([]);
  // total world production for next year
  const TotalWorldPetroleumProductionAnnual = () => {
    axios.get(`${baseUrl}/series/?${apiKey}&series_id=STEO.PAPR_WORLD.A`)
    .then(res => (res.status === 200 || res.status === 201) && setWorldProduction([res.data.series[0]]));
  }

  useEffect(() => {
    TotalWorldPetroleumProductionAnnual();
  },[]);

  // total world production for 2018 year
  const [worldConsumption, setWorldConsumption] = useState([]);
  const WorldOilConsumption  = () => {
    axios.get(`${baseUrl}/series/?${apiKey}&series_id=INTL.4415-2-WORL-QBTU.A`)
    .then(res => (res.status === 200 || res.status === 201) && setWorldConsumption(res.data.series));
  }
  useEffect(() => {
    WorldOilConsumption();
  },[]);

  // set last year
  const year = () => {
    const date = new Date();
    const lastYear = (date.getFullYear() - 1).toString();
    return lastYear;
  }

  // serialID of countrys,consuption oil
  const [serialIdConsuption , setSerialIdConsuption] = useState([]);
  // serialID of countrys,consuption oil
  const OilConsuptionByCountry = () => {
    axios.get(`${baseUrl}/category/?${apiKey}&category_id=2134436`)
    .then(res => 
      (res.status === 200 || res.status === 201) &&
      setSerialIdConsuption(res.data.category.childseries
        .filter(data => data.units === "thousand barrels per day")
        .map(serialId => serialId.series_id)))
    .catch(error => alert(error));
  }

  useEffect(() => {
    OilConsuptionByCountry();
  },[]);

      const first100 = [];
      const first200 = [];
      const first300 = [];

  if(serialIdConsuption.length > 1) {
      for(let i = 0; i <= 99; i++){
        first100[first100.length] = serialIdConsuption[i];
      }
      for(let i = 100; i <= 199; i++){
        first200[first200.length] = serialIdConsuption[i];
      }
      for(let i = 200; i <= serialIdConsuption.length - 1; i++){
        first300[first300.length] = serialIdConsuption[i];
      }
  }

  // countrys consuption oil and number of consuption oil by year,anual
  const [allCountrysConsuption, setAllCountrysConsuption] = useState([]);
  const [first100Filter, setFirst100Filter] = useState([]);
  const [first200Filter, setFirst200Filter] = useState([]);
  const [first300Filter, setFirst300Filter] = useState([]);
  // countrys consuption oil and number of consuption oil by year,anual
  const countrysWithMostConsumption = () => {
    axios.get(`${baseUrl}/series/?${apiKey}&series_id=${first100.join(";")}`)
    .then(res =>
     (res.status === 200 || res.status === 201) && 
     setFirst100Filter(res.data.series.filter(data => data.data[0][0] === year())))
    .catch(error => alert(error));

    axios.get(`${baseUrl}/series/?${apiKey}&series_id=${first200.join(";")}`)
    .then(res =>
     (res.status === 200 || res.status === 201) && 
     setFirst200Filter(res.data.series.filter(data => data.data[0][0] === year())))
    .catch(error => alert(error));

    axios.get(`${baseUrl}/series/?${apiKey}&series_id=${first300.join(";")}`)
    .then(res =>
     (res.status === 200 || res.status === 201) && 
     setFirst300Filter(res.data.series.filter(data => data.data[0][0] === year())))
    .catch(error => alert(error));
  }


  useEffect(() => {
    setAllCountrysConsuption(
      first100Filter
      .concat(first200Filter)
      .concat(first300Filter)
      .sort((a,b) => { 
        return a.data[0][1] - b.data[0][1]}).reverse()
      );

  },[first100Filter,first200Filter,first300Filter]);


  // serialID of countrys,product oil
  const [serialIdProducing , setSerialIdProducing] = useState([]);
  // serialID of countrys,product oil
  const oilProducingCountriesSerialId = () => {
    axios
    .get(`${baseUrl}/category/?${apiKey}&category_id=1039874`)
    .then(res => 
      (res.status === 200 || res.status === 201) &&
      setSerialIdProducing(
        res.data.category.childseries.filter(data => data.f === "A")
        .map(data => data.series_id).join(";"))
      )
    .catch(error => alert(error));
  }
  // countrys product oil and number of product oil
  const [allCountrysProducing, setAllCountrysProducing] = useState([]);
  // countrys product oil and number of product oil
  const oilProducingCountries = () => {
    axios.get(`${baseUrl}/series/?${apiKey}&series_id=${serialIdProducing}`)
    .then(res => 
      (res.status === 200 || res.status === 201) && 
      setAllCountrysProducing(res.data.series))
    .catch(error => alert(error));
  }

  useEffect(() => {
    oilProducingCountriesSerialId()
  },[]);

  useEffect(() => {
    oilProducingCountries()
  },[serialIdProducing]);

  useEffect(() => {
    countrysWithMostConsumption();
  },[serialIdConsuption])

  return (
    <div className="App">
      <GridContainer spacing={3}>
        <GridItem xs={12}>
          <button onClick={() => countrysWithMostConsumption()}>countrys With Most Consumption</button>
        </GridItem>
      </GridContainer>

      <div>
        <h1>Oil Producing Countries Last Year</h1>

        {allCountrysProducing ? 
          allCountrysProducing.map(data => 
            <p key={uuid()}>
            {data.name.split(",")[data.name.split(",").length - 2] + " => "} 
            {"last year,anual = " + data.data[0][1]}
            </p>
            ) : <img src="https://bit.ly/2RbpjUq" alt="loading_gif"/>
        }
      </div>

      <div>
        <h1>Oil Consuption Countries Last Year</h1>
        {allCountrysConsuption ? 
          allCountrysConsuption.slice(0,3).map(data => <p key={uuid()}>
            {data.name.split(",")[data.name.split(",").length - 2] + " => "}
            {"last year,anual = " + data.data[0][1]}
            </p>
            ) : <img src="https://bit.ly/2RbpjUq" alt="loading_gif"/>
        }
      </div>

      <div>
        <h1>World Production</h1>
        {worldProduction ?
          worldProduction.map(data => 
            <p key={uuid()}>{data.name + " = >"}{data.data[0][1]}</p>)
          : <img src="https://bit.ly/2RbpjUq" alt="loading_gif"/>

        }
      </div>

      <div>
        <h1>World Consuption</h1>
        {worldConsumption ?
          worldConsumption.map(data => 
            <p key={uuid()}>{data.name + " = >"}{data.data[0][1]}</p>)
          : <img src="https://bit.ly/2RbpjUq" alt="loading_gif"/>

        }
      </div>

    </div>

  );
}

export default App;

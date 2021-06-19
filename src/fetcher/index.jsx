import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Data() {

  const WTI_PRICE = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=PET.RWTC.D';
  const OIL_PRODUCTION = 'http://api.eia.gov/series/?api_key=c10de4f134f66672b5c80ff6c0eda8c4&series_id=INTL.53-1-WORL-TBPD.M';

  const [wtiPrice, setWtiPrice] = useState([]);
  const [oilProd, setOilProd] = useState([]);

  const getData = async () => {
    const response = await axios.get(OIL_PRODUCTION);
    console.log(response.data.series[0]);
    setWtiPrice(response)
  }

  useEffect(()=> {
    getData()
  }, []);

  return (
    <div>
      {/**<pre>{JSON.stringify(wtiPrice, null, 2)}</pre>*/}
    </div>
  )
}
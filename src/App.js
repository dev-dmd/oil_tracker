import React from 'react';
import './App.css';

import GridContainer from './layouts/Grid/GridContainer';
import GridItem from './layouts/Grid/GridItems';


const App = () => {
  return (
    <div className="App">
      <GridContainer spacing={3}>
        <GridItem xs>
          Hello
        </GridItem>
      </GridContainer>
    </div>

  );
}

export default App;

import GridContainer from './layouts/Grid/GridContainer';
import GridItem from './layouts/Grid/GridItems';

function App() {
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

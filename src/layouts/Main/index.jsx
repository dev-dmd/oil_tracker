import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItems';
import PaperItem from '../Grid/PaperItem';
import {ReactComponent as WorldMap} from '../../assets/images/map.svg';
import PaperContainer from '../Grid/PaperContainer';
import Productions from '../../components/productions';
import Producers from '../../components/producers';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    alignSelf: 'stretch'
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer style={{zIndex: 0, position: 'relative'}} container spacing={0}>
        <GridItem item xs={12} sm={3}>
          <GridContainer spacing={2}>
            <GridItem xs={12}>
              <PaperItem elevation={24} style={{padding: '20px 0px 50px 0px', position: 'relative'}}>
                <Productions />
              </PaperItem>
            </GridItem>
            <GridItem xs={12}>
              <PaperItem elevation={24} style={{padding: '20px 0px 10px 0px'}}>
                {/*<Producers />*/}
              </PaperItem>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem style={{zIndex: -1, position: 'relative'}} item xs={12} sm={5}>           
          <PaperContainer elevation={0}>
            <WorldMap />
          </PaperContainer>
        </GridItem>
        <GridItem item xs={12} sm={4}>           
          <PaperItem>Right</PaperItem>
        </GridItem>
      </GridContainer>           
    </div>
  );
}

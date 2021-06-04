import React from 'react';
import Header from './layouts/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from './layouts/Footer';
import GridContainer from './layouts/Grid/GridContainer';
import GridItem from './layouts/Grid/GridItems';
import Main from './layouts/Main';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    '& > .MuiPaper-root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
  },
  background: {
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(1),
    
    color: theme.palette.text.secondary
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider style={{height: '100vh'}} theme={theme}>
      <CssBaseline />             
      <div  className={classes.root}>
        <GridContainer container spacing={0}>
          <GridItem className={classes.background} item xs={12}>
          <div style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 16px)'}}>
            <Header xs={12} className={classes.paper} />
            <Main />
            <Footer className={classes.paper} />
          </div>
          </GridItem>
        </GridContainer>           
      </div>
    </ThemeProvider>
  );
}

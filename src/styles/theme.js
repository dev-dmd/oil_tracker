import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { typography } from './typography';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#232554',
    },
    secondary: {
      main: '#1c1e43',
    },
    text: {
      primary: '#ffffff',
      secondary: '#878eca',
    },
    button: {
      default: '#66C7DC',
      hover: '#66C7DC',
      visited: '#66C7DC',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#FF9800'
    },
    background: {
      default: '#1c1e43',
    },
  },
  typography
});

export default theme;
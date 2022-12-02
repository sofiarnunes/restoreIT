// Name: Sofia Nunes 
// Date: 30-11-2022
// Motive: btn styling component with Material UI

// Style MUI
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@mui/material/styles';

// Color Variables
export const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#6fbc29',
    },
    light: {
      main: '#fff',
    },
    blue: {
      main: '#007ab6',
    },
  },
});

export const colorLight = createTheme({
  palette: {
    primary: {
      main: '#dc7647',
    },
    light: {
      main: '#db9b6a',
    },
  },
});


export const useBtn = makeStyles((theme) => ({
    btn: {
      '& .btn': {
        height: '40px',
        padding: '12px 0'
      },
      '& .base_light_btn': {
        backgroundColor: 'transparent',
        color: colorLight.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '13px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
        padding: '8px 0',
        border: 'solid 1px #c4c4c4',
        '&:hover': {
          backgroundColor: colorLight.palette.light.main,
          color: '#FAEDE3',
        }
      },
    },
  }));



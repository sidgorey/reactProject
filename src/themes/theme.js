import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#86A5D9',
        main:  '#5F4BB6', 
        dark:  '#202A25',
        contrastText: 'rgb(255,255,255)',
        textColorPrimary: '#86A5D9'
      },
      typography: {
        useNextVariants: true,
      }
      // error: red,
      // 
      // dominant:,
      // accentPrimary: '#5F4BB6',
      // accentSecondary: 

    }
  });

  export default theme
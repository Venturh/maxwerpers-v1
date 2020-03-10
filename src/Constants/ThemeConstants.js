import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import teal from "@material-ui/core/colors/teal";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
export const themeConstants = {
    THEME_LIGHT: createMuiTheme({
        palette: {
          primary: {
            main: '#a7ffeb',
          },
          secondary: {
            main: '#80deea',
          },
          type: "light"
        },
        
        typography: {

          useNextVariants: true,
         

          h1: {
            color: "#000000",
          },
          h2: {
            color: "#000000",
          },
          h3: {
            color: "#000000",
          }
        },

        

      }),
      
      THEME_DARK: createMuiTheme({
        palette: {
          primary: {
            main: "#262833",
          },
          secondary: {
            main: "#4ACFAC",
          },
          type: "dark"
        }
      })

    
    
 
};
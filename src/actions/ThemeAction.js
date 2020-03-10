import {themeConstants} from "../Constants/ThemeConstants"


function changeTheme(themeType){
    let theme;
    if (themeType == "dark") {
        theme = themeConstants.THEME_LIGHT
        themeType = "light"
      } else {
        theme = themeConstants.THEME_DARK
        themeType = "dark"
      }
     return dispatch => {
        dispatch(changeTheme_succes(themeType, theme))

     }


    function changeTheme_succes(themeType, theme) { return { type: "THEMETYPE", themeType, theme: theme }}
}

export const themeAction = {
    changeTheme,

  };
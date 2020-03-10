export function theme(state = {}, action){
    console.log("Theme bei reducer: " + action.themeType)
    switch(action.type){
        case "THEMETYPE":
            return{
                themeType: action.themeType,
                theme: action.theme
            }
        default:
            return state;
    }
}
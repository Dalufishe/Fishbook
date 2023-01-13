
export const darkModeReducer = (prevState = {
    mode: "light",
}, action) => {
    const newState = { ...prevState };
    switch (action.type) {
        case "darkMode":
            newState.mode = action.mode;
            return newState;
        default:
            return prevState;
    }
} 

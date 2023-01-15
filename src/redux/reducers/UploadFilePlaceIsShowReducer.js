export const UploadFilePlaceIsShowReducer = (prevState = {
    UploadFilePlaceIsShow: false,
}, action) => {
    const newState = { ...prevState };
    switch (action.type) {
        case "UploadFilePlaceIsShow":
            newState.UploadFilePlaceIsShow = action.isShow
            return newState;
        default:
            return prevState;
    }
} 

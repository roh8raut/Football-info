const initialState = {
    isLoading: true,
    data: [],
}

export const playerReducer = (state = initialState, action) => {
    console.log('reducer>>>', state)
    if(action.type === "PLAYERS_FETCH"){
        return {
            ...state,
            isLoading: false,
            data: action.payload
        }
    }

    return state;
}
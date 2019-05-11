const initialState = {
  isLoading: true,
  data: [],
  matches: [],
  matchInfo: [],
};

export const playerReducer = (state = initialState, action) => {
  if (action.type === "PLAYERS_FETCH") {
    return {
      ...state,
      isLoading: false,
      data: action.payload
    };
  }
  return state;
};

export const teamsReducer = (state = initialState, action) => {
  if (action.type === "TEAMS") {
    action.payload.teams.forEach((items, index) => {
      state.data.push(items.name);
    });
    return {
      data: state.data
    };
  }
  return state;
};

export const matchReducer = (state = initialState, action) => {

  if (action.type === "MATCHES") {
    return {
      matches: action.payload.matches,
      isLoading: false
    };
  }
 return state;
}

export const matchResultReducer = (state = initialState, action) => {
const Arr = []
  if (action.type === "MATCH_INFO") {
    action.payload.matches.map((m) => {
      if(m.homeTeam.name === action.payload.textValue || m.awayTeam.name === action.payload.textValue){
        Arr.push(m)
      }
    })
    return {
      matchInfo: Arr  
  }
  }

  if(action.type === "RESET_MATCHINFO"){
    return {
      matchInfo: []
  }
}
  return state;
};


  


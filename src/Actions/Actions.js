export const playerAction = (data) => {
    return {
        type: "PLAYERS_FETCH",
        payload: data
    }
}

export const teamDetails = (data) => {
    return {
        type: "TEAMS",
        payload: data
    }
}

export const matchDetails = (data) => {
    return {
        type: "MATCHES",
        payload: data
    }
}

export const setMatchInfo = (matches, textValue) => {
    return {
        type: "MATCH_INFO",
         payload: {
            textValue: textValue,
             matches: matches
         }
        
    }
}

export const resetArr = (matches) => {
    return {
        type: "RESET_MATCHINFO",
        payload: matches
    }
}









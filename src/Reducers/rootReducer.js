import { combineReducers } from 'redux'
import { playerReducer, teamsReducer, matchReducer, matchResultReducer } from './PlayerReducer';

export const rootReducer = combineReducers({playerReducer, teamsReducer, matchReducer, matchResultReducer});


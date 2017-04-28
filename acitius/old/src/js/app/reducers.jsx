import { combineReducers } from 'redux';
import navReducer from './nav/reducers';

const rootReducer = combineReducers({ navReducer });

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;

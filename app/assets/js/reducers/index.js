import { combineReducers } from 'redux';
import phrase from './phrase';
import pictures from './pictures';

export default combineReducers({
  phrase,
  pictures
});

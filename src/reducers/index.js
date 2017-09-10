import { combineReducers } from 'redux';
import ArtistReducer from './reducer_artist';

const rootReducer = combineReducers({
      	  artist: ArtistReducer
});

export default rootReducer;
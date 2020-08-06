import { combineReducers } from 'redux';
import arts from '../Containers/Arts';
import reducers from './reducers';

const allReducers = combineReducers({
    arts: arts,
    active: reducers
})


export default allReducers;
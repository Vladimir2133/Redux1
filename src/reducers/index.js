import { combineReducers} from "redux";
import counterReducer from "reducers/counter"


const reducer = combineReducers({
       counter: counterReducer
});

export {reducer}


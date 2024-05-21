import {applyMiddleware, combineReducers} from "redux";
import {compose} from "redux";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import { legacy_createStore as createStore} from 'redux';
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";



const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import userReducer from "./user";

const reducers = combineReducers ({
    firebaseReducer: firebaseReducer,
    firestore: firestoreReducer,
    user : userReducer
})

export default reducers
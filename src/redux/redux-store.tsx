import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
let store = createStore(reducers)

// @ts-ignore
window.store = store
export default store;
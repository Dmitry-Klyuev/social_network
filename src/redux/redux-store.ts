import {combineReducers, createStore, Dispatch} from 'redux'
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogsReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import usersReducer, {usersActionType} from "./usersReducer";

export type AppDispatchType = Dispatch<AppActionsTypes>;
export type AppActionsTypes = ProfileActionType | DialogActionType | usersActionType;


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
let store = createStore(reducers)

// @ts-ignore
window.store = store
export default store;
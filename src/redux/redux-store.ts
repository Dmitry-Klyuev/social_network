import {combineReducers, createStore, Dispatch} from 'redux'
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogsReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import usersReducer, {usersActionType} from "./usersReducer";

export type AppDispatchType = Dispatch<AppActionsTypes>;
export type AppActionsTypes = ProfileActionType | DialogActionType | usersActionType;


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


// @ts-ignore
window.store = store
export default store;
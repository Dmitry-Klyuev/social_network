import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersStateType,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";
import UsersClass from "./UsersClass";

type MapStateToPropsType =  {
    usersPage: UsersStateType
}

type MapDispatchToPropsType =  {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    currentPage: (page:number) => void
    setTotalUsersCount: (totalCount: number) => void

}


export type UsersType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        currentPage: (page:number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)
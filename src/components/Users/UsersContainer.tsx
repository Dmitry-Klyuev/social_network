import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";
import {AppDispatchType} from "../../redux/redux-store";

type MapStateToPropsType =  {
    users: Array<UsersType>
}

type MapDispatchToPropsType =  {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unFollowAC,
    UsersStateType,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    usersPage: UsersStateType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    currentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainerApi extends React.Component<UsersType, UsersStateType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickPageChange = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.currentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                   pageSize={this.props.usersPage.pageSize}
                   currentPage={this.props.usersPage.currentPage}
                   onClickPageChange={this.onClickPageChange}
                   users={this.props.usersPage.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType =>
{
    return {
        usersPage: state.usersPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>
{
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
        currentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)
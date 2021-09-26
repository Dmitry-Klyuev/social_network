const CURRENT_PAGE = 'CURRENT_PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

type followACType = {
    type: 'FOLLOW'
    userId: number
}

type unfollowACType = {
    type: 'UNFOLLOW'
    userId: number
}

type setUsersACType = {
    type: 'SET_USERS'
    users: Array<UserType>
}

type setCurrentPageACType = {
    type: 'CURRENT_PAGE'
    currentPage: number
}
type setTotalUsersCountACType = {
    type: 'SET_TOTAL_COUNT'
    usersCount: number
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos: { small?: string, large?: string }
    status: string
    followed: boolean
}

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type usersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,


}
export const usersReducer = (state: UsersStateType = initialState, action: usersActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT:{
            return {...state, totalUsersCount: action.usersCount}
        }

        default:
            return state
    }
}

export const followAC = (userId: number): followACType => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>): setUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (usersCount: number):setTotalUsersCountACType => ({type: SET_TOTAL_COUNT, usersCount})

export default usersReducer;

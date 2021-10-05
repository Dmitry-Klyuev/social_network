const CURRENT_PAGE = 'CURRENT_PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'

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

type setIsFetchingACType = {
    type: 'IS_FETCHING'
    isFetching: boolean
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
    isFetching: boolean
}

export type usersActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}

export const follow = (userId: number): followACType => ({type: FOLLOW, userId});
export const unfollow = (userId: number): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UserType>): setUsersACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({type: CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount: number): setTotalUsersCountACType => ({type: SET_TOTAL_COUNT, usersCount})
export const setIsFetching = (isFetching: boolean): setIsFetchingACType => ({type: IS_FETCHING, isFetching})


export default usersReducer;

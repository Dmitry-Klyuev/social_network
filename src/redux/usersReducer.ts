
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
    users: Array<UsersType>
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos: {small?: string, large?: string}
    status: string
    followed: boolean
}

export type UsersStateType = {
    users: Array<UsersType>
}

export type usersActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

let initialState : UsersStateType= {
    users: []
    //     {id: 1, fullName: 'Dmirty', avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg', followed: true, status: 'i am a boss', city: 'Minsk', country: 'Belarus'},
    //     {id: 2, fullName: 'Oleg', avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg', followed: false, status: 'i am a boss too', city: 'Moscow', country: 'Russia'},
    //     {id: 3, fullName: 'Andrey', avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg', followed: true, status: 'i am a boss too', city: 'Kiev', country: 'Ukraine'},
    //
    // ]
}
export const usersReducer = (state: UsersStateType = initialState, action:usersActionType) : UsersStateType=> {
    switch (action.type) {
        case FOLLOW:{
            return {...state.users,
            users: state.users.map( el => {
                if (el.id === action.userId){
                    return {...el, followed: true}
                }
                return el
            }),
            }
        }
        case UNFOLLOW: {
            return {...state,
            users: state.users.map(el => {
                if (el.id === action.userId){
                    return {...el, followed: false}
                }
                return el
            })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): followACType => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: SET_USERS, users})

export default usersReducer;

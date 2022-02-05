import React from 'react'
import s from "./Users.module.css";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import userUnknownPhoto from "../../img/ava.jpg";
import Button from "@material-ui/core/Button";
import {UserType} from "../../redux/usersReducer";
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageChange: (pageNumber: number) => void
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}

export const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return <>
        <div className={s.pagination}>
            {/*<Pagination count={pageCount} color="secondary"/>*/}
            {page.map(p => {

                return <span className={props.currentPage === p ? s.activeNumber : ''}
                             onClick={() => props.onClickPageChange(p)}
                >{p}</span>
            })}
        </div>
        <Container fixed style={{marginTop: '15px'}}>
            {
                props.users.map(u => <div key={u.id}>
                    <Paper elevation={3} style={{width: '95%', marginLeft: '15px'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <div className={s.avatar}>
                                    <NavLink to={`/profile/${u.id}`} >
                                        <img src={userUnknownPhoto} alt={'avatar'}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <Button variant="contained"
                                                  style={{margin: '5px'}}

                                                  onClick={() => {
                                                      props.unfollow(u.id)
                                                  }}>Unfollow</Button>
                                        : <Button variant="contained"
                                                  style={{margin: '5px'}}
                                                  onClick={() => {
                                                      props.follow(u.id)
                                                  }}>Follow</Button>}
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div>{u.name}</div>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography align={'left'}>
                                    <div>{u.status != null ? u.status : 'status not set'}</div>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <div>{'u.country'}</div>
                                <div>{'u.city'}</div>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>)
            }
        </Container>
    </>
}
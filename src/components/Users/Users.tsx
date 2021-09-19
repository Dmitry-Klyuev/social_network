import React from 'react';
import s from './Users.module.css'
import Button from '@material-ui/core/Button';
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import axios from "axios";
import userUnknownPhoto from '../../img/ava.jpg'
import {UsersType} from "./UsersContainer";



export const Users = (props: UsersType) => {


    if (props.usersPage.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items)
        })
    }

    return (
        <Container fixed>
            {
                props.usersPage.users.map(u => <div key={u.id}>

                    <Paper elevation={3} style={{width: '95%', marginLeft: '15px'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <div className={s.avatar}>
                                    <img src={userUnknownPhoto } alt={'avatar'}/>
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
                                <Typography align={'left'}     >
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
    )
}
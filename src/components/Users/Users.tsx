import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../redux/usersReducer";
import Button from '@material-ui/core/Button';
import {Container, Grid, Paper, Typography} from "@material-ui/core";

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
                fullName: 'Dima',
                status: 'i am the boss',
                followed: true,
                country: 'Belarus',
                city: 'Minsk'
            },
            {
                id: 2,
                avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
                fullName: 'Oleg',
                status: 'Yo, i am the boss too',
                followed: false,
                country: 'Russia',
                city: 'Moscow'
            },
            {
                id: 3,
                avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
                fullName: 'Nikita',
                status: 'I am haiter',
                followed: false,
                country: 'Ukraine',
                city: 'Kiev'
            }

        ])
    }

    return (
        <Container fixed>
            {
                props.users.map(u => <div key={u.id}>

                    <Paper elevation={3} style={{width: '95%', marginLeft: '15px'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <div className={s.avatar}>
                                    <img src={u.avatar} alt='Avatar'/>
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

                                <div>{u.fullName}</div>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography align={'left'}     >
                                    <div>{u.status != null ? u.status : 'status not set'}</div>
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <div>{u.country}</div>
                                <div>{u.city}</div>
                            </Grid>

                        </Grid>
                    </Paper>

                </div>)
            }
        </Container>
    )
}
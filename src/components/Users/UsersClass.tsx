import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import s from "./Users.module.css";
import userUnknownPhoto from "../../img/ava.jpg";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {UsersType} from "./UsersContainer";

class UsersClass extends React.Component<UsersType> {

    constructor(props: UsersType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            <Container fixed>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <Paper elevation={3} style={{width: '95%', marginLeft: '15px'}}>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <div className={s.avatar}>
                                        <img src={userUnknownPhoto} alt={'avatar'}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <Button variant="contained"
                                                      style={{margin: '5px'}}

                                                      onClick={() => {
                                                          this.props.unfollow(u.id)
                                                      }}>Unfollow</Button>
                                            : <Button variant="contained"
                                                      style={{margin: '5px'}}
                                                      onClick={() => {
                                                          this.props.follow(u.id)
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
}

export default UsersClass


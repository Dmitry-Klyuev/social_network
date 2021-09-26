import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import s from "./Users.module.css";
import userUnknownPhoto from "../../img/ava.jpg";
import Button from "@material-ui/core/Button";
import axios from "axios";

import {UsersStateType} from "../../redux/usersReducer";
import {UsersType} from './UsersContainer'

class UsersClass extends React.Component<UsersType, UsersStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickPageChange = (pageNumber: number) => {
        this.props.currentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount =  Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        let page = []
        for (let i = 1; i <= pageCount; i++){
            page.push(i)
        }
        return <>
            <div className={s.pagination}>
                {page.map( p => {
                    return <span className={this.props.usersPage.currentPage === p ? s.activeNumber : ''}
                    onClick={ ()=>{this.onClickPageChange(p)} }
                    >{p}</span>
                })}
            </div>
                <Container fixed style={ {marginTop: '15px'} }>
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


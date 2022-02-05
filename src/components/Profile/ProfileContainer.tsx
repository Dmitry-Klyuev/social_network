import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";

export class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                
            })
    }
    render() {
        return (
            <div>
                <Profile  />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)


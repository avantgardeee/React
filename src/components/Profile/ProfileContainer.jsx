import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileUser,
    getStatus,
    savePhoto,
    saveProfile,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom'
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{
    refreshProfile(){
        let userId=this.props.router.params.userId;
        if (!userId){
            userId=this.props.authorizedUserId;
        }
        this.props.getProfileUser(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
            this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId!==prevProps.router.params.userId) {this.refreshProfile();}
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps=(state)=>({
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth,
        profileDataUpdateStatus:state.profilePage.profileDataUpdateStatus,

})

export default compose(
    connect(mapStateToProps,{getProfileUser, getStatus,updateStatus,savePhoto,saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, setUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom'
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    componentDidMount() {
        let userId=this.props.router.params.userId;
        if (!userId){
            userId=2;
        }
        this.props.getProfileUser(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)

let mapStateToProps=(state)=>({
        profile:state.profilePage.profile,

})

let WithUrlDataContainerComponent= withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,{getProfileUser})(WithUrlDataContainerComponent);

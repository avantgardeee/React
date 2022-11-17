import s from './ProfileInfo.module.css';
import React from "react";

class ProfileStatus extends React.Component {

    state={
        editMode:false
    }

    activateEditMode=()=>{
        this.setState({editMode: !this.state.editMode})
    }

    render() {
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input value={this.props.status} autoFocus={true} onBlur={this.activateEditMode}></input>
                </div>
            }
        </div>

    )
}
}

export default ProfileStatus;

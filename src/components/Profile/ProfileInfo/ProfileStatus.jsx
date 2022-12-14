import s from './ProfileInfo.module.css';
import React from "react";

class ProfileStatus extends React.Component {
    state={
        editMode:false,
        status:this.props.status
    }

    onStatusChange=(e)=>{
        console.log(this)
        debugger
        this.setState({
            status:e.currentTarget.value
        })
    }

    activateEditMode=()=>{
        this.setState({editMode: true})

    }
    deactivateEditMode=()=>{
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status!==this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode }></input>
                </div>
            }
        </div>

    )
}
}

export default ProfileStatus;

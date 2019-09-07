import React from 'react';
import './user.css';
import FollowBtn from "../followBtn/followBtn";

class User extends React.Component {
    state = {
        counter: 0
    };

    handleDec() {
        this.setState({counter: this.state.counter - 1})
    };

    handleInc() {
        this.setState({counter: this.state.counter + 1})
    };

    render() {
        const {name, group_name} = this.props.user;
        return (
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex justify-content-between">
                        <div className="flex-column align-items-start">
                            <h5 className="mb-1">{name}</h5>
                            <span className="badge badge-primary badge-pill">Followers: {this.state.counter}</span>
                            <p className="mb-1">{group_name}</p>
                        </div>
                        <FollowBtn counterDec={this.handleDec.bind(this)}
                                   counterInc={this.handleInc.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;

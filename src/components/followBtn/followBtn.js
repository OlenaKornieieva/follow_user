import React from 'react';
import './followBtn.css';

class FollowBtn extends React.Component {
    state = {
        following: false,
        hover: false
    };
    toggleFollow(){
        this.setState({following: true});
        this.props.counterInc();
        this.setState({hover: false});
    };
    toggleUnfollow(){
        this.setState({following: false});
        this.props.counterDec();
    };
    toggleHoverOn(){
        this.setState({hover: true});
    };
    toggleHoverOff(){
        this.setState({hover: false});
    };

    render() {
        const textBtn = this.state.hover ? 'Unfollow' : 'Following';
        return (
            <div className="d-flex align-self-center followingBtn">
                {this.state.following ?
                    <button
                        className={this.state.hover ? 'btn btn-danger' : 'btn btn-success'}
                        onMouseOver={this.toggleHoverOn.bind(this)}
                        onMouseOut={this.toggleHoverOff.bind(this)}
                        onClick={this.toggleUnfollow.bind(this)}
                    >{textBtn}
                    </button> :
                    <button
                        className="btn btn-warning"
                        onClick={this.toggleFollow.bind(this)}
                    >Follow
                    </button>}
            </div>
        );
    }
}

export default FollowBtn;
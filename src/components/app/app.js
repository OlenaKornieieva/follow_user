import React from 'react';
import './app.css';
import Login from "../login/login";
import UsersList from "../usersList/usersList";

class App extends React.Component {

    state = {
        userId: null
    };

    componentDidMount() {
        if (localStorage.getItem("user_id") !== null) {
            this.setState({userId: localStorage.getItem("user_id")})
        }
    }

    render() {

        const {userId} = this.state;
        return (
            <Login userId={userId}/>
        )
    }
}

export default App;

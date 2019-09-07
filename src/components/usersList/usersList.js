import React from 'react';
import './usersList.css';
import UsersService from "../services/UsersService";
import User from "../user/user";

class UsersList extends React.Component {

    state = {
        users: [],
        error: null,
    };

    userService = new UsersService();

    componentDidMount() {
        this.userService.getUsers().then((users) => {
            this.setState({users})
        }).catch((error) => {
            this.setState({error: error.message});
        });
    }

    render() {

        let {users} = this.state;
        const {curUser} = this.props;

        if (curUser) {
            users = users.filter((user) => {
                return user.id !== curUser.id
            });
        }

        return (
            <div>
                {users.sort((a, b) => (a.name > b.name ? 1 : -1))
                    .map((user) => {
                        return (
                            <User key={user.id}
                                  user={user}
                            />
                        )
                    })}
            </div>
        )
    }
}

export default UsersList;
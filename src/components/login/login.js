import React from 'react';
import UsersService from "../services/UsersService";
import UsersList from "../usersList/usersList";
import LoginBtn from "../loginBtn/loginBtn";

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        authResult: "",
        curUser: "",
    };

    usersService = new UsersService();

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.usersService.getUsers().then((users) => {
                const curUser = users.find((user) => {
                    return user.id === +this.props.userId
                });
                this.setState({curUser});
            })
        }
    }

    handleSubmit = (event) => {
        const {email, password} = this.state;
        event.preventDefault();
        if (!(email && password)) {
            return;
        }
        this.usersService.getUsers()
            .then((users) => {
                const curUser = users.find((user) => {
                    return user.email === email
                });
                if (curUser === undefined) {
                    this.authSetResult('authError');
                    return;
                }
                this.setState({email});
                this.authSetResult('authOk');
                this.setState({curUser});
                localStorage.setItem("user_id", curUser.id);
            })
            .catch((error) => {
                console.log(error);
                this.authSetResult('authError');
            });
    };

    authSetResult = (result) => {
        this.setState({authResult: `${result}`});
        return result;
    };

    render() {
        const {email, password, authResult, curUser} = this.state;

        if (authResult === 'authOk' || curUser) {
            return (
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8">
                        <p className="m-3">Welcome, <span className="font-weight-bold">{curUser.name}</span></p>
                        <p className="m-3">Choose users follow:</p>
                        <UsersList curUser={curUser}/>
                    </div>
                </div>
            )
        }

        if (authResult === 'authError') {
            return (
                <div className="d-flex justify-content-center mt-5">Must be signed in</div>
            )
        }

        return (
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="mt-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="input-container">
                                    <input required
                                           className="form-control"
                                           type="email"
                                           placeholder="Email"
                                           value={email}
                                           onChange={(e) => {
                                               this.setState({email: e.target.value})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-container">
                                    <input required
                                           className="form-control"
                                           type="password"
                                           placeholder="Password"
                                           value={password}
                                           onChange={(e) => {
                                               this.setState({password: e.target.value})
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <LoginBtn/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;


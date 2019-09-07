import React from 'react';
import UsersService, {TEMPLATE_USERS} from "../services/UsersService";
import UsersList from "../usersList/usersList";
import LoginBtn from "../loginBtn/loginBtn";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        authResult: "",
        curUser: ""
    };
    usersService = new UsersService();

    componentDidUpdate(prevProps, prevState, snapshot)    {
        if(prevProps.userId !== this.props.userId) {
            if(this.props.userId) {
                this.usersService.getUsers().then((users)=>{
                    const curUser = users.find((user) => {
                        return user.id === +this.props.userId
                    });
                    this.setState({curUser});
                })
            }
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        if (!(email && password)) {
            return;
        }
        this.usersService.getUsers()
            .then((users) => {
                this.setState({email});
                this.authSetResult('authOk');

                const curUser = users.find((user)=> {
                    return user.email === email
                });

                this.setState({curUser});

                localStorage.setItem("user_id", curUser.id);
                localStorage.setItem(curUser.id, JSON.stringify(TEMPLATE_USERS));
            })
            .catch((error) => {
                this.authSetResult('authError');
            });
    };

    authSetResult = (result) => {
        this.setState({authResult: `${result}`, loading: false});
        return result;
    };

    render() {
        const {email, password, authResult, curUser} = this.state;

        if (authResult === 'authOk' || curUser) {
            return (
                <div>
                    Welcome, {curUser.name}<br/>
                    Choose users follow:<br/>
                    <UsersList curUser={curUser}/>
                </div>
            )
        }
        if (authResult === 'authError'){
            return (
                <div>Must be signed in</div>
            )
        }
        return (
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
                <div className="form-group text-danger">
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
        )
    }
}

export default Login;


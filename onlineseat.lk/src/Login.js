import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import { analytics } from 'firebase';

class Login extends Component {
    constructor(props) {
        super(props);
    } 

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password"
                        name="password" class="form-control" id="exampleInputPassword" placeholder="password" />

                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-sucess">Signup</button>
                </form>
            </div>
        );
    }

}

export default Login;
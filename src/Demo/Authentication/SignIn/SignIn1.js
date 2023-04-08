import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import swal from 'sweetalert';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'
import { getUrl } from '../../../api';


class SignUp1 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: 'user@test.com',
          password: 'Admin@123',
          submitted: false,
          loading: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

    async handleSubmit(e) {
 
        const { username, password } = this.state;
        if (username === "" || password === "") {
          swal("Validation!", "Email and password fields cannot be empty", "error");
          return
        }
        this.setState({ loading: true })
    
          axios({
            method: 'post',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
              },
            url: getUrl() + 'api/login',
            data: {
              email: username,
              password: password
            }
          }).then((response) => {

            console.log(response)

            sessionStorage.setItem("token", response.data.data.api_token);
            sessionStorage.setItem("logged_in", 'true');
            this.setState({ loading: false })
           this.props.history.push('/')


          }).catch((error) => {
            console.log(error)
            this.setState({ loading: false })
            if (error.response && (error.response.status == 422)) {
              var errors = this.displayServerValidationErrors(error.response.data.errors);
              swal("Login failed!", errors.join('<br>'), "error");
    
            } else {
              swal("Login failed!", 'An unknown error has occurred, Login cannot be completed. Please try again', "error");
            }
          });

      }
    
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input onChange={(text) =>  this.setState({ username: text })}  type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input onChange={(text) =>  this.setState({ password: text })} type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                {
                                    this.state.loading ? <Spinner animation="border" />
                                    :  <button onClick={this.handleSubmit} className="btn btn-primary shadow-2 mb-4">Login</button>
                                }
                              

                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;
import React, {Component} from 'react'
import { connect } from 'react-redux';

class CreateAccountForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        email_confirmation: "",
        password: "",
        password_confirmation: "",
        errors: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleGoogleButtonClick = event => {
        // Log user in via google
        console.log("This feature doesn't work yet")
    }

    handleSubmit = event => {
        event.preventDefault()
        // Fetch request create user
        const body = {...this.state}
        delete body.errors
        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: body})
        }
        fetch(this.props.usersURL, options).then(resp => resp.json()).then(json => {
            if (json.errors) {
                this.setState({errors: json.errors})
            } else {
                console.log(json)
            }
        })
        
        console.log("This feature doesn't work yet")
    }

    render() {
        return (
            <form className="dropdown-menu dropdown-menu-right p-4 signup-login-form" onSubmit={event => this.handleSubmit(event)}>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={event => this.handleChange(event)}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <input className="form-control" type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={event => this.handleChange(event)}/>
                    </div>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={event => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Confirm Email Address" name="email_confirmation" value={this.state.email_confirmation} onChange={event => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" placeholder=" Password" name="password" value={this.state.password} onChange={event => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={event => this.handleChange(event)}/>
                </div>
                <div className="form-row">
                    <div className="col-6">
                        <button className="btn btn-block btn-primary" type="button">
                            <i className="fab fa-google"/>
                            <span className="d-none d-sm-none d-md-inline"> Sign up with Google</span>
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-block btn-success" type="submit">
                            <i className="fas fa-user-plus"/>
                            <span className="d-none d-sm-none d-md-inline"> Create Account</span>
                        </button>
                    </div>
                </div>
                {/* Conditionally render via && operator acting as if statement */}
                {this.state.errors &&
                    <div className="d-flex justify-content-center">
                        <ul className="list-unstyled text-danger">
                            {this.state.errors.map((message, index) => <li key={index}>{message}</li>)}
                        </ul>
                    </div>
                }
            </form>
        )
    }
}

const mapStateToProps = state => {
    return ({
        usersURL: state.endPoints.usersURL
    })
  }

export default connect(mapStateToProps, {})(CreateAccountForm)
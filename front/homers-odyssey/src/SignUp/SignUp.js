import React, {Component} from "react";



class SignUp extends Component {

    state = {
        email: "mon@email.com",
        password: "monPassw0rd",
        passwordcheck: '',
        firstname: "James",
        lastname: "Bond"
    }


    updateEmailField = (e) => {
         this.setState({
             email: e.target.value
         })
    }

    updatePasswordField = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    updatePasswordcheckField = (e) => {
        this.setState({
            passwordcheck: e.target.value
        })
    }

    updateLastnameField = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    updateFirstnameField = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='signup-form form-group'>
                    <h1>{JSON.stringify(this.state,1,1)}</h1>
                    <label htmlFor="email" className="control-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={this.updateEmailField}/>
                    <label htmlFor="password" className="control-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.updatePasswordField}/>
                    <label htmlFor="password-check" className="control-label">Confirm password</label>
                    <input type="password" name="password-check" className="form-control" onChange={this.updatePasswordcheckField}/>
                    <label htmlFor="lastname" className="control-label">Lastname</label>
                    <input type="text" name="lastname" className="form-control" onChange={this.updateLastnameField}/>
                    <label htmlFor="fistname" className="control-label">Firstname</label>
                    <input type="text" name="firstname" className="form-control" onChange={this.updateFirstnameField}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignUp
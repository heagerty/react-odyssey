import React, {Component} from "react";



class SignUp extends Component {



    state = {
        email: 'test@test.com'
    }


    updateEmailField = (e) => {
         this.setState({
             email: e.target.value
         })
    }

    render () {
        return (
            <div>
                <form>
                    <h1>{this.state.email}</h1>
                    <input type="email" name="email" onChange={this.updateEmailField}/>
                </form>
            </div>
        )
    }
}

export default SignUp
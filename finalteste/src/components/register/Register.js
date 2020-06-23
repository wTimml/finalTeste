import React from 'react'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fName: '',
            lName: '',
        }
    }
    onFNameChange = (event) => {
        this.setState({ fName: event.target.value })

    }
    onLNameChange = (event) => {
        this.setState({ lName: event.target.value })

    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })

    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })

    }

    onSubmitSignIn = () => {
        console.log({
            email: this.state.email,
            password: this.state.password,
            fName: this.state.fName,
            lName: this.state.lName,})

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                fName: this.state.fName,
                lName:this.state.lName,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')

                }
            })
        .catch(err => console.log(err))

    }


    render() {
        
        return (



            <div className="" >

                <center>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={{ width: '60vh', display: ' inline - block', padding: '32px 48px 0px 48px', border: '1px solid #EEE' }}>

                            <form class="col s12" method="post">
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s6'>
                                        <input onChange={this.onFNameChange}className='validate' type='text' name='fname' id='fname' />
                                        <label for='fname'>First Name</label>
                                    </div>
                                    <div class='input-field col s6'>
                                        <input onChange={this.onLNameChange}classname='validate' type='text' name='lname' id='lname' />
                                        <label for='lname'>Last Name</label>
                                    </div>
                                </div>

                                <div classname='row'>
                                    <div className='input-field col s12'>
                                        <input onChange={this.onEmailChange} className='validate' type='email' name='email' id='email' />
                                        <label for='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input onChange={this.onPasswordChange}className='validate' type='password' name='password' id='password' />
                                        <label for='password'>Enter your password</label>
                                    </div>

                                </div>

                                <br />
                                <center>
                                    <div class='row'>
                                        <a
                                            onClick={this.onSubmitSignIn}
                                            name='btn_register' className='  btn-large waves-effect indigo'>Register</a>
                                    </div>

                                    
                                </center>
                            </form>
                        </div>
                    </div>
                </center>

            </div>

        )
    }
}

export default Register
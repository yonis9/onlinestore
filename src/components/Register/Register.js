import React , { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Register.css';

class Register extends Component {
    constructor() {
        super()
        this.state= {
            name: '',
			email: '',
            password: '',
            message: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.message !== '' ){
            window.setTimeout(  () => {
               this.setState({ message: '' })
              } ,5000)
  
        }
    }
    
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
    }
    
    onButtonSubmit = (e) => {
        e.preventDefault()
		fetch('https://murmuring-crag-50531.herokuapp.com/register', {
			method: 'post',
			headers:{"Content-Type": 'application/json', 'Requested-With': 'XMLHttpRequest'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
        }).then(resp=> resp.json())
        .then(data =>{
            if(data.message !== 'success') {
                this.setState({message: data.message})
            } else {
                this.props.loadUser(data)
            }
        })
    }

    render() {
        console.log(this.state)

    return (
        // <form action="http://localhost:3001/register" method='POST'>
        <div>
        {
            this.props.redirect 
            ? <Redirect to="/" />
            :
                <div>
                    <ScrollToTop />
                 <div className="container-register">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <form onSubmit={this.onButtonSubmit}>
            <label ><b>Name</b></label>
            <input  onChange={this.onNameChange} type="text" placeholder="Enter Name" name="name" required />

            <label ><b>Email</b></label>
            <input  onChange={this.onEmailChange} type="email" placeholder="Enter Email" name="email" required />

            <label ><b>Password</b></label>
            <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" name="psw" minLength='5' required />
            <hr/>
            {
                this.state.message.length ?
                <div className='error-msg'>{this.state.message}</div>
                : null
            }
            <button type='submit' className="registerbtn">Register</button>
            </form>
        </div>

        <div className="container signin">
            <p>Already have an account? <Link to='/signin'>Sign in</Link>.</p>
        </div>
        <Footer />
        </div>
}
  </div>

    )
}
}

export default Register;
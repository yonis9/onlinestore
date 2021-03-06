import React , { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import '../Register/Register.css';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state= {
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

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
    }
    
    onButtonSubmit = (e) => {
      e.preventDefault();
		fetch('https://murmuring-crag-50531.herokuapp.com/signin', {
			method: 'post',
			headers:{"Content-Type": 'application/json', 'Requested-With': 'XMLHttpRequest'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
        }).then(resp=> resp.json())
        .then(data =>{
            if(data.message !== 'success') {
                this.setState({ message: data.message})
            } else {
                this.props.loadUser(data)
                
            }
        })
    }

    render() {

    return (
        // <form action="http://localhost:3001/register" method='POST'>
        <div>
        {this.props.redirect
        ? <Redirect to="/" />
        : 
        
        <div>
            <ScrollToTop />
  <div className="container-register">
    <h1>Sign In</h1>
    <p>Please fill in this form to sign in.</p>
    <hr/>

    <form onSubmit={this.onButtonSubmit}>
        <label ><b>Email</b></label>
        <input  onChange={this.onEmailChange} type="text" placeholder="Enter Email" name="email" required />

        <label ><b>Password</b></label>
        <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" name="psw" required />
        <hr/>
        {
                this.state.message.length ?
                <div className='error-msg'>{this.state.message}</div>
                : null
            }
        <button type='submit' className="registerbtn">Sign in</button>
        </form>
      </div>

  <div className="container signin">
    <p>Don't have an account? <Link to='/register'>Register</Link>.</p>
  </div>
  <Footer />
  </div>
  }
  </div>

    )
}
}

export default Signin;
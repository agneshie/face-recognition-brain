import { Component } from 'react';

import './Signin.styles.css';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    });
  }

  onSubmitSignIn = () => {
    fetch("https://facerecognitionbrainapi-62ns.onrender.com/signin", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch(err => console.log("error", err));
    
  }

  render() {
    const { onRouteChange } = this.props;
    return(
      <div className="signin-card br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <div className="measure pa4">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                type="email" 
                name="signInEmail"  
                id="email-address" 
                onChange={this.onInputChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                type="password" 
                name="signInPassword" 
                id="password" 
                onChange={this.onInputChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign in" 
              onClick={this.onSubmitSignIn}  
            />
          </div>
          <div className="lh-copy mt3">
            <p onClick={() => onRouteChange("register")} className="f6 link dim black db pointer">Register</p>
          </div>
        </div>
      </div>
    );
  }
  }
  

export default Signin;
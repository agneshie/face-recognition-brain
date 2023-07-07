import { Component } from 'react';

import './Register.styles.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
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


  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }
    })
  }

  render() {
    return(
      <div className="signin-card br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <div className="measure pa4">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                type="text" 
                name="name" 
                onChange={this.onInputChange}  
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                type="email"
                name="email" 
                onChange={this.onInputChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                type="password" 
                name="password" 
                onChange={this.onInputChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" 
              onClick={this.onSubmitRegister}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
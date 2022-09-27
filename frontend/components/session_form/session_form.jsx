import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      birthday: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.displaySignupName = this.displaySignupName.bind(this);
    this.displaySignupBirthday = this.displaySignupBirthday.bind(this);
    this.displaySignupHeader = this.displaySignupHeader.bind(this);
    this.openModal = this.openModal.bind(this)
    this.displaySignupGender = this.displaySignupGender.bind(this)
  }


  componentDidMount() {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: '',
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({
      email: '',
      password: '',
    })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal).then(this.props.history.push('/feed'));
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'demo@appacademy.io', password: 'starwars' };

  const speed = 25;

  if(this.state.email !== demoUser.email) {
  const inputemail = setInterval(() => {
    if (this.state.email !== demoUser.email) {
      const temp = demoUser.email.slice(0, this.state.email.length + 1);
      this.setState({ email: temp })
    } else {
      clearInterval(inputemail);
      animatePW();
    }
  }, speed)
}
const animatePW = () => {
  if (this.state.password !== demoUser.password) {
    const inputPassword = setInterval(() => {
      if (this.state.password !== demoUser.password) {
        const temp = demoUser.password.slice(0, this.state.password.length + 1);
        this.setState({ password: temp });
      } else {
        clearInterval(inputPassword);
        this.props.processForm(demoUser);
      }
    }, speed);
  }
}
  }



  displaySignupName() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='signup-names'>
          <div className='signup-names-input'>
            <input type="text"
              onChange={this.update('firstname')}
              value={this.state.firstname}
              className={(this.firstNameError) ? 'login-input-errors' : 'name-input'}
              placeholder='First Name'
           
            />
            <input type="text"
              onChange={this.update('lastname')}
              value={this.state.lastname}
              className={this.props.errors.lastname ? 'login-input errors' : 'name-input'}
              placeholder='Last Name'
             
            />
          </div>
          
        </div>
      )
    }
  }

  displaySignupBirthday() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='birthday-parent-container'>
          <label className='birthday'>Birthday</label>

          <input type="date"
            onChange={this.update('birthday')}
            value={this.state.birthday}
            className={this.props.errors.birthday ? 'login-input errors' : 'login-input'}
            
          />
          <div className={this.props.errors.birthday ? 'error-messages birthday' : 'error-messages'}>{this.props.errors.birthday}</div>
        </div>)
    }
  }

  displaySignupGender() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='gender-parent-container'>
          <label className='gender'>Gender: </label>
          <div className='gender-child-container'>
          <label>Male
          <input type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.update('gender')}
            className={this.props.errors.gender ? 'login-input errors' : 'login-input'}
          />
          </label>
          </div>
          <div className='gender-child-container'>
          <label>Female
            <input type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.update('gender')}
              className={this.props.errors.gender ? 'login-input errors' : 'login-input'}
            />
          </label>
          </div>

          <div className='gender-child-container'>
          <label>Other
            <input type="radio"
              name="gender"
              value="Other"
              checked={this.state.gender === "Other"}
              onChange={this.update('gender')}
              className={this.props.errors.gender ? 'login-input errors' : 'login-input'}
            />
          </label>
          </div>
          <div className={this.props.errors.gender ? 'error-messages gender' : 'error-messages'}>{this.props.errors.gender}</div>
        </div>)
    }
  }

  displaySignupHeader() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='signup-header'>
          <h1>Sign Up</h1>
          <h3>It's quick and easy.</h3>
          <div className="signup-border"></div>
        </div>
      )
    }
  }

 

  openModal() {
    this.setState({
      email: '',
      password: '',
    })

    this.props.otherForm('Sign Up')
  }

  
  render() {
    let invalidLoginError, firstNameError, lastNameError, emailError, passwordError, birthdayError, genderError;
  
      if (this.props.errors.length > 0){
          for (let error of this.props.errors){
              switch (error[0]) {
                  case "T":
                      invalidLoginError = error;
                      break;
                  case "F":
                      firstNameError = error;
                      break;
                  case "L":
                      lastNameError = error;  
                      break;
                  case "E":
                      emailError = error;                 
                      break;
                  case "P":
                      passwordError = error;                
                      break;
                  case "B":
                      birthdayError = error;             
                      break;
                  case "G":
                      genderError = error;          
                      break;
                  default:
                      return null;
              };
          };
      };
  
    return (
      <div className="login-form-container">
        {this.displaySignupHeader()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType === 'Sign Up' ? <span onClick={this.props.closeModal} className="close-x">&times;</span> : null}

          <div className="login-form">
            {this.displaySignupName()}
            <div className='name-errors'>
            {(firstNameError) ? <div className='errors-backend'>{firstNameError}</div> : null}
            {(lastNameError) ? <div className='errors-backend'>{lastNameError}</div> : null}
            </div>
          
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className={(invalidLoginError) ? 'login-input-errors' : 'login-input'}
              placeholder='Email'
              
            />
            {(emailError) ? <div className='errors-backend'>{emailError}</div> : null}
            

           
            <div className='password-container'>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={(invalidLoginError) ? 'login-input-errors' : 'login-input'}
                placeholder='Password'
               
              />
               {(passwordError) ? <div className='errors-backend'>{passwordError}</div> : null}
              {(this.props.formType === 'Log In' && !this.props.openModal && this.props.errors.login) ? <div className='error-messages login'>{this.props.errors.login}</div> : null}
            </div>
            {(invalidLoginError) ? <div className='errors-backend'>{invalidLoginError}</div> : null}

          
            {this.displaySignupBirthday()}
            {(birthdayError) ? <div className='errors-backend'>{birthdayError}</div> : null}


            {this.displaySignupGender()}
            {(genderError) ? <div className='errors-backend'>{genderError}</div> : null}
            
           
            <button className="session-submit" type="submit">{this.props.formType}</button>
            
          </div>
        </form>

        {this.props.formType === 'Log In' ? <button className="demo-button" onClick={this.handleDemo}>Demo User</button> : null}
        <div className="border"></div>
        {this.props.formType === 'Log In' ? <button className='button-create' onClick={this.openModal}>Create New Account</button> : null}

      </div>
    );
  }
}

export default withRouter(SessionForm);
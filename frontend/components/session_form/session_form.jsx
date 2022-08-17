import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      birthday: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.displaySignupName = this.displaySignupName.bind(this);
    this.displaySignupBirthday = this.displaySignupBirthday.bind(this);
    this.displaySignupHeader = this.displaySignupHeader.bind(this);
    this.displayPasswordError = this.displayPasswordError.bind(this);
    this.displayEmailError = this.displayEmailError.bind(this);
    this.openModal = this.openModal.bind(this)
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
    const demoUser = { email: 'demo_user@squat.com', password: 'password' };
    this.props.processForm(demoUser);
  }

  displaySignupName() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className='signup-names'>
          <div className='signup-names-input'>
            <input type="text"
              onChange={this.update('name')}
              value={this.state.name}
              className={this.props.errors.name ? 'login-input errors' : 'login-input'}
              placeholder='Name'
            />
          </div>

          <div className={this.props.errors.name ? 'error-messages name' : null}
            id="fname">{this.props.errors.fname}
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

  displayPasswordError() {
    if (this.props.formType === 'Log In' && this.props.openModal) {
      return null;
    } else if (this.props.errors.password) {
      return <div className='error-messages password'>{this.props.errors.password}</div>
    }
  }

  displayEmailError() {
    if (this.props.formType === 'Log In' && this.props.openModal) {
      return null;
    } else if (this.props.errors.email) {
      return <div className='error-messages email'>{this.props.errors.email}</div>
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
    return (
      <div className="login-form-container">
        {this.displaySignupHeader()}

        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType === 'Sign Up' ? <span onClick={this.props.closeModal} className="close-x">&times;</span> : null}

          <div className="login-form">
            {this.displaySignupName()}

            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className={((this.props.errors.email && !this.props.openModal) || (this.props.errors.login && !this.props.openModal)) ? 'login-input errors' : 'login-input'}
              placeholder='Email'
            />

            {this.displayEmailError()}
            <div className='password-container'>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={((this.props.errors.password && !this.props.openModal) || (this.props.errors.login && !this.props.openModal)) ? 'login-input errors' : 'login-input'}
                placeholder='Password'
              />
              {(this.props.formType === 'Log In' && !this.props.openModal && this.props.errors.login) ? <div className='error-messages login'>{this.props.errors.login}</div> : null}
            </div>

            {this.displayPasswordError()}
            {this.displaySignupBirthday()}
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
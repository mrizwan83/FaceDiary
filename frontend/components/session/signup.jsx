import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      birthday: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/users'))
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form >
          <label>Name:
            <input type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>

          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>

          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <label>Gender:
            <input type="text"
              value={this.state.gender}
              onChange={this.handleInput('gender')}
            />
          </label>

          <label>Birthday:
            <input type="date"
              value={this.state.birthday}
              onChange={this.handleInput('birthday')}
            />
          </label>

          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

// class Greeting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.post;

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.action(this.state);
//   }
//   update(field) {
//     return e => this.setState({ [field]: e.currentTarget.value });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
         
//             <input
//               type='text'
//               value={this.state.email}
//               onChange={this.update('email')}
//             />
        
//            <input
//             type='password'
//             value={this.state.password}
//             onChange={this.update('password')}
//           />
        
            
        
//           <button type='submit' value={this.props.formType} />
//         </form>
//       </div>
//     );
//   }
// }

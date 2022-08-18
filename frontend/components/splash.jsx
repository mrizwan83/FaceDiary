import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/session_form_container'

class Splash extends React.Component {
  render() {
    return (
      <>
      {console.log(this.state)}
        <header>
          <div className="splash-header">
            <h1 className='splash-logo'>FaceDiary</h1>
            <h2 className='splash-title'>Connect with friends and the world around you on FaceDiary.</h2>
          </div>
          <LoginFormContainer />
        </header>
        <footer className="footer-info">
          <div className='copyright'>&copy; Mohammad Rizwan 2022</div>
          <div className='footer-links'>
            <a target="_blank" href="https://linkedin.com/in/mohammad-rizwan-a83a31246">LinkedIn</a>
            <a target="_blank" href="https://github.com/mrizwan83">GitHub</a>
            <a target="_blank" href="https://github.com/mrizwan83/FaceDiary">FaceDiary Repo</a>
          </div>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  null
)(Splash);
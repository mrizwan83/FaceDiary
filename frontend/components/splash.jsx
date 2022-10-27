import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/session_form_container'

class Splash extends React.Component {
  render() {
    return (
      <>
        <header>
          <main className='main-body-splash'>
          <div className="splash-header">
            <h1 className='splash-logo'>facediary</h1>
            <h2 className='splash-title'>Connect with friends and the world around you on FaceDiary.</h2>
          </div>
          <LoginFormContainer />
          </main>
        </header>
        <footer className="footer-info">
          <div className='copyright'>&copy; Mohammad Rizwan 2022</div>
          <div className='footer-links'>
            <a target="_blank" href="https://www.linkedin.com/in/mohammad-h-rizwan/">LinkedIn</a>
            <a target="_blank" href="https://github.com/mrizwan83">GitHub</a>
            <a target="_blank" href="https://github.com/mrizwan83/FaceDiary">FaceDiary Repo</a>
            <a target="_blank" href="https://mrizwan83.github.io/mrizwan83/">Portfolio Site</a>
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
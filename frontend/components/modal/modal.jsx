import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
// import EditProfileContainer from '../profile/edit_profile_container';
// import CreatePostContainer from '../post/create_post_container';
// import EditPostContainer from '../post/edit_post_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case 'Log In':
      component = <LoginFormContainer />;
      break;
    case 'Sign Up':
      component = <SignupFormContainer />;
      break;
    // case 'Update Info':
    //   component = <EditProfileContainer id={modal.id} />;
    //   break;
    // case 'Create Post':
    //   component = <CreatePostContainer />;
    //   break;
    // case 'Update Post':
    //   component = <EditPostContainer id={modal.id} />;
    //   break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
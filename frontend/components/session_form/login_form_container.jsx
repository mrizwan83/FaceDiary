import { connect } from 'react-redux';
import { login, clearErrors, fetchAllUsers } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'Log In',
    openModal: state.ui.modal,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
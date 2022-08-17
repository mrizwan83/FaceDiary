import { connect } from 'react-redux';
import { signup, clearErrors, fetchAllUsers } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'Sign Up',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session/session_actions'


const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    errors: state.errors,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Modal);
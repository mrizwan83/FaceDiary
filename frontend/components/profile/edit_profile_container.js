import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditProfileForm from './edit_profile_form';
import {fetchUser, updateUserInfo} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        openModal: state.ui.modal,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        updateUserInfo: (user) => {
            return dispatch(updateUserInfo(user))
        },
        otherForm: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileForm));

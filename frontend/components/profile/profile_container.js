import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchUser, updateUser} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        openModal: state.ui.modal,
    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        otherForm: (modal) => dispatch(openModal(modal)),
        updateUser: (user) => dispatch(updateUser(user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
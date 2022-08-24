import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchUser, updateUser} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        openModal: state.ui.modal,
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        updateUser: (user) => {
            return dispatch(updateUser(user))
        },
        otherForm: (modal) => dispatch(openModal(modal)),
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));
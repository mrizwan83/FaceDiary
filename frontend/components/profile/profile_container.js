import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchUser} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        openModal: state.ui.modal,
    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        otherForm: (modal) => dispatch(openModal(modal))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
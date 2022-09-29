import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/session_actions';
import MiddleFeed from './middlefeed';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        users: state.entities.users,
        openModal: state.ui.modal,
    })
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        otherForm: (modal) => dispatch(openModal(modal)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MiddleFeed);
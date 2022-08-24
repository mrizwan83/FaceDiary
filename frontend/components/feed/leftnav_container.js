import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, fetchUser } from '../../actions/session_actions';
import LeftNav from './leftnav';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNav));
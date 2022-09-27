import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/session_actions';
import MiddleFeed from './middlefeed';

const mapStateToProps = (state) => {
    return ({
        users: state.entities.users
    })
}


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MiddleFeed);
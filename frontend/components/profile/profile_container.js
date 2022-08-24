import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchUser} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));
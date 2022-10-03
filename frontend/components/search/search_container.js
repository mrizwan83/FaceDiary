import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/session_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        test: ownProps
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
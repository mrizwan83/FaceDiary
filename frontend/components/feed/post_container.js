import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import { fetchUser, fetchAllUsers } from '../../actions/session_actions';
import Post from './post';

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
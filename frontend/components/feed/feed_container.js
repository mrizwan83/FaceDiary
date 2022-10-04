import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';
import { openModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchFriends } from '../../actions/friend_actions';


const mapStateToProps = ({ session, entities: { users, posts, friends } }) => {
    return {
        currentUser: users[session.id],
        posts: posts,
        users: users,
        friends: friends
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    otherForm: (modal) => dispatch(openModal(modal)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFriends: () => dispatch(fetchFriends())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
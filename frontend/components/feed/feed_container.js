import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';
import { openModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchFriends } from '../../actions/friend_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = ({ session, entities: { users, posts, friends, likes, comments } }) => {
    return {
        currentUser: users[session.id],
        posts: posts,
        users: users,
        friends: friends,
        users: users,
        likes: likes,
        comments: comments
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    otherForm: (modal) => dispatch(openModal(modal)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFriends: () => dispatch(fetchFriends()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
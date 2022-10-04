import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchPosts} from '../../actions/post_actions';
import { fetchUser, fetchAllUsers } from '../../actions/session_actions';
import { createLike, fetchLikes, deleteLike } from '../../actions/like_actions';
import { openModal } from '../../actions/modal_actions';
import Post from './post';

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        likes: state.entities.likes
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    otherForm: (modal, postId) => dispatch(openModal(modal, postId)),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
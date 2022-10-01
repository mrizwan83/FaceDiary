import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';
import { openModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session_actions';


const mapStateToProps = ({ session, entities: { users, posts } }) => {
    return {
        currentUser: users[session.id],
        posts: posts,
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    otherForm: (modal) => dispatch(openModal(modal)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
import { connect } from 'react-redux';
import CreateComment from './create_comment_form';
import {createComment} from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments
    }
};

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchPost: (postId) => dispatch(fetchPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
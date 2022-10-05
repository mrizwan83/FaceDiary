import { connect } from 'react-redux';
import Comment from './comment';
import { editComment, deleteComment} from '../../actions/comment_actions';
const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments
    }
};

const mapDispatchToProps = dispatch => ({
    editComment: comment => dispatch(editComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
import {connect} from 'react-redux';
import { createPost, fetchPosts, editPost } from '../../actions/post_actions';
import PostEditForm from './post_edit_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchAllUsers } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return ({
        openModal: state.ui.modal,
        formType: 'Update Post',
        post: state.entities.posts[ownProps.id],
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = (dispatch) => {
    return ({
        otherForm: (modal) => dispatch(openModal(modal)),
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal()),
        fetchUsers: () => dispatch(fetchAllUsers()),
        fetchPosts: () => dispatch(fetchPosts()),
        editPost: (post) => dispatch(editPost(post)),
    })
}

export default withRouter(connect(mSTP, mDTP)(PostEditForm))
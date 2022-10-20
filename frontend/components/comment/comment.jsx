import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            comment: this.props.comment,
            creater: this.props.creater,
            body: this.props.comment.body,
            editing: false,
            open: false,
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.openAccess = this.openAccess.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    openAccess() {
        this.setState({
            open: !this.state.open
        })
    }

    handleDisplay() {
        if (this.props.comment.author_id === this.props.currentUser.id) {
            return(
            
            
                <div className="svg-comment">
                <svg className="svg-post" onClick={this.openAccess}  width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000"></path>
                </svg>
                </div>
            
            
            
            // <div className="comment-display-edit-delete">
            //     <div onClick={this.handleEdit} className="post-edit-delete">Edit</div>
            //     <div onClick={this.handleDelete} className="post-edit-delete">Delete</div>
            // </div>
            )
        }
    }

    handleEdit() {
        this.setState({editing: true})
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id)
    }

    handleSubmit() {
        const formData = new FormData();
        formData.id = this.props.comment.id;
        formData.append('comment[body]', this.state.body);

        this.props.editComment(formData)
        this.setState({
            editing: false,
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({editing: false})
    }

    render(){
        const opened = this.state.open;
        const date = new Date(this.props.comment.created_at).toLocaleString();
        const renderPostPhoto = (this.props.users[this.props.comment.author_id].profilePhoto) ? <img className="post-pic-logo" src={`${this.props.users[this.props.comment.author_id].profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        const renderCommentAuthorName = (this.props.users[this.props.comment.author_id].firstname) ? <div className="comment-author">{this.props.users[this.props.comment.author_id].firstname}</div> : null
        const displayComment = this.state.editing
        return(
            <div>

                        <div className='post-user-container'>
                        <Link className='comment-author-link' to={`/users/${this.props.comment.author_id}`}>    
                        {renderPostPhoto}
                        <div className="date-name">
                        {renderCommentAuthorName}
                        <p className="comment-date">{date}</p>
                        </div>
                        </Link>
                        {displayComment? <input type="text" onKeyDown={e => {
            if (e.key === 'Enter') {
                this.handleSubmit();}
        }} className="comment-body-input-edit" 
        onChange={this.update('body')} 
        value={this.state.body}/> : <div className="comment-show">
           
        <div className="comment-body">{this.props.comment.body}</div></div>}
                                {displayComment? <div className="comment-edit-cancel" onClick={this.handleCancel}>Cancel</div> : this.handleDisplay()}
                                {opened && 
                                <div className="comment-buffer">
                                <div className="comment-display-edit-delete">
                                    <div onClick={() => {this.openAccess(); 
                                        this.handleEdit()}} className="post-edit-delete">Edit</div>
                                    <div onClick={this.handleDelete} className="post-edit-delete">Delete</div>
                                </div>
                                </div>
                                 }
                        </div>
            </div>
        )
    }
}

export default Comment;
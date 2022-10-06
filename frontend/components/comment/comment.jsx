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
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }


    handleDisplay() {
        if (this.props.comment.author_id === this.props.currentUser.id) {
            return(<div className="comment-display-edit-delete">
                <div onClick={this.handleEdit} className="post-edit-delete">Edit</div>
                <div onClick={this.handleDelete} className="post-edit-delete">Delete</div>
            </div>)
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
                        </div>
            </div>
        )
    }
}

export default Comment;
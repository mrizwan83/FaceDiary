import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            comment: this.props.comment,
            creater: this.props.creater
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id)
    }

    render(){
        const renderPostPhoto = (this.props.users[this.props.comment.author_id].profilePhoto) ? <img className="post-pic-logo" src={`${this.props.users[this.props.comment.author_id].profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        
        return(
            <div>

                        <div className='post-user-container'>
                        <Link to={`/users/${this.props.comment.author_id}`}>    
                        {renderPostPhoto}
                        </Link>
                            <div className="comment-body">{this.props.comment.body}</div>
                                {this.handleDisplay()}
                        </div>
            </div>
        )
    }
}

export default Comment;
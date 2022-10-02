import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
        }
        this.handlePostAuthor = this.handlePostAuthor.bind(this);
        this.handleAuthorName = this.handleAuthorName.bind(this);
        this.handleAuthorButtons = this.handleAuthorButtons.bind(this);
    }

    handlePostAuthor() {
        let author = (this.props.users[this.props.post.author_id]);
        if (author && author.profilePhoto) {
            return( 
            <Link to={`/users/${author.id}`}>    
            <img className="post-pic-logo" src={`${author.profilePhoto}`} />      
            </Link>)      
        } else {
            return(
            <Link to={`/users/${this.props.post.author_id}`}>
             <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
             </Link>)
        }
    }

    handleAuthorName() {
        let author = (this.props.users[this.props.post.author_id]);
        if (author) {
            return(
                <Link to={`/users/${author.id}`}>
                <h3 className="post-show-item">{author.firstname} {author.lastname}</h3>
                </Link>)
        } else {
            return <h3></h3>
        }
    }

    

    handleAuthorButtons() {
        if (this.props.post.author_id === this.props.currentUser.id) {
            return(
                <div className="post-author-btn">

                <div className="post-edit-delete">Edit</div>
                <div className="post-edit-delete">Delete</div>

                </div>
            )
        }
    }


    render(){
        let date = new Date(this.state.post.created_at).toLocaleString();
        const renderPostPhoto = (this.state.post.postPhoto) ? <img  src={`${this.state.post.postPhoto}`} /> : null;
        return(
            <div className="post">
                
                <div className="post-top">
                
                {this.handlePostAuthor()}
                <div className="post-top-info">
                    {this.handleAuthorName()}
                    <p className="post-show-item">{date}</p>
                </div>
                

                
                
                    {this.handleAuthorButtons()}

              



                </div>

                <div className="post-bottom">
                    <p className="post-body-content">{this.state.post.body}</p>
                </div>

                <div className="post-image">
                    {renderPostPhoto}
                </div>

                <div className="post-options">
                    <div className="post-option">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" /> Like
                    </div>
                    <div className="post-option">
                        <img src="https://icon-library.com/images/comment-icon-png/comment-icon-png-19.jpg" alt="" /> Comment
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
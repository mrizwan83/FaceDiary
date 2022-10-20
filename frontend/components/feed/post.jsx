import React from "react";
import { Link } from "react-router-dom";
import CreateCommentContainer from "../comment/create_comment_form_container";
import CommentContainer from "../comment/comment_container";

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            liked: false,
            currentUserLike: null,
            commentOpen: false,
            open: false
        }
        this.handlePostAuthor = this.handlePostAuthor.bind(this);
        this.handleAuthorName = this.handleAuthorName.bind(this);
        this.handleAuthorButtons = this.handleAuthorButtons.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleLikeDelete = this.handleLikeDelete.bind(this);
        this.handleLikeStatus = this.handleLikeStatus.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.openAccess = this.openAccess.bind(this);
    }

    componentDidMount() {
        this.handleLikeStatus()
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

    handleDelete(e){
        e.preventDefault();
        this.props.deletePost(this.props.post.id)
    }

    openAccess() {
        this.setState({
            open: !this.state.open
        })
    }
    

    handleAuthorButtons() {
        if (this.props.post.author_id === this.props.currentUser.id) {
            return(

 <div className="post-author-btn">
                <svg className="svg-post" onClick={this.openAccess}  width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000"></path>
                </svg>
                </div>
                // <div className="post-author-btn">

                // <div onClick={() => this.props.otherForm('Update Post', this.props.post.id)} className="post-edit-delete">Edit</div>
                // <div onClick={this.handleDelete} className="post-edit-delete">Delete</div>

                // </div>
            )
        }
    }

    handleLikeDelete() {
        let showlike;
        Object.values(this.props.likes).forEach(like => {
            if (like.liker_id === this.props.currentUser.id && like.post_id === this.props.post.id) {
                showlike = like
            }
        })
        this.props.deleteLike(showlike.id)
    }

    handleLike(e) {
        e.preventDefault();
        if (this.state.liked === false) {
        const formData = new FormData();
        formData.append('like[liker_id]', this.props.currentUser.id);
        formData.append('like[post_id]', this.props.post.id);
        this.props.createLike(formData)
        this.setState({
            liked: true
        })
        } else if (this.state.liked === true) {
            this.handleLikeDelete()
            this.setState({
                liked: false
            })
        }
    }

    handleLikeStatus() {
        Object.values(this.props.likes).forEach(like => {
            if (like.liker_id === this.props.currentUser.id && like.post_id === this.props.post.id) {
                this.setState({
                    currentUserLike: like,
                    liked: true
                })
            }
        })
    }

    handleComment(e) {
        e.preventDefault();
        if (this.state.commentOpen === false) {
            this.setState({
                commentOpen: true,
            })
        } else {
            this.setState({
                commentOpen: false,
            })
        }
    }

    handleOpen() {
        this.setState({
            commentOpen: true,
        })
    }


    render(){
        const commentsLength = [];
        const opened = this.state.open
        const alreadyLiked = this.state.liked
        const commentOpened = this.state.commentOpen
        let date = new Date(this.props.post.created_at).toLocaleString();
        const renderPostPhoto = (this.props.post.postPhoto) ? <img  src={`${this.props.post.postPhoto}`} /> : null;
        let postsLikes =[];
        Object.values(this.props.comments).map(comment => {
            if (comment.post_id === this.props.post.id) {
                commentsLength.push(comment)
            }
        })

        Object.values(this.props.likes).forEach(like => {
            if (like.post_id === this.props.post.id) {
                postsLikes.push(like)
            }
        })


        return(
            <div className="post">
                
                <div className="post-top">
                
                {this.handlePostAuthor()}
                <div className="post-top-info">
                    {this.handleAuthorName()}
                    <p className="post-show-item">{date}</p>
                </div>
                

                
                
                    {this.handleAuthorButtons()}
                    {opened &&  <div className="delete-options">

<div onClick={() => {this.openAccess();
 this.props.otherForm('Update Post', this.props.post.id)

}

} className="post-edit-delete">Edit</div>
<div onClick={this.handleDelete} className="post-edit-delete">Delete</div>

</div> }
              



                </div>

                <div className="post-bottom">
                    <p className="post-body-content">{this.props.post.body}</p>
                </div>

                <div className="post-image">
                    {renderPostPhoto}
                </div>

                <div className="post-likes-comments">
            {alreadyLiked?  <div className="num-liked">{postsLikes.length} Likes</div> :  <div className="num-likes">{postsLikes.length} Likes</div>}

            <div>{commentsLength.length} Comments</div>
                </div>
                <div className="post-options">



                    
            {alreadyLiked?
                    <div onClick={this.handleLike} className="post-option-like">
                        <img className="post-like-image" src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" /> Like
                    </div> :
                    <div onClick={this.handleLike} className="post-option">
                        <img className="post-like-image" src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" /> Like
                    </div>}








                    <div onClick={this.handleComment} className="post-option">
                        <img className="post-like-image" src="https://icon-library.com/images/comment-icon-png/comment-icon-png-19.jpg" alt="" /> Comments
                    </div>
                </div>

            {commentOpened? commentsLength.map(comment => {     
                    return <CommentContainer key={comment.id} comment={comment} post={this.props.post} creater={this.props.currentUser}/> 
            }) : null}

            <CreateCommentContainer post={this.props.post} handleOpen={this.handleOpen}/>





            </div>
        )
    }
}

export default Post;
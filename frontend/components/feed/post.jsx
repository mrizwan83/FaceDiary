import React from "react";

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
        }
        this.handlePostAuthor = this.handlePostAuthor.bind(this);
        this.handleAuthorName = this.handleAuthorName.bind(this);
    }

    handlePostAuthor() {
        let author = (this.props.users[this.props.post.author_id]);
        if (author && author.profilePhoto) {
            return <img className="post-pic-logo" src={`${author.profilePhoto}`} />
        } else {
            return <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        }
    }

    handleAuthorName() {
        let author = (this.props.users[this.props.post.author_id]);
        if (author) {
            return <h3>{author.firstname} {author.lastname}</h3>
        } else {
            return <h3></h3>
        }
    }


    render(){
        let date = new Date(this.state.post.created_at).toLocaleString();
        const renderPostPhoto = (this.state.post.postPhoto) ? <img  src={`${this.state.post.postPhoto}`} /> : null;
        return(
            <div className="post">
                <div className="post-top">
                {/* {renderPostAuthor} */}
                {this.handlePostAuthor()}
                <div className="post-top-info">
                    {this.handleAuthorName()}
                    <p>{date}</p>
                </div>
                </div>

                <div className="post-bottom">
                    <p>{this.state.post.body}</p>
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
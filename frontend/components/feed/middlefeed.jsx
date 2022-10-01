import React from "react";
import PostContainer from "./post_container";

class MiddleFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            posts: this.props.posts
        }
        this.openPostModal = this.openPostModal.bind(this);
        this.makePosts = this.makePosts.bind(this);
    }



    openPostModal() {
        this.props.otherForm('Create Post', this.props.currentUser.id)
    }


    makePosts() {
        const postsToMap = (Object.values(this.props.posts));
        postsToMap.map(post => {
            return <PostContainer post={post} />
        })
    }
    

    render() {
        
        const renderPostPhoto = (this.props.currentUser.profilePhoto) ? <img className="post-pic-logo" src={`${this.props.currentUser.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        return(
            <div className="middle-feed">
                <div className="middle-post">
                <div className="middle-post-top">
                   {renderPostPhoto}
                    <input type="text" onClick={this.openPostModal} placeholder={`What's on your mind, ${this.props.currentUser.firstname}?`} id="post-input-feed"/>
                </div>

                <div className="middle-post-bottom">
                   
                    <div className="middle-post-item" onClick={this.openPostModal}><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div></div>
                </div>
                </div>
            <div className="posts-middlefeed">
                {
              (Object.values(this.props.posts)).map(post => (
                <PostContainer
                key={post.id}
                post={post}
                />
              ))
            }
        </div>

            </div>
        )
    }
}

export default MiddleFeed;
import React from "react";
import Post from "./post";

class MiddleFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
        }
    }


    render() {
        const renderPostPhoto = (this.props.currentUser.profilePhoto) ? <img id="post-pic-logo" src={`${this.props.currentUser.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" id="post-pic-logo" />
        return(
            <div className="middle-feed">
                <div className="middle-post">
                <div className="middle-post-top">
                   {renderPostPhoto}
                    <input type="text" placeholder={`What's on your mind, ${this.props.currentUser.firstname}?`} id="post-input-feed"/>
                </div>

                <div className="middle-post-bottom">
                   
                    <div className="middle-post-item"><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div></div>
                </div>
                </div>

            <Post />


            </div>
        )
    }
}

export default MiddleFeed;
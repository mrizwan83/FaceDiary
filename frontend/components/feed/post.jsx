import React from "react";

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="post">
                <div className="post-top">
                <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="" id="post-pic-logo" />
                <div className="post-top-info">
                    <h3>Username</h3>
                    <p>Timestamps...</p>
                </div>
                </div>

                <div className="post-bottom">
                    <p>I wanna know who compared a string variable to an integer variable and got an emoji as a return value. Makes my mind go something like this (endless loop)</p>
                </div>

                <div className="post-image">
                    <img src="https://media1.giphy.com/media/gU25raLP4pUu4/giphy.gif" alt="" />
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
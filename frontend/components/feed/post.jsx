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
                    <p>Do you believe in the multiverse? There can be a version of you out there doing exactly what you are doing, just slightly different.</p>
                </div>

                <div className="post-image">
                    <img src="https://imageio.forbes.com/blogs-images/startswithabang/files/2016/10/parallel.jpg?format=jpg&width=960" alt="" />
                </div>
            </div>
        )
    }
}

export default Post;
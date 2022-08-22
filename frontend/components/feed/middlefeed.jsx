import React from "react";

class MiddleFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="middle-feed">
                <div className="middle-post-top">
                    <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="" id="post-pic-logo" />
                    <input type="text" placeholder="What's on your mind?" id="post-input-feed"/>
                </div>
            </div>
        )
    }
}

export default MiddleFeed;
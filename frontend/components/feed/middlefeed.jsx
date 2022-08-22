import React from "react";

class MiddleFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="middle-feed">
                <div className="middle-post-top">
                    <div className="post-icon-feed">icon</div>
                    <div>Whats on your mind?</div>
                </div>
            </div>
        )
    }
}

export default MiddleFeed;
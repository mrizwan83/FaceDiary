import React from "react";

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            comment: this.props.comment,
            creater: this.props.creater
        }
    }

    render(){
       console.log(this.state)
        return(
            <div>

                        <div className='post-user-container'>
                            <img className='post-pic-logo' src={this.props.creater.profilePhoto} />
                            <div className="comment-body">{this.props.comment.body}</div>
                        </div>
            </div>
        )
    }
}

export default Comment;
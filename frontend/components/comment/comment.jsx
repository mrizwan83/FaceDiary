import React from "react";

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            comment: this.props.comment,
        }
    }

    render(){
       
        return(
            <div>Comment</div>
        )
    }
}

export default Comment;
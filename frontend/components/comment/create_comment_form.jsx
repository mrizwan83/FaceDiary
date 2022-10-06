import React from "react";

class CreateComment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment[body]', this.state.body)
        formData.append('comment[author_id]', this.props.currentUser.id)
        formData.append('comment[post_id]', this.props.post.id)
        this.props.createComment(formData)
        // .then(this.props.fetchPost(this.props.post.id))
        .then(() => {
            this.setState({
                body: '',
            })
        })
        

        
    }

    render(){
        const renderPostPhoto = (this.props.currentUser.profilePhoto) ? <img className="post-pic-logo" src={`${this.props.currentUser.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        return(
            <form onSubmit={this.handleSubmit} className='create-post-form'>
                        <div className='post-user-create-container'>
                          
                            {renderPostPhoto}
                            <div className='post-user-name'>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</div>
                            <input className="comment-input" type="text" onChange={this.update('body')} value={this.state.body} placeholder="Write a Comment.." />
                        </div>
                    </form>
        )
    }
}

export default CreateComment;
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
        this.setState({
            body: '',
        })
        
    }

    render(){
       
        return(
            <form onSubmit={this.handleSubmit} className='create-post-form'>
                        <div className='post-user-container'>
                            <img className='post-pic-logo' src={this.props.currentUser.profilePhoto}/>
                            <div className='post-user-name'>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</div>
                            <input className="comment-input" type="text" onChange={this.update('body')} value={this.state.body} placeholder="Write a Comment.." />
                        </div>
                    </form>
        )
    }
}

export default CreateComment;
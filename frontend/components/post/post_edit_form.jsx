import React from 'react';

class PostEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.post.id,
            body: this.props.post.body,
            photoFile: null,
            photoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.cancelPhoto = this.cancelPhoto.bind(this);
        this.clickFile = this.clickFile.bind(this);
    }


 
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
       

        formData.id = this.state.id

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile)
        }
        
      
        this.props.editPost(formData)
        .then(this.props.closeModal())

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    cancelPhoto() {
        this.setState({photoFile: null, photoUrl: null})
    }

    clickFile(field) {
        return (e) => {
            $('.post-photo-btn').click();
        }
    }


    render() {
        const showPreview = (this.state.photoUrl) ?
            (<div className='image-preview-container'>
                <img className='image-preview' src={this.state.photoUrl} />
                <span onClick={this.cancelPhoto} className="close-x-photo">&times;</span>
            </div>) : null

const renderPostPhoto = (this.props.currentUser.profilePhoto) ? <img className="post-pic-logo" src={`${this.props.currentUser.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        return(
            <div className='inside-modal'>
                <span onClick={this.props.closeModal} className="close-x-post-form">&times;</span>
                <h3 id='title-post'>Edit Post</h3>
                
                <div className='post-form-container'>
                    <form className='create-post-form'>
                        <div className='post-user-container'>
                            {renderPostPhoto}
                            <div className='post-user-name'>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</div>
                        </div>
                        <textarea className='post-body' onChange={this.update('body')} value={this.state.body} placeholder={`What's on your mind ${this.props.currentUser.firstname}?`}></textarea>
                        {showPreview}
                        
                            <div className='upload-photo-container' onClick={this.clickFile('post-photo-btn')}>
                                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div>
                                <input className='post-photo-btn' type="file" onChange={this.handleFile}/>
                            </div>
                        
                        <div className='post-button-container'>

                        <button className='post-button' onClick={this.handleSubmit}>Update Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostEditForm;
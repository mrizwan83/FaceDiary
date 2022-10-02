import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
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
        formData.append('post[author_id]', this.props.currentUser.id)

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile)
        }
        
        this.props.createPost(formData)
        .then(this.props.closeModal());
        this.setState({
            body: '',
            photoFile: null,
            photoUrl: null,
        })
        
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

        return(
            <div className='inside-modal'>
                <span onClick={this.props.closeModal} className="close-x-post-form">&times;</span>
                <h3 id='title-post'>Create Post</h3>
                
                <div className='post-form-container'>
                    <form className='create-post-form'>
                        <div className='post-user-container'>
                            <img className='post-pic-logo' src={this.props.currentUser.profilePhoto}/>
                            <div className='post-user-name'>{this.props.currentUser.firstname} {this.props.currentUser.lastname}</div>
                        </div>
                        <textarea  className='post-body' onChange={this.update('body')} value={this.state.body} placeholder={`What's on your mind ${this.props.currentUser.firstname}?`}></textarea>
                        {showPreview}
                        
                            <div className='upload-photo-container' onClick={this.clickFile('post-photo-btn')}>
                                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div>
                                <input className='post-photo-btn' type="file" onChange={this.handleFile}/>
                            </div>
                        
                        <div className='post-button-container'>

                        <button className='post-button' onClick={this.handleSubmit}>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostForm;
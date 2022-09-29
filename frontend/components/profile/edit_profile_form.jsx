import equal from 'fast-deep-equal';
import React from 'react';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            bio: this.props.user.bio,
            city: this.props.user.city,
            school: this.props.user.school,
            work: this.props.user.work
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!equal(prevProps.user, this.props.user)) {
            this.props.fetchAllUsers();
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.id = this.props.user.id;
        formData.append('user[bio]', this.state.bio);
        formData.append('user[city]', this.state.city);
        formData.append('user[school]', this.state.school);
        formData.append('user[work]', this.state.work);
        this.props.updateUserInfo(formData)
        .then(this.props.closeModal)
    }

    renderForm() {
        return (
            <form className='update-info-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x-update-form">&times;</span>
                <h3 id="edit-title">Edit Profile </h3>

                <div className='edit-p-container'>
                <div id='about' className='edit-profile-labels'>About Me</div>
                <textarea id='t-area' placeholder='Write a Short Bio' onChange={this.update('bio')} value={this.state.bio}></textarea>
                </div>
            

                <div className='edit-p-container'>
                <div id='work' className='edit-profile-labels'>Work</div>
                <input className='input-fields' type="text" onChange={this.update('work')} value={this.state.work}/>
                </div>
                
                <div className='edit-p-container'>
                <div id='city' className='edit-profile-labels'>City</div>
                <input className='input-fields' type="text" onChange={this.update('city')} value={this.state.city}/>
                </div>
                <div className='edit-p-container'>
                <div className='edit-profile-labels'>School</div>
                <input className='input-fields' type="text" onChange={this.update('school')} value={this.state.school}/>
                </div>



                <button id="edit-submit">Submit</button>
                <div id="space"></div>
            </form>
        );
    }

    render() {
        return this.props.user && this.renderForm()
    }
}

export default EditProfileForm;
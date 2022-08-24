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
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.user.id)
    // }

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
        // .then(this.props.history.push(`/users/${this.props.user.id}`))
    }

    render() {
        return (
            <form className='update-info-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x update-form">&times;</span>
                <h3>Edit Profile </h3>
                <label>About Me
                <textarea  onChange={this.update('bio')} value={this.state.bio}></textarea>
                </label>
            
                <label>Work
                <input type="text" onChange={this.update('work')} value={this.state.work}/>
                </label>

                <label>City
                <input type="text" onChange={this.update('city')} value={this.state.city}/>
                </label>

                <label>School
                <input type="text" onChange={this.update('school')} value={this.state.school}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default EditProfileForm;
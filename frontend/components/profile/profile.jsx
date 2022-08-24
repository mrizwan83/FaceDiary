import React from 'react';
import HeaderContainer from '../feed/header_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }


    render() {
        return(
            <div>
                <HeaderContainer />
                <div className='profile-page'>
                    <div id="profile-header">
                    <div className='profile-header'>

                    {/* place holder for photo */}
                    <div className='cover-photo-container'>

                        {/* this div should be replaced with the cover photo image */}
                        <div className='cover-photo'>

                            {/* button */}
                            <div className='update-cover-photo'>
                                <img src="https://toppng.com/uploads/preview/appareil-photo-icon-camera-icon-small-11553511694u4myfjqg7j.png" alt="" id="camera-logo" />
                                Update Cover Photo
                            </div>
                        </div>
                    </div>

                        {/* profile pic container */}
                        <div id="bottom-profile-header">
                       
                        <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="" className='profile-photo-container'/>
                        <div className="update-profile-photo"><img src="https://toppng.com/uploads/preview/appareil-photo-icon-camera-icon-small-11553511694u4myfjqg7j.png" alt="" id="camera-logo-2" /></div>
                        <div className='profile-username'>{this.props.user.firstname} {this.props.user.lastname}</div>
                        </div>
                        
                        
                    </div>
                    </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-bio-section">
                            <div className="profile-bio">
                                <div id="profile-bio-about">
                                <h3>ABOUT</h3>
                                </div>
                                
                                <p>{this.props.user.bio}</p>
                                
                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-27-512.png" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>Work: {this.props.user.work}</div>
                                </div>

                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="https://static.vecteezy.com/system/resources/previews/003/337/669/original/map-pointer-location-icon-blue-pin-on-white-vector.jpg" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>City: {this.props.user.city}</div>
                                </div>

                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="data:image/png;base64,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" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>School: {this.props.user.school}</div>
                                </div>

                                
                                <button className="edit-profile-b">Edit Profile</button>


                            </div>
                        </div>

                        <div className="profile-post-container">
                           
                            <div className="profile-middle-post">
                                <div className="middle-post-top">
                                    <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="" id="post-pic-logo" />
                                    <input type="text" placeholder="What's on your mind, User?" id="post-input-feed"/>
                                </div>

                            <div className="middle-post-bottom">
                   
                            <div className="middle-post-item"><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div></div>
                            </div>
                        </div>

                            <div>why isnt this working</div>
                        </div>
                    </div>
            
            </div>
        )
    }
}

export default Profile;
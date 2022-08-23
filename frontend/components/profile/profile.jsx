import React from 'react';
import HeaderContainer from '../feed/header_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
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
                        <div className='profile-username'>Demo User</div>
                        </div>
                        
                        
                    </div>
                    </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-bio-section">
                            <div className="profile-bio">Bio</div>
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
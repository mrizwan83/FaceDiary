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
            </div>
        )
    }
}

export default Profile;
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
                    <div className='profile-header'>
                    <div className='cover-photo-container'>
                        <div className='cover-photo'>
                            
                        </div>

                        <div className='profile-photo'>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
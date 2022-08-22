import React from 'react';
import Header from '../feed/header';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <Header />
                <div className='profile-page'>
                    <div className='profile-header-container'>
                    <div className='profile-header'>
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
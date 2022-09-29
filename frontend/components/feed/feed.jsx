import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './leftnav';
import MiddleFeed from './middlefeed';
import HeaderContainer from './header_container';
import LeftnavContainer from './leftnav_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        <div className='app-body'>
        <LeftnavContainer currentUser={this.props.currentUser}/>
        <MiddleFeed currentUser={this.props.currentUser} otherForm={this.props.otherForm}/>
        <div className='feed-right'>Google Ads Will Go Here</div>
        </div>
    </div>
    )
  }


}

export default Feed;
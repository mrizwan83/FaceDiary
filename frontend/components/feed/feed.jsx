import React from 'react';
import { Link } from 'react-router-dom';
import LeftNav from './leftnav';
import MiddleFeed from './middlefeed';
import HeaderContainer from './header_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        <div className='app-body'>
        <LeftNav />
        <MiddleFeed />
        <div className='feed-right'>placeholder for now</div>
        </div>
    </div>
    )
  }


}

export default Feed;
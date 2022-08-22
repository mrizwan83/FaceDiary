import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import LeftNav from './leftnav';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
        <LeftNav />
        </div>
    </div>
    )
  }


}

export default Feed;
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
      <div>
        <Header />
        <LeftNav />
    </div>
    )
  }


}

export default Feed;
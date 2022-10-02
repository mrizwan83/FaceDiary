import React from 'react';
import MiddleFeedContainer from './middlefeed_container';
import HeaderContainer from './header_container';
import LeftnavContainer from './leftnav_container';


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts,
      users: this.props.users
    }
  }



componentDidMount () {
  this.props.fetchAllUsers()
  .then(users => {
    this.setState({
      users: users
    })
  })
    this.props.fetchPosts()
    .then(posts => {
      this.setState({
        posts: posts
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        <div className='app-body'>
        <LeftnavContainer currentUser={this.props.currentUser}/>
        <MiddleFeedContainer currentUser={this.props.currentUser} otherForm={this.props.otherForm} posts={this.props.posts}/>
        <div className='feed-right'>Google Ads Will Go Here</div>
        </div>
    </div>
    )
  }


}

export default Feed;
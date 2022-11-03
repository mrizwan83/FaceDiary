import React from 'react';
import MiddleFeedContainer from './middlefeed_container';
import HeaderContainer from './header_container';
import LeftnavContainer from './leftnav_container';
import FriendContainer from '../friend/friend_container';

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts,
      users: this.props.users,
      friends: this.props.friends,
      users: this.props.users,
      likes: this.props.likes,
      comments: this.props.comments
    }
  }



componentDidMount () {
  this.props.fetchAllUsers()
  // .then(users => {
  //   this.setState({
  //     users: users
  //   })
  // })
    this.props.fetchPosts()
    // .then(posts => {
    //   this.setState({
    //     posts: posts
    //   })
    // })
    this.props.fetchFriends()
    // .then(friends => {
    //   this.setState({
    //     friends: friends
    //   })
    // })
    this.props.fetchLikes()
    // .then(likes => {
    //   this.setState({
    //     likes: likes
    //   })
    // })
    this.props.fetchComments()
    // .then(comments => {
    //   this.setState({
    //     comments: comments
    //   })
    // })
  }
  

  render() {
    return (
      <div className='app'>
        <HeaderContainer users={this.props.users} location={this.props.location.pathname} />
        <div className='app-body'>
        <LeftnavContainer currentUser={this.props.currentUser}/>
        <MiddleFeedContainer currentUser={this.props.currentUser} otherForm={this.props.otherForm} posts={this.props.posts}/>
        <div className='feed-right'>
          <FriendContainer users={this.props.users} friends={this.props.friends}/>
        </div>
        </div>
    </div>
    )
  }


}

export default Feed;
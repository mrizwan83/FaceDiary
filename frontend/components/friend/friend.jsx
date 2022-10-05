import React from "react";
import { Link } from "react-router-dom";

class Friend extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const friends = [];
        Object.values(this.props.friends).forEach(friend => {
           if ((friend.accepted_request === true) && (friend.requestee_id === this.props.currentUser.id) || 
          (friend.accepted_request === true) && (friend.requester_id === this.props.currentUser.id)) {
              if (friend.requestee_id === this.props.currentUser.id) {
              friends.push(friend.requester_id)
              } else if (friend.requester_id === this.props.currentUser.id) {
                  friends.push(friend.requestee_id)
              }
          } 
      })
        return(
            <div className="friend-container-feed">
                <h1 className='friends-length'>Friends: {friends.length}</h1>
               {friends.map(userId => {
    const friend = this.props.users[userId];
    if (friend) {
    const renderPostPhoto = (friend.profilePhoto) ? <img className="post-pic-logo" src={`${friend.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
    return(

        <Link to={`/users/${friend.id}`} key={friend.id}>
        <div  className="searchresult-item">
        {renderPostPhoto}
    <p className="search-links">
        {friend.firstname} {friend.lastname}
    </p>
    </div>
    </Link>
    )
    }
})} 
            </div>
        )
    }
}

export default Friend;
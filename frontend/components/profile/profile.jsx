import React from 'react';
import HeaderContainer from '../feed/header_container';
import equal from 'fast-deep-equal';
import PostContainer from '../feed/post_container';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            photoFile: null,
            photoUrl: null,
            friendRequests: [],
            likes: this.props.likes,
            comments: this.props.comments
        }
        this.openModal = this.openModal.bind(this);
        this.openPostModal = this.openPostModal.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.displayUpdateInfo = this.displayUpdateInfo.bind(this);
        this.renderUser = this.renderUser.bind(this);
        this.displayUploadCoverPhoto = this.displayUploadCoverPhoto.bind(this);
        this.displayUploadProfilePhoto = this.displayUploadProfilePhoto.bind(this);
        this.displayUserPosts = this.displayUserPosts.bind(this);
        this.handleFriendSubmit = this.handleFriendSubmit.bind(this);
        this.renderFriendRequest = this.renderFriendRequest.bind(this);
        this.renderAcceptFriend = this.renderAcceptFriend.bind(this);
        this.deleteFriendRequest = this.deleteFriendRequest.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!equal(prevProps.users, this.props.users)) {
            this.props.fetchAllUsers();
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchPosts();
        this.props.fetchFriends();
        this.props.fetchLikes()
        .then(likes => {
          this.setState({
            likes: likes
          })
        })
        this.props.fetchComments()
        .then(comments => {
          this.setState({
            comments: comments
          })
        })
    }

    
    handleFile(field) {
        return(e) => {
            let file = e.currentTarget.files[0];
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                this.setState({photoFile: file, photoUrl: null})
                const formData = new FormData();
                if (this.state.photoFile) {
                    formData.append(`user[${field}]`, file)
                    $.ajax({
                                url: `api/users/${this.props.currentUser.id}`,
                                method: 'PATCH',
                                data: formData,
                                contentType: false,
                                processData: false     
                            }).then(response => {
                                this.props.fetchUser(response.id).then(res => {
                                        this.setState({user: res})
                                    })
                            }
                            )
                }
            }

            if (file) {
                fileReader.readAsDataURL(file);
            }
    
        }
    }

    displayUpdateInfo() {
        if (this.props.currentUser.id === this.props.user.id) {
            return(
                <button className='edit-profile-b' onClick={this.openModal}>Update Info</button>                
            )
        } else {
            null
        }
    }

    openModal() {
        this.props.otherForm('Update Info', this.props.currentUser.id)
    }

    openPostModal() {
        this.props.otherForm('Create Post', this.props.currentUser.id)
    }

   
    displayUploadCoverPhoto() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='cover-photo-btn-container'>
                        
                    <div className='cover-input'>Cover Photo 
                        <input className='cover-btn' type="file" onChange={this.handleFile('cover_photo')} />
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    displayUploadProfilePhoto() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='profile-photo-btn-container'>
                    <div className='profile-input' >Profile Photo
                        <input className='profile-btn' type="file" onChange={this.handleFile('profile_photo')} />
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    displayUserPosts() {
           let results = (Object.values(this.props.posts)).filter(post => {
                return post.author_id === this.props.user.id
            })
           return results.map(post => (
                <PostContainer
                key={post.id}
                post={post}
                />
              ))
    }

    handleFriendSubmit() {
        const formData = new FormData();
        formData.append('friend[requestee_id]', this.props.user.id);
        formData.append('friend[requester_id]', this.props.currentUser.id);
        this.props.createFriend(formData)
    }


    renderFriendRequest() {
        if (this.props.currentUser.id !== this.props.user.id) {
            return(
                <button className='frq-btn' onClick={this.handleFriendSubmit}>Send Friend Request

                </button>
            )
        }
    }

    renderAcceptFriend() {
        let friendRequests = [];
        this.props.friends.forEach(friend => {
            if ((friend.accepted_request === false) && (friend.requestee_id === this.props.currentUser.id) && (this.props.currentUser.id === this.props.user.id)) {
                friendRequests.push(friend)
            }
        });


        friendRequests.map(friend => {
            return(
                <div>Accept {friend.requester_id}</div>
            )
        })
    }
   
   acceptFriendRequest(friendId) {
        const formData = new FormData();
        formData.id = friendId;
        formData.append('friend[accepted_request]', true);
        this.props.editFriend(formData)
   }

   deleteFriendRequest(friendId) {
    this.props.deleteFriend(friendId)
   }

   
    


    renderUser() {
        const friendRequests = [];
        const friends = [];
        let alreadyFriends = false;
        Object.values(this.props.friends).forEach(friend => {
            if ((friend.accepted_request === false) && (friend.requestee_id === this.props.currentUser.id) && (this.props.currentUser.id === this.props.user.id)) {
                friendRequests.push(friend)
            } else if ((friend.accepted_request === true) && (friend.requestee_id === this.props.user.id) || 
            (friend.accepted_request === true) && (friend.requester_id === this.props.user.id)) {
                if (friend.requestee_id === this.props.user.id) {
                friends.push(friend.requester_id)
                } else if (friend.requester_id === this.props.user.id) {
                    friends.push(friend.requestee_id)
                }
            } else if (((friend.accepted_request === false) && (friend.requester_id === this.props.currentUser.id) && (friend.requestee_id === this.props.user.id))
            ||((friend.accepted_request === false) && (friend.requestee_id === this.props.currentUser.id) && (friend.requester_id === this.props.user.id))) {
                alreadyFriends = true;
            }  if (((friend.accepted_request === true) && (friend.requester_id === this.props.currentUser.id) && (friend.requestee_id === this.props.user.id))
            ||((friend.accepted_request === true) && (friend.requestee_id === this.props.currentUser.id) && (friend.requester_id === this.props.user.id))) {
                alreadyFriends = true;
            }  if (((friend.accepted_request === true) && (friend.requestee_id === this.props.user.id && friend.requester_id === this.props.currentUser.id)) || 
            ((friend.accepted_request === true) && (friend.requester_id === this.props.user.id && friend.requestee_id === this.props.currentUser.id))) {
                alreadyFriends = true
            } 
        })

   
  
        

        const renderCoverPhoto = (this.props.user.coverPhoto) ? <img className='cover-photo' src={`${this.props.user.coverPhoto}`} /> : <img className='cover-photo' src='https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png'/>
        const renderProfilePhoto = (this.props.user.profilePhoto) ? <img className='profile-photo' src={`${this.props.user.profilePhoto}`} /> : <img className='profile-photo' src='https://i.stack.imgur.com/l60Hf.png'/>
        const renderPostPhoto = (this.props.user.profilePhoto) ? <img className="post-pic-logo" src={`${this.props.user.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
        return(
            <div>
                <HeaderContainer location={this.props.location.pathname}/>
                <div className='profile-page'>

                    <div className='profile-header'>

                <div className='profile-cover-photo'>{renderCoverPhoto}</div>
                {this.displayUploadCoverPhoto()}
                <p className='profile-header-name'>{this.props.user.firstname} {this.props.user.lastname}</p>
                <div className='profile-photo-container'>{renderProfilePhoto}</div>
              
                {this.displayUploadProfilePhoto()}
                    </div>
                </div>



                    <div className="profile-body">
                        <div className="profile-bio-section">
                        {alreadyFriends? null: this.renderFriendRequest()}
                            <div className="profile-bio">
                                <div id="profile-bio-about">
                                <h3 className='friends-length'>ABOUT ME</h3>
                                </div>
                                
                                <div id="profile-bio-d"><p className="profile-user-bio">{this.props.user.bio}</p></div>
                                
                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-27-512.png" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>Work: {this.props.user.work}</div>
                                </div>

                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="https://static.vecteezy.com/system/resources/previews/003/337/669/original/map-pointer-location-icon-blue-pin-on-white-vector.jpg" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>City: {this.props.user.city}</div>
                                </div>

                                <div className='bio-row'>
                                    <div className='bio-icon'><img src="data:image/png;base64,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" alt="" className='bio-row-icon' /></div>
                                    <div className='bio-details'>School: {this.props.user.school}</div>
                                </div>

                                
                                {this.displayUpdateInfo()}


                            </div>
                            <div className='friends-container'>
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


            {friendRequests.map(friend => {
            const f = this.props.users[friend.requester_id]
            if (f) {
                const renderFriendPhoto = (f.profilePhoto) ? <img className="post-pic-logo" src={`${f.profilePhoto}`} /> : <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999" className="post-pic-logo" />
            return(
                <div ><h1 className='friends-length'>Friend Requests: {friendRequests.length}</h1>
                 <Link to={`/users/${f.id}`} key={f.id}>
                    <div  className="searchresult-item">
                            {renderFriendPhoto}
                         <p className="search-links">
                             {f.firstname} {f.lastname}
                         </p>
                     </div>
                     </Link>
            <div className='frq-option'>
            <div className='friendrequest-item' onClick={() => this.acceptFriendRequest(friend.id)}>Accept</div>
            <div className='friendrequest-item' onClick={() => this.deleteFriendRequest(friend.id)}>Decline</div>
            </div>
            </div>
            )
            }
        })}


                    </div>
                        </div>

                        <div className="profile-post-container">



                       


                        <div className='middle-post-create'>
                            <div className="profile-middle-post">
                                
                                <div className="middle-post-top">
                                    {renderPostPhoto}
                                    <input type="text" onClick={this.openPostModal} placeholder={`What's on your mind, ${this.props.currentUser.firstname}?`} id="post-input-feed"/>
                                </div>

                            <div className="middle-post-bottom">
                   
                            <div className="middle-post-item" onClick={this.openPostModal}><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/11204-200.png" alt="" className="post-photo-logo" /><div id="photo-button-feed">Photo</div></div>
                            </div>
                            </div>
                            </div>


                           
                        </div>
                    </div>



                    <div className='allposts-profile'>


{this.displayUserPosts()}


 </div>
            </div>
        )
    }

    render() {
        return this.props.user && this.renderUser();
    }
}

export default Profile;
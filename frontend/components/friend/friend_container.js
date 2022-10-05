import { connect } from 'react-redux';
import Friend from './friend';
import { fetchFriends } from '../../actions/friend_actions';


const mapStateToProps = ({ session, entities: { users, posts, friends } }) => {
    return {
        currentUser: users[session.id],
        posts: posts,
        users: users,
        friends: friends
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
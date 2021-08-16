import { PropTypes } from 'prop-types';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id.toString()} friend={friend} />
    ))}
  </ul>
);
FriendList.prototype = {
  friends: PropTypes.array,
};
export default FriendList;

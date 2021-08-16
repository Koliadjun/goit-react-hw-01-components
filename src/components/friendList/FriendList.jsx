import { PropTypes } from 'prop-types';
import FriendListItem from './FriendListItem';
import s from '../friendList/FriendList.module.css';
const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id.toString()} friend={friend} />
    ))}
  </ul>
);
FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;

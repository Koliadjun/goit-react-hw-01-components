import { PropTypes } from 'prop-types';
const FriendListItem = ({ friend }) => (
  <li className="item">
    {friend.isOnline ? (
      <span className="status status-online"></span>
    ) : (
      <span className="status status-offline"></span>
    )}
    <img
      className="avatar"
      src={friend.avatar}
      alt="avatar {friend.name}"
      width="48"
    />
    <p className="name">{friend.name}</p>
  </li>
);
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendListItem;

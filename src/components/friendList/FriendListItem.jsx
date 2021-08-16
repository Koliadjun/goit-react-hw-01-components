import { PropTypes } from 'prop-types';
import s from '../friendList/FriendListItem.module.css';
const FriendListItem = ({ friend }) => {
  let classNames = friend.isOnline
    ? `${s.status} ${s.statusOnline}`
    : `${s.status} ${s.statusOffline}`;
  return (
    <li className={s.item}>
      <span className={classNames}></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="avatar {friend.name}"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendListItem;

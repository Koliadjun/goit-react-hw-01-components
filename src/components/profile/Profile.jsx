import PropTypes from 'prop-types';
const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар {name}" class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.prototype = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;

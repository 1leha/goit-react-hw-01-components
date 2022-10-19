import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsElement,
  Label,
  Quantity,
} from './UserProfile.styled';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsElement>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsElement>
      </Stats>
    </Profile>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

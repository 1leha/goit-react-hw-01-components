import PropTypes from 'prop-types';
import {
  ProfileStyled,
  DescriptionStyled,
  AvatarStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
  StatsStyled,
  StatsElementStyled,
  LabelStyled,
  QuantityStyled,
} from './UserProfile.styled';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <AvatarStyled src={avatar} alt={username} />
        <NameStyled>{username}</NameStyled>
        <TagStyled>{tag}</TagStyled>
        <LocationStyled>{location}</LocationStyled>
      </DescriptionStyled>

      <StatsStyled>
        <StatsElementStyled>
          <LabelStyled>Followers</LabelStyled>
          <QuantityStyled>{followers}</QuantityStyled>
        </StatsElementStyled>
        <StatsElementStyled>
          <LabelStyled>Views</LabelStyled>
          <QuantityStyled>{views}</QuantityStyled>
        </StatsElementStyled>
        <StatsElementStyled>
          <LabelStyled>Likes</LabelStyled>
          <QuantityStyled>{likes}</QuantityStyled>
        </StatsElementStyled>
      </StatsStyled>
    </ProfileStyled>
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

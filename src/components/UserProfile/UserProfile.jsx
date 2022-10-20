import PropTypes from 'prop-types';
import {
  // ProfileStyled,
  // DescriptionStyled,
  AvatarStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
  StatsStyled,
  StatsElementStyled,
  LabelStyled,
  QuantityStyled,
} from './UserProfile.styled';

import { Box } from '../Box';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Box
      boxShadow="standart"
      textAlign="center"
      backgroundColor="secondary"
      borderRadius="standart"
      overflow="hidden"
    >
      <Box p={5} width="375px">
        <AvatarStyled src={avatar} alt={username} />
        <NameStyled>{username}</NameStyled>
        <TagStyled>{tag}</TagStyled>
        <LocationStyled>{location}</LocationStyled>
      </Box>

      <Box
        as="ul"
        display="flex"
        justifyContent="space-around"
        p={0}
        m={0}
        listStyle="none"
        backgroundColor="userStatsBG"
      >
        <StatsElementStyled>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <LabelStyled>Followers</LabelStyled>
            <QuantityStyled>{followers}</QuantityStyled>
          </Box>
        </StatsElementStyled>
        <StatsElementStyled>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <LabelStyled>Views</LabelStyled>
            <QuantityStyled>{views}</QuantityStyled>
          </Box>
        </StatsElementStyled>
        <StatsElementStyled>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <LabelStyled>Likes</LabelStyled>
            <QuantityStyled>{likes}</QuantityStyled>
          </Box>
        </StatsElementStyled>
      </Box>
    </Box>
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

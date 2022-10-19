import PropTypes from 'prop-types';
import {
  FriendListItemStyled,
  StatusStyled,
  AvatarStyled,
  NameStyled,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemStyled userOnline={isOnline}>
      <StatusStyled userOnline={isOnline} />
      <AvatarStyled src={avatar} alt={name} width="48" />
      <NameStyled>{name}</NameStyled>
    </FriendListItemStyled>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

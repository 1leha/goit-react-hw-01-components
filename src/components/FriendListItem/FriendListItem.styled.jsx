import styled from '@emotion/styled';

export const FriendListItemStyled = styled.li`
  list-style: none;
  padding: 10px 20px;

  display: flex;
  justify-content: left;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.xl};

  background-color: ${({ userOnline }) =>
    userOnline
      ? p => p.theme.colors.friendListOnlineBG
      : p => p.theme.colors.friendListOfflineBG};

  border-radius: ${p => p.theme.radii.standart};
  box-shadow: ${p => p.theme.shadows.standart}${p => p.theme.colors.shadow};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StatusStyled = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;

  margin-right: 15px;

  border-radius: ${p => p.theme.radii.rounded};

  background-color: ${({ userOnline }) =>
    userOnline
      ? p => p.theme.colors.friendListOnlineStatus
      : p => p.theme.colors.friendListOfflineStatus};
`;

export const AvatarStyled = styled.img`
  margin-right: 20px;
`;

export const NameStyled = styled.span`
  margin: 0;
`;

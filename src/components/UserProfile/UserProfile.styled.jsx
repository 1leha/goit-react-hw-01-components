import styled from '@emotion/styled';

export const ProfileStyled = styled.div`
  text-align: center;

  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.standart};
  box-shadow: ${p => p.theme.shadows.standart} ${p => p.theme.colors.shadow};
  overflow: hidden;
`;

export const DescriptionStyled = styled.div`
  padding: 45px;
  width: 375px;
`;

export const AvatarStyled = styled.img`
  display: inline-block;
  width: 150px;

  margin-bottom: 35px;
`;

export const NameStyled = styled.p`
  margin: 0 0 16px 0;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.primary};
`;

export const TagStyled = styled.p`
  margin: 0 0 14px 0;

  font-size: ${p => p.theme.fontSizes.l};

  color: ${p => p.theme.colors.third};
`;

export const LocationStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.l};

  margin: 0px;

  color: ${p => p.theme.colors.third};
`;

export const StatsStyled = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 0;
  margin: 0;

  list-style: none;

  background-color: ${p => p.theme.colors.userStatsBG};
`;

export const StatsElementStyled = styled.li`
  flex: 1 1 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 25px;
  padding-bottom: 30px;

  position: relative;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.userStatsBorder};
  }
`;

export const LabelStyled = styled.span`
  font-size: ${p => p.theme.fontSizes.m};

  margin-bottom: 12px;

  color: #768696;
  text-transform: capitalize;
`;

export const QuantityStyled = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`;

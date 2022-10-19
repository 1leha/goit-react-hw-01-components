import styled from '@emotion/styled';
import { getRandomHexColor, getItemWidth } from '../../utils';

export const SectionStyled = styled.section`
  box-shadow: ${p => p.theme.shadows.standart}${p => p.theme.colors.shadow};
  border-radius: ${p => p.theme.radii.standart};

  overflow: hidden;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  padding: 30px;

  font-size: ${p => p.theme.fontSizes.xl};
  letter-spacing: ${p => p.theme.letterSpacings.stats};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.third};
  background-color: ${p => p.theme.colors.secondary};
`;

export const StatListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;

  width: 100%;

  display: flex;
  justify-content: space-between;

  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;
`;

export const StatItemStyled = styled.li`
  width: ${p => getItemWidth(p.statLength)};
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.statisticsTextColor};

  background-color: ${getRandomHexColor};
`;

export const LabelStyled = styled.span`
  width: 100%;

  margin-bottom: 10px;

  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
`;
export const PercentageStyled = styled.span`
  width: 100%;

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;

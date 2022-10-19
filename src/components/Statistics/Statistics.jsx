import PropTypes from 'prop-types';

import {
  SectionStyled,
  TitleStyled,
  StatListStyled,
  StatItemStyled,
  LabelStyled,
  PercentageStyled
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  const statLength = stats.length;
  return (
    <SectionStyled>
      {title && <TitleStyled>{title}</TitleStyled>}

      <StatListStyled>
        {stats.map(({ id, label, percentage = 0 }) => (
          <StatItemStyled key={id} statLength={statLength}>
            <LabelStyled>{label}</LabelStyled>
            <PercentageStyled>{percentage}%</PercentageStyled>
          </StatItemStyled>
        ))}
      </StatListStyled>
    </SectionStyled>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};

import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  TitleStyled,
  StatListStyled,
  StatItemStyled,
  LabelStyled,
  PercentageStyled,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  const statLength = stats.length;
  return (
    <Box
      as="section"
      boxShadow="standart"
      borderRadius="standart"
      overflow="hidden"
    >
      {title && <TitleStyled>{title}</TitleStyled>}

      <Box
        as="ul"
        m={0}
        p={0}
        display="flex"
        justifyContent="space-between"
        fontWeight="bold"
      >
        {stats.map(({ id, label, percentage = 0 }) => (
          <StatItemStyled key={id} statLength={statLength}>
            <LabelStyled>{label}</LabelStyled>
            <PercentageStyled>{percentage}%</PercentageStyled>
          </StatItemStyled>
        ))}
      </Box>
    </Box>
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

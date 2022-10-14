import PropTypes from 'prop-types';

import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import css from './StatisticsList.module.css';

export default function StatisticsList({ stats }) {
  //   console.log(stats.map(console.log));
  return (
    <ul className="css.statList">
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

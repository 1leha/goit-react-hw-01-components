import PropTypes from 'prop-types';

import css from './Location.module.css';

export default function Location({ location }) {
  return <p className={css.location}>{location}</p>;
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

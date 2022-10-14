import PropTypes from 'prop-types';

import css from './Tag.module.css';

export default function Tag({ tag }) {
  return <p className={css.tag}>{tag}</p>;
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

import css from './UserName.module.css';

export default function UserName({ username }) {
  return <p className={css.name}>{username}</p>;
}

UserName.propTypes = {
  username: PropTypes.string.isRequired,
};

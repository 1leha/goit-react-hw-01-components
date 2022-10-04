import css from './Avatar.module.css';
import PropTypes from 'prop-types';

export default function Avatar({ avatar, username }) {
  return <img src={avatar} alt={username} className={css.avatar} />;
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

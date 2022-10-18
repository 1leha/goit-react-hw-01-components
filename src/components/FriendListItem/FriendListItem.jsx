import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li
      className={clsx(css.item, {
        [css.onlinedItem]: isOnline,
      })}
    >
      <span
        className={clsx({
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

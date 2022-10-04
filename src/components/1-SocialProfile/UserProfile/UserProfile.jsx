import PropTypes from 'prop-types';
import Description from '../Description/Description';
import Stat from '../Stats/Stats';

import css from './UserProfile.module.css';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <div className={css.profile}>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stat {...stats} />
    </div>
  );
}
UserProfile.propTypes = {
  stats: PropTypes.shape(),
};

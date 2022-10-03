import css from './Description.module.css';

import Avatar from '../Avatar/Avatar';
import UserName from '../UserName/UserName';
import Tag from '../Tag/Tag';
import Location from '../Location/Location';

export default function Description({ username, tag, location, avatar }) {
  return (
    <div className={css.description}>
      <Avatar avatar={avatar} username={username} />
      <UserName username={username} />
      <Tag tag={tag} />
      <Location location={location} />
    </div>
  );
}

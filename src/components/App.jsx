import user from '../db/user.json';
import data from '../db/data.json';
import friends from '../db/friends.json';

import UserProfile from './UserProfile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#eaeeff',
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

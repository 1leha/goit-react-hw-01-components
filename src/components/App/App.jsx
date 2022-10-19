import user from '../../db/user.json';
import data from '../../db/data.json';
import friends from '../../db/friends.json';
import transactions from '../../db/transactions.json';

import UserProfile from '../UserProfile/UserProfile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import { AppStyled } from './App.styled';

export const App = () => {
  return (
    <AppStyled>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppStyled>
  );
};

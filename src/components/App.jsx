import user from '../user.json';
import UserProfile from './1-SocialProfile/UserProfile/UserProfile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserProfile {...user} />
    </div>
  );
};

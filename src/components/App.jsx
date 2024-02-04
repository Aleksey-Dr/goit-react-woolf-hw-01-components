import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        key={data.id}
        title="Upload stats"
        stats={data}
      />
      <FriendList>
        <FriendListItem
          key={friends.id}
          friends={friends}
        />
      </FriendList>
    </div>
  );
};

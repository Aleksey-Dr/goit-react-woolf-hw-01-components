import FriendListItem from '../FriendListItem';

import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css["friend-list"]}>
            {friends.map((friend) =>
                <FriendListItem
                    key={friend.id}
                    friend={friend}
                />)
            }
        </ul>
    );
};

export default FriendList;
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
    return (
        friends.map(({ id, avatar, name, isOnline, }) => {
            return (
                <li key={id} className={css.item}>
                    <span
                        style={isOnline ?
                            { backgroundColor: "rgb(98, 202, 50)" } :
                            { backgroundColor: "rgb(241, 79, 103)" }}
                        className={css.status}
                    ></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            );
        })
    );
};

export default FriendListItem;
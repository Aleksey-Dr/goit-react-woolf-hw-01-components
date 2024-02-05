import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
    const { id, avatar, name, isOnline, } = friend;
    return (
        <li key={id} className={css.item}>
            <span
                className={css.status}
                style={{
                    backgroundColor: isOnline ?
                        "rgb(98, 202, 50)" :
                        "rgb(241, 79, 103)"
                }}
            ></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;
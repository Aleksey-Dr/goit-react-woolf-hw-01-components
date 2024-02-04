import css from './FriendList.module.css';

const FriendList = ({ children }) => {
    return (
        <ul className={css["friend-list"]}>
            { children }
        </ul>
    );
};

export default FriendList;
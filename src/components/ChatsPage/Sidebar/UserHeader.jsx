import styles from "./UserHeader.module.css";
function UserHeader({ user }) {
  return (
    <div className={styles.header}>
      <img className={styles.avatar} src={user.avatar} alt="" />
      <div className={styles.userInfo}>
        <div className={styles.nameRow}>
          <p className={styles.username}>{user.username}</p>
          <span className={styles.status}>{user.status}</span>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;

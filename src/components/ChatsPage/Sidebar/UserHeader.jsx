import styles from "./UserHeader.module.css";
import StatusDot from "../StatusDot";
function UserHeader({ user }) {
  return (
    <div className={styles.header}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={user.avatar} alt="" />
        <StatusDot isOnline={user.isOnline} />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.nameRow}>
          <p className={styles.username}>{user.username}</p>
          <span className={styles.statusText}>
            {user.isOnline ? "En línea" : "Desconectado"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;

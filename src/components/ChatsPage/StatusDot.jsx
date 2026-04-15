import styles from "./StatusDot.module.css";
function StatusDot({ isOnline }) {
  return (
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    />
  );
}

export default StatusDot;

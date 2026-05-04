import styles from "./SidebarItem.module.css";

function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default SidebarItem;

import styles from "./AdminCallLogPage.module.css";
import CallLog from "./CallLog";

function AdminCallLogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Logs de Llamadas</h2>
        <span>Historial completo de llamadas del sistema</span>
      </div>
      <div className={styles.content}>
        <CallLog />
        <div className={styles.graphs}></div>
      </div>
    </div>
  );
}

export default AdminCallLogPage;

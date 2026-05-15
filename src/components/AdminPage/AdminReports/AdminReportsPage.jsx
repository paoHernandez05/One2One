import styles from "./AdminReportsPage.module.css";
import ReportsTable from "./ReportsTable";

function AdminReportsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Reportes de Usuarios</h2>
        <span>Gestiona los reportes de contenido</span>
      </div>
      <div className={styles.content}>
        <ReportsTable />
        <div className={styles.graphs}></div>
      </div>
    </div>
  );
}

export default AdminReportsPage;

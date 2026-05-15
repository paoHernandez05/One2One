import styles from "./AdminUsersPage.module.css";
import UserTable from "./UserTable";

function AdminUsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Reportes de Usuarios</h2>
        <span>Gestiona los reportes de contenido</span>
      </div>
      <div className={styles.content}>
        <UserTable />
        <div className={styles.graphs}></div>
      </div>
    </div>
  );
}

export default AdminUsersPage;

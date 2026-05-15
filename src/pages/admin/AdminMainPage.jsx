import styles from "../../components/AdminPage/AdminMainPage.module.css";
import SidebarAdmin from "../../components/AdminPage/SidebarAdmin";
import AdminHeader from "../../components/AdminPage/AdminHeader";
import { Outlet } from "react-router-dom";

function AdminMainPage() {
  return (
    <div className={styles.page}>
      <SidebarAdmin />

      <div className={styles.mainSection}>
        <AdminHeader />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminMainPage;

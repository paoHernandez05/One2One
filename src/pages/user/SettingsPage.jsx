import Header from "../../components/SettingsPage/Header";
import Sidebar from "../../components/SettingsPage/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "../../components/SettingsPage/SettingsPage.module.css";

function SettingsPage() {
  return (
    <div className={styles.page}>
      <Header />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default SettingsPage;

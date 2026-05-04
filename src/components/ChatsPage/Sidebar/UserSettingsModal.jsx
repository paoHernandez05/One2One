import styles from "./UserSettingsModal.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, User, LogOut } from "lucide-react";

function UserSettingsModal() {
  const navigate = useNavigate();
  function handleSettings() {
    navigate("/chat/settings");
  }
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/auth");
  }
  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={handleSettings}>
        <Settings size={15} />
        Configuración
      </div>
      <div className={styles.line} />
      <div className={styles.logout} onClick={handleLogout}>
        <LogOut size={15} />
        Cerrar sesión
      </div>
    </div>
  );
}
export default UserSettingsModal;

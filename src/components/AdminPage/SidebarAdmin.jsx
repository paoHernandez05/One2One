import SidebarItemAdmin from "./SidebarItemAdmin";
import styles from "./SidebarAdmin.module.css";
import {
  LayoutDashboard,
  Server,
  CreditCard,
  Flag,
  Users,
  PhoneCall,
  Shield,
} from "lucide-react";

function SidebarAdmin() {
  const items = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={15} />,
      path: "/admin",
    },
    {
      label: "Recursos del Servidor",
      icon: <Server size={15} />,
      path: "/admin/server",
    },
    {
      label: "Consumo proveedor",
      icon: <CreditCard size={15} />,
      path: "/admin/provider",
    },
    {
      label: "Reportes",
      icon: <Flag size={15} />,
      path: "/admin/reports",
    },
    {
      label: "Gestión de usuarios",
      icon: <Users size={15} />,
      path: "/admin/users",
    },
    {
      label: "Logs de llamadas",
      icon: <PhoneCall size={15} />,
      path: "/admin/logs",
    },
  ];

  const admin = {
    avatar:
      "https://i.pinimg.com/736x/c6/ae/c8/c6aec832cafbde896ea6727862790913.jpg",
    username: "tay_dev",
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.shield}>
          <Shield size={19} color="white" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>One2One</h3>
          <span className={styles.title2}>Admin Panel</span>
        </div>
      </div>
      <span className={styles.menu}>MENÚ</span>
      {items.map((item) => (
        <SidebarItemAdmin
          key={item.label}
          label={item.label}
          icon={item.icon}
          to={item.path}
        />
      ))}
      <div className={styles.adminContainer}>
        <img src={admin.avatar} alt="" className={styles.adminAvatar} />
        <div className={styles.adminInfo}>
          <span className={styles.adminUsr}>{admin.username}</span>
          <span className={styles.adminSub}>Administrador</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;

import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";
import { User, Settings, Shield, Ban } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: "Perfil",
      icon: <User size={15} />,
      path: "/chat/settings",
    },
    {
      label: "Cuenta",
      icon: <Settings size={15} />,
      path: "/chat/settings/profile",
    },
    {
      label: "Privacidad",
      icon: <Shield size={15} />,
      path: "/chat/settings/privacy",
    },
    {
      label: "Bloqueos",
      icon: <Ban size={15} />,
      path: "/chat/profile/blocked",
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          onClick={() => navigate(item.path)}
          active={location.pathname === item.path}
        />
      ))}
    </div>
  );
}

export default Sidebar;

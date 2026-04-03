import { useState } from "react";
import LeftPanel from "../../components/RegisterUserPage/LeftPanel";
import styles from "../../components/RegisterUserPage/RegisterUser.module.css";
import LoginForm from "../../components/RegisterUserPage/LoginForm";
import RegisterForm from "../../components/RegisterUserPage/RegisterForm";
import VerifyForm from "../../components/RegisterUserPage/VerifyForm";
import { Outlet } from "react-router-dom";

function RegisterUserLayout() {
  const [view, setView] = useState("login");

  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginForm setView={setView} />;
      case "register":
        return <RegisterForm setView={setView} />;
      case "verify":
        return <VerifyForm setView={setView} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <LeftPanel />
        <div className={styles.rightView}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RegisterUserLayout;

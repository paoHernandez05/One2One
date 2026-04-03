import { ShieldCheck } from "lucide-react";
import styles from "./VerifyForm.module.css";
function VerifyForm() {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.logoContainer}>
          <div className={styles.iconContainer}>
            <ShieldCheck size={18} />
          </div>
          <h2>Verificar sesión</h2>
        </div>
      </div>
      <button>Confirmar</button>
      <p onClick={() => setView("login")}>Volver al login</p>
    </>
  );
}

export default VerifyForm;

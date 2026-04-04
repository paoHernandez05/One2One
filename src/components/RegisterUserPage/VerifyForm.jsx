import {
  Pencil,
  Check,
  X,
  Mail,
  Send,
  ShieldCheck,
  SendToBack,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./VerifyForm.module.css";
function VerifyForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialEmail = state?.email || localStorage.getItem("userEmail") || "";
  const [email, setEmail] = useState(initialEmail);
  const [tempEmail, setTempEmail] = useState(initialEmail);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Intentamos obtener el token y el email del localStorage
    const token = localStorage.getItem("verificationToken");

    // Si no existe el token, significa que no ha pasado por el login
    if (!token) {
      navigate("/auth/login");
    }
  }, [navigate]);

  if (!localStorage.getItem("verificationToken")) return null;

  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEmail(tempEmail);
    setEditing(false);
  };
  const handleCancel = () => {
    setTempEmail(email);
    setEditing(false);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.iconBox}>
          <ShieldCheck size={22} />
        </div>

        <div className={styles.text}>
          <h1>Verificación</h1>
          <span>Confirma tu identidad por correo</span>
        </div>
      </div>

      <p className={styles.description}>
        Enviaremos un código de 6 dígitos a tu correo electrónico para verificar
        tu identidad.
      </p>
      <p className={styles.emailVerify}>Correo de verificación</p>
      <div className={styles.emailContainer}>
        <div
          className={`${styles.inputWrapper} ${editing ? styles.editing : styles.readMode
            }`}
        >
          <Mail size={18} className={styles.iconLeft} />

          {!editing ? (
            <span className={styles.emailText}>{email}</span>
          ) : (
            <input
              type="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className={styles.input}
              autoFocus
            />
          )}

          {!editing ? (
            <>
              <Pencil
                size={18}
                onClick={handleEdit}
                className={styles.iconRight}
              />
              <span onClick={handleEdit} className={styles.change}>
                Cambiar
              </span>
            </>
          ) : (
            <div className={styles.actions}>
              <Check
                size={18}
                onClick={handleSave}
                color="#14b8a6"
                cursor="pointer"
              />
              <X
                size={18}
                onClick={handleCancel}
                color="#14b8a6"
                cursor="pointer"
              />
            </div>
          )}
        </div>
      </div>
      <p className={styles.emailMessage}>
        ¿Te equivocaste de correo? Haz click en "Cambiar" para corregirlo antes
        de solicitar el código.{" "}
      </p>
      <button className={styles.sendCode}>
        <Send size={16} />
        Recibir código por email
      </button>
      <div>
        <p>Ingresa el código de 6 dígitos</p>
      </div>
      <p onClick={() => navigate("/auth/login")}>Volver al login</p>
    </>
  );
}

export default VerifyForm;

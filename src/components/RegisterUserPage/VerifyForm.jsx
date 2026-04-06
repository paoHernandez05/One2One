import {
  Pencil,
  Check,
  X,
  Mail,
  Send,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./VerifyForm.module.css";
function VerifyForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialEmail = state?.email || "";
  const [email, setEmail] = useState(initialEmail);
  const [tempEmail, setTempEmail] = useState(initialEmail);
  const [editing, setEditing] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  useEffect(() => {
    if (!state?.email) {
      navigate("/auth/login");
    }
  }, [state, navigate]);

  if (!state?.email) return null;

  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = async () => {
    // 1. Validaciones básicas antes de enviar
    if (!tempEmail) {
      alert("No se ingresó correo");
      return;
    }
    if (initialEmail === tempEmail) {
      alert("El correo ingresado es igual al anterior");
      setEditing(false); // Solo cerramos la edición
      return;
    }
    if (!emailRegex.test(tempEmail)) {
      alert("Correo inválido.");
      return;
    }

    // 2. Hacer la petición fetch
    console.log(localStorage.getItem('verificationToken'))
    try {
      const res = await fetch("http://localhost:3000/api/auth/updateEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('verificationToken')}`
        },
        body: JSON.stringify({ email: tempEmail }),
        credentials: "include",
      });

      const response = await res.json();

      console.log(response)
      if (!response.success) {
        alert("Correo no válido o error en el servidor");
        return;
      }

      // 3. Si todo sale bien, actualizamos los estados
      localStorage.setItem("userEmail", tempEmail);
      setEmail(tempEmail);
      setEditing(false);
      navigate(".", {
        replace: true,
        state: { email: tempEmail }
      });

    } catch (error) {
      console.error("Error al actualizar el correo:", error);
    }
  };
  const handleCancel = () => {
    setTempEmail(email);
    setEditing(false);
  };

  const sendCode = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/sendVerificationCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('verificationToken')}`
        },
        credentials: "include",
      });

      const response = await res.json();

      console.log(response)
      if (!response.success) {
        alert("Fallo algo xd");
        return;
      }


    } catch (error) {
      console.error("Error al enviar codigo: ", error);

    }
  }
  return (
    <>
      <p className={styles.backContent} onClick={() => navigate("/auth/login")}>
        <ArrowLeft size={18} />Volver</p>
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
      <button onClick={sendCode} className={styles.sendCode}>
        <Send size={16} />
        Recibir código por email
      </button>
      <div>
        <p>Ingresa el código de 6 dígitos</p>
      </div>
    </>
  );
}

export default VerifyForm;

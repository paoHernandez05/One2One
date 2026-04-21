import {
  Pencil,
  Check,
  X,
  Mail,
  Send,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

  const [vals, setVals] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const estaCompleto = vals.every(v => v.length === 1);

  const manejarCambio = (e, indice) => {
    let valor = e.target.value;
    if (valor.length > 1) {
      valor = valor.slice(-1);
    }

    if (!/^\d*$/.test(valor)) return;

    const nuevaCopia = [...vals];
    nuevaCopia[indice] = valor;
    setVals(nuevaCopia);

    if (valor !== "" && indice < 5) {
      inputsRef.current[indice + 1].focus();
    }
  };

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

    if (!tempEmail) {
      alert("No se ingresó correo");
      return;
    }
    if (initialEmail === tempEmail) {
      alert("El correo ingresado es igual al anterior");
      setEditing(false);
      return;
    }
    if (!emailRegex.test(tempEmail)) {
      alert("Correo inválido.");
      return;
    }

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


  const verifyCode = async (e) => {
    e.preventDefault();
    try {

      if (!estaCompleto) {
        alert("No se envio el codigo de manera correcta");
        return;
      }
      console.log(localStorage.getItem('verificationToken'))

      const res = await fetch("http://localhost:3000/api/auth/verifyCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('verificationToken')}`

        },
        body: JSON.stringify({ code: vals.join('') }),
        credentials: "include",
      });



      const response = await res.json();
      console.log(response)

      if (!response.success) {
        console.log("Credenciales Invalidas");
        return;
      }
      console.log("Verificacion exitosa");
      navigate("/test");
    } catch (error) {

    }





  };

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
      <form onSubmit={verifyCode}>
        <div className={styles.inputContainer}>
          {vals.map((num, i) => (
            <>
              <input
                key={i}
                type="text"
                inputMode="numeric"
                value={num}
                ref={(el) => (inputsRef.current[i] = el)}
                onChange={(e) => manejarCambio(e, i)}
                className={`${styles.inputCode} 
                ${i === 0 || i === 3 ? styles.start : ""}
                ${i === 2 || i === 5 ? styles.end : ""}`}
              />
              {i === 2 ? <div className={styles.slash}>-</div> : ""}
            </>

          ))}
        </div>
        <button
          type="submit"
          disabled={!estaCompleto}
          className={`${styles.verifyCode} ${estaCompleto ? styles.activo : styles.vacio}`}>
          <ShieldCheck size={16} />
          Verificar Código
        </button>
      </form>
    </>
  );
}

export default VerifyForm;

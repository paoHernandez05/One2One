import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Favor de llenar todos los campos.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Correo inválido.");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    navigate("/auth/verify", { state: { email } });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={styles.title}>
        <h1>Bienvenido de vuelta</h1>
        <span>Inicia sesión para continuar</span>
      </div>
      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <label htmlFor="email">Correo</label>
        <div className={styles.inputContainer}>
          <Mail size={18} />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>
        <label htmlFor="password">Contraseña</label>
        <div className={styles.inputContainer}>
          <Lock size={18} />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="•••••••"
          />
          <span onClick={togglePassword} className={styles.eyeIcon}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>
        <button type="submit" className={styles.button}>
          Iniciar Sesión
        </button>
      </form>
      <div className={styles.question}>
        <p>
          ¿No tienes cuenta?{"  "}
          <span onClick={() => navigate("/auth/register")}>Regístrate</span>
        </p>
      </div>
    </>
  );
}

export default LoginForm;

import styles from "./Navbar.module.css";
import one2OneLogo from "C:/Users/paola/one-2-one-project/src/assets/message-heart 1.svg";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nameLogoContainer}>
        <div className={styles.navbarImgContainer}>
          <img src={one2OneLogo} alt="" />
        </div>
        <h2>One2One</h2>
      </div>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Características</a>
        </li>
        <li>
          <a href="">Cómo funciona</a>
        </li>
        <li>
          <a href="">Seguridad</a>
        </li>
      </ul>
      <div className={styles.navbarButtonContainer}>
        <button className={styles.navbarLoginBtn}>Iniciar sesión</button>
        <button className={styles.navbarRegisterBtn}>Crear cuenta</button>
      </div>
    </nav>
  );
}

export default Navbar;

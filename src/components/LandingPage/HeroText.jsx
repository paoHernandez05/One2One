import styles from "./HeroText.module.css";
function HeroText() {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.titleParagraph}>
        <h1 className={styles.comH1}>Comunicación 1 a 1</h1>
        <h1>
          <span className={styles.limitH1}>sin límites.</span>
        </h1>
      </p>

      <p className={styles.paragraph}>
        Plataforma gratuita para chatear, llamar y conectarte con <br />
        cualquier persona en tiempo real
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.registerBtn}>Crear cuenta</button>
        <button className={styles.loginBtn}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default HeroText;

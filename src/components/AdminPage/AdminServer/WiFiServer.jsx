import { Wifi } from "lucide-react";
import styles from "./WiFiServer.module.css";
function WiFiServer({ down, up }) {
  const stats = {
    down: "35",
    up: "52",
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Wifi size={25} color="#1dafa1" />
      </div>
      <div className={styles.left}>
        <span className={styles.label}>Entrada</span>
        <div className={styles.wifiStats}>
          <h2>{stats.up}</h2>
          <span>MB/s</span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.label}>Salida</span>
        <div className={styles.wifiStats}>
          <h2>{stats.down}</h2>
          <span>MB/s</span>
        </div>
      </div>
    </div>
  );
}

export default WiFiServer;

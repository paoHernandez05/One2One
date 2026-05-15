import styles from "./ProviderDetailTable.module.css";

const defaultData = [
  { fecha: "2025-02-20", voz: 1240, video: 380, sms: 520, costo: 84.5 },
  { fecha: "2025-02-21", voz: 1380, video: 420, sms: 610, costo: 96.2 },
  { fecha: "2025-02-22", voz: 980, video: 290, sms: 430, costo: 68.1 },
  { fecha: "2025-02-23", voz: 1520, video: 510, sms: 720, costo: 112.3 },
  { fecha: "2025-02-24", voz: 1100, video: 350, sms: 480, costo: 77.4 },
  { fecha: "2025-02-25", voz: 1450, video: 460, sms: 650, costo: 102.8 },
  { fecha: "2025-02-26", voz: 890, video: 310, sms: 390, costo: 63.7 },
];

function ProviderDetailTable({ data = defaultData }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Detalle por Día</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Fecha</th>
            <th className={`${styles.th} ${styles.right}`}>Voz (min)</th>
            <th className={`${styles.th} ${styles.right}`}>Video (min)</th>
            <th className={`${styles.th} ${styles.right}`}>SMS</th>
            <th className={`${styles.th} ${styles.right}`}>Costo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.fecha} className={styles.row}>
              <td className={styles.td}>{row.fecha}</td>
              <td className={`${styles.td} ${styles.right}`}>
                {row.voz.toLocaleString()}
              </td>
              <td className={`${styles.td} ${styles.right}`}>
                {row.video.toLocaleString()}
              </td>
              <td className={`${styles.td} ${styles.right}`}>
                {row.sms.toLocaleString()}
              </td>
              <td className={`${styles.td} ${styles.right} ${styles.costo}`}>
                ${row.costo.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProviderDetailTable;

import styles from "./CallLog.module.css";

import { Phone, Video, Clock, PhoneMissed } from "lucide-react";

const TYPE_CONFIG = {
  Audio: { icon: <Phone size={15} />, className: "badgeAudio" },
  Video: { icon: <Video size={15} />, className: "badgeVideo" },
};

const defaultData = [
  {
    id: "c11",
    llamante: "ana_garcia",
    receptor: "carlos_dev",
    tipo: "Audio",
    duracion: "5:42",
    fecha: "26 feb, 04:15",
  },
  {
    id: "c12",
    llamante: "pedro_lopez",
    receptor: "maria_rdz",
    tipo: "Video",
    duracion: "20:05",
    fecha: "26 feb, 03:30",
  },
  {
    id: "c13",
    llamante: "lucia_88",
    receptor: "david_k",
    tipo: "Audio",
    duracion: "1:07",
    fecha: "25 feb, 16:00",
  },
  {
    id: "c14",
    llamante: "elena_v",
    receptor: "ana_garcia",
    tipo: "Video",
    duracion: "14:50",
    fecha: "25 feb, 12:45",
  },
  {
    id: "c15",
    llamante: "carlos_dev",
    receptor: "pedro_lopez",
    tipo: "Audio",
    duracion: "7:36",
    fecha: "25 feb, 08:20",
  },
  {
    id: "c16",
    llamante: "david_k",
    receptor: "lucia_88",
    tipo: "Audio",
    duracion: "2:03",
    fecha: "24 feb, 05:30",
  },
  {
    id: "c17",
    llamante: "maria_rdz",
    receptor: "elena_v",
    tipo: "Video",
    duracion: "35:00",
    fecha: "24 feb, 03:00",
  },
  {
    id: "c18",
    llamante: "ana_garcia",
    receptor: "jorge_m",
    tipo: "Audio",
    duracion: null,
    fecha: "23 feb, 10:00",
  },
];

function CallLog({ data = defaultData }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Llamante</th>
            <th className={styles.th}>Receptor</th>
            <th className={styles.th}>Tipo</th>
            <th className={styles.th}>Duración</th>
            <th className={styles.th}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const config = TYPE_CONFIG[row.tipo];
            return (
              <tr key={row.id} className={styles.row}>
                <td className={`${styles.td} ${styles.idCell}`}>{row.id}</td>
                <td className={`${styles.td} ${styles.bold}`}>
                  {row.llamante}
                </td>
                <td className={`${styles.td} ${styles.muted}`}>
                  {row.receptor}
                </td>
                <td className={styles.td}>
                  <span
                    className={`${styles.badge} ${styles[config.className]}`}
                  >
                    {config.icon}
                    {row.tipo}
                  </span>
                </td>
                <td className={styles.td}>
                  {row.duracion ? (
                    <span className={styles.duracion}>
                      <Clock size={15} />
                      {row.duracion}
                    </span>
                  ) : (
                    <span className={styles.duracion}>
                      <PhoneMissed size={15} color="red" />
                      <span className={styles.perdida}>Perdida</span>
                    </span>
                  )}
                </td>
                <td className={`${styles.td} ${styles.muted}`}>{row.fecha}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CallLog;

import styles from "./AdminServerPage.module.css";
import CpuServer from "./CpuServer";
import WiFiServer from "./WiFiServer";
import ResourceChart from "./ResourceChart";

function AdminServerPage() {
  const monitorData = [
    {
      time: "00:00",
      cpu: 60,
      ram: 55,
      disco: 70,
      redEntrada: 200,
      redSalida: 160,
    },
    {
      time: "04:00",
      cpu: 45,
      ram: 65,
      disco: 68,
      redEntrada: 350,
      redSalida: 130,
    },
    {
      time: "08:00",
      cpu: 70,
      ram: 50,
      disco: 62,
      redEntrada: 180,
      redSalida: 310,
    },
    {
      time: "12:00",
      cpu: 35,
      ram: 42,
      disco: 65,
      redEntrada: 420,
      redSalida: 260,
    },
    {
      time: "16:00",
      cpu: 62,
      ram: 72,
      disco: 60,
      redEntrada: 150,
      redSalida: 390,
    },
    {
      time: "20:00",
      cpu: 68,
      ram: 58,
      disco: 64,
      redEntrada: 380,
      redSalida: 200,
    },
    {
      time: "23:00",
      cpu: 25,
      ram: 68,
      disco: 58,
      redEntrada: 450,
      redSalida: 240,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Recursos del Servidor</h2>
        <span>Monitoreo en tiempo real del sistema</span>
      </div>
      <div className={styles.content}>
        <CpuServer />
        <WiFiServer />

        <div className={styles.graphs}>
          <ResourceChart
            title="CPU — Últimas 24h"
            data={monitorData}
            dataKey="cpu"
            color="#14b8a6"
          />
          <ResourceChart
            title="RAM — Últimas 24h"
            data={monitorData}
            dataKey="ram"
            color="#6366f1"
          />
          <ResourceChart
            title="Disco — Últimas 24h"
            data={monitorData}
            dataKey="disco"
            color="#f97316"
          />
          <ResourceChart
            title="Tráfico de Red — Últimas 24h"
            data={monitorData}
            series={[
              { dataKey: "redEntrada", color: "#14b8a6" },
              { dataKey: "redSalida", color: "#6366f1" },
            ]}
            yTicks={[0, 150, 300, 450, 600]}
            unit=" Mbps"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminServerPage;

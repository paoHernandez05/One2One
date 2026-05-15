import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./ServerResourcesGraph.module.css";

// Tooltip personalizado basado en image_8ddee2.png
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltipContainer}>
        <p className={styles.tooltipLabel}>{label}</p>
        <div className={styles.tooltipList}>
          {payload.map((entry, index) => (
            <div key={index} className={styles.tooltipItem}>
              <div className={styles.tooltipInfo}>
                <div
                  className={styles.tooltipIndicator}
                  style={{ backgroundColor: entry.stroke }}
                ></div>
                <span className={styles.tooltipName}>
                  {entry.dataKey.toUpperCase()} %
                </span>
              </div>
              <span className={styles.tooltipValue}>{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

function ServerResourcesGraph() {
  const data = [
    { time: "00:00", cpu: 62, ram: 58 },
    { time: "01:00", cpu: 55, ram: 45 },
    { time: "02:00", cpu: 52, ram: 68 },
    { time: "03:00", cpu: 40, ram: 60 },
    { time: "04:00", cpu: 28, ram: 58 },
    { time: "05:00", cpu: 65, ram: 68 },
    { time: "06:00", cpu: 68, ram: 50 },
    { time: "07:00", cpu: 64, ram: 40 },
    { time: "08:00", cpu: 74, ram: 51 },
    { time: "09:00", cpu: 50, ram: 72 },
    { time: "10:00", cpu: 48, ram: 65 },
    { time: "11:00", cpu: 66, ram: 58 },
    { time: "12:00", cpu: 62, ram: 68 },
    { time: "13:00", cpu: 55, ram: 48 },
    { time: "14:00", cpu: 58, ram: 70 },
    { time: "15:00", cpu: 70, ram: 42 },
    { time: "16:00", cpu: 38, ram: 45 },
    { time: "17:00", cpu: 75, ram: 72 },
    { time: "18:00", cpu: 45, ram: 45 },
    { time: "19:00", cpu: 72, ram: 68 },
    { time: "20:00", cpu: 55, ram: 72 },
    { time: "21:00", cpu: 62, ram: 58 },
    { time: "22:00", cpu: 75, ram: 48 },
    { time: "23:00", cpu: 70, ram: 68 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Recursos del Servidor</h3>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.01} />
            </linearGradient>
            <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            interval={2} // Muestra etiquetas cada 2 horas para no saturar
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#cbd5e1", strokeWidth: 1 }}
          />

          <Area
            type="monotone"
            dataKey="cpu"
            stroke="#14b8a6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCpu)"
            activeDot={{ r: 5, strokeWidth: 0, fill: "#14b8a6" }}
          />

          <Area
            type="monotone"
            dataKey="ram"
            stroke="#6366f1"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRam)"
            activeDot={{ r: 5, strokeWidth: 0, fill: "#6366f1" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ServerResourcesGraph;

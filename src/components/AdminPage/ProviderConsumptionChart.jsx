import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./ProviderConsumptionChart.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltipContainer}>
        <p className={styles.tooltipLabel}>{`2025-${label}`}</p>
        <div className={styles.tooltipList}>
          {payload.map((entry, index) => (
            <div key={index} className={styles.tooltipItem}>
              <div className={styles.tooltipInfo}>
                <div
                  className={styles.tooltipIndicator}
                  style={{ backgroundColor: entry.fill }}
                ></div>
                <span className={styles.tooltipName}>{entry.name}</span>
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

function ProviderConsumptionChart({ title }) {
  const providerData = [
    { day: "02-20", valor1: 1250, valor2: 380, valor3: 520 },
    { day: "02-21", valor1: 1380, valor2: 420, valor3: 610 },
    { day: "02-22", valor1: 980, valor2: 290, valor3: 430 },
    { day: "02-23", valor1: 1520, valor2: 510, valor3: 720 },
    { day: "02-24", valor1: 1100, valor2: 350, valor3: 480 },
    { day: "02-25", valor1: 1450, valor2: 460, valor3: 650 },
    { day: "02-26", valor1: 890, valor2: 310, valor3: 390 },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={providerData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          barGap={8}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10 }}
            ticks={[0, 400, 800, 1200, 1600]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#f1f5f9", opacity: 0.5 }}
          />

          <Bar
            name="Voz (min)"
            dataKey="valor1"
            fill="#14b8a6"
            radius={[6, 6, 0, 0]}
            barSize={20}
            activeBar={{ fill: "#0d9488" }}
          />

          <Bar
            name="Video (min)"
            dataKey="valor2"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
            barSize={20}
            activeBar={{ fill: "#4f46e5" }}
          />

          <Bar
            name="SMS"
            dataKey="valor3"
            fill="#22c55e"
            radius={[6, 6, 0, 0]}
            barSize={20}
            activeBar={{ fill: "#16a34a" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProviderConsumptionChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./ProviderConsChart.module.css";

const data = [
  { date: "02-20", voz: 1220, video: 380, sms: 460 },
  { date: "02-21", voz: 1320, video: 410, sms: 510 },
  { date: "02-22", voz: 930, video: 310, sms: 420 },
  { date: "02-23", voz: 1560, video: 450, sms: 740 },
  { date: "02-24", voz: 1100, video: 360, sms: 440 },
  { date: "02-25", voz: 1390, video: 430, sms: 540 },
  { date: "02-26", voz: 860, video: 330, sms: 400 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltipContainer}>
        <p className={styles.tooltipLabel}>{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className={styles.tooltipItem}>
            <div
              className={styles.indicator}
              style={{ backgroundColor: entry.color }}
            />
            <span className={styles.tooltipKey}>{entry.name}:</span>
            <span className={styles.value}>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

function ProviderConsChart({ title = "Consumo por Día" }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
          barCategoryGap="30%"
          barGap={2}
        >
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#94a3b8" }}
            ticks={[0, 400, 800, 1200, 1600]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="voz" fill="#14b8a6" radius={[3, 3, 0, 0]} name="Voz" />
          <Bar
            dataKey="video"
            fill="#6366f1"
            radius={[3, 3, 0, 0]}
            name="Video"
          />
          <Bar dataKey="sms" fill="#22c55e" radius={[3, 3, 0, 0]} name="SMS" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProviderConsChart;

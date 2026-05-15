import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./CostProviderGraph.module.css";

const data = [
  { date: "02-20", costo: 87 },
  { date: "02-21", costo: 98 },
  { date: "02-22", costo: 68 },
  { date: "02-23", costo: 115 },
  { date: "02-24", costo: 78 },
  { date: "02-25", costo: 97 },
  { date: "02-26", costo: 65 },
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
            <span className={styles.value}>${entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const formatYAxis = (value) => `$${value}`;

function CostProviderGraph({ title = "Costo Estimado por Día" }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
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
            ticks={[0, 30, 60, 90, 120]}
            tickFormatter={formatYAxis}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="costo"
            stroke="#f97316"
            strokeWidth={2.5}
            dot={{ r: 5, fill: "#f97316", strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CostProviderGraph;

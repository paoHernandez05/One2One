import { Cpu, icons } from "lucide-react";
import styles from "./RamStats.module.css";
import RamStatsItem from "./RamStatsItem";

function RamStats() {
  const items = [
    {
      label: "CPU",
      number: "42%",
      icon: <Cpu size={30} color="#aadfc1" />,
    },
    {
      label: "RAM",
      number: "67%",
      icon: <Cpu size={30} color="#aadfc1" />,
    },
    {
      label: "DISCO",
      number: "58%",
      icon: <Cpu size={30} color="#aadfc1" />,
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <RamStatsItem
          key={item.label}
          label={item.label}
          number={item.number}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default RamStats;

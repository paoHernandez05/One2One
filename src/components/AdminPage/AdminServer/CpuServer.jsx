import { Cpu, MemoryStick, HardDrive } from "lucide-react";
import styles from "./CpuServer.module.css";
import CpuServerItem from "./CpuServerItem";

function CpuServer() {
  const items = [
    {
      label: "CPU",
      number: "42%",
      icon: <Cpu size={25} color="#1dafa1" />,
    },
    {
      label: "RAM",
      number: "67%",
      icon: <MemoryStick size={25} color="#1dafa1" />,
    },
    {
      label: "DISCO",
      number: "58%",
      icon: <HardDrive size={25} color="#1dafa1" />,
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <CpuServerItem
          key={item.label}
          label={item.label}
          number={item.number}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default CpuServer;

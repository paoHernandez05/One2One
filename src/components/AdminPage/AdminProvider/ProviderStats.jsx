import { Mic, Video, Mail, DollarSign } from "lucide-react";
import styles from "./ProviderStats.module.css";
import ProviderStatsItem from "./ProviderStatsItem";

function ProviderStats() {
  const items = [
    {
      icon: <Mic size={23} color="#1dafa1" />,
      number: "8560",
      label: "Total Voz (min)",
    },
    {
      icon: <Video size={23} color="#4962df" />,
      number: "2720",
      label: "Total Video (min)",
    },
    {
      icon: <Mail size={23} color="#25b15f" />,
      number: "3800",
      label: "Total SMS",
    },
    {
      icon: <DollarSign size={23} color="#d97706" />,
      number: "$605.00",
      label: "Costo estimado",
    },
  ];
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ProviderStatsItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          number={item.number}
          value={item.value}
          valueIcon={item.valueIcon}
        />
      ))}
    </div>
  );
}

export default ProviderStats;

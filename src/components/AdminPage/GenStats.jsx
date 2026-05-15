import {
  Users,
  Activity,
  MessageSquare,
  PhoneCall,
  Flag,
  TrendingUp,
  TrendingDown,
  icons,
} from "lucide-react";
import styles from "./GenStats.module.css";
import GenStatsItem from "./GenStatsItem";

function GenStats() {
  const items = [
    {
      icon: <Users size={23} color="#1dafa1" />,
      number: "1247",
      label: "Usuarios totales",
      valueIcon: <TrendingUp size={15} color="#25b15f" />,
      value: "+12%",
    },
    {
      icon: <Activity size={23} color="#25b15f" />,
      number: "895",
      label: "Usuarios activos",
      valueIcon: <TrendingUp size={15} color="#25b15f" />,
      value: "+5%",
    },
    {
      icon: <MessageSquare size={23} color="#4962df" />,
      number: "45,230",
      label: "Mensajes hoy",
      valueIcon: <TrendingUp size={15} color="#25b15f" />,
      value: "+8%",
    },
    {
      icon: <PhoneCall size={23} color="#1dafa1" />,
      number: "3,420",
      label: "Llamadas hoy",
      valueIcon: <TrendingUp size={15} color="#25b15f" />,
      value: "+3%",
    },
    {
      icon: <Flag size={23} color="#dc2828" />,
      number: "23",
      label: "Reportes pendientes",
      valueIcon: <TrendingUp size={15} color="#25b15f" />,
      value: "-2%",
    },
  ];
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <GenStatsItem
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

export default GenStats;

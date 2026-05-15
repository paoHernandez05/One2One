import styles from "./AdminDashboardPage.module.css";
import GenStats from "./GenStats";
import RamStats from "./RamStats";
import SentStats from "./SentStats";
import ServerResourcesGraph from "./ServerResourcesGraph";
import ProviderConsumptionChart from "./ProviderConsumptionChart";
function AdminDashboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Dashboard</h2>
        <span>Resumen general del sistema One2One</span>
      </div>
      <div className={styles.content}>
        <GenStats />
        <RamStats />
        <SentStats />
        <div className={styles.chartSection}>
          <ServerResourcesGraph />
          <ProviderConsumptionChart title={"Consumo del Proveedor (7 días)"} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;

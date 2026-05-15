import styles from "./AdminProviderPage.module.css";
import ProviderStats from "./ProviderStats";
import ProviderConsChart from "./ProviderConsChart";
import CostProviderGraph from "./CostProviderGraph";
import ProviderDetailTable from "./ProviderDetailTable";

function AdminProviderPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Consumo del Proveedor</h2>
        <span>Minutos de voz, video y SMS consumidos</span>
      </div>
      <div className={styles.content}>
        <ProviderStats />
        <div className={styles.graphs}>
          <ProviderConsChart />
          <CostProviderGraph />
        </div>
        <ProviderDetailTable />
      </div>
    </div>
  );
}

export default AdminProviderPage;

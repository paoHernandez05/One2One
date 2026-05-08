import { Lock } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./AccountPage.module.css";
function PaymentPage({ user }) {
  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Cambios guardados correctamente.");
  }
  const currentUser = {
    id: 1,
    email: "sam@gmail.com",
    numero: "229 227 1118",
  };
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Pagos</h2>
        <span>Maneja tus suscripciones con One2One</span>
      </div>
    </div>
  );
}
export default PaymentPage;

import { Lock } from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./AccountPage.module.css";
function AccountPage({ user }) {
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
        <h2>Datos de la Cuenta</h2>
        <span>Gestiona tu información de contacto y contraseña</span>
      </div>
      <form className={styles.profileInfo} onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input type="email" defaultValue={currentUser.email} id="username" />
        <label htmlFor="">Teléfono</label>
        <input type="text" defaultValue={currentUser.numero} />
        <label htmlFor="">Contraseña</label>
        <button
          type="button"
          className={styles.change}
          onClick={() => setOpenModal(true)}
        >
          <Lock size={15} />
          Cambiar contraseña
        </button>
        <button type="submit" className={styles.save}>
          Guardar cambios
        </button>
      </form>
      {openModal && <ChangePasswordModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}
export default AccountPage;

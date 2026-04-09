import styles from "./NewConvoModal.module.css";
import Searchbar from "./Searchbar";
import { MessageCircle, X, Search, TypeOutline } from "lucide-react";
import { useState } from "react";

function NewConvoModal({ onClose }) {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const isValid = search.trim().length > 0;
  const mockUsers = [
    {
      id: 1,
      username: "ana_garcia",
      email: "ana@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      username: "pedro_lopez",
      email: "pedro@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      username: "maria_rdz",
      email: "maria@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
  ];
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <MessageCircle size={18} className={styles.messageIcon} />
            <h3>Nueva conversación</h3>
            <span></span>
          </div>
          <button onClick={onClose} className={styles.closeIcon}>
            <X size={18} />
          </button>
        </div>
        <div className={styles.content}>
          <span>
            Ingresa el nombre de usuario o correo exacto y presiona buscar
          </span>
          <div className={styles.searchSection}>
            <Searchbar
              placeholder="Usuario o correo exacto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.searchBtn} disabled={!isValid}>
              <Search size={18} />
            </button>
          </div>
        </div>
        <div className={styles.searchResults}>
          {search.trim() === "" ? (
            <>
              <Search size={22} color="#a9b3c0" />
              <span>Escribe un nombre o correo y presiona buscar</span>
            </>
          ) : filteredUsers.length === 0 ? (
            <span>No se encontraron usuarios</span>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className={`${styles.userItem} ${
                  selectedUser?.id === user.id ? styles.active : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <img src={user.avatar} className={styles.avatar} />
                <div>
                  <p>{user.username}</p>
                  <span>{user.email}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={styles.selectUser}>
          <button className={styles.actionBtn} disabled={!isValid}>
            Selecciona un usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewConvoModal;

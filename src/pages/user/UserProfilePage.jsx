import styles from "../../components/UserPage/UserProfilePage.module.css";
import StatusDot from "../../components/ChatsPage/StatusDot";
import BlockUserModal from "../../components/UserPage/BlockUserModal";
import ReportUserModal from "../../components/UserPage/ReportUserModal";
import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  User,
  Calendar,
  Clock,
  Ban,
  Flag,
  ShieldAlert,
} from "lucide-react";

function UserProfile({ user, onClose }) {
  const [openModal, setOpenModal] = useState(false);
  const [openBlockedModal, setOpenBlockedModal] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  function handleBlockUser() {
    setIsBlocked(true);
    setOpenModal(false);
  }

  return (
    <div className={styles.profile}>
      <div className={styles.banner}>
        <button onClick={onClose} className={styles.close}>
          <ArrowLeft size={19} />
        </button>
      </div>

      <div className={styles.container}>
        {isBlocked ? (
          <>
            <div className={styles.title}>
              <div className={styles.avatarContainer}>
                <img src={user.avatar} className={styles.avatarBlocked} />
                <StatusDot
                  isOnline={user.isOnline}
                  size={16}
                  bottom={6}
                  right={6}
                  isBlocked={isBlocked}
                />
              </div>
            </div>
            <div className={styles.userDescription}>
              <h2>{user.username}</h2>
              <span className={styles.statusBlocked}>
                Has bloqueado a este usuario
              </span>
              <div className={styles.subBlocked}>
                <Ban size={16} />
                Bloqueado
              </div>
            </div>
            <div className={styles.blockedContainer}>
              <div className={styles.blockedCard}>
                <div className={styles.blockedIcon}>
                  <ShieldAlert size={25} color="#e13933" />
                </div>
                <h3>Usuario bloqueado</h3>
                <span>
                  No recibirás mensajes ni llamadas de {user.username}. Tampoco
                  podrás ver su estado en línea.
                </span>
              </div>
              <div className={styles.blockedButtons}>
                <button
                  className={styles.unblockButton}
                  onClick={() => setIsBlocked(false)}
                >
                  <ShieldAlert size={16} />
                  Desbloquear usuario
                </button>
                <button className={styles.reportButton}>
                  <Flag size={16} />
                  Reportar usuario
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.title}>
              <div className={styles.avatarContainer}>
                <img src={user.avatar} className={styles.avatar} />
                <StatusDot
                  isOnline={user.isOnline}
                  size={16}
                  bottom={6}
                  right={6}
                />
              </div>
            </div>
            <div className={styles.userDescription}>
              <h2>{user.username}</h2>
              <span className={styles.status}>
                {user.isOnline ? "En línea" : "Desconectado"}
              </span>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.cardItem}>
                <div className={styles.cardIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.ti}>Email</span>
                  <span className={styles.sub}>{user.email}</span>
                </div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardIcon}>
                  <Phone size={18} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.ti}>Teléfono</span>
                  <span className={styles.sub}>{user.number}</span>
                </div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardIcon}>
                  <User size={18} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.ti}>Edad</span>
                  <span className={styles.sub}>{user.age}</span>
                </div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardIcon}>
                  <Calendar size={18} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.ti}>Se unió</span>
                  <span className={styles.sub}>{user.joinedDate}</span>
                </div>
              </div>
              <div className={styles.cardItem}>
                <div className={styles.cardIcon}>
                  <Clock size={18} />
                </div>
                <div className={styles.cardText}>
                  <span className={styles.ti}>Última vez</span>
                  <span className={styles.sub}>
                    {user.isOnline ? "En línea" : "Desconectado"}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="button" onClick={() => setOpenModal(true)}>
                <Ban size={16} />
                Bloquear usuario
              </button>

              {openModal && (
                <BlockUserModal
                  user={user}
                  onClose={() => setOpenModal(false)}
                  onConfirm={handleBlockUser}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserProfile;

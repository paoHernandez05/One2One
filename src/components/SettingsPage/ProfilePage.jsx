import { Camera } from "lucide-react";
import { useState } from "react";
import styles from "./ProfilePage.module.css";
function ProfilePage({ user }) {
  const currentUser = {
    id: 1,
    username: "samantha_jones",
    avatar:
      "https://plus.unsplash.com/premium_photo-1705134294276-c06083b6c071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "En línea",
    age: "23",
    joiningDate: "05/04/2026",
  };
  const [avatar, setAvatar] = useState(currentUser.avatar);

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setAvatar(preview);
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Perfil</h2>
        <span>Información visible para otros usuarios</span>
      </div>
      <div className={styles.userCard}>
        <div className={styles.userAvatar}>
          <img src={avatar} alt="" className={styles.img} />
          <div className={styles.avatarOverlay}>
            <Camera size={20} />
          </div>
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleChangeAvatar}
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.username}>{currentUser.username}</span>
          <span className={styles.avtr}>Cambiar avatar</span>
        </div>
      </div>
      <div className={styles.profileInfo}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          disabled
          placeholder={currentUser.username}
          id="username"
        />
        <label htmlFor="">Edad</label>
        <input type="text" disabled placeholder={currentUser.age} />
        <label htmlFor="">Cuenta creada</label>
        <span className={styles.join}>{currentUser.joiningDate}</span>
      </div>
    </div>
  );
}
export default ProfilePage;

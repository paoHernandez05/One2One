import styles from "./BlockedPage.module.css";
function BlockedPage() {
  const currentUser = {
    username: "jorge_m",
    avatar:
      "https://plus.unsplash.com/premium_photo-1705134294276-c06083b6c071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "jorge@email.com",
    age: "23",
    joiningDate: "05/04/2026",
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Usuarios bloqueados</h2>
        <span>Usuarios que has bloqueado no podrán contactarte</span>
      </div>
    </div>
  );
}

export default BlockedPage;

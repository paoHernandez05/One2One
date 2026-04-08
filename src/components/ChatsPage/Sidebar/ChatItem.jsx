import styles from "./ChatItem.module.css";
function ChatItem({ chat, selectedChat, setSelectedChat }) {
  const isActive = selectedChat?.id === chat.id;
  return (
    <div
      className={`${styles.chatItem} ${isActive ? styles.active : ""}`}
      onClick={() => setSelectedChat(chat)}
    >
      <div className={styles.avatarContainer}>
        <img src={chat.user.avatar} className={styles.avatar} alt="" />
        <span
          className={`${styles.status} ${
            chat.user.isOnline ? styles.online : styles.offline
          }`}
        ></span>
      </div>
      <div className={styles.info}>
        <p className={styles.username}>{chat.user.username}</p>
        <p className={styles.lastMsg}>{chat.lastMessage.text}</p>
      </div>
      <div className={styles.timeAndCount}>
        <p className={styles.hour}>{chat.lastMessage.createdAt.hour}</p>
        <div className={styles.count}>{chat.unreadCount}</div>
      </div>
    </div>
  );
}

export default ChatItem;

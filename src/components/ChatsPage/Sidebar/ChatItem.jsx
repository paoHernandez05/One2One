import styles from "./ChatItem.module.css";
import StatusDot from "../StatusDot";
function ChatItem({ chat, selectedChat, setSelectedChat }) {
  const isActive = selectedChat?.id === chat.id;
  const lastMsgObj =
    chat.lastMessage ||
    chat.messages?.[chat.messages.length - 1] ||
    "Sin mensajes.";
  return (
    <div
      className={`${styles.chatItem} ${isActive ? styles.active : ""}`}
      onClick={() => setSelectedChat(chat)}
    >
      <div className={styles.avatarContainer}>
        <img src={chat.user.avatar} className={styles.avatar} alt="" />

        <StatusDot isOnline={chat.user.isOnline} />
      </div>
      <div className={styles.info}>
        <p className={styles.username}>{chat.user.username}</p>
        <p className={styles.lastMsg}>{lastMsgObj?.text || "Sin mensajes"}</p>
      </div>
      <div className={styles.timeAndCount}>
        <p className={styles.hour}>
          {lastMsgObj?.createdAt?.hour || lastMsgObj?.time || ""}
        </p>
        <div className={styles.count}>{chat.unreadCount}</div>
      </div>
    </div>
  );
}

export default ChatItem;

import styles from "./ChatWindow.module.css";
import UserHeader from "../Sidebar/UserHeader";
import { Phone, MoreVertical } from "lucide-react";
function ChatWindow({ chat }) {
  if (!chat) {
    return <p>Selecciona un chat</p>;
  }
  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <UserHeader user={chat.user} />
        <div className={styles.actions}>
          <Phone size={20} />
          <MoreVertical size={20} />
        </div>
      </div>

      <div className={styles.messages}>
        {chat.messages?.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === "me" ? styles.myMessage : styles.otherMessage
            }
          >
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;

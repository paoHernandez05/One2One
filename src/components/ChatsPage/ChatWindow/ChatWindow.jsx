import styles from "./ChatWindow.module.css";
import UserHeader from "../Sidebar/UserHeader";
import DefaultChatWindow from "./DefaultChatWindow";
import MessageBox from "./MessageBox";
import Message from "./Message";
import { Phone, MoreVertical } from "lucide-react";
function ChatWindow({ chat }) {
  if (!chat) {
    return <DefaultChatWindow />;
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
          <Message key={msg.id} msg={msg} />
        ))}
      </div>
      <div className={styles.messageBox}>
        <MessageBox />
      </div>
    </div>
  );
}

export default ChatWindow;

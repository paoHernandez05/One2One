import styles from "./Message.module.css";
import { Trash2, TriangleAlert } from "lucide-react";

function Message({ msg }) {
  const isMe = msg.sender === "me";

  const renderContent = () => {
    switch (msg.type) {
      case "text":
        return <p>{msg.text}</p>;
      case "image":
        return <img src={msg.image} className={styles.image} />;
      case "audio":
        return <audio controls src={msg.audio} />;
      case "video":
        return <video controls src={msg.video} className={styles.video} />;
      case "deleted":
        return (
          <div className={styles.deletedMsg}>
            <Trash2 size={16} color="#6b7a90" />
            Mensaje eliminado
          </div>
        );
      case "reported":
        return (
          <div className={styles.reportedMsg}>
            <TriangleAlert size={16} color="#d93025" />
            Mensaje reportado
          </div>
        );
      default:
        return <p>Tipo no soportado</p>;
    }
  };

  if (msg.type === "deleted" || msg.type === "reported") {
    return (
      <div className={`${styles.message} ${isMe ? styles.me : styles.other}`}>
        <div className={styles.systemBubble}>{renderContent()}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.message} ${isMe ? styles.me : styles.other}`}>
      <div className={styles.bubble}>
        {renderContent()}
        <span className={styles.time}>{msg.time}</span>
      </div>
    </div>
  );
}

export default Message;

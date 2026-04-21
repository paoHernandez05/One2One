import styles from "./Message.module.css";

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
      default:
        return <p>Tipo no soportado</p>;
    }
  };

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

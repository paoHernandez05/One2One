import styles from "./ChatWindow.module.css";
function ChatWindow({ chat }) {
  if (!chat) {
    return <p>Selecciona un chat</p>;
  }
  return (
    <div>
      <h2>{chat.user.username}</h2>
      <p>{chat.lastMessage.text}</p>
    </div>
  );
}

export default ChatWindow;

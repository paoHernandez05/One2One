import Sidebar from "../../components/ChatsPage/Sidebar/Sidebar";
import ChatWindow from "../../components/ChatsPage/ChatWindow/ChatWindow";
import styles from "../../components/ChatsPage/ChatsPage.module.css";
import { useState } from "react";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    {
      id: "chat_1",
      user: {
        username: "ana_garcia",
        avatar: "https://i.pravatar.cc/150?img=5",
        isOnline: true,
      },
      lastMessage: {
        text: "¡Hola! ¿Cómo estás?",
        createdAt: {
          hour: "10:32",
          date: "2026-04-07",
        },
      },
      unreadCount: 3,
    },
    {
      id: "chat_2",
      user: {
        username: "pedro_lopez",
        avatar:
          "https://thumbs.dreamstime.com/b/retrato-de-un-joven-apuesto-y-sonriente-con-brazos-plegados-hombres-alegres-sonrientes-las-manos-cruzadas-aislados-en-estudio-172869765.jpg?w=576",
        isOnline: false,
      },
      lastMessage: {
        text: "¡Hola! ¿Cómo estás?",
        createdAt: {
          hour: "10:32",
          date: "2026-04-07",
        },
      },
      unreadCount: 3,
    },
  ];
  return (
    <div className={styles.container}>
      <Sidebar
        chats={chats}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
      <ChatWindow chat={selectedChat} />
    </div>
  );
}

export default ChatPage;

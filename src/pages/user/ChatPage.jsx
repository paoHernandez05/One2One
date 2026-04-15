import Sidebar from "../../components/ChatsPage/Sidebar/Sidebar";
import ChatWindow from "../../components/ChatsPage/ChatWindow/ChatWindow";
import styles from "../../components/ChatsPage/ChatsPage.module.css";
import NewConvoModal from "../../components/ChatsPage/Sidebar/NewConvoModal";
import { useState } from "react";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chats = [
    {
      id: "chat_1",
      user: {
        username: "ana_garcia",
        avatar: "https://i.pravatar.cc/150?img=5",
        isOnline: true,
      },
      messages: [
        {
          id: 1,
          text: "¡Hola Carlos! ¿Cómo va todo?",
          sender: "other",
          time: "10:28",
        },
        {
          id: 2,
          text: "Muy bien, Ana 😄",
          sender: "me",
          time: "10:29",
        },
        {
          id: 3,
          text: "¿De qué se trata?",
          sender: "other",
          time: "10:30",
        },
      ],
      unreadCount: 3,
    },
  ];
  return (
    <div className={styles.container}>
      <Sidebar
        chats={chats}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        onOpenModal={() => setIsModalOpen(true)}
      />
      <ChatWindow chat={selectedChat} />
      {isModalOpen && <NewConvoModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ChatPage;

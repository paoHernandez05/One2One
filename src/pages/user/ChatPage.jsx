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
    {
      id: "chat_3",
      user: {
        username: "maria_ruiz",
        avatar: "https://i.pravatar.cc/150?img=12",
        isOnline: true,
      },
      lastMessage: {
        text: "Nos vemos mañana 😊",
        createdAt: {
          hour: "14:20",
          date: "2026-04-06",
        },
      },
      unreadCount: 1,
    },
    {
      id: "chat_4",
      user: {
        username: "carlos_mendez",
        avatar: "https://i.pravatar.cc/150?img=20",
        isOnline: false,
      },
      lastMessage: {
        text: "Ya te envié el archivo",
        createdAt: {
          hour: "09:15",
          date: "2026-04-07",
        },
      },
      unreadCount: 0,
    },
    {
      id: "chat_5",
      user: {
        username: "laura_sanchez",
        avatar: "https://i.pravatar.cc/150?img=25",
        isOnline: true,
      },
      lastMessage: {
        text: "¿A qué hora es la reunión?",
        createdAt: {
          hour: "18:45",
          date: "2026-04-05",
        },
      },
      unreadCount: 5,
    },
    {
      id: "chat_6",
      user: {
        username: "diego_hernandez",
        avatar: "https://i.pravatar.cc/150?img=30",
        isOnline: false,
      },
      lastMessage: {
        text: "Perfecto, gracias 👍",
        createdAt: {
          hour: "12:10",
          date: "2026-04-04",
        },
      },
      unreadCount: 0,
    },
    {
      id: "chat_7",
      user: {
        username: "sofia_torres",
        avatar: "https://i.pravatar.cc/150?img=32",
        isOnline: true,
      },
      lastMessage: {
        text: "Te mando la info en un rato",
        createdAt: {
          hour: "16:55",
          date: "2026-04-07",
        },
      },
      unreadCount: 2,
    },
    {
      id: "chat_8",
      user: {
        username: "andres_castro",
        avatar: "https://i.pravatar.cc/150?img=40",
        isOnline: false,
      },
      lastMessage: {
        text: "Ok, quedamos así",
        createdAt: {
          hour: "20:03",
          date: "2026-04-06",
        },
      },
      unreadCount: 0,
    },
    {
      id: "chat_9",
      user: {
        username: "valeria_perez",
        avatar: "https://i.pravatar.cc/150?img=45",
        isOnline: true,
      },
      lastMessage: {
        text: "😂😂 eso estuvo buenísimo",
        createdAt: {
          hour: "11:22",
          date: "2026-04-07",
        },
      },
      unreadCount: 4,
    },
    {
      id: "chat_10",
      user: {
        username: "jorge_ramirez",
        avatar: "https://i.pravatar.cc/150?img=50",
        isOnline: false,
      },
      lastMessage: {
        text: "Avísame cuando llegues",
        createdAt: {
          hour: "08:05",
          date: "2026-04-03",
        },
      },
      unreadCount: 0,
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

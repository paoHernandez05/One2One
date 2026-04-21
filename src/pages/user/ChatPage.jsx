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
          type: "text",
          text: "¡Hola Carlos! ¿Cómo va todo?",
          sender: "other",
          time: "10:28",
        },
        {
          id: 2,
          type: "text",
          text: "Muy bien, Ana 😄",
          sender: "me",
          time: "10:29",
        },
        {
          id: 3,
          type: "text",
          text: "¿De qué se trata?",
          sender: "other",
          time: "10:30",
        },
      ],
      unreadCount: 3,
    },

    {
      id: "chat_2",
      user: {
        username: "marcos_rodriguez",
        avatar: "https://i.pravatar.cc/150?img=11",
        isOnline: false,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "¿Terminaste el reporte?",
          sender: "other",
          time: "09:15",
        },
        {
          id: 2,
          type: "text",
          text: "Casi, me falta un detalle.",
          sender: "me",
          time: "09:20",
        },
        {
          id: 3,
          type: "text",
          text: "Vale, avísame cuando lo subas.",
          sender: "other",
          time: "09:21",
        },
      ],
      unreadCount: 0,
    },

    {
      id: "chat_3",
      user: {
        username: "sofia_vargas",
        avatar: "https://i.pravatar.cc/150?img=26",
        isOnline: true,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "Oye, ¿viste lo que dijo el profe?",
          sender: "other",
          time: "11:45",
        },
      ],
      unreadCount: 1,
    },

    {
      id: "chat_4",
      user: {
        username: "david_techtalk",
        avatar: "https://i.pravatar.cc/150?img=12",
        isOnline: true,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "El repo de GitHub ya está actualizado.",
          sender: "other",
          time: "08:30",
        },
        {
          id: 2,
          type: "text",
          text: "¡Genial! Le echo un ojo ahora.",
          sender: "me",
          time: "08:35",
        },
      ],
      unreadCount: 0,
    },

    {
      id: "chat_5",
      user: {
        username: "lucia_perez",
        avatar: "https://i.pravatar.cc/150?img=32",
        isOnline: false,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "¿A qué hora nos vemos hoy?",
          sender: "other",
          time: "14:10",
        },
        {
          id: 2,
          type: "text",
          text: "A las 6 en la entrada.",
          sender: "me",
          time: "14:15",
        },
        {
          id: 3,
          type: "text",
          text: "Perfecto, ahí estaré.",
          sender: "other",
          time: "14:16",
        },
      ],
      unreadCount: 0,
    },

    {
      id: "chat_6",
      user: {
        username: "equipo_redes",
        avatar: "https://i.pravatar.cc/150?img=15",
        isOnline: true,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "La configuración de OSPF está fallando.",
          sender: "other",
          time: "15:02",
        },
        {
          id: 2,
          type: "text",
          text: "Revisa las áreas.",
          sender: "me",
          time: "15:05",
        },
        {
          id: 3,
          type: "text",
          text: "Eran las máscaras de red, ya quedó.",
          sender: "other",
          time: "15:10",
        },
      ],
      unreadCount: 2,
    },

    {
      id: "chat_7",
      user: {
        username: "carla_mendez",
        avatar: "https://i.pravatar.cc/150?img=44",
        isOnline: false,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "Te envié el PDF por correo.",
          sender: "other",
          time: "16:40",
        },
      ],
      unreadCount: 1,
    },

    {
      id: "chat_8",
      user: {
        username: "javier_dev",
        avatar: "https://i.pravatar.cc/150?img=33",
        isOnline: true,
      },
      messages: [
        {
          id: 1,
          type: "text",
          text: "React 19 está increíble.",
          sender: "other",
          time: "17:22",
        },
        {
          id: 2,
          type: "text",
          text: "Siii, el compilador ayuda mucho.",
          sender: "me",
          time: "17:25",
        },
        {
          id: 3,
          type: "image",
          image:
            "https://i.pinimg.com/1200x/a0/89/77/a089773f7a787dac37a3560f80b1d19f.jpg",
          sender: "other",
          time: "17:28",
        },
      ],
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

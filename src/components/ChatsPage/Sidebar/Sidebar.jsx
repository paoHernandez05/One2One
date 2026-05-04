import styles from "./Sidebar.module.css";
import UserHeader from "./UserHeader";
import Searchbar from "./Searchbar";
import ChatList from "./ChatList";
import UserSettingsModal from "./UserSettingsModal";
import { useState, useRef, useEffect } from "react";
import NewConvoModal from "./NewConvoModal";
import NewConvo from "./NewConvo";

function Sidebar({ chats, selectedChat, setSelectedChat, onOpenModal }) {
  const currentUser = {
    id: 1,
    username: "samantha_jones",
    avatar:
      "https://plus.unsplash.com/premium_photo-1705134294276-c06083b6c071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "En línea",
  };
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div ref={ref} className={styles.headerArea}>
          <div
            className={styles.headerContainer}
            onClick={() => setOpen(!open)}
          >
            <UserHeader user={currentUser} />
          </div>
          {open && <UserSettingsModal />}
        </div>
        <Searchbar />
      </div>
      <div className={styles.bottom}>
        <ChatList
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>
      <div className={styles.newConvo}>
        <NewConvo onClick={onOpenModal} />
      </div>
    </div>
  );
}

export default Sidebar;

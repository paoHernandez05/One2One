import styles from "./MessageBox.module.css";
import { useState } from "react";
import { Paperclip, Mic, Send } from "lucide-react";

function MessageBox() {
  const [editing, setEditing] = useState(false);
  return (
    <div className={styles.container}>
      <button>
        <Paperclip size={20} color="#65758b" />
      </button>
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        className={styles.input}
      />
      <div className={styles.buttons}>
        <button>
          <Mic size={18} color="#65758b" />
        </button>
        <button className={styles.sendButton}>
          <Send size={18} color="white" />
        </button>
      </div>
    </div>
  );
}

export default MessageBox;

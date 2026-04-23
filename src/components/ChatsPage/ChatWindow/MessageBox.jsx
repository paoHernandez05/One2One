import styles from "./MessageBox.module.css";
import { useEffect, useState } from "react";
import { Paperclip, Mic, Send } from "lucide-react";

function MessageBox() {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <button>
        <Paperclip size={20} color="#65758b" />
      </button>
      <input
        type="text"
        value={value}
        placeholder="Escribe un mensaje..."
        className={styles.input}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <button>
          <Mic size={18} color="#65758b" />
        </button>
        <button disabled={disabled} className={styles.sendButton}>
          <Send size={18} color="white" />
        </button>
      </div>
    </div>
  );
}

export default MessageBox;

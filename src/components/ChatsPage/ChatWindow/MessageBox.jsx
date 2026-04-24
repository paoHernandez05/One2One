import styles from "./MessageBox.module.css";
import { useEffect, useState, useRef } from "react";
import { Paperclip, Mic, Send } from "lucide-react";
import ShareFilesModal from "./ShareFilesModal";

function MessageBox() {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    const url = URL.createObjectURL(file);
    setPreview({
      file,
      url,
      type: file.type,
    });
  };

  useEffect(() => {
    if (value.length > 0 || preview) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value, preview]);

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
    <div className={styles.container}>
      <div ref={ref} className={styles.shareWrapper}>
        <button className={styles.shareButton} onClick={() => setOpen(!open)}>
          <Paperclip size={20} color="#65758b" />
        </button>

        {open && <ShareFilesModal onFileSelect={handleFile} />}
      </div>
      {preview && (
        <div className={styles.previewContainer}>
          {preview.type.startsWith("image") ? (
            <img src={preview.url} className={styles.previewImage} />
          ) : (
            <video src={preview.url} className={styles.previewVideo} controls />
          )}

          <div className={styles.previewInfo}>
            <span>{preview.file.name}</span>
            <span>
              {preview.type.startsWith("image")
                ? "Imagen lista para enviar"
                : "Video listo para enviar"}
            </span>
          </div>

          <button onClick={() => setPreview(null)}>✕</button>
        </div>
      )}
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
        {disabled ? (
          <button className={styles.audio}>
            <Mic size={18} color="#65758b" />
          </button>
        ) : (
          <button disabled={disabled} className={styles.sendButton}>
            <Send size={18} color="white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MessageBox;

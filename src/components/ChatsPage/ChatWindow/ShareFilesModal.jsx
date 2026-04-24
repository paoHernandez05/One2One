import styles from "./ShareFilesModal.module.css";
import { FileImage, Video } from "lucide-react";
import { useEffect, useRef } from "react";

function ShareFilesModal({ onFileSelect }) {
  const fileInputRef = useRef();
  /*   const [preview, setPreview] = useEffect(null);
   */
  const handleOpenFiles = (type) => {
    if (type === "image") {
      fileInputRef.current.accept = "image/*";
    } else {
      fileInputRef.current.accept = "video/*";
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />

      <div className={styles.item} onClick={() => handleOpenFiles("image")}>
        <FileImage size={15} color="#2ab3a6" />
        Imagen
      </div>
      <div className={styles.item} onClick={() => handleOpenFiles("video")}>
        <Video size={15} color="#2ab3a6" />
        Video
      </div>
    </div>
  );
}

export default ShareFilesModal;

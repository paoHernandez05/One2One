import styles from "./Searchbar.module.css";
import { useRef } from "react";
import { Search, User } from "lucide-react";
function Searchbar() {
  const inputRef = useRef(null);
  const handleClick = () => {
    if (document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={styles.searchbar} onClick={handleClick}>
      <Search className={styles.searchIcon} size={17} />
      <input
        type="text"
        ref={inputRef}
        placeholder="Buscar conversación..."
        className={styles.searchInput}
      />
    </div>
  );
}

export default Searchbar;

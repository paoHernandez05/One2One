import { Plus } from "lucide-react";
import styles from "./NewConvo.module.css";
function NewConvo() {
  return (
    <button className="newBtn">
      <Plus />
      Nueva conversación
    </button>
  );
}
export default NewConvo;

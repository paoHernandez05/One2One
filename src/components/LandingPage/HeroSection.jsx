import HeroText from "./HeroText";
import ChatPreview from "./ChatPreview";
import styles from "./HeroSection.module.css";
function HeroSection() {
  return (
    <>
      <div className={styles.heroSectionMainContainer}>
        <HeroText />
        <ChatPreview />
      </div>
    </>
  );
}

export default HeroSection;

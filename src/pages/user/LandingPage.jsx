import Navbar from "../../components/LandingPage/Navbar";
import HeroSection from "../../components/LandingPage/HeroSection";
import Features from "../../components/LandingPage/Features";
import styles from "../../components/LandingPage/LandingPageContent.module.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className={styles.landingPageContentContainer}>
        <HeroSection />
        <Features />
      </div>
    </>
  );
}
export default LandingPage;

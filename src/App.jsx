import { motion } from "framer-motion";
import "./App.css";
import health from "./assets/954528 (1)@2x.png";
import hero from "./assets/Untitled-1@2x.png";
import Lung from "./assets/1881195@2x.png";
import stomach from "./assets/1881195@2x.png";
import eye from "./assets/1881195@2x.png";
import nose from "./assets/1881195@2x.png";
import ear from "./assets/1881195@2x.png";
import dental from "./assets/1881195@2x.png";
import muscle from "./assets/1881195@2x.png";
import liver from "./assets/1881195@2x.png";
import brain from "./assets/1713596@2x.png";
function App() {
  return (
    <div className="App">
      <header>
        <div className="header-section">
          <div className="header-logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="header-buttons">
            <button className="help-button">Need Help?</button>
            <button className="download-app-button">Download App</button>
            <button className="cart-button">Cart</button>
            <button className="profile-button">Profile</button>
          </div>
        </div>
        <div className="header-section">
          <h2>MedToday</h2>
          <p>Chennai Location</p>
          <div className="search-header">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <motion.img
          src={hero}
          alt="Hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="hero-content">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            FLAT 25% OFF on MEDICINE order
          </motion.h3>
          <motion.button
            className="order-now-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Order Now
          </motion.button>
        </div>
      </section>
      <footer>
        <div className="footer-section">
          <img src={health} alt="Heart Care" />
          <p>Heart Care</p>
        </div>
        <div className="footer-section">
          <img src={Lung} alt="Lung Care" />
          <p>Lung Care</p>
        </div>
        <div className="footer-section">
          <img src={stomach} alt="Stomach Care" />
          <p>Stomach Care</p>
        </div>
        <div className="footer-section">
          <img src={eye} alt="Eye Care" />
          <p>Eye Care</p>
        </div>
        <div className="footer-section">
          <img src={nose} alt="Node Care" />
          <p>Nose Care</p>
        </div>
        <div className="footer-section">
          <img src={ear} alt="Ear Care" />
          <p>Ear Care</p>
        </div>
        <div className="footer-section">
          <img src={muscle} alt="Ear Care" />
          <p>Muscle Care</p>
        </div>
        <div className="footer-section">
          <img src={dental} alt="Ear Care" />
          <p>Dental Care</p>
        </div>
        <div className="footer-section">
          <img src={liver} alt="Ear Care" />
          <p>Liver Care</p>
        </div>
        <div className="footer-section">
          <img src={brain} alt="Ear Care" />
          <p>Brain Care</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import styles from "./Contact.module.css";
import image from "../assets/ContactUs.webp";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infobox}>
        <h2>Contact Us</h2>

        <div className={styles.infoItem}>
          <h4>Address:</h4>
          <p>
            <a
              href="https://maps.app.goo.gl/fovaLqGvknfpPvC99?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH Raisoni Skilltech University,
              Nagpur, Maharashtra, 440030
            </a>
          </p>
        </div>

        <div className={styles.infoItem}>
          <h4>Mobile Number:</h4>
          <p>
            <a href="tel:+918766009153">+918766009153</a>
          </p>
        </div>

        <div className={styles.infoItem}>
          <h4>Email Id:</h4>
          <p>
            <a href="mailto:sujalfulmali2305@gmail.com">sujalfulmali2305@gmail.com</a>
          </p>
        </div>
      </div>
      <div className={styles.imgbox}>
        <img src={image} alt="Contact Us" />
      </div>
    </div>
  );
};


export default Contact;

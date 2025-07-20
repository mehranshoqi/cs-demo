import Image from "next/image";
import styles from "./Footer.module.scss";
import EmailSubscriptionInput from "../../commen/SubscriptionEmailInput/SubscriptionEmailInput";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Social />
      <Browse />
      <Company />
      <Email />
    </footer>
  );
}

const Social = () => {
  return (
    <div className={styles.social}>
      <Image src="/images/Logo.svg" alt="Logo" width={132} height={40} />
      <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
      </p>
      <div className={styles.icons}>
        <SocialIcon src="/images/LinkedIn.svg" alt="LinkedIn" />
        <SocialIcon src="/images/instagram.svg" alt="Instagram" />
        <SocialIcon src="/images/facebook.svg" alt="Facebook" />
        <SocialIcon src="/images/youtube.svg" alt="youtube" />
        <SocialIcon src="/images/twitter.svg" alt="Twitter" />
      </div>
    </div>
  );
};

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={styles.icon}>
      <Image src={src} alt={alt} width={24} height={24} />
    </div>
  );
};

const Browse = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTile}>Browse</h3>
      <ul className={styles.sectionList}>
        <li>All Weapons Skins</li>
        <li>Blog posts</li>
        <li>Price</li>
      </ul>
    </div>
  );
};

const Company = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTile}>Company</h3>
      <ul className={styles.sectionList}>
        <li>Terms and conditions</li>
        <li>Privacy Policy</li>
        <li>Help / FAQ</li>
        <li>About us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const Email = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTile}>Subscribe to get discounts</h3>
      <div className={styles.emailSubscription}>
        <p className={styles.sectionList}>Email</p>
        <EmailSubscriptionInput />
      </div>
    </div>
  );
};

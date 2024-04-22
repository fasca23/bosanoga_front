import styles from './Footer.module.css'

const FooterContacts = () => {
  return (
    <section className={styles['footer-contacts']}>
      <h5>Контакты:</h5>
      <a className={styles['footer-contacts-phone']} href="tel:+7-495-790-35-03">
        +7 499 155 01 29
      </a>
      <span className={styles['footer-contacts-working-hours']}>
        Ежедневно: с 08-00 до 23-00
      </span>
      <a className={styles['footer-contacts-email']} href="mailto:office777@bosanoga.ru">
        office777@bosanoga.ru
      </a>
      <div className={styles['footer-social-links']}>
        <div className={`${styles['footer-social-link']} ${styles['footer-social-link-vk']}`}></div>
      </div>
    </section>
  );
};

export default FooterContacts;

import styles from './Footer.module.css'

const FooterPay = () => {
  return (
    <section>
      <h5>Принимаем к оплате только:</h5>
      <div className={styles['footer-pay']}>
        <div className={`${styles['footer-pay-systems']} ${styles['footer-pay-systems-yandex']}`}></div>
      </div>
    </section>
  );
};

export default FooterPay;

import styles from './Footer.module.css';

const FooterCopyright = () => {
  return (
    <section>
      <div className={styles['footer-copyright']}>
        1985-2024 © BosaNoga.ru — модный интернет-магазин обуви и
        аксессуаров. Все права защищены.
        <br />
        Доставка только по РОССИИ!!
      </div>
    </section>
  );
};

export default FooterCopyright;

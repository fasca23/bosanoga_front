import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

// Слой полупрозрачной подложки.
const Backdrop = (props) => {
  const { onHideCart } = props;
  return <div className={styles['backdrop']} onClick={onHideCart}></div>;
};

// Модальное окно.
const ModalWindow = (props) => {
  const { children } = props;
  return (
    <div className={styles['modal']}>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const { onHideCart, children } = props;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
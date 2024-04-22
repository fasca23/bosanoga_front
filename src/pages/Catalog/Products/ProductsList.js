import GoodsListItem from "./ProductsListItem";

import styles from './Products.module.css'

const GoodsList = (props) => {
  const { goods } = props;

  const elements = goods.map((item) => {
    return (
      <GoodsListItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        images={item.images[0]}
      />
    );
  });

  return <div className={`${styles['goods__wrapper']} row`}>{elements}</div>;
};

export default GoodsList;

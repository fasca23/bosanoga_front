import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GoodsList from './Products/ProductsList';
import Preloader from '../../components/Preloader/Preloader';
import NotFoundIMG from './not-found.svg';
import ErrorIMG from './error.svg';
import styles from './Catalog.module.css';
import { urlBack } from '../../UrlBack';

const CatalogList = () => {
  const [goods, setGoods] = useState([]);
  const [goodsCount, setGoodsCount] = useState(6);
  const [isMoreGoods, setIsMoreGoods] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeCategory = useSelector((state) => state.category.value);
  const searchValue = useSelector((state) => state.search.value);

  let URL = `${urlBack}/api/items`;
  if (activeCategory !== 0 && searchValue === '') {
    URL = `${urlBack}/api/items?categoryId=${activeCategory}`;
  }
  if (activeCategory === 0 && searchValue !== '') {
    URL = `${urlBack}/api/items?q=${searchValue.toLowerCase()}`;
  }
  if (activeCategory !== 0 && searchValue !== '') {
    URL = `${urlBack}/api/items?categoryId=${activeCategory}&q=${searchValue.toLowerCase()}`;
  }

  let loadMoreURL = `${urlBack}/api/items?offset=${goodsCount}`;
  if (activeCategory !== 0) {
    loadMoreURL = `${urlBack}/api/items?categoryId=${activeCategory}&offset=${goodsCount}`;
  }

  async function fetchGoodsHandler(url) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Что-то пошло не так...');
      }
      const data = await response.json();
      setGoods(data);

      if (data.length < 6) {
        setIsMoreGoods(false);
      } else {
        setIsMoreGoods(true);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGoodsHandler(URL);
  }, [activeCategory, searchValue]);

  const loadMoreHandler = () => {
    fetchGoodsHandler(loadMoreURL);
    setGoodsCount(goodsCount + 6);
    console.log(loadMoreURL);
  };

  let content = (
    <>
      <p className="info">
        По запросу ничего нет.
      </p>
      <img className="info-img" src={NotFoundIMG} alt="По запросу ничего нет" />
    </>
  );

  if (goods.length > 0) {
    content = <GoodsList goods={goods} />;
  }

  if (error) {
    content = (
      <>
        <p className="info">
          Упс... ошибка. Бывает.
        </p>
        <img className="info-img" src={ErrorIMG} alt="Ошибка" />
      </>
    );
  }

  if (isLoading) {
    content = <Preloader />;
  }

  return (
    <>
      {content}
      {isMoreGoods && (
        <div className="text-center">
          <button
            className={`${styles['load-more-btn']} btn btn-outline-primary`}
            onClick={loadMoreHandler}
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogList;

import NotFoundIMG from './noun-not-found.svg'

const NotFound = () => {
  return (
    <section className="top-sales">
      <h2 className="text-center">Нет такой страницы!</h2>
      <img className="info-img" src={NotFoundIMG} alt="Страница не найдена" />
    </section>
  );
};

export default NotFound;

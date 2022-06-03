import logo from "../logo.svg";

export default function Header() {
  return (
    <div className="container">
      <nav className="nav ">
        <div className="logo">
          <img alt="logo" src={logo} />
          <div>
            <p className="logo_title">PIZZA HOUSE</p>
            <p className="logo_subtitle">Сеть пиццерий №14 в России</p>
          </div>
        </div>
        <div className="number">
          <a href="tel:+78008888888">8 800 888-88-88</a>
          <p>Звонок бесплатный</p>
        </div>
      </nav>
      <menu className="menu">
        <ul>
          <li>
            <a href="#pizzas">Пицца</a>
          </li>
          <li>
            <a href="#snacks">Закуски</a>
          </li>
          <li>
            <a href="#desserts">Дессерты</a>
          </li>
          <li>
            <a href="#drinks">Напитки</a>
          </li>
        </ul>
        <button className="btn">Корзина</button>
      </menu>
    </div>
  );
}

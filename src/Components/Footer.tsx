import s from "./footer.module.css";
export default function Footer() {
  return (
    <div className={s.footer}>
      <section className="container">
        <div className={s.footer_wrapper}>
          <div className={s.logo_title}>Pizza House</div>
          <ul className={s.footer_menu}>
            <li>
              <a href="https://sun9-21.userapi.com/s/v1/if2/bX0JjWUk0Xpvjf6s6ZZHjnmNrMDiIMGsjJtloX1-QTi0j3_OUjfrh12ePYIe15MU8QX4c3nMDwBNkrTqmX9fl_B9.jpg?size=675x595&quality=96&type=album">
                Правовая информация
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1GWaKPdU7t5URgMkh_X4pJqmyZuGr9FdQ/edit">
                Калорийность и состав
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=x5KhaCt1d3I">Помощь</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

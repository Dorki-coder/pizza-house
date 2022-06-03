import s from "./modal.module.css";

type Props = {
  active: boolean;
  setModalActive: any;
  imgSrc: string;
  name: string;
  productToppings: any;
};

export default function Modal({
  active,
  setModalActive,
  imgSrc,
  name,
  productToppings = [],
}: Props) {
  return (
    <div className={s.modal} onClick={() => setModalActive(false)}>
      <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={s.modal_image_block}>
          <img src={imgSrc} alt={name} width="322" height="322" />
        </div>
        <div className={s.modal_description_block}>
          <h4>{name}</h4>
          <p>30 см, традиционное тесто, 480 г</p>
          <div className={s.size_selector}>
            <label>
              <input type="radio" name="item" />
              <span>Маленькая</span>
            </label>
            <label>
              <input type="radio" name="item" checked />
              <span>Средняя</span>
            </label>
            <label className="item">
              <input type="radio" name="item" />
              <span>Большая</span>
            </label>
          </div>
          <div className="">
            <label>
              <input type="radio" name="item1" checked />
              <span>Традиционное</span>
            </label>
            <label>
              <input type="radio" name="item1" />
              <span>Тонкое</span>
            </label>
          </div>
          <h4>Добавить в пиццу</h4>
          <div className={s.toppingsList}>
            {productToppings.map((elem: any) => {
              return (
                <div className={s.toppingCard}>
                  <input
                    className={s.checked}
                    type="checkbox"
                    id={elem.name}
                    name={elem.name}
                  />
                  <label htmlFor={elem.name}>
                    <img
                      src={
                        "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                        elem.menuImagePath
                      }
                      alt={elem.name}
                      width="84"
                      height="84"
                    />
                    <p>{elem.name}</p>
                    <p>{elem.variationPrices[0].price} ₽</p>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Modal from "./Modal";

import s from "./card.module.css";

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
  productToppings?: any;
  imageModal: string;
};

export default function Card({
  productToppings,
  name,
  description,
  price,
  image,
  imageModal,
}: Props) {
  const [modalActive, setModalActive] = useState(false);
  modalActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  return (
    <div className={s.card}>
      <img
        className={s.card_img}
        src={image}
        alt={name}
        width="220"
        height="220"
        onClick={() => setModalActive(true)}
      />
      <h3>{name}</h3>
      <p className={s.card_description}>{description}</p>
      <div className={s.price_wrapper}>
        <span>от {price}₽ </span>
        <button
          className="btn btn_secondary"
          onClick={() => setModalActive(true)}
        >
          Выбрать
        </button>
      </div>
      {modalActive ? (
        <Modal
          imgSrc={imageModal}
          name={name}
          active={modalActive}
          setModalActive={setModalActive}
          productToppings={productToppings}
        />
      ) : null}
    </div>
  );
}

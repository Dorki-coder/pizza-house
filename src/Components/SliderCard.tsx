import s from "./sliderCard.module.css";

type Props = {
  name: string;
  price: number;
  image: string;
};

export default function SliderCard({ name, price, image }: Props) {
  return (
    <div className={s.card}>
      <img alt={name} width="76" height="76" src={image}></img>
      <div className={s.card_description}>
        <p>{name}</p>
        <p>от {price}₽</p>
      </div>
    </div>
  );
}

import PizzaCategory from "./PizzaCategory";
import OtherCategory from "./OtherCategory";

export default function Categories({ data }: any) {
  const { pizzas, snacks, desserts, drinks } = data.menu as any;
  return (
    <>
      {<PizzaCategory id="pizzas" data={pizzas} header="Пицца" />}
      {<OtherCategory id="snacks" data={snacks} header="Закуски" />}
      {<OtherCategory id="desserts" data={desserts} header="Дессерты" />}
      {<OtherCategory id="drinks" data={drinks} header="Напитки" />}
    </>
  );
}

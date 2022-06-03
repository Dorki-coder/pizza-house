import Card from "./Card";
export default function PizzaCategory({ data, header, id }: any) {
  return (
    <section className="container">
      <h2 id={id}>{header}</h2>
      <div className="list">
        {data.map((elem: any) => {
          return (
            <Card
              name={elem.name}
              description={elem.description}
              price={elem.products[0].menuProduct.price.value}
              image={
                "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                elem.products[0].menuProduct.product.productImages[5].url
              }
              imageModal={
                "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                elem.products[0].menuProduct.product.productImages[4].url
              }
              productToppings={elem.productToppings}
            ></Card>
          );
        })}
      </div>
    </section>
  );
}

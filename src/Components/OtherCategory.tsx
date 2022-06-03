import Card from "./Card";
export default function OtherCategory({ data, header, id }: any) {
  return (
    <section className="container">
      <h2 id={id}>{header}</h2>
      <div className="list">
        {data.map((elem: any) => {
          return (
            <Card
              name={elem.product.name}
              description={
                elem.product.description === null
                  ? elem.product.size.value + " л"
                  : elem.product.description
              }
              price={elem.price.value}
              image={
                "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                elem.product.productImages[3].url
              }
              imageModal={
                "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                elem.product.productImages[4].url
              }
            ></Card>
          );
        })}
      </div>
    </section>
  );
}

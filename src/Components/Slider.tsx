// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper";
import SliderCard from "./SliderCard";

export default function App({ data }: any) {
  const sliderArray = [
    data.menu.pizzas[30],
    data.menu.pizzas[14],
    data.menu.pizzas[5],
    data.menu.pizzas[18],
    data.menu.pizzas[18],
    data.menu.pizzas[13],
    data.menu.pizzas[12],
    data.menu.pizzas[11],
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      grabCursor={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderArray.map((elem) => {
        return (
          <SwiperSlide>
            <SliderCard
              key={elem.id}
              name={elem.name}
              price={elem.products[0].menuProduct.price.value}
              image={
                "https://github.com/Saint-Code-Bootcamp/pizza-house/raw/main/images/" +
                elem.products[0].menuProduct.product.productImages[5].url
              }
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

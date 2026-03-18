import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const sliderCarousel = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default sliderCarousel;

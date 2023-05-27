import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from "../../../../src/assets/home/slide1.jpg";
import img2 from "../../../../src/assets/home/slide2.jpg";
import img3 from "../../../../src/assets/home/slide3.jpg";
import img4 from "../../../../src/assets/home/slide4.jpg";
import img5 from "../../../../src/assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-24">
      <SectionTitle
        subheading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
          <img className="rounded-xl" src={img1} alt="" />
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 my-20 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Salads
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img className="rounded-xl" src={img1} alt="" />
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Pizzas
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img className="rounded-xl" src={img2} alt="" />{" "}
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Soups
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img className="rounded-xl" src={img3} alt="" />{" "}
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Desserts
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img className="rounded-xl" src={img4} alt="" />
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Salads
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img className="rounded-xl" src={img5} alt="" />{" "}
          <h1 className=" md:text-4xl uppercase  text-[#ffffffbd] -mt-7 md:-mt-14 mx-4 md:mx-20 shadow-2xl drop-shadow-xl">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

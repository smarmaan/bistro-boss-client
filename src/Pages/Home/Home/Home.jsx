import PhoneNumber from "../../../Components/PhoneNumber/PhoneNumber";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <PhoneNumber></PhoneNumber>
      <Recommends />
      <Featured />
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

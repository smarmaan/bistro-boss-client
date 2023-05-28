import PhoneNumber from "../../../Components/PhoneNumber/PhoneNumber";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <PhoneNumber></PhoneNumber>
      <Recommends />
      <Featured />
    </div>
  );
};

export default Home;

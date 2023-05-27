import PhoneNumber from "../../../Components/PhoneNumber/PhoneNumber";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
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
    </div>
  );
};

export default Home;

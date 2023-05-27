import PhoneNumber from "../../../Components/PhoneNumber/PhoneNumber";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <PhoneNumber></PhoneNumber>
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuIMG from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>




      <section className="mb-24">
        <Cover
          img={menuIMG}
          title={"OUR MENU"}
          description="Would you like to try a dish?"
        ></Cover>
      </section>

      <PopularMenu></PopularMenu>








      <section className="mb-24">
        <Cover
          img={menuIMG}
          title={"OUR MENU"}
          description="Would you like to try a dish?"
        ></Cover>
      </section>

      <PopularMenu></PopularMenu>








      <section className="mb-24">
        <Cover
          img={menuIMG}
          title={"OUR MENU"}
          description="Would you like to try a dish?"
        ></Cover>
      </section>

      <PopularMenu></PopularMenu>










    </div>
  );
};

export default Menu;

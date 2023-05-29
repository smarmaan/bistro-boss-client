import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuIMG from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuIMG}
        title={"OUR MENU"}
        description="Would you like to try a dish?"
      ></Cover>
    </div>
  );
};

export default Menu;

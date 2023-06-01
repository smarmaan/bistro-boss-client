import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuIMG from "../../assets/menu/banner3.jpg";
import dessertIMG from "../../assets/menu/dessert-bg.jpeg";
import pizzaIMG from "../../assets/menu/pizza-bg.jpg";
import saladIMG from "../../assets/menu/salad-bg.jpg";
import soupIMG from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

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
      {/* Main cover */}
      <SectionTitle
        subheading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        img={dessertIMG}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        img={pizzaIMG}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        img={saladIMG}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        img={soupIMG}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;

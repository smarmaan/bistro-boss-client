import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  // console.log(menu);

  return (
    <section className="mb-28">
      <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="grid md:grid-cols-2 gap-10 my-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn border-[#1F2937] border-b-4 border-0 text-xl text-[#1F2937] font-medium text-center uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
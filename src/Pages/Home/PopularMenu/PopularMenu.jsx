import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-28">
      <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="grid md:grid-cols-2 gap-10 my-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

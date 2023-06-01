import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="py-8">
      {title && (
        <section className="mb-24">
          <Cover img={img} title={title} description={description}></Cover>
        </section>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-4 ">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

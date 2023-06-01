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
      </div>{" "}
    </div>
  );
};

export default MenuCategory;
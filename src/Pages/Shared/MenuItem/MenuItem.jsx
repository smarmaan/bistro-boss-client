const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="flex space-x-3 items-center">
      <img
        className="shadow-xl drop-shadow-xl"
        style={{
          borderRadius: "0px 200px 200px 200px",
          width: "118px",
          height: "104px",
        }}
        src={image}
        alt=""
      />

      <div>
        <h1>{name}------------------ </h1>
        <p>{recipe}</p>
      </div>

      <h2 className="text-[#BB8506] text-xl">${price}</h2>
    </div>
  );
};

export default MenuItem;

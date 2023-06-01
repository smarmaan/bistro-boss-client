const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card mx-auto card-compact w-[424px] text-center bg-[#F3F3F3] drop-shadow-xl shadow-xl">
      <figure>
        <img src={image} className="w-full" alt="Salad" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-5 py-2 rounded-xl bg-[#111827] text-white">
        ${price}
      </p>

      <div className="card-body">
        <h2 className="card-title justify-center mt-8">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center my-6">
          <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] ">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

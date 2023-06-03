import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handleAddToCart = (itemData) => {
    console.log(itemData);

    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        image,
        name,
        price,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food has been saved to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order your food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

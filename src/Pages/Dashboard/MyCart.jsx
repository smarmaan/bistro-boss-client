import { Helmet } from "react-helmet-async";
import UseCart from "../../Hooks/UseCart";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  console.log(cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const totalFixed = total.toFixed(2);

  const handleDeleteProduct = (item) => {
    console.log(item);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <section className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart </title>
      </Helmet>

      <div className="my-10">
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subheading={"---My Cart---"}
        />
      </div>
      <div>
        <div className="uppercase flex justify-evenly items-center font-bold my-10 md:text-xl">
          <h1>Total orders:{cart.length} </h1>
          <h1>Total price:$ {totalFixed}</h1>
          <button className="btn btn-xs bg-[#D1A054] text-white border-0 hover:bg-[#e46905]">
            pay
          </button>
        </div>
        {/* 


 */}
        <>
          <div className="overflow-x-auto w-full flex justify-center">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}

                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td> {item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteProduct(item)}
                        className="btn btn-ghost btn-xs bg-[#B91C1C]"
                      >
                        <BsTrash3Fill className=" text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </section>
  );
};

export default MyCart;

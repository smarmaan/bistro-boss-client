import { Helmet } from "react-helmet-async";
import UseCart from "../../Hooks/UseCart";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const MyCart = () => {
  const [cart] = UseCart();
  console.log(cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const totalFixed = total.toFixed(2);

  return (
    <section>
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
        <div className="uppercase flex justify-evenly items-center font-bold my-10 md:text-2xl">
          <h1>Total orders:{cart.length} </h1>
          <h1>Total price:$ {totalFixed}</h1>
          <button className="btn btn-xs bg-[#D1A054] text-white border-0 hover:bg-[#e46905]">
            pay
          </button>
        </div>
        {/* 


 */}
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
            </table>
          </div>
        </>
      </div>
    </section>
  );
};

export default MyCart;

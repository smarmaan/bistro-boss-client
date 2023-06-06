import { BsTrash3Fill } from "react-icons/bs";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();

  const [axiosSecure] = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subheading={"---Hurry Up!---"}
      ></SectionTitle>

      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO.</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td className="capitalize">{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">UPDATE </button>
                </td>
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
    </div>
  );
};

export default ManageItems;

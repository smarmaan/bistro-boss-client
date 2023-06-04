import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BsTrash3Fill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });

  const handleDeleteProduct = (user) => {
    console.log(user);
    refetch();
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users </title>
      </Helmet>

      <h1 className="text-3xl font-semibold my-5">
        Total Users: {users.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td> {user.name} </td>
                <td> {user.email} </td>

                <td>
                  {users.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleDeleteProduct(user)}
                      className="btn btn-ghost btn-xs bg-[#D1A054]"
                    >
                      <FaUserShield className=" text-white" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(user)}
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

export default AllUsers;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const UseCart = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email,

    //! user email is required to load data

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("response from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default UseCart;

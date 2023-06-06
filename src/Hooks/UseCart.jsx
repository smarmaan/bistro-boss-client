import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const UseCart = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email,

    // ? ei khaner loading ta user related jehetu Auth theke ashteche.. user but default user login er somoy loading true kore deoya hoy... r jehetu tokhn loading thaka kora obosthay data fetch hobe na... tai  loading ta false hoya porjonto amra ekhane w8 korbo fetch korar...

    //! user email is required to load data otherwise it won't redirect to login page.. will only show loading button

    //! joto khon porjonto email na ashbe toto khon porjonto query fetch korbe na data.. disable e thakbe

    //! same vabei loading jodi true hoy email toh ashbe na.. email ashle loading false hobe...

    //! It means loading false hole amr data ashbe...  tai enabled use kore query fetch off rakha hoy joto khon na user ashe...

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("response from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default UseCart;

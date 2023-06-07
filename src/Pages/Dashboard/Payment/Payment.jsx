import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import UseCart from "../../../Hooks/UseCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN);

const Payment = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="mt-28 w-1/2">
      <SectionTitle
        heading={"PAYMENT"}
        subheading={"---Oooo amr teka pakhi.. payment kore jao---"}
      ></SectionTitle>

      <div className="my-24 bg-[#ec900548]  px-5 py-7 rounded-3xl ">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

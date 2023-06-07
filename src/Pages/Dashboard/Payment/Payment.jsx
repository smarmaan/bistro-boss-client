import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN);

const Payment = () => {
  return (
    <div className="mt-28 w-1/2">
      <SectionTitle
        heading={"PAYMENT"}
        subheading={"---Oooo amr teka pakhi.. payment kore jao---"}
      ></SectionTitle>

      <div className="my-24 bg-[#ec900548]  px-5 py-7 rounded-3xl ">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

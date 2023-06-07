import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("paymentMethod", paymentMethod);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#fafafae0] py-2 px-5 rounded-full">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#000000",
                  "::placeholder": {
                    color: "#0000008c",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="btn btn-xs bg-[#db8d18] text-white px-5 border-0 mt-5 hover:bg-[#f05b05]"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>

      {cardError && (
        <p className="text-red-600 text-center mt-5">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

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

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      console.log(transactionId);
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      {cardError && (
        <p className="text-red-600 text-center mt-5">{cardError}</p>
      )}

      {transactionId && (
        <p className="text-green-500 text-center mt-5">
          Transaction complete with transactionId:{" "}
          <span className="text-red-600"> &rdquo;{transactionId}&rdquo;</span>
        </p>
      )}
    </>
  );
};

export default CheckoutForm;

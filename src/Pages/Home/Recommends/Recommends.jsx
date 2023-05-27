import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import img1 from "../../../../src/assets/menu/salad-bg.jpg";

const Recommends = () => {
  return (
    <section className="my-24">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subheading={"---Should Try---"}
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="card mx-auto card-compact w-[424px] text-center bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center mt-8">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-6">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] ">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card mx-auto  card-compact w-[424px] text-center bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center mt-8">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-6">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] ">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card mx-auto  card-compact w-[424px] text-center bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center mt-8">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center my-6">
              <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] border-[#BB8506] border-b-4 hover:border-b-0 border-0 text-[#BB8506] ">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;

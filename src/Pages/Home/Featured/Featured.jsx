import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/latestnews.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-Item bg-fixed p-10  ">
      <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---" />

      <div className="md:flex justify-center items-center p-24">
        <figure className="featured-img">
          <img src={featuredImg} alt="" />
        </figure>

        <div className="md:ml-16 text-xl text-white space-y-2">
          <p>March 20, 2023</p>
          <h1 className="uppercase">WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="btn btn-outline uppercase border-0 border-b-2 hover:bg-slate-800">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

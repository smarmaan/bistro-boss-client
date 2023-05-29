import "./Cover.css";

const Cover = ({ img, title, description }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content color w-[1250px] h-[350px] text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;

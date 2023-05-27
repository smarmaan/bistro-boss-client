const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center w-[424px] h-[140px] mx-auto">
      <h2 className="text-[#D99904] text-xl mb-5">{subheading}</h2>

      <h1 className="text-4xl text-[#151515] py-5 border-y-4 border-[#E8E8E8] ">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

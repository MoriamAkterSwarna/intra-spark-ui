const Faq = () => {
  return (
    <div className="pt-[27%] md:pt-[20%] lg:pt-[12%] w-9/12 mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6 text-emerald-500">
        Few Questions About Us
      </h2>
      <div className="collapse collapse-plus bg-gray-900 border-2 border-emerald-500">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 border-2 border-emerald-500">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-900 border-2 border-emerald-500">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

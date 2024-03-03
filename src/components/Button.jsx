const Button = () => {
  return (
    <a
      href="#_"
      style={{
        boxShadow:
          "5px 5px 5px -1px rgba(0, 255, 0, 0.49), -5px -5px 5px -1px rgba(0, 255, 0, 0.49)",
      }}
      className="relative px-8 py-3 overflow-hidden font-medium text-emerald-600 bg-emerald-200 border border-none rounded-full shadow-inner group">
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-emerald-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-emerald-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-emerald-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-emerald-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-emerald-600 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        Register
      </span>
    </a>
  );
};

export default Button;

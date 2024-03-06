import { ScrollRestoration } from "react-router-dom";

const Guest = () => {
  return (
    <div className="pt-[27%] md:pt-[20%] lg:pt-[12%] ">
      <ScrollRestoration />
      <h1>This is Guest component</h1>
    </div>
  );
};

export default Guest;

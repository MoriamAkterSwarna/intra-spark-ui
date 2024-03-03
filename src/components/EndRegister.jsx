import { Link } from "react-router-dom";

const EndRegister = () => {
  return (
    <div className="h-[80vh] bg-wrap text-center py-6 flex justify-center items-center">
      <div className="w-9/12 mx-auto ">
        <h1 className="text-3xl text-orange-500 mb-10">
          Registration Ended...
        </h1>
        <p>
          Registration is now closed. We extend our best wishes to all
          participants as they embark on the competition journey. May success
          and fortune accompany each and every contender!
        </p>
        <Link to="/">
          <button className="btn mt-10 ">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default EndRegister;

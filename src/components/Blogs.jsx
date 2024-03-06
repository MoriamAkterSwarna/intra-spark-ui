import { ScrollRestoration } from "react-router-dom";
import blogImg from "../assets/others/421059772_1294523115272151_5381794349102064244_n.jpg";
const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-6">
      <ScrollRestoration />
      <div className="card w-96 border-2 border-emerald-500 shadow-xl text-white rounded-none">
        <figure className="">
          <img src={blogImg} alt="Blog" className="" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            eum?
          </p>
          <div className="card-actions">
            <button className="btn btn-primary"> Read More</button>
          </div>
        </div>
      </div>
      <div className="card w-96 border-2 border-emerald-500 shadow-xl text-white rounded-none">
        <figure className="">
          <img src={blogImg} alt="Blog" className="" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            eum?
          </p>
          <div className="card-actions">
            <button className="btn btn-primary"> Read More</button>
          </div>
        </div>
      </div>
      <div className="card w-96 border-2 border-emerald-500 shadow-xl text-white rounded-none">
        <figure className="">
          <img src={blogImg} alt="Blog" className="" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            eum?
          </p>
          <div className="card-actions">
            <button className="btn btn-primary"> Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

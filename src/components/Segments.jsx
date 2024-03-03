import { Link, ScrollRestoration } from "react-router-dom";
import segment3 from "../assets/segments/2ea2431e-b3fd-4669-967c-d8d8e4f830d5.png";
import segment5 from "../assets/segments/b758c326-a5cd-41d9-9b6b-d0a3c12e600f.png";
import segment2 from "../assets/segments/boy-line-following-robot-flat-260nw-1979495918.png";
// import segment4 from "../assets/segments/download.png";
import segment1 from "../assets/segments/robot-with-laptop-words-control-it_825081-77.png";

// import segmentBg from "../assets/segments/6025383.jpg";
const Segments = () => {
  return (
    <div className="my-10 flex justify-center items-center flex-col w-11/12 mx-auto">
      <h1 className="text-4xl font-bold">Our Segments</h1>
      <div>
        {/* <Parallax
          //   blur={{ min: -50, max: 50 }}
          //   bgImage={segmentBg}
          //   bgImageAlt="Segments"
          strength={300}
          className="mt-8 p-10"> */}
        {/* <Background className="custom-bg  segments-bg">
            <img
              className=" segments-bg w-full"
              src={segmentBg}
              alt="fill murray"
            />
          </Background> */}
        <ScrollRestoration />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-20 mt-4">
          <Link to="/register">
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="border border-emerald-700 h-[270px] md:h-[250px] p-10 bg-wrap text-center">
              <img
                className="w-full lg:w-[160px] h-[130px] object-cover bg-cover mx-auto mb-3"
                src={segment1}
                alt="Project Showcase"
              />
              <h3>Project Showcase</h3>
            </div>
          </Link>
          <Link to="/register">
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="border border-emerald-700 h-[270px] md:h-[250px] p-6 bg-wrap text-center">
              <img
                className="w-full lg:w-[160px] h-[130px] object-cover bg-cover mx-auto mb-3"
                src={segment2}
                alt="Line Following Robot (LFR )"
              />
              <h3>Line Following Robot (LFR )</h3>
            </div>
          </Link>
          <Link to="/register">
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="border border-emerald-700 h-[270px] md:h-[250px] p-6 bg-wrap text-center">
              <img
                className="w-full lg:w-[160px] h-[130px] object-cover bg-cover mx-auto mb-3"
                src={segment3}
                alt="Soccer Boot"
              />
              <h3>Soccer Boot</h3>
            </div>
          </Link>
          {/* <Link to="/register">
              <div
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="2000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="border border-emerald-700 h-[270px] md:h-[250px] p-6 bg-wrap text-center">
                <img
                  className="w-full lg:w-[160px] h-[130px] object-cover bg-cover mx-auto mb-3"
                  src={segment4}
                  alt="Arduino Programming Hackathon"
                />
                <h3>Arduino Programming Hackathon</h3>
              </div>
            </Link> */}
          <Link to="/register">
            <div
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="border border-emerald-700 h-[270px] md:h-[250px] p-6 bg-wrap text-center">
              <img
                className="w-full lg:w-[160px] h-[130px] object-cover bg-cover mx-auto mb-3"
                src={segment5}
                alt="Truss Challenge"
              />
              <h3>Truss Challenge</h3>
            </div>
          </Link>
        </div>
        {/* </Parallax> */}
      </div>
    </div>
  );
};

export default Segments;

import Blogs from "../../components/Blogs";

const NoticeBoard = () => {
  return (
    <div className="pt-[27%] md:pt-[20%] lg:pt-[12%] ">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
        {" "}
        NoticeBoard{" "}
      </h1>

      <div className="mt-6 text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl">News</h2>

        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default NoticeBoard;

import { useForm } from "react-hook-form";
import { ScrollRestoration } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };
  return (
    <div className="w-9/12 mx-auto pt-[27%] md:pt-[20%] lg:pt-[12%] ">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">
        Register Here...
      </h1>
      <ScrollRestoration />
      <form
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border-y-8 p-10 rounded-3xl bg-emerald-950 ">
        {/* team & project info  */}
        <div className="flex w-full flex-col md:flex-row gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="teamName" className="mb-2">
              Team Name
            </label>
            <input
              {...register("teamName", { required: true })}
              id="teamName"
              placeholder="Team Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full focus:border-none"
            />
            {errors.teamName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="projectName" className="mb-2">
              Project Name
            </label>
            <input
              {...register("projectName", { required: true })}
              id="projectName"
              placeholder="Project Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.projectName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDescription" className="mb-2">
            Project Description
          </label>
          <textarea
            {...register("projectDescription", {
              required: true,
              minLength: 100,
              maxLength: 200,
            })}
            id="projectDescription"
            placeholder="Project Description"
            className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 h-40"
          />
          {errors.projectDescription && (
            <span className="text-red-500">
              This field is required and should be 100-200 words
            </span>
          )}
          <hr className="mt-4" />
        </div>
        {/* Team Leader info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="teamLeaderName" className="mb-2">
              Team Leader Name
            </label>

            <input
              {...register("teamLeaderName", { required: true })}
              placeholder="Team Leader Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.teamLeaderName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="teamLeaderEmail" className="mb-2">
              Team Leader Email
            </label>

            <input
              {...register("teamLeaderEmail", { required: true })}
              placeholder="Team Leader Email"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.teamLeaderEmail && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="teamLeaderPhone" className="mb-2">
              Team Leader Phone Number
            </label>
            <input
              {...register("teamLeaderPhone", { required: true })}
              placeholder="Team Leader Phone Number"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.teamLeaderPhone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="teamLeaderFacebook" className="mb-2">
              Team Leader Facebook ID
            </label>
            <input
              {...register("teamLeaderFacebook", { required: true })}
              placeholder="Team Leader Facebook ID"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.teamLeaderFacebook && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <hr className="mt-4" />
        {/* member 2 info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="member2Name" className="mb-2">
              Member 2 Name
            </label>

            <input
              {...register("member2Name", { required: true })}
              placeholder="Member 2 Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member2Name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member2Email" className="mb-2">
              Member 2 Email
            </label>
            <input
              {...register("member2Email", { required: true })}
              placeholder="Member 2 Email"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member2Email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>{" "}
          <div className="flex flex-col">
            <label htmlFor="member2Phone" className="mb-2">
              Member 2 Phone Number
            </label>
            <input
              {...register("member2Phone", { required: true })}
              placeholder="Member 2 Phone Number"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member2Phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member2Facebook" className="mb-2">
              Member 2 Facebook ID
            </label>
            <input
              {...register("member2Facebook")}
              placeholder="Member 2 Facebook ID"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.member2Facebook && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <hr className="mt-4" />

        {/* member 3 info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="member3Name" className="mb-2">
              Member 3 Name
            </label>
            <input
              {...register("member3Name", { required: true })}
              placeholder="Member 3 Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member3Name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member3Email" className="mb-2">
              Member 3 Email
            </label>
            <input
              {...register("member3Email", { required: true })}
              placeholder="Member 3 Email"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member3Email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>{" "}
          <div className="flex flex-col">
            <label htmlFor="member3Phone" className="mb-2">
              Member 3 Phone Number
            </label>
            <input
              {...register("member3Phone", { required: true })}
              placeholder="Member 3 Phone Number"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member3Phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member3Facebook" className="mb-2">
              Member 3 Facebook ID
            </label>
            <input
              {...register("member3Facebook")}
              placeholder="Member 3 Facebook ID"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.member3Facebook && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <hr className="mt-4" />

        {/* member 3 info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="member4Name" className="mb-2">
              Member 4 Name
            </label>
            <input
              {...register("member4Name", { required: true })}
              placeholder="Member 4 Name"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member4Name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member4Email" className="mb-2">
              Member 4 Email
            </label>
            <input
              {...register("member4Email", { required: true })}
              placeholder="Member 4 Email"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member4Email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>{" "}
          <div className="flex flex-col">
            <label htmlFor="member4Phone" className="mb-2">
              Member 4 Phone Number
            </label>
            <input
              {...register("member4Phone", { required: true })}
              placeholder="Member 4 Phone Number"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
            />
            {errors.member4Phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="member4Facebook" className="mb-2">
              Member 4 Facebook ID
            </label>
            <input
              {...register("member4Facebook")}
              placeholder="Member 4 Facebook ID"
              className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300"
            />
            {errors.member4Facebook && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex flex-col">
          <label htmlFor="transactionId" className="mb-2">
            Transaction ID
          </label>
          <input
            {...register("transactionId", { required: true })}
            placeholder="Transaction ID"
            className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
          />
          {errors.transactionId && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="sendMoneyNumber" className="mb-2">
            Send Money Number
          </label>
          <input
            {...register("sendMoneyNumber")}
            placeholder="Send Money Number"
            className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 w-full"
          />
          {errors.sendMoneyNumber && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("comments", {})}
            id="comments"
            placeholder="Comment (Optional)"
            className="p-2 border rounded-md focus:outline-none focus:ring-0 text-gray-800 bg-slate-300 h-40"
          />

          <hr className="mt-4" />
        </div>
        <div className="flex space-x-4">
          <input
            type="submit"
            value="Submit"
            className="py-2 px-8  bg-orange-500 text-white rounded-md"
          />
          <button
            type="button"
            onClick={() => {
              window.history.back();
            }}
            className="p-2 px-8 bg-gray-500 hover:bg-gray-300 hover:text-black text-white rounded-md">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

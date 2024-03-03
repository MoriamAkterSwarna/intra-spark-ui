import { useRef } from "react";
const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_zzvhufj",
    //     "template_fcuokhl",
    //     form.current,
    //     "W7jPBdlhtE8V0jDOA"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       toast.success("Feedback Sent!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="flex flex-col gap-4 lg:p-10 lg:ml-20 w-full lg:w-1/2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 py-5 px-2 lg:px-10 ">
        <div className="form-control ">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            className="input  bg-gray-950 border-emerald-900 border-2 focus:outline-2 focus:outline-emerald-800"
            required
          />
        </div>
        <div className="form-control ">
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="input  bg-gray-950 border-emerald-900 border-2 focus:outline-2 focus:outline-emerald-800"
            required
          />
        </div>
        <div className="form-control  mr-2">
          <textarea
            className="p-4 rounded-lg h-28 w-full bg-gray-950 border-emerald-900 border-2 focus:outline-2 focus:outline-none focus:outline-emerald-800"
            name="message"
            placeholder="Your Message"
          />
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-emerald-800 hover:bg-emerald-900 text-white border-none"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

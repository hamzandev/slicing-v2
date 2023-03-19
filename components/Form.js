import Input from "./Input";
import style from "@/app/page.module.css";
import Link from "next/link";

export default function Form() {
  return (
    <div
      className={`min-h-[140vh] bg-white blog-section ${style.form} my-20 pt-20 mx-auto md:px-32`}
    >
      <h2 className="text-primary font-semibold underline text-sm uppercase mb-5 text-center">
        contact me
      </h2>
      <h3
        data-aos="fade-down"
        className="md:text-4xl text-xl md:w-full w-[60%] mx-auto font-bold text-center"
      >
        Send Me a Message
      </h3>

      <div className="md:w-9/12 mx-auto mt-20">
        <form
          data-aos="fade-down"
          data-aos-duration="2000"
          className="grid gap-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Input placeholder="Phone" />
            <Input placeholder="Budget" />
          </div>
          <div className="grid grid-cols-1">
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              className="border-2 rounded-md bg-transparent border-gray-300 px-3 py-3"
            ></textarea>
          </div>
          <div data-aos="fade-up" className="mx-auto w-max block mt-10">
            <button
              type="submit"
              className="px-8 py-3 rounded bg-primary mx-auto block text-gray-100"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import style from "@/app/page.module.css";

export default function Testimonial() {
  return (
    <div
      className={`min-h-screen testimonial-section ${style.testimonial} my-20 md:pt-20 pt-5 container mx-auto md:px-32`}
    >
      <h2 className="text-primary font-semibold underline text-sm uppercase mb-5 text-center">
        testimonial
      </h2>
      <h3
        data-aos="fade-down"
        className="md:text-4xl text-xl md:w-full w-[60%] mx-auto font-bold text-center"
      >
        What People Say
      </h3>
      <div className="grid my-20 justify-center gap-y-5">
        <p
          data-aos="fade-up"
          className="text-center w-8/12 text-gray-600 mx-auto text-lg"
        >
          " Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea
          takimata sanctus est is the lorem ipsum dolor sit amet. sed diam
          nonumy eirmod tempor invidunt ut labore et dolore is the magna
          aliquyam. "
        </p>
        <h3
          data-aos="fade-left"
          className="text-3xl font-semibold text-center text-gray-700 md:mt-10 mt-5"
        >
          John Doe
        </h3>
        <span
          data-aos="fade-right"
          className="text-lg text-gray-400 text-center"
        >
          CEO PT.ABC Company
        </span>
        <div className="flex gap-5 items-center justify-center">
          <button className="px-3 py-1 rounded-lg bg-gray-200 text-gray-400">
            {"<"}
          </button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 text-gray-400">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

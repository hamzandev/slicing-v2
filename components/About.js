import Image from "next/image";
import Link from "next/link";
import aboutImg from "@/public/assets/about-img.png";

export default function About() {
  return (
    <div
      id="about"
      className="about-section md:my-20 my-10 w-9/12 mx-auto flex md:flex-row flex-col items-center"
    >
      <div className="md:w-6/12 ">
        <Image data-aos="fade-right" src={aboutImg} />
      </div>

      <div className="md:w-5/12 md:px-10 px-3 py-5 flex flex-col justify-center">
        <h2 className="font-bold text-primary uppercase mb-5 underline text-sm">
          about us
        </h2>
        <h3
          data-aos-duration="1000"
          data-aos="fade-left"
          className="md:text-3xl text-xl w-[90%] font-bold mb-10"
        >
          Why hire us for your next project?
        </h3>
        <p
          data-aos-duration="1500"
          data-aos="fade-left"
          className="md:text-lg text-base text-gray-600 mb-5"
        >
          We are Creative Director and UI/UX Designer from New York, working in
          web development and print media. We enjoy turning complex problems
          into simple, beautiful and intuitive designs.
        </p>
        <p
          data-aos-duration="1500"
          data-aos="fade-left"
          className="md:text-lg text-base text-gray-600 mb-5"
        >
          Our job is to build your website so that it is functional and
          user-friendly but at the same time attractive.
        </p>
        <Link
          href="/"
          data-aos-duration="1500"
          data-aos="fade-up"
          className="px-12 py-5 text-gray-100 shadow mt-8 hover:-translate-x-1 hover:-translate-y-1 duration-300 hover:shadow-xl rounded md:mx-0 mx-auto w-max text-sm bg-primary"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}

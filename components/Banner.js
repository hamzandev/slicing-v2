import Image from "next/image";
import Link from "next/link";

import banner from "@/public/assets/banner-ilustrator.svg";
import style from "@/app/page.module.css";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <div className={`min-h-screen md:mb-0 mb-40 ${style.banner} bg-center`}>
      <Navbar />
      <div className="banner md:pt-10 md:flex-row flex-col-reverse md:gap-0 gap-10 flex items-center justify-center">
        <div className="typographi md:w-6/12 md:px-3 px-10 flex justify-center flex-col">
          <h1
            data-aos="fade-down"
            className="md:text-6xl text-4xl md:font-normal font-semibold md:mb-16 mb-3 md:text-left text-center"
          >
            Sharing Vitality
          </h1>
          <span
            data-aos="fade-right"
            className="text-gray-500 md:text-2xl text-lg md:text-left text-center"
          >
            clean design and advanced digital solutions
          </span>

          <div
            data-aos="fade-up"
            className="md:flex grid text-center gap-3 md:px-0 px-3 items-center md:mt-10 mt-8"
          >
            <Link
              className="bg-primary rounded-full px-8 py-2 hover:bg-teal-400 duration-200 hover:text-gray-100 font-semibold text-gray-700"
              href="/"
            >
              Explore More
            </Link>
            <Link
              className="text-gray-800 font-semibold md:no-underline underline hover:text-primary duration-200"
              href="/"
            >
              See Live Demo
            </Link>
          </div>
        </div>

        <div
          className="ilustrator md:w-4/12 w-10/12 md:mt-0 mt-10 md:mx-0 mx-auto"
          data-aos="zoom-out"
        >
          <Image
            src={banner}
            alt="banner-img"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ skill, tech, name, isRight, icon }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:mx-0 mx-5 mb-10 items-center gap-16 justify-center">
      <div
        data-aos-duration="1000"
        data-aos="fade-up"
        className={`shadow-lg rounded-md ${
          isRight && "md:order-2 -order-1 bg-primary"
        } flex flex-col px-10 py-6`}
      >
        <Image src={icon} />
        <h3
          className={`${
            !isRight ? "text-gray-700" : "text-gray-100"
          } font-semibold mb-3 mt-5 text-3xl`}
        >
          {name}
        </h3>
        <div className="flex gap-x-3 mb-5">
          <span
            className={`border-2 w-8 border-top border-${
              isRight == true ? "primary" : "white"
            }`}
          ></span>
          <span
            className={`border-2 w-8 border-top border-${
              isRight == true ? "primary" : "white"
            }`}
          ></span>
          <span
            className={`border-2 w-8 border-top border-${
              isRight == true ? "primary" : "white"
            }`}
          ></span>
        </div>
        <p
          className={`${
            !isRight ? "text-gray-700" : "text-gray-100"
          } font-light`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          debitis quos repudiandae repellat sapiente nisi laborum vero
          temporibus ut doloremque?
        </p>
        <Link
          href="/"
          className={`mt-10 shadow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg duration-300 mb-3 w-max px-8 py-3 ${
            !isRight ? "bg-primary text-gray-100" : "bg-white text-gray-800"
          } text-sm`}
        >
          Know More
        </Link>
      </div>

      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="shadow-lg rounded-md h-max flex flex-col px-10 py-6"
      >
        <h3 className="text-gray-800 mb-3 text-4xl">{skill}%</h3>
        <div className="flex gap-x-3 mb-5">
          <span className="border w-full h-3 rounded-sm overflow-hidden border-top border-gray-500">
            <span className={`bg-primary block h-full w-[${skill}%]`}></span>
          </span>
        </div>
        <h3 className="text-gray-700 mb-3 mt-5 text-3xl">{name}</h3>
        <span className="text-gray-700">{tech}</span>
      </div>
    </div>
  );
}

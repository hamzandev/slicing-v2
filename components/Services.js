"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceCard from "./ServiceCard";

import webdesign from "../public/assets/webdesign.svg";
import grapichs from "../public/assets/grapichs-design.svg";

export default function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="services"
      className="services-section my-20 container mx-auto md:px-32"
    >
      <h2 className="text-primary font-semibold underline text-sm uppercase mb-5 text-center">
        our services
      </h2>
      <h3 className="md:text-4xl text-xl md:w-full w-[60%] mx-auto font-bold text-center">{`Our Provided Features & Expertize`}</h3>

      <div className="grid mt-20">
        <ServiceCard
          icon={webdesign}
          skill={"90"}
          name="Web Design"
          tech={"HTML, CSS & JQUERY"}
        />
        <ServiceCard
          icon={grapichs}
          skill={"50"}
          isRight={true}
          name="Graphics Design"
          tech={"Photoshop, Ilustrator"}
        />
        <ServiceCard
          icon={webdesign}
          skill={"80"}
          name="Web Development"
          tech={"Next, React, Codeigniter"}
        />
      </div>
    </div>
  );
}

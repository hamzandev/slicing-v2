import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Link from "next/link";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";

import style from "@/app/page.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Blog />
      <Form />
    </>
  );
}

import Link from "next/link";
import ProjectCard from "./ProjectCard";

import satu from "@/public/assets/fish.png";
import dua from "@/public/assets/web.png";
import tiga from "@/public/assets/app.png";
import empat from "@/public/assets/ux.png";

export default function Projects() {
  const projects = [satu, dua, tiga, empat];

  return (
    <div className="services-section my-20 container mx-auto md:px-32">
      <h2 className="text-primary font-semibold underline text-sm uppercase mb-5 text-center">
        portfolio
      </h2>
      <h3 className="md:text-4xl text-xl md:w-full w-[60%] mx-auto font-bold text-center">
        My Work Example
      </h3>
      <div className="grid md:grid-cols-4 md:my-20 my-8 md:mx-0 mx-5 grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <ProjectCard image={project} duration={index++ + "000"} />
        ))}
      </div>
      <Link href={"#"} className="mx-auto w-max block">
        <button className="px-8 py-3 rounded bg-primary mx-auto block text-gray-100">
          View All
        </button>
      </Link>
    </div>
  );
}

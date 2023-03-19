import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ image, duration }) {
  return (
    <Link
      href={"#"}
      className="rounded shadow hover:shadow-xl hover:-translate-y-3 duration-200 overflow-clip"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <Image src={image} className="w-full object-cover" alt="dua" />
    </Link>
  );
}

import Link from "next/link";
import PostCard from "./PostCard";

import style from "@/app/page.module.css";
import post1 from "@/public/assets/b2.png";
import post2 from "@/public/assets/b5.png";
import post3 from "@/public/assets/b7.png";

export default function Blog() {
  return (
    <div
      className={`min-h-[140vh] blog-section ${style.blog} my-20 pt-20 container mx-auto md:px-32`}
    >
      <h2 className="text-primary font-semibold underline text-sm uppercase mb-5 text-center">
        blog
      </h2>
      <h3 className="md:text-4xl text-xl md:w-full w-[60%] mx-auto font-bold text-center">
        Trendy News Feeds
      </h3>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid mt-20 items-center justify-center md:grid-cols-3 gap-8 grid-cols-1"
      >
        <PostCard image={post1} />
        <PostCard image={post2} />
        <PostCard image={post3} />
      </div>
      <Link href={"#"} className="mx-auto w-max block mt-20">
        <button className="px-8 py-3 rounded bg-primary mx-auto block text-gray-100">
          View All
        </button>
      </Link>
    </div>
  );
}

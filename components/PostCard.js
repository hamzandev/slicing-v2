import Image from "next/image";
import Link from "next/link";

export default function PostCard({ image }) {
  return (
    <div className="rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-300 bg-white">
      <Image src={image} />
      <div className="grid gap-3 detail px-5 py-3">
        <span className="text-primary">2day Ago</span>
        <h4 className="text-gray-700 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum enim
          ducimus laudantium?
        </h4>
        <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
        <Link href={"#"} className="mt-5">
          <span className="text-primary">Read More</span>
        </Link>
      </div>
    </div>
  );
}

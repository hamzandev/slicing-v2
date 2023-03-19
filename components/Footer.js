import logo from "@/public/assets/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex py-10 bg-gray-50 border-t px-3">
      <div className="container mx-auto flex gap-10">
        <div className="w-4/12">
          <Image src={logo} alt="logo" />
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-8/12">
          <p className=" text-gray-600 text-lg w-3/4 mx-auto my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nam repellendus suscipit, facere dolorum est expedita ea.
          </p>
          <div className="grid grid-cols-3">
            <div className="grid">
              <span className="text-primary uppercase">sent email</span>
              <span className="text-lg text-gray-700">
                hamzankechil@gmail.com
              </span>
            </div>
            <div className="grid">
              <span className="text-primary uppercase">Make call</span>
              <span className="text-lg text-gray-700">+62-83-129-535-479</span>
            </div>
            <div className="grid">
              <span className="text-primary uppercase">Instagram</span>
              <span className="text-lg text-gray-700">@hamzanwahyu.me</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

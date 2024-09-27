import HomeCarousel from "@/components/Carousel";
import home from "@/data/home.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className="bg-slate-100 p-5 rounded-lg flex flex-col lg:flex-row gap-3">
        <div className="lg:w-2/3">
          <h1 className="text-lg md:text-2xl text-red-700 font-semibold mb-6">
            Welcome to Artificial Intelligence and Multi-Agent System (AIMS) Lab
          </h1>
          <div className="flex flex-col gap-6">
            {home.aboutUs.map((text) => (
              <p key={text} className="text-gray-600">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image
            src={home.photo.url}
            alt={home.photo.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <HomeCarousel/>
    </div>
  );
}

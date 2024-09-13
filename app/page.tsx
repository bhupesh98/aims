import home from "@/data/home.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className="bg-slate-100 p-5 rounded-lg flex flex-col lg:flex-row gap-3">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Welcome to Artificial Intelligence and Multi-Agent System (AIMS) Lab</h1>
          <div className="flex flex-col gap-6">
            {home.aboutUs.map(text => (
              <p key={text} className="text-base text-gray-600">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={home.photo.url}
            alt={home.photo.alt}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

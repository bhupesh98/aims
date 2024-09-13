import { home } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <div className="bg-slate-100 p-5 rounded-lg flex flex-col lg:flex-row gap-3">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Welcome to Artificial Intelligence and Multi-Agent System (AIMS) Lab</h1>
          <div className="flex flex-col gap-6">
            <p className="text-base text-gray-600">
              The Indian Institute of Information Technology, Allahabad
              (IIIT-Allahabad), is a public university located in Jhalwa, Prayagraj
              district, in Uttar Pradesh. It is one of the twenty-five Indian
              Institutes of Information Technology listed by the Ministry of
              Education (India), and is classified as an Institute of National
              Importance.
            </p>
            <p className="text-base text-gray-600">
              The institute undertakes research in diverse interdisciplinary areas
              where there is a significant application of Information Technologies.
              It has state-of-the art laboratories for use by all students and
              faculty members working in related areas, and encourages the
              participation of researchers from different disciplines and
              departments in such sponsored research activities.
            </p>
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

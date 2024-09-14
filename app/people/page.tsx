import team from "@/data/team.json";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="w-32 h-32 rounded-md mx-auto mb-2 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </>
  );
}

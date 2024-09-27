import Image from "next/image";
import { CardSize, Person } from "@/data/types";

export default function TeamMember({
  person,
  size,
}: {
  person: Person;
  size?: CardSize;
}) {
  switch (size) {
    case CardSize.SMALL:
      return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mt-2">{person.name}</h3>
          <p className="text-gray-600">{person.role}</p>
          <a href={`mailto: ${person.email}`} className="underline">
            {person.email}
          </a>
        </div>
      );

    case CardSize.LARGE:
      return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center">
          <Image
            src={person.image!}
            alt={person.name}
            width={170}
            height={170}
            className="rounded-full"
          />

          <center>
            <h3 className="text-xl font-semibold mt-2">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
            <p className="">{person.researchInterest}</p>
            <a href={`mailto: ${person.email}`} className="underline">
              {person.email}
            </a>
          </center>
        </div>
      );
    case CardSize.MEDIUM:
    default:
      return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow gap-4 flex flex-row">
          <Image
            src={person.image!}
            alt={person.name}
            width={80}
            height={80}
            className="object-contain rounded-lg"
          />
          <div>
            <h4 className="text-xl font-semibold mt-2">{person.name}</h4>
            <p className="text-gray-600">{person.role}</p>
            <a href={`mailto: ${person.email}`} className="underline">
              {person.email}
            </a>
          </div>
        </div>
      );
  }
}

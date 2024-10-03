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
          <a href={person.link}>
            <h3 className={`text-xl ${ person.link && 'transition-colors hover:text-red-600 hover:underline underline-offset-4'} font-semibold mt-2`}>{person.name}</h3>
          </a>
          <p className="text-gray-600">{person.role}</p>
          <a href={`mailto: ${person.email}`} className="underline">
            {person.email}
          </a>
        </div>
      );

    case CardSize.LARGE:
      return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow flex items-center gap-4">
          <Image
            src={person.image!}
            alt={person.name}
            width={150}
            height={150}
            className="object-cover rounded-md"
          />
          <div>
            <a href={person.link}>
              <h3 className={`text-xl ${ person.link && 'transition-colors hover:text-red-600 hover:underline underline-offset-4'}  font-semibold mt-2`}>{person.name}</h3>
            </a>
            <p className="text-gray-600">{person.role}</p>
            <p className="text-sm">{person.researchInterest}</p>
            <a href={`mailto: ${person.email}`} className="underline">
              {person.email}
            </a>
          </div>
        </div>
      )

    case CardSize.EXTRA_LARGE:
      return (
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center">
          <Image
            src={person.image!}
            alt={person.name}
            width={170}
            height={170}
            className="object-cover rounded-full"
          />

          <center>
            <a href={person.link}>
              <h3 className={`text-xl ${ person.link && 'transition-colors hover:text-red-600 hover:underline underline-offset-4'}  font-semibold mt-2`}>{person.name}</h3>
            </a>
            <p className="text-gray-600">{person.role}</p>
            <p>{person.researchInterest}</p>
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
            className="object-cover rounded-lg"
          />
          <div>
            <a href={person.link}>
              <h4 className={`text-xl ${ person.link && 'transition-colors hover:text-red-600 hover:underline underline-offset-4'} font-semibold mt-2`}>{person.name}</h4>
            </a>
            <p className="text-gray-600">{person.role}</p>
            <a href={`mailto: ${person.email}`} className="underline">
              {person.email}
            </a>
          </div>
        </div>
      );
  }
}

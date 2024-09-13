import Image from "next/image";
import siteData from "@/data/sitedata.json";

export function Footer() {
  const jsonObject: Record<string, any> = siteData.footer;
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={siteData.logo}
              alt="IIIT Allahabad Logo"
              width={100}
              height={100}
            />
          </div>
          {Object.keys(jsonObject).map((key) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4 text-red-600">
                {key.toLocaleUpperCase()}
              </h3>
              <ul className="space-y-2">
                {jsonObject[key]?.map((item: any) => (
                  <li
                    key={item.name}
                    className="hover:opacity-75 transition-opacity"
                  >
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              CONTACT US
            </h3>
            <div className="space-y-2">
              <p>Address: {siteData.contact.address}</p>
              <p>
                <a href={`tel:${siteData.contact.phone}`}>
                  Contact:{" "}
                  <b className="hover:opacity-75 transition-opacity font-normal">
                    {siteData.contact.phone}
                  </b>
                </a>
              </p>
              <p>
                <a href={`mailto:${siteData.contact.email}`}>
                  E-mail:{" "}
                  <b className="hover:opacity-75 transition-opacity font-normal">
                    {siteData.contact.email}
                  </b>
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray" />
        <div className="mt-8 text-center">
          <p>
            <b className="text-gray-400">
              ©Copyright {new Date().getFullYear()}
            </b>
            , Indian Institute of Information Technology, Allahabad
          </p>
          <p>
            <b className="text-gray-400">Developed & Maintained by:</b> AIMS lab
            IIIT Allahabad
          </p>
        </div>
      </div>
    </footer>
  );
}

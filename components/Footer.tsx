import Image from "next/image";
import siteData from "@/data/sitedata.json";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const jsonObject: Record<string, any> = siteData.footer;
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <span className="flex flex-col lg:flex-row space-x-4 space-y-4 items-center">
            <Image
              src={siteData.logo}
              alt="IIIT Allahabad Logo"
              width={80}
              height={80}
              className="object-left-top object-contain"
            />
            <p className="font-semibold text-lg">
              {siteData.navBarTitle}
            </p>
          </span>
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
          <div className="order-last">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              CONTACT US
            </h3>
            <div>
              <div className="">
                <MapPin size={16} className="mr-2 float-left mt-1" />
                <p>{siteData.contact.address}</p>
              </div>
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href={`tel:${siteData.contact.phone}`}>
                  Contact:{" "}
                  <b className="hover:opacity-75 transition-opacity font-normal">
                    {siteData.contact.phone}
                  </b>
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
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
        <hr className="my-4 border-gray" />
        <div className="text-center text-sm">
          <p>
            <b className="text-gray-400 pr-1">
              ©Copyright {new Date().getFullYear()}
            </b>
            Indian Institute of Information Technology Allahabad
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

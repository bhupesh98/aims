import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import siteData from "@/data/sitedata.json";
import Link from "next/link";
import React from "react";
import GetInTouch from "@/components/GetInTouch";

export default function Contact() {
  const iconMap = {
    facebook: <Facebook />,
    twitter: <Twitter />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    github: <Github />,
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GetInTouch />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <MapPin className="mr-2" size={36} />
              {siteData.contact.address}
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              <Link href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </Link>
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              <Link href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </Link>
            </p>
            <p className="flex items-center">
              <Clock className="mr-2" />
              Office Hours: {siteData.contact.officeHours}
            </p>
            <p className="flex items-center">
              <Globe className="mr-2" />
              <Link href={"https://it.iiita.ac.in/"}>
                Department of Information Technology, Indian Institute of
                Information Technology Allahabad
              </Link>
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {Object.entries(siteData.contact.links).map(([key, link]) => {
              return (
                <a
                  href={link}
                  key={key}
                  className="text-gray-600 hover:text-primary"
                >
                  {iconMap[key as keyof typeof iconMap] || <Globe />}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={
                siteData.contact.mapsLocationURL
              }
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

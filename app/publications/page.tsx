"use client";

import React from "react";
import { SearchBar } from "@/components/SearchBar";
import publications from "@/data/publications.json";
import { FileText, Github, Globe } from "lucide-react";

export default function Publications() {
  const [filteredPublications, setFilteredPublications] =
    React.useState(publications);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Our Publications</h1>
      <SearchBar
        data={publications}
        keys={["title", "authors", "journal"]}
        onSearch={setFilteredPublications}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPublications.length ? filteredPublications.map((publication) => (
          <div
            key={publication.title}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-around h-full"
          >
            <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
            <p className="text-gray-600 mb-2">{publication.authors}</p>
            <p className="text-gray-500">
              {publication.journal}, {publication.year}
            </p>
            <div className="flex space-x-2 mt-3 pt-3 border-t">
              {publication.links.website && (
                <a
                  href={publication.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-lg text-sm hover:bg-zinc-100 border border-gray-300 transition-colors"
                  aria-label={`Visit website for ${publication.title}`}
                >
                  <Globe size={16} className="mr-1" />
                  Website
                </a>
              )}
              {publication.links.github && (
                <a
                  href={publication.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-lg text-sm hover:bg-zinc-100 border border-gray-300 transition-colors"
                  aria-label={`View code for ${publication.title}`}
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              )}
              {publication.links.pdf && (
                <a
                  href={publication.links.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-lg text-sm hover:bg-slate-100 border border-gray-300 transition-colors"
                  aria-label={`Download PDF for ${publication.title}`}
                >
                  <FileText size={16} className="mr-1" />
                  PDF
                </a>
              )}
            </div>
          </div>
        )) : <p className="text-red-700 text-xl text-center">No publications found</p>}
      </div>
    </>
  );
}

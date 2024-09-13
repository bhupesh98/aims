"use client";

import { useState } from "react";
import { SearchBar } from "@/components";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Our Projects</h1>
      <SearchBar
        data={projects}
        keys={["title", "description"]}
        onSearch={setFilteredProjects}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl underline font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

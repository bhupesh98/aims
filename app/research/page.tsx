"use client";

import React from "react";
import { SearchBar } from "@/components";
import projects from "@/data/research.json";
import Image from "next/image";

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Our Projects</h1>
      <SearchBar
        data={projects}
        keys={["title", "description"]}
        onSearch={(result) => setFilteredProjects(result)}
      />
      <div className="flex flex-col gap-6">
        {filteredProjects.length ? filteredProjects.map((project) => (
          <div key={project.title} className="bg-white border gap-4 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="object-contain rounded self-center"
            />
            <div className="flex flex-col">
              <h3 className="text-xl underline font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        )) : <p className="text-red-700 text-xl text-center">No projects found</p>}
      </div>
    </>
  );
}

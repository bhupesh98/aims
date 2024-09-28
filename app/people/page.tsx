"use client";

import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import team from "@/data/people.json";
import { CardSize } from "@/data/types";
import React from "react";
export default function Team() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    team[0].name
  );

  const handleScroll = (category: string) => {
    const element = document.getElementById(category);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - 70, behavior: "smooth" });
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-red-700">Our Team</h1>
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="hidden md:block h-full sticky top-20 md:w-1/5 space-y-2">
          {team.map((category) => (
            <Button
              key={category.name}
              variant={"link"}
              onClick={() => handleScroll(category.name)}
              className={`w-full p-2 rounded transition-colors text-wrap ${
                selectedCategory === category.name
                  ? "bg-red-800 text-white"
                  : "hover:bg-zinc-200"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Main content */}
        <div className="w-full md:w-4/5 pl-4">
          {team.map((category) => (
            <div key={category.name} className="mb-4">
              <div id={category.name}>
                <h2 className="text-3xl text-red-600 font-semibold mb-4">
                  {category.name}
                </h2>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4`}
                >
                  {category.members.map((person) => (
                    <TeamMember
                      key={person.name}
                      person={person}
                      size={(category.size as CardSize) ?? undefined}
                    />
                  ))}
                </div>
              </div>
              <hr className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

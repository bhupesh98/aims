'use client';
import { useState } from "react";
import Fuse from "fuse.js";

type SearchBarProps = {
  data: any[];
  keys: string[];
  onSearch: (results: any[]) => void;
};

export function SearchBar({ data, keys, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(data, {
    keys: keys,
    threshold: 0.4,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const results = fuse.search(value).map((result) => result.item);
      onSearch(results);
    } else {
      onSearch(data);
    }
  };

  return (
    <div className="flex items-center mb-4 gap-3">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full lg:w-2/3 p-2 border-2 rounded-md"
      />
    </div>
  );
}

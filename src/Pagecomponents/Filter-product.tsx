"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface FilterFormProps {
  onFilterChange: (selectedFrameworks: string[]) => void;
  initialFilters: string[];
}

const frameworks = [
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express",
  "Next.js",
  "MongoDB",
];

export function FilterForm({
  onFilterChange,
  initialFilters,
}: FilterFormProps) {
  const [selectedFrameworks, setSelectedFrameworks] =
    useState<string[]>(initialFilters);

  useEffect(() => {
    onFilterChange(selectedFrameworks);
  }, [selectedFrameworks, onFilterChange]);

  const toggleFramework = (framework: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework)
        ? prev.filter((f) => f !== framework)
        : [...prev, framework]
    );
  };

  return (
    <div className="bg-transparent text-white p-4 rounded-md  mb-8">
      <h2 className="text-lg font-semibold mb-4">Category</h2>
      <div className="flex flex-wrap flex-col items-start gap-2">
        {frameworks.map((framework) => (
          <button
            key={framework}
            onClick={() => toggleFramework(framework)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedFrameworks.includes(framework)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {framework}
            {selectedFrameworks.includes(framework) && (
              <Check className="inline-block ml-1 h-4 w-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

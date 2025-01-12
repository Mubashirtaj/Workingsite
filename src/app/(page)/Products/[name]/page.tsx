"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "@/Pagecomponents/Search-bar";
import { FilterForm } from "@/Pagecomponents/Filter-product";
import { ServiceCard } from "@/Pagecomponents/Products-card";
import NavbarDemo from "@/components/Navbar";

// Mock data for services
const services = [
  {
    id: 1,
    title: "Web Development with React",
    description: "Custom web development services using React.",
    price: 50,
    rating: 4.8,
    reviews: 120,
    image: "/test.png",
    frameworks: ["React"],
  },
  {
    id: 2,
    title: "Vue.js Development",
    description: "Build interactive web applications with Vue.js.",
    price: 45,
    rating: 4.7,
    reviews: 95,
    image: "/test.png",
    frameworks: ["Vue.js"],
  },
  {
    id: 3,
    title: "Full-stack Development with MERN",
    description:
      "End-to-end web development using MongoDB, Express, React, and Node.js.",
    price: 65,
    rating: 4.9,
    reviews: 150,
    image: "/test.png",
    frameworks: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "Angular Application Development",
    description: "Create robust web applications with Angular.",
    price: 55,
    rating: 4.6,
    reviews: 110,
    image: "/test.png",
    frameworks: ["Angular"],
  },
  {
    id: 5,
    title: "Next.js and React Development",
    description: "Build SEO-friendly React applications with Next.js.",
    price: 60,
    rating: 4.8,
    reviews: 130,
    image: "/test.png",
    frameworks: ["React", "Next.js"],
  },
  {
    id: 6,
    title: "Node.js Backend Development",
    description: "Develop scalable backend services with Node.js.",
    price: 50,
    rating: 4.7,
    reviews: 100,
    image: "/test.png",
    frameworks: ["Node.js", "Express"],
  },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(
    searchParams.getAll("framework")
  );
  const [filterbtn, setfilterbtn] = useState(false);
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (query) newSearchParams.set("query", query);
    selectedFrameworks.forEach((fw) => newSearchParams.append("framework", fw));
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  }, [query, selectedFrameworks, router]);

  const filteredServices = useMemo(() => {
    return services.filter(
      (service) =>
        (service.title.toLowerCase().includes(query.toLowerCase()) ||
          service.description.toLowerCase().includes(query.toLowerCase())) &&
        (selectedFrameworks.length === 0 ||
          selectedFrameworks.some((fw) => service.frameworks.includes(fw)))
    );
  }, [query, selectedFrameworks]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleFilterChange = (frameworks: string[]) => {
    setSelectedFrameworks(frameworks);
  };

  return (
    <>
      <NavbarDemo />
      <div className="  flex w-full flex-row overflow-hidden">
        <div
          className={`w-full  overflow-hidden  md:w-1/5 pt-8 bg-slate-950  ${
            filterbtn ? "right-0 " : "right-full "
          }  md:ml-0 md:pt-36 z-40 md:right-0	absolute md:relative 	`}
        >
          <button
            type="button"
            onClick={() => setfilterbtn((prev) => !prev)}
            className="bg-white md:hidden rounded-md p-2 absolute right-4 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <FilterForm
            onFilterChange={handleFilterChange}
            initialFilters={selectedFrameworks}
          />
        </div>
        <div className="md:pt-36 min-h-screen bg-black py-8  w-full md:w-10/12		 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            Find Web Development Services
          </h1>
          <div className="max-w-7xl mx-auto">
            <div className="flex ">
              <SearchBar onSearch={handleSearch} initialQuery={query} />

              <input type="checkbox" className="peer hidden" id="navbar-open" />
              <label
                className="mt-2 cursor-pointer md:hidden"
                onClick={() => setfilterbtn((prev) => !prev)}
              >
                <span className="sr-only">Toggle Navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

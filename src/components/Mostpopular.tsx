import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

const Mostpopular = () => {
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
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-11/12	 "
    >
      <CarouselContent className="w-full">
        {services.map((data, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 w-6/12"
          >
            <>
              <div
                key={index}
                className="bg-white rounded-lg h-full shadow-md overflow-hidden"
              >
                <Link href={"/Product-details/all"}>
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {data.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {data.frameworks.map((framework) => (
                        <span
                          key={framework}
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">${data.price}</span>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400  bg-yellow-500 overflow-hidden " />
                        <span className="ml-1 text-sm ">
                          {data.rating} ({data.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Mostpopular;

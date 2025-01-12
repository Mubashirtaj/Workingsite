import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  frameworks: string[];
}

export function ServiceCard({
  title,
  description,
  price,
  rating,
  reviews,
  image,
  frameworks,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={"/Product-details/all"}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {frameworks.map((framework) => (
              <span
                key={framework}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
              >
                {framework}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-black font-bold">${price}</span>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 bg-yellow-600 " />
              <span className="ml-1 text-sm text-yellow-400">
                {rating} ({reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

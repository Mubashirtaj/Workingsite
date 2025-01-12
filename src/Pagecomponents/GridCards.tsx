import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

export function GrisCards() {
  return (
    <BentoGrid className="max-w-4xl mx-auto  ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
        />
      ))}
    </BentoGrid>
  );
}

type URLTYPE = {
  URL: string;
};
const Skeleton = ({ URL }: URLTYPE) => (
  <Link href={URL} target="_blank">
    <div className="flex flex-1 w-full bg-gray-600  overflow-hidden   rounded-xl ">
      <img src={URL} alt="" className="w-full" />
    </div>
  </Link>
);
const items = [
  {
    title: "Portfolio Websites ",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton URL={"/web-portfolio.webp"} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "E-commerce Websites",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton URL={"/web-ecommerce.webp"} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Corporate Websites",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton URL={"/web-Corporate.webp"} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Educational Platforms",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton URL={"/web-education.webp"} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Content Publishing Websites",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton URL={"/web-content.webp"} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Platforms",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton URL={"/web-socilamedia.webp"} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];

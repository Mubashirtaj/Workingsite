"use client";
import Image from "next/image";

export default function GigGallery() {
  return (
    <div className="relative bg-black border border-gray-300 rounded-lg">
      <div className="w-full flex items-center justify-center">
        <>
          <Image src={"/test.png"} width={500} height={700} />
        </>
      </div>
    </div>
  );
}
